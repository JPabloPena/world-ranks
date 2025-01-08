import { createContext, useState, useEffect } from 'react'
import { useFilters } from '../hooks/useFilters'

export const CountriesContext = createContext()

export function CountriesProvider ({ children }) {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [totalCountries, setTotalCountries] = useState(0)
  const { filters, filterCountries } = useFilters()

  const COUNTRIES_API = 'https://restcountries.com/v3.1/all?fields=flags,name,population,area,region,independent,unMember,cca3'

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
  }, [filters])

  return (
    <CountriesContext.Provider value={{ countries: filteredCountries, totalCountries }}>
      {children}
    </CountriesContext.Provider>
  )
}
