import './CountryDashboard.css'
import { Header } from './Header'
import { CountriesTable } from './CountriesTable'
import { Filters } from './Filters'
import { CountriesProvider } from '../contexts/countries'

export function CountryDashboard () {
  return (
    <CountriesProvider>
      <main className='country-dashboard'>
        <Header />
        <div className='country-dashboard__content'>
          <Filters />
          <CountriesTable />
        </div>
      </main>
    </CountriesProvider>
  )
}
