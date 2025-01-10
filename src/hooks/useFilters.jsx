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

  const filterCountries = countries => {
    const sortedCountries = sortCountries(countries)
    const { region, status: { unMember, independent }, search } = filters

    return sortedCountries.filter(country => {
      const matchesSearch = search
        ? country.name.common.toLowerCase().includes(search.toLowerCase()) ||
        country.region.toLowerCase().includes(search.toLowerCase()) ||
        country.subregion.toLowerCase().includes(search.toLowerCase())
        : true

      return (
        matchesSearch &&
        (unMember === false || country.unMember === true) &&
        (independent === false || country.independent === true) &&
        (region.length === 0 || region.includes(country.region))
      )
    })
  }

  return { filters, setFilters, filterCountries }
}
