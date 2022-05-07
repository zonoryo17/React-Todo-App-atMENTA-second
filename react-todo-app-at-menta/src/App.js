import { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';


const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  )
}


  // return (
  //   <>
  //   <div className="inputFormArea" style={{marginBottom: "50px"}}>
  //     <h2>React Todoリスト</h2>
  //     <input 
  //       type='text'
  //       value={todoText} 
  //       placeholder="Todoを入力してください" 
  //       onChange={onChangeTodoText}
  //       style={{width: "400px", height: "30px"}}
  //     />
  //     <button onClick={onClickAdd}  type="button" class="btn btn-outline-dark" style={{marginLeft: "5px"}}>追加</button>
  //   </div>
  //     <div className="todoListArea" style={{width: "700px"}}>
  //       <h3>Todoリスト</h3>
  //       <ul>
  //         <li style={{backgroundColor: "rgba(245,230,152, 0.4)", marginBottom:"5px"}}>
  //           <span style={{marginRight: "20px"}}>研修準備</span>
  //           <select name="status"  style={{marginRight: "20px"}}>
  //             <option value="notStatted" selected>未着手</option>
  //             <option value="inProgress">進行中</option>
  //             <option value="done">完了</option>
  //           </select>
  //           <button type="button" class="btn btn-secondary" style={{marginRight: "5px"}}>編集</button>
  //           <button type="button" class="btn btn-danger">削除</button>
  //         </li>
  //         <li style={{backgroundColor: "rgba(152,240,245, 0.4)", marginBottom:"5px"}}>
  //           <span style={{marginRight: "20px"}}>プログラミング学習</span>
  //           <select name="status"  style={{marginRight: "20px"}}>
  //             <option value="notStatted" selected>未着手</option>
  //             <option value="inProgress">進行中</option>
  //             <option value="done">完了</option>
  //           </select>
  //           <button type="button" class="btn btn-secondary" style={{marginRight: "5px"}}>編集</button>
  //           <button type="button" class="btn btn-danger">削除</button>
  //         </li>
  //         <li style={{backgroundColor: "rgba(245,152,163, 0.4)", marginBottom:"5px"}}>
  //           <span style={{marginRight: "20px"}}>読書（マネジメント）</span>
  //           <select name="status"  style={{marginRight: "20px"}}>
  //             <option value="notStatted" selected>未着手</option>
  //             <option value="inProgress">進行中</option>
  //             <option value="done">完了</option>
  //           </select>
  //           <button type="button" class="btn btn-secondary" style={{marginRight: "5px"}}>編集</button>
  //           <button type="button" class="btn btn-danger">削除</button>
  //         </li>
  //       </ul>
  //     </div>
  //   </>
  // );
// }

export default App;
