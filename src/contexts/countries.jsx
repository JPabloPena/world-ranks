import { createContext, useState, useEffect } from 'react'
import { useFilters } from '../hooks/useFilters'

export const CountriesContext = createContext()

export function CountriesProvider ({ children }) {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [totalCountries, setTotalCountries] = useState(0)
  const { filters, filterCountries } = useFilters()
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const COUNTRIES_API = 'https://restcountries.com/v3.1/all?fields=flags,name,population,area,region,subregion,independent,unMember,cca3,capital,languages,currencies,continents,borders'

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(COUNTRIES_API)
        const data = await response.json()
        setCountries(data)
        const initialFiltered = filterCountries(data)
        setFilteredCountries(initialFiltered)
        setTotalCountries(initialFiltered.length)
      } catch (error) {
        console.error('Error fetching countries', error)
      }
    }

    fetchCountries()
  }, [])

  useEffect(() => {
    const filteredCountries = filterCountries(countries)
    setFilteredCountries(filteredCountries)
    setTotalCountries(filteredCountries.length)
    setCurrentPage(1)
  }, [filters])

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = filteredCountries.slice(firstPostIndex, lastPostIndex)

  return (
    <CountriesContext.Provider value={{
      countries,
      filteredCountries: currentPosts,
      totalCountries,
      postsPerPage,
      currentPage,
      setCurrentPage
    }}
    >
      {children}
    </CountriesContext.Provider>
  )
}
