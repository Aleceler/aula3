
interface IComponenteFilho {
    multiplica?: (num1: number, num2: number) => number
}

function ComponenteFilho({multiplica}: IComponenteFilho) {
    console.log('Componente Filho renderizado');

    return (
        <h1>Valor: {multiplica ? multiplica(4, 2) : 10}</h1>
    );
}

export default ComponenteFilho;