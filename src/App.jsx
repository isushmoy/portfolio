import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import Home from './Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="main mt-[6.125rem] lg:mt-[16.875rem]">
        <Home></Home>
      </div>
      <div className="footer nunito pb-32 lg:pb-0">
        <div className="social-media bg-[#131313] flex justify-between items-center h-[5rem] px-6 rounded-full mb-[1rem]">
          <div className='text-[#6F6F6F]'>
            Follow me
          </div>
          <div className='flex gap-[1.25rem]'>
            <a href="https://github.com/sushcod3" className='hover:scale-125 transition purple text-[1.5rem]'><img src="https://img.icons8.com/?size=24&id=62856&format=png&color=B292FF" alt="GitHub Icon" /> </a>
            <a href="https://www.linkedin.com/in/sushmoy/" className='hover:scale-125 transition purple text-[1.5rem]'><img src="https://img.icons8.com/?size=24&id=8808&format=png&color=B292FF" alt="linkedin icon" /> </a>
            <a href="mailto: m.hossain.sushmoy@gmail.com" className='hover:scale-125 transition purple text-[1.5rem]'><img src="https://img.icons8.com/?size=24&id=pJJmXPomYuPv&format=png&color=B292FF" alt="Email Icon" /></a>
          </div>
        </div>
        <p className='text-start ps-6 text-[#C8C8C8]'>Sushmoy &copy; 2024</p>
      </div>
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
