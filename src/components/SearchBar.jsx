import './SearchBar.css'
import { useCallback, useContext, useRef } from 'react'
import { CountriesContext } from '../contexts/countries'
import { FiltersContext } from '../contexts/filters'
import debounce from 'just-debounce-it'

export function SearchBar () {
  const { totalCountries } = useContext(CountriesContext)
  const { setFilters } = useContext(FiltersContext)

  const inputRef = useRef(null)

  const debounceSearch = useCallback(
    debounce(search => {
      setFilters(prevState => ({
        ...prevState,
        search
      }))
    }
    , 500),
    [setFilters]
  )

  const handleChangeSearch = event => {
    const newSearch = event.target.value.trim()
    debounceSearch(newSearch)
  }

  const handleOnSubmit = event => {
    event.preventDefault()

    const countriesTable = document.getElementById('countries-table-container')
    if (countriesTable) {
      countriesTable.scrollIntoView({ behavior: 'smooth' })
    }

    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  return (
    <header className='search-bar'>
      <p className='search-bar-info'>Found {totalCountries} countries</p>
      <form onSubmit={handleOnSubmit}>
        <input ref={inputRef} onChange={handleChangeSearch} placeholder='Search by Name, Region, Subregion' />
      </form>
    </header>
  )
}
