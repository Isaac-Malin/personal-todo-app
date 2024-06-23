import React from 'react'
import '../Components/CSS/Todo.css'
import { useState } from 'react'
import TodoItem from './TodoItem'

const Todo = () => {

  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')

  const add = () => {
    setTodos([...todos, todoInput])
    setTodoInput('')
  }

  const handleChange = (e) => {
    setTodoInput(e.target.value)
  }

  const remove = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
  }
  

  return (
    <div className='todo-container'>
      <div className='todo-header'>ToDos</div>
      <div className='todo-add'>
        <input onChange={(e) => handleChange(e)} type="text" value={todoInput} placeholder='Add your todo' className='todo-input'/>
        <button onClick={(e) => add(e.target.value)} className='todo-add-btn'>ADD</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => {
          return <TodoItem todo={todo} index={index} remove={remove}/>
        })}
      </div>
    </div>
  )
}

export default Todo
