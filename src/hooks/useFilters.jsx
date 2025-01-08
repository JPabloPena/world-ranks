import { useContext } from 'react'
import { FiltersContext } from '../contexts/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const sortCountries = countries => {
    const { sortBy } = filters

    return countries.sort((a, b) => {
      if (sortBy === 'name') {
        return a[sortBy].common.localeCompare(b[sortBy].common)
      } else {
        return b[sortBy] - a[sortBy]
      }
    })
  }

  const filterCountries = (countries) => {
    const sortedCountries = sortCountries(countries)
    const { status: { unMember, independent } } = filters
    return sortedCountries.filter(country => {
      return (
        (unMember === false || country.unMember === true) &&
        (independent === false || country.independent === true)
      )
    })
  }

  return { filters, setFilters, filterCountries }
}
