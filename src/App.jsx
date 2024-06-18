import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Navbar></Navbar> */}
      </div>
      <div className="main">
        <Home></Home>
      </div>
      <div className="footer">
        <div className="social-media"></div>
        <p>Sushmoy &copy; 2024</p>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
