import React, {useEffect, useState} from "react";

const EffectSample = () => {
    const [text, setText] = useState("EffectSample")

    useEffect(() => {
        setTimeout(() => {
            setText("trocando valor ao iniciar")
        },1000)
    }, [])

    return <h1>{text}</h1>
}

export default EffectSample