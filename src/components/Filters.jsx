import { useFilters } from '../hooks/useFilters'
import './Filters.css'

export function Filters () {
  const REGIONS = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania']

  const { setFilters } = useFilters()

  const handleChangeSortBy = event => {
    setFilters(prevState => ({
      ...prevState,
      sortBy: event.target.value
    }))
  }

  const handleClickRegion = event => {
    if (event.target.classList.contains('filters__button--active')) {
      setFilters(prevState => {
        const newRegions = prevState.region.filter(region => region !== event.target.value)

        return ({
          ...prevState,
          region: [...newRegions]
        })
      })
    } else {
      setFilters(prevState => ({
        ...prevState,
        region: [...prevState.region, event.target.value]
      }))
    }

    event.target.classList.toggle('filters__button--active')
  }

  const handleChangeStatus = event => {
    const statusType = event.target.id
    const isChecked = event.target.checked

    setFilters(prevState => ({
      ...prevState,
      status: {
        ...prevState.status,
        [statusType]: isChecked
      }
    }))
  }

  return (
    <div className='filters'>
      <section className='filters__sort-by'>
        <h3>Sort by</h3>
        <select defaultValue='population' onChange={handleChangeSortBy}>
          <option value='name'>Name</option>
          <option value='population'>Population</option>
          <option value='area'>Area</option>
        </select>
      </section>
      <section className='filters__region'>
        <h3>Region</h3>
        <ul className='filters__list'>
          {REGIONS.map(region => (
            <li key={region}>
              <button onClick={handleClickRegion} value={region}>{region}</button>
            </li>
          ))}
        </ul>
      </section>
      <section className='filters__status'>
        <h3>Status</h3>
        <div className='filters__status-option'>
          <input type='checkbox' value='Member of the United Nations' id='unMember' onChange={handleChangeStatus} />
          <label className='filters__label'>Member of the United Nations</label>
        </div>
        <div className='filters__status-option'>
          <input type='checkbox' value='Independent' id='independent' onChange={handleChangeStatus} />
          <label className='filters__label'>Independent</label>
        </div>
      </section>
    </div>
  )
}
