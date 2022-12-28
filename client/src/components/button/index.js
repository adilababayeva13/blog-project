import classes from './index.module.scss'
import { AddIcon } from '../../icons'
import { Link } from 'react-router-dom'

export function AddButton({ children, to }) {
  return (
    <Link to={to} className={classes.add}>
      {children} <AddIcon />
    </Link>
  )
}

export function Button() {
  return <button className={classes.add}>Submit</button>
}
