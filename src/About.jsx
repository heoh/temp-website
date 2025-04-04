import { NavLink } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function About() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          About
        </h1>
        <NavLink to="/">Home</NavLink>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default About
