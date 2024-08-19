import React, {useEffect, useRef, useState} from "react";

const ExemploRef = () => {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return <div>
        <input ref={inputRef} type="text" onChange={(e) => setNome(e.target.value)} placeholder="Insira o Nome aqui"/>
        <input type="text" onChange={(e) => setIdade(e.target.value)} placeholder="Insira a Idade aqui"/>
        <button type="button" onClick={() => console.log(nome, idade)}>Submit</button>
    </div>
}

export default ExemploRef