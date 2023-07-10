import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [list,setList]=useState([])
  const [form,setForm]=useState('')
  const handleChange = (event) =>{
    setForm(event.target.value)
  }
  const handleAddItem = () =>{
    setList((prevList) => [...prevList, form])
    setForm('')
  }

  return (
      <>
    <form>
      <div className="form-floating">
        <input className="form-control email" type="text" name="list"  value={form} onChange={handleChange} />
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleAddItem} >Add</button>
    </form>
  <div>
    <ul>
      {list.map(item=>
        <li>{item}</li>
      )}
    </ul>
  </div>
      </>
  );
}

export default App;
