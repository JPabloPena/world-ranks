import { createContext } from 'react'
import { useCountries } from '../hooks/useCountriesState'

export const CountriesContext = createContext()

export function CountriesProvider ({ children }) {
  const countriesState = useCountries()

  return (
    <CountriesContext.Provider value={countriesState}>
      {children}
    </CountriesContext.Provider>
  )
}
