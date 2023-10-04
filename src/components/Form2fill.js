import React, {useState} from 'react'
import '../styling.css'

function Form2fill({addHandler})  {
    const [userInput, setUserInput] = useState('');

    //this function records what the user has typed
    const handleForm = (e)=>{
        e.preventDefault();
       console.log(userInput);

    //use addHandler function from App.js to send retained data 
        addHandler(userInput);
        setUserInput("");

    }

  return (
    <div>
      <form className='Item' onSubmit={handleForm}>
        <input type='text' 
        className='AddItem' 
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        required
        placeholder='Create New Todo list'></input>
        <button className='Addbutton' id='adbutn'>Add</button>
      </form>
    </div>
  )
}

export default Form2fill


