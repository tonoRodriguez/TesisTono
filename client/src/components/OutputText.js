import { useState } from "react";
import Graphviz from 'graphviz-react';

const OutputText = ({texto}) => {

    const [grafoOpt,setGrafoOpt] = useState("");
    const [func,setFunc]= useState({"h":1})
    
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
                for (let node in data[0]){
                    const conexiones = data[0][node]
                    for (let NSnumber in conexiones){
                        dot += "\t" + node + "->" + conexiones[NSnumber][0] +";\n"   
                    }
                }
                dot += "}"
                setFunc(data[1])
                setGrafoOpt(dot)
              })          
    };

    const content = Object.entries(func).map(([key, value]) => (
        <li key={key}>
        {key}: {value},{' '}
        </li>
    ));
    if (Object.keys(grafoOpt).length === 0){
        return (
            <div>
                <form onSubmit={sendGraph}>
                    <button className="button-4"  type="submit">Optimizar</button>
                </form>
                <h3>Functions</h3>

            </div>

        );
    }
    else {
        return (
            <div>
                <form onSubmit={sendGraph}>
                    <button className="button-4"  type="submit">Optimizar</button>
                </form>
                <Graphviz dot={grafoOpt} options={{ width: 200, height: 200 }} />
                <h3>Functions</h3>
                <p>{content}</p>
            </div>
        )


    }
};
export default OutputText;