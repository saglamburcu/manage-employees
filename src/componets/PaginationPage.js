import { useEffect, useState } from "react";

const PaginationPage = ({ pageNumber, setPage, sortedEmployees }) => {

  const pages = [];

  for (let i = 1; i <= pageNumber; i++) {
    pages.push(i)
  }

  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
    setPage(currentPage)
  }, [currentPage, setPage])

  const handlePrev = () => {
    setCurrentPage((prev) =>
      prev === 1 ? prev : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentPage((next) =>
      next === pages.length ? next : next + 1
    )
  }

  return (
    <div className="clearfix">
      <div className="hint-text">Showing <b>{pageNumber}</b> out of <b>{sortedEmployees.length}</b> entries</div>
      <ul className="pagination">

        <li className={`${currentPage === 1 ? "page-item disabled" : "page-item"}`}>
          <a href="#!" className="page-link" onClick={handlePrev}>Previous</a>
        </li>

        {
          pages.map((page, index) => (

            <li key={index} className={`${currentPage === page ? "page-item active" : "page-item"}`}>
              <a href="#!" className="page-link" onClick={() => setCurrentPage(page)}>{page}</a>
            </li>

          ))
        }

        <li className={`${currentPage === pages.length ? "page-item disabled" : "page-item"}`}>
          <a href="#!" className="page-link" onClick={handleNext}>Next</a>
        </li>
      </ul>
    </div>
  )
}

export default PaginationPage;

{/* <li className="page-item"><a href="#" className="page-link">1</a></li>
        <li className="page-item"><a href="#" className="page-link">2</a></li>
        <li className="page-item active"><a href="#" className="page-link">3</a></li>
        <li className="page-item"><a href="#" className="page-link">4</a></li>
        <li className="page-item"><a href="#" className="page-link">5</a></li>
         */}