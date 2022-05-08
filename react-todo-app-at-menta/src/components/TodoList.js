import React, { useState } from 'react';
import EditForm from './EditForm';

const TodoList = () => {
    const initialState = []
    const [todos, setTodos] = useState(initialState);
    const [task, setTask] = useState('')

    const handleNewTask = (e) => {
      setTask(e.target.value)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (task === '') return
      console.log({task,isCompleted:true});
      console.log(...todos);
      setTodos(todos => [...todos, {task, isCompleted: false}])
      setTask('')
    }

    const handleRemoveTask = index => {
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
    }

    // const handleEditTask = index => {

    // }

    return (
      <div style={{textAlign:"center"}}>
          <h1 style={{color:"#fff", backgroundColor:"#3547ac"}}>React Todo App</h1>
      <form onSubmit={handleSubmit} class="input-group mb-3" style={{width:"500px", margin:" 0 auto"}}>
        <input 
          type="text"
          class="form-control"
          placeholder="Todoを入力してください"
          value={ task }
          onChange={handleNewTask}
        />
        <button type="submit" class="btn btn-outline-secondary">追加</button>
      </form>
      <ul class="list-group">
        { todos.map((todo, index) => (
          <li
            class="list-group-item list-group-item-action" 
            style={{margin: "0 auto", width:"500px",}}
            key={ index }>
              { todo.task }
            <select name="status" style={{marginLeft: "10px"}}>
              <option value="notStatted" selected>未着手</option>
              <option value="inProgress">進行中</option>
              <option value="done">完了</option>
            </select>
            <button 
              type="button" 
              class="btn btn-secondary" 
              style={{margin: "0 5px 0 20px"}}
              // onClick={ () => handleEditTask(index) }
              >編集</button>
            <button 
              type="button" 
              class="btn btn-danger"
              onClick={ () => handleRemoveTask(index) }
              >削除</button>
            <EditForm />
          </li>
        ))}
      </ul>
      </div>
  );
}

export default TodoList;