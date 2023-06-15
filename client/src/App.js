
import { BrowserRouter,Link, Route, Routes} from "react-router-dom"
import "./App.css";
import Home from "./components/Home";
import Examples from "./components/Examlpe";
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
          <Link to ="/examples">About</Link>
        </li>
        <li>
          <Link to ="/fcode">Optimizer</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/fcode" element = {<Optimizer/>} />
      <Route path="/examples" element = {<Examples/>} />
    </Routes>

    </>

  );
}
export default App;


 