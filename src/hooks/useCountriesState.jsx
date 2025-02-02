import { useEffect, useState } from 'react'
import { useFilters } from './useFilters'

export function useCountries () {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [totalCountries, setTotalCountries] = useState(0)
  const { filters, filterCountries } = useFilters()
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  const [loading, setLoading] = useState(false)

  const COUNTRIES_API = 'https://restcountries.com/v3.1/all?fields=flags,name,population,area,region,subregion,independent,unMember,cca3,capital,languages,currencies,continents,borders'

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true)
        const response = await fetch(COUNTRIES_API)
        const data = await response.json()
        setCountries(data)
        const initialFiltered = filterCountries(data)
        setFilteredCountries(initialFiltered)
        setTotalCountries(initialFiltered.length)
        setLoading(false)
      } catch (error) {
        setLoading(false)
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

  return {
    countries,
    filteredCountries: currentPosts,
    totalCountries,
    postsPerPage,
    currentPage,
    setCurrentPage,
    loading
  }
}
