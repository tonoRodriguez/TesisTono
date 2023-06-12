import { useState } from "react";
import { BrowserRouter,Link, Route, Routes} from "react-router-dom"
import "./App.css";
import InputText from "./components/InputText";
import OutputText from "./components/OutputText";
import FileCode from "./components/FileCode";
import TodoList from "./components/Todo";
import ManualInput from "./components/ManualInput";
const App = ()=> {


  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to ="/fcode">F code</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element = {<ManualInput/>} />
      <Route path="/fcode" element = {<FileCode/>} />
    </Routes>

    </>

  );
}
export default App;


 