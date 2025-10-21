import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Hero/>
    <Product/>
      
    </>
  )
}

export default App
