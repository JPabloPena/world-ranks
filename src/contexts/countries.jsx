import { createContext, useState, useEffect } from 'react'

export const CountriesContext = createContext()

export function CountriesProvider ({ children }) {
  const [countries, setCountries] = useState([])
  const [totalCountries, setTotalCountries] = useState(0)

  const COUNTRIES_API = 'https://restcountries.com/v3.1/all?fields=flags,name,population,area,region,independent,unMember,cca3'

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(COUNTRIES_API)
        const data = await response.json()
        setCountries(data)
        setTotalCountries(data.length)
      } catch (error) {
        console.error('Error fetching countries', error)
      }
    }

    fetchCountries()
  }, [])

  console.log(countries[1])

  return (
    <CountriesContext.Provider value={{ countries, totalCountries }}>
      {children}
    </CountriesContext.Provider>
  )
}
