import classes from './index.module.scss'
import { Button } from '../../components/button'
import { img1, img2, img3, img4, img5, img6 } from '../../assets/images'
import { useState } from 'react'
import http from '../../http'

export default function AddBlog() {
  const [image, setImage] = useState(null)
  const images = [img1, img2, img3, img4, img5, img6]
  const handleSubmit = (e) => {
    e.preventDefault()
    const author = document.getElementById('author').value.trim()
    const title = document.getElementById('title').value.trim()
    const description = document.getElementById('description').value.trim()
    const image_index = image
    const inputs = {
      author,
      title,
      description,
      image_index,
    }
    console.log(inputs)
    http.post('/blogs', inputs).then((res) => {
      console.log(res)
      alert('Blog added successfully')
    })
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      method="POST"
      className={`container ${classes.add}`}
    >
      <h1>Add Blog</h1>

      <input id="author" type="text" placeholder="Author" />
      <input id="title" type="text" placeholder="Title" />
      <textarea id="description" placeholder="Content" />
      <div>
        {images.map((img, index) => (
          <img
            onClick={() => setImage(index)}
            className={index === image && classes.active}
            key={index}
            src={img}
            alt="img"
          />
        ))}
      </div>
      <Button />
    </form>
  )
}
