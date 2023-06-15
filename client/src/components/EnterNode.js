import { useState } from "react";

const EnterNode = ()=> {
    const [name,setName] = useState("");
    const [nextState1,setNextState1] = useState("");
    const [nextState2,setNextState2] = useState("");
    const [nextState3,setNextState3] = useState("");

    const onNameChange = (event)=>{
        setNextState1(event.target.value)
    };
    const onNextState0Change = (event)=>{
        setNextState1(event.target.value)
    };
    const onNextState1Change = (event)=>{
        setNextState1(event.target.value)
    };
    const onNextState2Change = (event)=>{
        setNextState1(event.target.value)
    };

    return (
        <div>
            <form >
                <input                     
                    type="text"
                    placeholder="[Name,Out]" 
                    required
                    onChange={onNameChange}/>
                <input
                    type="text"
                    placeholder="[NextState,function]" 
                    required
                    onChange={onNextState0Change}/>
                <input
                    type="text"
                    placeholder="[NextState,function]"
                    onChange={onNextState1Change}/>
            <input
                    type="text"
                    placeholder="[NextState,function]"
                    onChange={onNextState2Change}/>
                <button className="button-add" type="submit"> Add </button>
            </form>
        </div>
    );
  }
  export default EnterNode;