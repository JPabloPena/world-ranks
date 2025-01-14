import './CountriesDashboard.css'
import { Header } from './Header'
import { CountriesTable } from './CountriesTable'
import { Filters } from './Filters'
import { CountriesProvider } from '../contexts/countries'
import { FiltersProvider } from '../contexts/filters'
import { Pagination } from './Pagination'

export function CountriesDashboard () {
  return (
    <FiltersProvider>
      <CountriesProvider>
        <main className='country-dashboard'>
          <Header />
          <div className='country-dashboard__content'>
            <Filters />
            <CountriesTable />
          </div>
          <Pagination />
        </main>
      </CountriesProvider>
    </FiltersProvider>
  )
}
