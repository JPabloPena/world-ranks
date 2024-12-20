import './CountriesTable.css'
import { useEffect, useState } from 'react'
import data from '../mocks/countries.json'

export function CountriesTable () {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    setCountries(data)
  }, [])

  return (
    <div className='countries-table'>
      <div className='countries-table__header'>
        <h3>Flag</h3>
        <h3>Name</h3>
        <h3>Population</h3>
        <h3>Area (km²)</h3>
        <h3>Region</h3>
      </div>
      <div className='countires-table__row' />
    </div>
  )
}
