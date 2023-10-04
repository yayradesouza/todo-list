// import logo from './logo.svg';
import './App.css';
import './assets/bg-mobile-light.jpg'
import moon from './assets/icon-moon.svg'
import Form2fill from './components/Form2fill.js'
import TodoItem from './components/TodoItem.js'
import FilterNav from './components/FilterNav.js'
import {useState} from 'react'

function App() {
  /* const todoItems= [
    {
      id: 1,
      name: "Item1"
    },
    {
      id: 2,
      name: "Item2"
    },
    {
      id: 3,
      name: "Item3"
    }
  ] */
  const [TodoList, setTodoList] = useState([]);
  const [Filter, setFilter] = useState(["all"]);

  //function to add new Todo item
  const addTodo = (userInput) => {
      const newTodo = {
        id: Date.now(),
        text: userInput,
        status: false,
      }

     setTodoList(prevData => [...prevData, newTodo])
      // setTodoList([newTodo,...TodoList])
  }

  //Function to remove a Todo by ID
  const removeTodoById = (id) => {
    const todoItems = TodoList.filter(todo => todo.id !== id);
    setTodoList(todoItems);
 }

 //Function to toggle status
 const toggleTodoStatus = (id) => {
  setTodoList(
    TodoList.map(todo => {
      if (todo.id === id) {
	 return {...todo, status: !todo.status}
	}
  //return the same data if the ID doesn't match
	return todo;
  })
 )
}

//Function delete all completed Todos
const clearCompletedTodos = () => {
  const todoItems = TodoList.filter(todo => !todo.status);
  setTodoList(todoItems);
}

//Function to update filter value
const updateFilterValue = (value) => setFilter(value);

//Function to render todoList based on filter value
const renderTodoList = () => {
  let filteredTodo = TodoList;
  if (Filter === 'all') {
	filteredTodo = TodoList
} else if (Filter === 'active') {
	filteredTodo = TodoList.filter(Todo => !Todo.status)
} else if (Filter === 'complete') {
	filteredTodo =TodoList.filter(Todo => Todo.status)
}
return filteredTodo.map(item=><TodoItem 
        TodoData={item} 
        deleteItem={removeTodoById} 
        statusUpdate={toggleTodoStatus}
        key={item.id}/>)

}


  return (
    <div className="App">
      <div className='App-banner'>
        <div className='Todo'>TODO</div>
        <div className='MoonIcon'><img src={moon} alt='moon icon'/></div>
      </div>
      <div><Form2fill addHandler={addTodo}/></div>
      <div className='Filter'>
      <FilterNav filterhandler={updateFilterValue}/>
        <div className='Item-list'>
        { //TodoList.map(item=><TodoItem 
        //TodoData={item} 
        //deleteItem={removeTodoById} 
        //statusUpdate={toggleTodoStatus}
        //key={item.id}/>)
        renderTodoList()
        }

        </div>
      </div>    
      <div className='footer'>
        <p>4 items</p>
        <button type='button' onClick={clearCompletedTodos} className='clear'>Clear Completed</button>
      </div>  
    </div>
  );
}

export default App;
