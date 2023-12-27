import {Link, Route, Routes} from "react-router-dom"
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Optimizer from "./components/Optimizer";
const App = ()=> {


  return (
    <body>
    <>
      <nav>
        <ul>
          <li>
            <Link to ="/">Inicio</Link>
          </li>
          <li>
            <Link to ="/about">Guía de uso</Link>
          </li>
          <li>
            <Link to ="/fcode">Optimizador</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/fcode" element = {<Optimizer/>} />
        <Route path="/about" element = {<About/>} />
      </Routes>
    </>

    </body>

  );
}
export default App;


 