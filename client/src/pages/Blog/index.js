import classes from './index.module.scss'
import { img1, img2, img3, img4, img5, img6 } from '../../assets/images'
import http from '../../http'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export default function Blog() {
  const location = useLocation()
  const images = [img1, img2, img3, img4, img5, img6]
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    http.get(`/blogs/${location.pathname.split('/').pop(2)}}`).then((res) => {
      setBlog(res.data[0])
      setLoading(true)
      console.log(res.data[0])
    })
  }, [])
  return loading ? (
    <section className={`container ${classes.blog}`}>
      <img alt={'Card'} src={images[blog.image_index]} />
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <span>~ {blog.author}</span>
    </section>
  ) : (
    <h1>Loading...</h1>
  )
}
