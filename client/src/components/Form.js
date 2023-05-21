import {v4 as uuidv4} from "uuid";


const Form = ({node,setNode,node0,setNode0,node1,setNode1,todos,setTodos,dot,setDot})=>{


    const onNodeChange = (event)=>{
        setNode(event.target.value)
    };
    const onNode0Change = (event)=>{
        setNode0(event.target.value)
    };
    const onNode1Change = (event)=>{
        setNode1(event.target.value)
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {id: uuidv4(), Node: node ,Node0: node0, Node1:node1,completed:false}]);
        setNode("");
        setDot(prevSum => prevSum  + "\t" +node[0] +"->" + node0[0]+ "\n" + "\t" + node[0] +"->" + node1[0] + "\n");
        console.log("\t" +node[0] +"->" + node0[0]+ "\n" + "\t" + node[0] +"->" + node1[0] + "\n");
    };
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input 
                    type="text"
                    placeholder="[Name,sync,Out]" 
                    value ={node}
                    required
                    onChange={onNodeChange}/>
                <input
                    type="text"
                    placeholder="[Next State, In, Out] "
                    value={node0}
                    required
                    onChange={onNode0Change}/>
                <input
                    type="text"
                    placeholder="[Next State, In, Out]"
                    value={node1}
                    required
                    onChange={onNode1Change}/>
                <button className="button-add" type="submit"> Add </button>
            </form>
        </div>
    )
}
export default Form;
