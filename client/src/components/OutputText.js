import { useState } from "react";

const OutputText = ({texto}) => {

    const [grafoOpt,setGrafoOpt] = useState(["hola","hola"]);
    const sendGraph = (event)=>{
        event.preventDefault();
        setGrafoOpt(texto);
        const response = fetch('http://localhost:5000/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(texto, null, 2),
          });
          console.log("here i create the graph")
          const response2 = fetch('http://localhost:5000/GetData')
              .then(res => res.json())
              .then(data => console.log(data))
          
    };

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