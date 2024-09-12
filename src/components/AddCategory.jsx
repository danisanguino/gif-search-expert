import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChange = (event)=> {
        setInputValue(event.target.value);

    }

    const onSubmit = (event) => {
        event.preventDefault();
        //si el valor es mayor o igual a uno puedo hacer un return
        if (inputValue.trim().length <=1) return;
        
        // propCalabazaFromComponent((event)=> [inputValue, ...event]);
        onNewCategory(inputValue.trim());
        setInputValue("");
    }


  return (
    
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Search Gifs"
            value= {inputValue}
            onChange={ onInputChange }
        />
    </form>
  )
}
