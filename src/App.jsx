import { useState } from 'react'
import { Header } from './assets/components/Header'
import { Exemplo1 } from './assets/components/exemplo1'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />

       <main>
        <Exemplo1 />
       </main>
    </>
  )
}
