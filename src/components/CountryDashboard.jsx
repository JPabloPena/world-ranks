import './CountryDashboard.css'
import { Header } from './Header'
import { CountriesTable } from './CountriesTable'
import { Filters } from './Filters'
import { CountriesProvider } from '../contexts/countries'
import { FiltersProvider } from '../contexts/filters'

export function CountryDashboard () {
  return (
    <FiltersProvider>
      <CountriesProvider>
        <main className='country-dashboard'>
          <Header />
          <div className='country-dashboard__content'>
            <Filters />
            <CountriesTable />
          </div>
        </main>
      </CountriesProvider>
    </FiltersProvider>
  )
}
