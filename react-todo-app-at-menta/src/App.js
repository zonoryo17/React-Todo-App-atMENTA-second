import './App.css';

function App() {
  return (
    <>
      <div className="inputFormArea" style={{marginBottom: "50px"}}>
        <h2>React Todoリスト</h2>
        <input type='text' placeholder="Todoを入力してください" style={{width: "400px", height: "30px"}}></input>
      </div>
      <div className="NotStartedArea">
        <h3>未着手</h3>
        <ul>
          <li>
            <span style={{marginRight: "30px"}}>研修準備</span>
            <button type="button" class="btn btn-secondary" style={{marginRight: "5px"}}>編集</button>
            <button type="button" class="btn btn-danger">削除</button>
            <button type="button" class="btn btn-primary" style={{marginLeft: "5px"}}>着手</button>
            <button type="button" class="btn btn-success" style={{marginLeft: "5px"}}>完了</button>
          </li>
        </ul>
      </div>
      <div className="StartedArea" style={{marginTop: "50px"}}>
        <h3>進行中</h3>
        <ul>
          <li style={{marginBottom: "5px"}}>
            <span style={{marginRight: "30px"}}>本を読む</span>
            <button type="button" class="btn btn-secondary" style={{marginRight: "5px"}}>編集</button>
            <button type="button" class="btn btn-danger">削除</button>
            <button type="button" class="btn btn-secondary" style={{marginLeft: "5px"}}>戻す</button>
            <button type="button" class="btn btn-success" style={{marginLeft: "5px"}}>完了</button>
          </li>
          <li>
            <span style={{marginRight: "30px"}}>プログラミング学習</span>
            <button type="button" class="btn btn-secondary" style={{marginRight: "5px"}}>編集</button>
            <button type="button" class="btn btn-danger">削除</button>
            <button type="button" class="btn btn-secondary" style={{marginLeft: "5px"}}>戻す</button>
            <button type="button" class="btn btn-success" style={{marginLeft: "5px"}}>完了</button>
          </li>
        </ul>
      </div>
      <div className="CompletedArea" style={{marginTop: "50px"}}>
        <h3>完了</h3>
        <ul>
          <li>
            <span style={{marginRight: "30px"}}>タイトル</span>
            <button type="button" class="btn btn-secondary" style={{marginRight: "5px"}}>編集</button>
            <button type="button" class="btn btn-danger">削除</button>
            <button type="button" class="btn btn-secondary" style={{marginLeft: "5px"}}>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
