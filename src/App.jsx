import SlidingBar from "./components/SlidingBar"
import Demo from "./sections/Demo"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"


function App() {
  

  return (
    <main className='mx-auto'>
      {/* <h1 className='text-white' >hello world</h1> */}
        <Navbar/>
        <Hero/>
        <Demo/>
        {/* <SlidingBar/> */}
    </main>
  )
}

export default App
