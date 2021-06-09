import React, { useState } from 'react';

const AddTodos = () => {
    const [ value, setValue ] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('user entered: ' + value);
    }

    return ( 
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input 
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder='Add todo' 
            />
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default AddTodos;