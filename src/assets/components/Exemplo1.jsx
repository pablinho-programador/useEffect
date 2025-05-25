import { useEffect, useState } from "react"

export function Exemplo1 () {
    const [numero, setNumero] = useState(0)

    useEffect(() =>{
        alert("Seja bem-vindo!")
    }, [])

    return(
        <section>
            <h2>Exemplo 1</h2>

            <div>
                <h3> Número: {numero}</h3>
                <button onClick={()=>{setNumero(numero + 1)}}>Aumentar</button>
            </div>
        </section>
    )
}