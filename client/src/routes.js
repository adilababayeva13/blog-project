import Home from './pages/Home'
import Blog from './pages/Blog'
import AddBlog from './pages/AddBlog'

const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  }
}

const routes = {
  home: routeItem(1, 'Home', '/', Home),
  blog: routeItem(2, 'Blog', '/blog/:id', Blog),
  addBlog: routeItem(3, 'Add Blog', '/add-blog', AddBlog),
}

const routeArr = Object.values(routes)

export { routes, routeArr }
