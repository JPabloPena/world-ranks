import './Pagination.css'
import chevronLeft from '../assets/chevron-left.svg'
import { useContext } from 'react'
import { CountriesContext } from '../contexts/countries'

export function Pagination () {
  const { totalCountries: totalPosts, postsPerPage, currentPage, setCurrentPage } = useContext(CountriesContext)
  const pages = []
  const lastPage = Math.ceil(totalPosts / postsPerPage)

  for (let i = 1; i <= lastPage; i++) {
    pages.push(i)
  }

  const handleClickLeftButton = currentPage => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
  }

  const handleClickRigthButton = currentPage => {
    if (currentPage === lastPage) return
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className='pagination'>
      <button
        onClick={() => handleClickLeftButton(currentPage)}
        disabled={currentPage === 1}
      ><img src={chevronLeft} />
      </button>
      <p>{currentPage} of {lastPage}</p>
      <button
        onClick={() => handleClickRigthButton(currentPage)}
        disabled={currentPage === lastPage}
        className='pagination-right-arrow'
      ><img src={chevronLeft} />
      </button>
    </div>
  )
}
