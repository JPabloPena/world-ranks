import './CountryDetails.css'
import closeIcon from '../assets/x-mark.svg'
import { useContext, useEffect } from 'react'
import { CountriesContext } from '../contexts/countries'

export function CountryDetails ({ country, onClose }) {
  const { countries } = useContext(CountriesContext)

  useEffect(() => {
    document.body.classList.add('no-scroll')
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [])

  return (
    <div className='country-details-modal'>
      <div className='country-details-container'>
        <img className='country-details-close-icon' src={closeIcon} onClick={onClose} />
        <img className='country-details-flag' src={country.flags.svg} />
        <h2>{country.name.common}</h2>
        <p className='country-details-official-name'>{country.name.official}</p>
        <div className='country-details-population-area'>
          <div className='country-details-population'>
            <h3>Population</h3>
            <div className='country-details-v-line' />
            <p>{country.population.toLocaleString()}</p>
          </div>
          <div className='country-details-area'>
            <h3>Area (km²)</h3>
            <div className='country-details-v-line' />
            <p>{country.area.toLocaleString()}</p>
          </div>
        </div>
        <div className='country-details-info'>
          <h3>Capital</h3>
          <p>{country.capital}</p>
        </div>
        <div className='country-details-info'>
          <h3>Subregion</h3>
          <p>{country.subregion}</p>
        </div>
        <div className='country-details-info'>
          <h3>Languages</h3>
          <p>
            {
              Object.values(country.languages).map(language => {
                return language
              })
                .join(', ')
            }
          </p>
        </div>
        <div className='country-details-info'>
          <h3>Currencies</h3>
          <p>
            {
              Object.values(country.currencies).map(currency => {
                return currency.name
              })
                .join(', ')
            }
          </p>
        </div>
        <div className='country-details-info'>
          <h3>Continent</h3>
          <p>
            {
              Object.keys(country.continents).map(key => {
                return country.continents[key]
              })
                .join(', ')
            }
          </p>
        </div>
        <div className='country-details-neighbors'>
          <h3>Neighbouring Countries</h3>
          <div>
            {
              country.borders.map(border => {
                const neighbor = countries.find(country =>
                  country.cca3 === border
                )
                return neighbor
                  ? (
                    <div key={border} className='country-details-neighbor'>
                      <img src={neighbor.flags.svg} className='country-details-neighbor-flag' />
                      <p className='country-details-neighbor-name'>{neighbor.name.common}</p>
                    </div>
                    )
                  : null
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
