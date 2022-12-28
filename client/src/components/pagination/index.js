const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div style={{ margin: '0 auto' }}>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <a
                style={currentPage === number ? { opacity: '0.8' } : null}
                onClick={() => paginate(number)}
                href="#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
