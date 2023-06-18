import {v4 as uuidv4} from "uuid";
import { useState } from "react";
import Graphviz from "graphviz-react";

const EnterNode = ()=> {
    const [name,setName] = useState("");
    const [nextState,setNextState] = useState("");
    const [todos,setTodos] =useState([])
    const [dot,setDot] = useState("digraph {")
 

    const onNameChange = (event)=>{
        setName(event.target.value)
    };
    const onNextState0Change = (event)=>{
        setNextState(event.target.value)
    };
    const onNodeSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {id: uuidv4(), Name: name ,NextState: nextState,completed:false}]);
        var nodo = nextState.split("],[");
        nodo[0]=nodo[0].slice(1,nodo[0].length)
        var dot2 = ""
        for (let i = 0; i < nodo.length; i++) {
            dot2 = dot2 + "\n\t" +name[0]+ "->" + nodo[i].split(",")[0]+";";
          }
          setDot(dot + dot2)
          console.log(dot)
    };

    return (
        <div>
            <form onSubmit={onNodeSubmit}>
                <input                     
                    type="text"
                    placeholder="[Name,Out]" 
                    value ={name}
                    required
                    onChange={onNameChange}/>
                <input
                    type="text"
                    placeholder="[NextState,function]"
                    value ={nextState} 
                    required
                    onChange={onNextState0Change}/>
                <button className="button-add" type="submit"> Add Node</button>
            </form>
            <Graphviz dot={dot +"\n}"} options={{ width: 200, height: 200 }} />
            <p>{dot}</p>

            <form onSubmit={onNodeSubmit}>
                <input                     
                    type="text"
                    placeholder="[Name]" 
                    required
                    onChange={onNameChange}/>
                <input
                    type="text"
                    placeholder="[Miniterms]" 
                    required
                    onChange={onNextState0Change}/>
                <button className="button-add" type="submit"> Add Function </button>
            </form>
        </div>
    );
  }
  export default EnterNode;