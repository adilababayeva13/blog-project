import Card from '../../components/card'
import Pagination from '../../components/pagination'
import { useState, useEffect } from 'react'
import classes from './index.module.scss'
import http from '../../http'

const Home = () => {
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)
  const [totalPages, setTotalPages] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchAll(currentPage)
    setLoading(true)
  }, [currentPage])

  const fetchAll = (page) => {
    http.get(`/blogs?page=${page}`).then(async (res) => {
      console.log(res.data)
      await setTotalPages(res.data.total)
      await setData(res.data.data)
    })
  }

  return loading ? (
    <main className={'container'}>
      <section className={` ${classes.content}`}>
        {data.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            author={item.author}
            title={item.title}
            description={item.description}
            image={item.image_index}
          />
        ))}
      </section>
      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={totalPages}
      />
    </main>
  ) : (
    <h1>Loading ...</h1>
  )
}

export default Home
