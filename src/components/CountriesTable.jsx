import { CountriesContext } from '../contexts/countries'
import './CountriesTable.css'
import { useContext } from 'react'

export function CountriesTable () {
  const { countries } = useContext(CountriesContext)

  return (
    <div className='countries-table-container'>
      <table className='countries-table'>
        <thead>
          <tr className='countries-table__header'>
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>Area (km²)</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {countries.map(country => (
            <tr className='countries-table__row' key={country.cca3}>
              <td>
                <img
                  src={country.flags.svg}
                  alt={`Flag of ${country.name.common}`}
                />
              </td>
              <td className='countries-table__name'>{country.name.common}</td>
              <td>{country.population.toLocaleString()}</td>
              <td>{country.area.toLocaleString()}</td>
              <td>{country.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
