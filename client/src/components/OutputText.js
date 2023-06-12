import { useState } from "react";
import Graphviz from 'graphviz-react';

const OutputText = ({texto}) => {

    const [grafoOpt,setGrafoOpt] = useState("");
    
    const sendGraph = (event)=>{
        event.preventDefault();
        const response = fetch('http://localhost:5000/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(texto, null, 2),
          });
          const response2 = fetch('http://localhost:5000/GetData')
              .then(res => res.json())
              .then(data =>{
                var dot = "digraph {\n"
                for (let node in data){
                    const conexiones = data[node]
                    for (let NSnumber in conexiones){
                        dot += "\t" + node + "->" + conexiones[NSnumber][0] +";\n"
                    
                    }

                }
                dot += "}"
                console.log(dot)
                setGrafoOpt(dot)

                



              })
          
          
    };
    if (Object.keys(grafoOpt).length === 0){
        return (
            <form onSubmit={sendGraph}>
                <button className="button-4"  type="submit">Optimizar</button>
            </form>

        );
    }
    else {
        return (
            <div>
                <form onSubmit={sendGraph}>
                    <button className="button-4"  type="submit">Optimizar</button>
                </form>
                <Graphviz dot={grafoOpt} options={{ width: 200, height: 200 }} />
            </div>
        )


    }
};
export default OutputText;