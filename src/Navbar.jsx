import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className='flex justify-center'> */}
      <nav className='flex justify-center'>
        <div className='flex justify-center items-center fixed bottom-[2rem] lg:top-[2rem] w-[22rem] h-[4.5rem] bg-[#211F2360] backdrop-blur-md blur-[0.6px] rounded-full'>
            <ul className='flex font-medium'>
                <li className='hover:scale-110 cursor-pointer px-3 purple'>Sushmoy</li>
                <li className='hover:scale-110 cursor-pointer px-3 text-[#C8C8C8]'>Education</li>
                <li className='hover:scale-110 cursor-pointer px-3 text-[#C8C8C8]'>Experiences</li>   
            </ul>
        </div>
      </nav>
    {/* </div> */}
    </>
  )
}

export default App