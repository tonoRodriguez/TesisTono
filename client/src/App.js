
import {Link, Route, Routes} from "react-router-dom"
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Optimizer from "./components/Optimizer";
const App = ()=> {


  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to ="/about">About</Link>
        </li>
        <li>
          <Link to ="/fcode">Optimizer</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/fcode" element = {<Optimizer/>} />
      <Route path="/about" element = {<About/>} />
    </Routes>
    </>

  );
}
export default App;


 