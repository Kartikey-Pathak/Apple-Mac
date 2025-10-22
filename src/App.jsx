import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Product from './components/Product'
import Show from './components/Show'
import Text from './components/Text'
import Next from './components/Next'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Hero/>
    <Product/>
    <Show/>
    <Text/>
    <Next/>
      
    </>
  )
}

export default App
