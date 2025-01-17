import './Footer.css'
import devChallenges from '../assets/dev-challenges.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

export function Footer () {
  return (
    <footer className='footer'>
      <div className='footer-info'>
        <p className='footer-dev-challenges'>
          <span>Challenge from</span>
          <a href='https://devchallenges.io/' target='_blank' rel='noreferrer'>
            <img src={devChallenges} />
          </a>
        </p>
        <p>Developed by ⚡ JPabloPena</p>
      </div>
      <div className='footer-social'>
        <a className='footer-github' href='https://github.com/JPabloPena/world-ranks'>
          <img src={github} />
          <span>Github</span>
        </a>
        <a className='footer-linkedin' href='https://www.linkedin.com/in/jpablopena/'>
          <img src={linkedin} />
          <span>LinkedIn</span>
        </a>
      </div>
    </footer>
  )
}
