import ComponentFilho from "./componentFilho";
import {useState} from "react";

const CallbackSample = () => {
    const [numeroAleatorio, setNumeroAleatorio] = useState(0)

    const Multiplica = ((num1, num2) => {
        return (num1 * num2)
    })


    return (
        <>
            <h1>Numero aleatorio: {numeroAleatorio}</h1>
            <button onClick={() => setNumeroAleatorio(Math.random())}>mudar numero aleatorio</button>

            <ComponentFilho />
        </>
    );
}

export default CallbackSample







// <ComponentFilho multiplica={Multiplica}/>
{/*<button onClick={() => setNumeroAdicional(numeroAdicional + 1)}>mudar numero adicional</button>*/}
// const [numeroAdicional, setNumeroAdicional] = useState(5)
