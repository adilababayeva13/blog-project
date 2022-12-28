import classes from './index.module.scss'
import { LogoIcon } from '../../icons'
import { routes } from '../../routes'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { AddButton } from '../../components/button'
import Search from '../../components/search'

export default function Navbar({ title }) {
  useEffect(() => {
    document.title = 'Life in Asoiu | ' + title
  }, [title])
  return (
    <header className={`container ${classes.navbar}`}>
      <Link to={routes.home.path}>
        <LogoIcon />
        Life in Asoiu
      </Link>
      <Search />
      <AddButton to={routes.addBlog.path}>Add Blog</AddButton>
    </header>
  )
}
