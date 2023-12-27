import {v4 as uuidv4} from "uuid";
import { useEffect, useState } from "react";
import Graphviz from "graphviz-react";

const EnterNode = ({texto,setTexto})=> {
    const [name,setName] = useState("");
    const [nextState,setNextState] = useState("");
    const [fname,setFName] = useState("");
    const [miniterms,setMiniterms] = useState("");
    const [todos,setTodos] =useState([])
    const [dot,setDot] = useState("digraph {")
    const [code,setCode] = useState([{},{}]);
 

    const onNameChange = (event)=>{
        setName(event.target.value)
    };
    const onNextState0Change = (event)=>{
        setNextState(event.target.value)

    };

    useEffect(()=>{
        const llaves = Object.keys(code[0]);
        const nuevoDiccionario = {};
        for (let i = 0; i < llaves.length; i++) {
            nuevoDiccionario[String(i+1)]= "[" +llaves[i] + " ]," + code[0][llaves[i]];
        }

        setTexto([nuevoDiccionario,code[1]])

    },[code]);
    useEffect(() => {
        console.log(texto);
        // Aquí puedes poner lógicas adicionales que dependan del valor actualizado de 'texto'
    }, [texto]);
    
    const onNodeSubmit = (event) => {
        event.preventDefault();
        const newNode = { id: uuidv4(), Name: name, NextState: nextState, completed: false };
        setTodos([...todos, newNode]);
        //setCode(prevCode => [{ ...prevCode[0], [newNode.Name]: newNode.NextState }, prevCode[1]]);
        setCode(prevCode => {
            // Clona el primer diccionario del estado anterior de 'code'
            const updatedNodes = { ...prevCode[0] };
    
            // Si 'newNode.Name' ya existe, concatena 'newNode.NextState' al valor existente
            if (updatedNodes[newNode.Name]) {
                updatedNodes[newNode.Name] += ", " + newNode.NextState;
            } else {
                // Si 'newNode.Name' no existe, simplemente asigna 'newNode.NextState'
                updatedNodes[newNode.Name] = newNode.NextState;
            }
    
            // Retorna el nuevo estado actualizado
            return [updatedNodes, prevCode[1]];
        });
        var nodo = nextState.split("],[");
        nodo[0]=nodo[0].slice(1,nodo[0].length)
        var dot2 = ""
        for (let i = 0; i < nodo.length; i++) {
            dot2 = dot2 + "\n\t" +name[0]+ "->" + nodo[i].split(",")[0]+ "\t[label ="+ nodo[i].split(",")[1].replace("]","") +"];";
          }
          setDot(dot + dot2);
        //_______________Aca tengo que convertirlo en el mismo tipo de dato____________________________________________________________________

    };
    const onMinitermsChange = (event)=>{
        setMiniterms(event.target.value)
    };
    const onFNameChange = (event)=>{
        setFName(event.target.value)
    };
    const onFunctionSubmit = (event) => {
        event.preventDefault();
        const newFunction = { id: uuidv4(), Name: fname, Miniterms: miniterms, completed: false };
        setTodos([...todos, {id: uuidv4(), Name: fname ,Miniterms: miniterms,completed:false}]);
        setCode(prevCode => [prevCode[0], { ...prevCode[1], [newFunction.Name]: newFunction.Miniterms }]);

    };
    return (
        <div>
            <h1>Enter node</h1>
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

            <form onSubmit={onFunctionSubmit}>
                <input                     
                    type="text"
                    placeholder="[FName]"
                    value={fname}
                    required
                    onChange={onFNameChange}/>
                <input
                    type="text"
                    placeholder="[Miniterms]" 
                    value = {miniterms}
                    required
                    onChange={onMinitermsChange}/>
                <button className="button-add" type="submit"> Add Function </button>
            </form>
        </div>
    );
  }
  export default EnterNode;