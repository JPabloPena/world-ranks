import './App.css'
import { CountriesDashboard } from './CountriesDashboard'
import { Footer } from './Footer'

function App () {
  return (
    <>
      <h1 className='app-title'>World Ranks</h1>
      <p className='app-desc'>Click in a country to get more info! 🌐</p>
      <CountriesDashboard />
      <Footer />
    </>
  )
}

export default App
