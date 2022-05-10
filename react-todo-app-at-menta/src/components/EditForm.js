const EditForm = ({ currentTodo, setIsEditing, onEditInputChange, onEditFormSubmit }) => {
  return (
    <form onSubmit={onEditFormSubmit}>
      <h2 
        style={{
          textAlign: "center", 
          backgroundColor: "#5e5e5e", 
          color: "#fff",
          height: "50px"
        }}>Todoを編集</h2>
      <div className="input-group" style={{width: "500px", margin: "0 auto"}}>
        <input
          name="editTodo"
          type="text"
          className="form-control"
          placeholder="Todoを編集"
          value={currentTodo.text}
          onChange={onEditInputChange}
        />
        <button type="submit" className="btn btn-outline-secondary">実行</button>
        <button onClick={() => setIsEditing(false)} className="btn btn-outline-secondary">キャンセル</button>
      </div>
    </form>
  );
}

export default EditForm;




// import React, { useState } from "react";

// const EditForm = props => {
//   const [value, setValue] = useState("");
//   const handleChange = () => props.changeText(value);


//   return (
//     <form 
//       id="edit-form" 
//       style={{display: "none"}}
//       action="" 
//       class="input-group mb-3 edit-form hidden" 
//       onSubmit={(e) => e.preventDefault()}>
//       <input
//         type="text"
//         class="form-control"
//         value={value}
//         placeholder="編集を入力"
//         onChange={e => setValue(e.target.value)}
//         onSubmit={(e) => e.preventDefault()}
//       />
//       <button
//         type="submit" 
//         class="btn btn-outline-secondary" 
//         onClick={handleChange}
//         onSubmit={(e) => e.preventDefault()}
//         >実行
//       </button>
//     </form>
//   );
// };
// export default EditForm;