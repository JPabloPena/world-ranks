import { createPortal } from 'react-dom'
import { CountriesContext } from '../contexts/countries'
import './CountriesTable.css'
import { useContext, useState } from 'react'
import { CountryDetails } from './CountryDetails'

export function CountriesTable () {
  const { filteredCountries } = useContext(CountriesContext)
  const [showModal, setShowModal] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({})

  const onClickCountry = country => {
    setSelectedCountry(country)
    setShowModal(true)
  }

  const onCloseCountryDetails = () => {
    setSelectedCountry({})
    setShowModal(false)
  }

  return (
    <div id='countries-table-container' className='countries-table-container'>
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
          {filteredCountries.map(country => (
            <tr
              className='countries-table__row'
              key={country.cca3}
              onClick={() => onClickCountry(country)}
            >
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
      {showModal && createPortal(
        <CountryDetails country={selectedCountry} onClose={onCloseCountryDetails} />,
        document.body
      )}
    </div>
  )
}
