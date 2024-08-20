import React, {useState} from "react";

const StateSample = () => {
    const [formValues, setFormValues] = useState({
        nome: "",
        idade: ""
    })

    const handleChanges = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return <div>
        <form onSubmit={handleSubmitForm}>
            <input type="text" name="nome" placeholder="Insira o nome" value={formValues.nome} onChange={e => handleChanges(e)}/>
            <input type="text" name="idade" placeholder="Insira o idade" value={formValues.idade} onChange={e => handleChanges(e)}/>
            <button>Submit</button>
        </form>
    </div>
}

export default StateSample