// import React, { useState } from 'react';

// const InputForm = () => {
//   const initialState = []
//   const [todos, setTodos] = useState(initialState);
//   const [task, setTask] = useState('')

//   const handleNewTask = (e) => {
//     setTask(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (task === '') return
//     console.log({task,isCompleted:true});
//     console.log(...todos);
//     setTodos(todos => [...todos, {task, isCompleted: false}])
//     setTask('')
//   }

//   return (
//     <form onSubmit={handleSubmit} class="input-group mb-3" style={{width:"500px", margin:" 0 auto"}}>
//     <input 
//       type="text"
//       class="form-control"
//       placeholder="Todoを入力してください"
//       value={ task }
//       onChange={handleNewTask}
//     />
//     <button type="submit" class="btn btn-outline-secondary">追加</button>
//     </form>
//   )
// }
// export default InputForm;