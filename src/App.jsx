import { useState, useEffect } from 'react'
import Demo from "./sections/Demo"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"

import LoadingScreen from './components/LoadingScreeen'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <main className='mx-auto'>
      <Hero onLoad={() => setIsLoading(false)} isLoading={isLoading} />
      {isLoading ? null : (
        <>
          <Navbar />
          <Demo />
        </>
      )}
    </main>
  )
}

export default App