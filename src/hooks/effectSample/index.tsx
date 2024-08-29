import {useEffect, useState} from "react";

const EffectSample = () => {
    const [text, setText] = useState("EffectSample")
    const [nome, setNome] = useState("Alexandre")

    useEffect(() => {
        setTimeout(() => {
            setText("trocando valor ao iniciar" + Math.random())
            setNome("Roberto" + Math.random())
            console.log("nome: " + nome)
            console.log("texto: " + text)
        },1000)
    }, [])


    return <h1>{text}</h1>
}

export default EffectSample