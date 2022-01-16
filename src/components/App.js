import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer, useState } from "react";
import reducer from "../reducers";
import Event from "./Event";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault(); //画面がリロードされないようにする

    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  const deleteAll = (e) => {
    e.preventDefault(); //画面がリロードされないようにする
    const result = window.confirm(
      "全てのイベントを本当に削除しても良いですか？"
    );
    result && dispatch({ type: "DELETE_ALL_EVENT" });
  };

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          disabled={!title || !body}
          type="button"
          className="btn btn-primary"
          onClick={addEvent}
        >
          イベントを作成する
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteAll}
          disabled={state.length === 0}
        >
          全てのイベントを削除する
        </button>
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.map((event, index) => (
              <Event key={index} event={event} dispatch={dispatch} />
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default App;
