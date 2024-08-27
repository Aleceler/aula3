import { useState } from 'react';

const MemoSample = () =>  {
    const [num1, setNum1]: number = useState(1)
    const [num2, setNum2]: number = useState(1)
    const [num3, setNum3]: number = useState(1)
    const [num4, setNum4]: number = useState(1)

    let potencia = (() => {
        const future = Date.now() + 1000
        while (Date.now() < future) {}
        return num1 ** num2
    })()

    let soma = parseInt(num3) + parseInt(num4)

    return (
        <div>
            <p>Potencia: {potencia}</p>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="numero 1"/>
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="numero 2"/>
            <p>Soma: {soma}</p>
            <input type="number" value={num3} onChange={(e) => setNum3(e.target.value)} placeholder="numero 3"/>
            <input type="number" value={num4} onChange={(e) => setNum4(e.target.value)}placeholder="numero 4"/>
        </div>
    );
}

export default MemoSample;