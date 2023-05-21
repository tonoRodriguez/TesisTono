import React from "react";


const TodoList = ({todos,setTodos,completegraph,setCompleteGraph})=>{


    const onTodosChange = (event) =>{
        console.log("entre aca")
        event.preventDefault()
        //const l= todos.reduce((total,a)=> {
        //    return total + a.Node;
       // });
        //setCompleteGraph(l);
        //console.log(completegraph)
    };

    return (
        <div>
            {todos.map((todo)=>(
                <li className="list-item" key={todo.id}>
                    <input 
                     type="text" 
                     value={"[" + todo.Node + "]" + todo.Node0 + todo.Node1} 
                     className="list" 
                     onChange={onTodosChange}
                        />
                </li>
            )
            )}
        </div>
    )
};

export default TodoList;