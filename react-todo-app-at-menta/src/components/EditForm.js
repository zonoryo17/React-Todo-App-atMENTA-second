import React, { useState } from "react";

const EditForm = props => {
  const [value, setValue] = useState("");
  const handleChange = () => props.changeText(value);
  return (
    <form action="" class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        value={value}
        placeholder="編集を入力"
        onChange={e => setValue(e.target.value)}
      />
      <button
        type="submit" 
        class="btn btn-outline-secondary" 
        onClick={handleChange}>
        実行
      </button>
    </form>
  );
};
export default EditForm;