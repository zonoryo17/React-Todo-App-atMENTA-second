const AddTodoForm = ({ todo, onAddFormSubmit, onAddInputChange }) => {
  return (
    <form 
      onSubmit={onAddFormSubmit}>
      <h2 
        style={{
          textAlign: "center", 
          backgroundColor: "#0a4d99", 
          color: "#fff",
          height: "50px"
          }}>
        React Todo App
      </h2>
      <div style={{display: "flex", justifyContent: "center"}}>
        <input
          name="todo"
          type="text"
          className="form-control"
          style={{width: "500px", margin: "5px 0 30px 31px"}}
          placeholder="Todoを入力"
          value={todo}
          onChange={onAddInputChange}
        />
      </div>
    </form>
  );
}

export default AddTodoForm;