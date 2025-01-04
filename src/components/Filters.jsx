import './Filters.css'

export function Filters () {
  const REGIONS = ['Americas', 'Antartic', 'Africa', 'Asia', 'Europe', 'Oceania']

  return (
    <div className='filters'>
      <section className='filters__sort-by'>
        <h3>Sort by</h3>
        <select defaultValue='Population'>
          <option value='Name'>Name</option>
          <option value='Population'>Population</option>
          <option value='Area'>Area</option>
        </select>
      </section>
      <section className='filters__region'>
        <h3>Region</h3>
        <ul className='filters__list'>
          {REGIONS.map(region => (
            <li key={region}>
              <button>{region}</button>
            </li>
          ))}
        </ul>
      </section>
      <section className='filters__status'>
        <h3>Status</h3>
        <div className='filters__status-option'>
          <input type='checkbox' value='Member of the United Nations' id='memberUN' />
          <label className='filters__label'>Member of the United Nations</label>
        </div>
        <div className='filters__status-option'>
          <input type='checkbox' value='Member of the United Nations' id='independent' />
          <label className='filters__label'>Independent</label>
        </div>
      </section>
    </div>
  )
}
