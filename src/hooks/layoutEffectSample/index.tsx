import React, {useEffect, useLayoutEffect, useState} from 'react';

const LayoutEffectSample = () => {
    const [a,setA] = useState("")
    const [b,setB] = useState("")


    useEffect(() => {
        console.log('useEffect: Executing after the browser has painted');
        setTimeout(() => {
            setA("Valor A")
            console.log("a", performance.now())
        })
    }, []);

    useLayoutEffect(() => {
        console.log('useLayoutEffect: Executing before the browser paints');
        setTimeout(() => {
            setB("Valor B")
            console.log("b", performance.now())

        })
    }, []);


    return (
        <div>
           Teste useLayoutEffect
            <p>{a}</p>
            <p>{b}</p>
        </div>

    );
};

export default LayoutEffectSample;