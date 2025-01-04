import { useContext } from 'react'
import './Header.css'
import { CountriesContext } from '../contexts/countriesContext'

export function Header () {
  const { totalCountries } = useContext(CountriesContext)

  return (
    <header className='header'>
      <p className='header-info'>Found {totalCountries} countries</p>
      <form>
        <input placeholder='Search by Name, Region, Subregion' />
      </form>
    </header>
  )
}
