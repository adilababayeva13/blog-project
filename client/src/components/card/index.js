import classes from './index.module.scss'
import { Link } from 'react-router-dom'
import { img1, img2, img3, img4, img5, img6 } from '../../assets/images'

export default function Card({ id, title, author, image }) {
  const images = [img1, img2, img3, img4, img5, img6]

  const text = 'I Miss London I Miss London I Miss London I Miss London'
  const handleLength = (text) => {
    if (text.length > 28) {
      return text.slice(0, 28) + '...'
    }
    return text
  }
  return (
    <Link to={`/blog/${id}`} className={classes.card}>
      <div>
        <img alt={'Card'} src={images[image]} />
        <p>{handleLength(title)}</p>
        <span>~ {author}</span>
      </div>
    </Link>
  )
}
