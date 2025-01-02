import './CountryDashboard.css'
import { Header } from './Header'
import { CountriesTable } from './CountriesTable'
import { Filters } from './Filters'

export function CountryDashboard () {
  return (
    <main className='country-dashboard'>
      <Header />
      <div className='country-dashboard__content'>
        <Filters />
        <CountriesTable />
      </div>
    </main>
  )
}
