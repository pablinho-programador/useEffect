import { useState } from 'react'
import { Header } from './assets/components/Header'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
    </>
  )
}
