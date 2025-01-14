import './Header.css'
import { useCallback, useContext } from 'react'
import { CountriesContext } from '../contexts/countries'
import { FiltersContext } from '../contexts/filters'
import debounce from 'just-debounce-it'

export function Header () {
  const { totalCountries, setCurrentPage } = useContext(CountriesContext)
  const { setFilters } = useContext(FiltersContext)

  const debounceSearch = useCallback(
    debounce(search => {
      setFilters(prevState => ({
        ...prevState,
        search
      }))
      setCurrentPage(1)
    }
    , 500),
    [setFilters]
  )

  const handleChangeSearch = event => {
    const newSearch = event.target.value
    debounceSearch(newSearch)
  }

  return (
    <header className='header'>
      <p className='header-info'>Found {totalCountries} countries</p>
      <form>
        <input onChange={handleChangeSearch} placeholder='Search by Name, Region, Subregion' />
      </form>
    </header>
  )
}
