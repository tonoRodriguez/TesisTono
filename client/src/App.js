
import { BrowserRouter,Link, Route, Routes} from "react-router-dom"
import "./App.css";
import FileCode from "./components/FileCode";
import Home from "./components/Home";

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
          <Link to ="/fcode">Examples</Link>
        </li>
        <li>
          <Link to ="/fcode">Optimizer</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/fcode" element = {<FileCode/>} />
    </Routes>

    </>

  );
}
export default App;


 