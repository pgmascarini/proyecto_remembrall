import React,{useState} from 'react'

const Formulario = ({addTodo}) => {

    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {    
          addTodo(value);
          setValue('');
        }
      };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className='inputFormulario'
                type='text' 
                placeholder='Añadir Tarea' 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
            />

            
            <button className='botonFormulario' type='submit'>Añadir</button>
        </form>
    )
}

export default Formulario
