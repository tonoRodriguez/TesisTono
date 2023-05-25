import { useState } from "react";

const OutputText = ({texto}) => {

    const [grafoOpt,setGrafoOpt] = useState(["hola","hola"]);
    const sendGraph = (event)=>{
        event.preventDefault();
        console.log(texto);
        setGrafoOpt(texto);
        const response = fetch('http://localhost:5000/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(texto, null, 2),
          });
    };
        //aca tengo que crear el json que mando que deberia ser igual al objeto

/*

    const sendGraph = (event) => {
        event.preventDefault();
        const sendFile = todos.todos.map( (x,y)=> {
            return y +":[" +x.Node +"],[" + x.Node0 + "],["+ x.Node1 +"]";
        });
        console.log(sendFile);
        const response = fetch('http://localhost:5000/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendFile, null, 2),
          });
    };
*/

    return (
        <div>
            <form onSubmit={sendGraph}>
                <button className="button-4"  type="submit">Optimizar</button>
            </form>
            <h1>{grafoOpt}</h1>
        </div>
    )
};
export default OutputText;