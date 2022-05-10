const TodoList = ({ todo, onEditClick, onDeleteClick }) => {
  return (
    <div style={{width: "500px", margin: "0 auto"}}>
      <li 
        key={todo.id} 
        style={{display: "flex", justifyContent: "center"}}
        className="list-group-item list-group-item-action">
        {todo.text}
        <select 
          className="form-select" 
          aria-label="Default select example"
          style={{width: "100px"}}>
            <option value="notStarted" selected>未着手</option>
            <option value="inProgress">進行中</option>
            <option value="done">完了</option>
        </select>
        <button 
          onClick={() => onEditClick(todo)}
          className="btn btn-secondary">
            編集</button>
        <button 
          onClick={() => onDeleteClick(todo.id)}
          className="btn btn-danger">
            削除</button>
      </li>
    </div>
  );
}

export default TodoList;