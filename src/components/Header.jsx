import './Header.css'

export function Header () {
  return (
    <header className='header'>
      <p className='header-info'>Found 234 countries</p>
      <form>
        <input placeholder='Search by Name, Region, Subregion' />
      </form>
    </header>
  )
}
