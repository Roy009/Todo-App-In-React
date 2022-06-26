import './App.css';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from 'react';

function App() {
  const [listItems, setTodoItems] = useState([]);
  const [listText, setTodoText] = useState("");


  const handleChange = ({ target }) => {
    setTodoText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoItems((items) => [...items, listText]);
    setTodoText("");
  };
  const deleteTodo = (index) => {
    listItems.splice(index, 1);
    setTodoItems((items) => [...items, listText]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label className="todolabel">What do you want to do today ?</label>
        <br />
        <input type="text" className="input" value={listText} onChange={(event) => {
          handleChange(event);
        }} />
        <button className="button" type="submit">
          Add
        </button>
      </form>
      {listItems.map(
        (todo, i) =>
          todo !== "" && (
            <>
              <div className="todo">
                <br />
                <input key={i} type="checkbox" />
                <label>{todo}</label>
                <IconButton key={i} onClick={() => deleteTodo(i)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </>
          )
      )}
    </div>
  );
}

export default App;
