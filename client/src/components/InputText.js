import Graphviz from 'graphviz-react';
import React, { useState } from "react";

const InputText = ({texto,setTexto}) => {

  const [textIn,setTextIn]=useState({});



  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async () => {

      setTexto(reader.result)
      // desde acá tengo que modificar
      const grafo = JSON.parse(reader.result)[0]
      var dot2 = "digraph {\n"
      Object.keys(grafo).forEach(key => {
        //dot2 = dot2 + json[key]
        var nodo = grafo[key].split("],[");
        var name = nodo[0].split(",")[0];
        name= name.slice(1,name.lenght)
        if (nodo[0].split(",")[1].replace("]","") === "1"){
          dot2 = dot2 + "\n\t" + name + '[shape="doublecircle"];';
        }
        nodo = nodo.slice(1,nodo.length)

        for (let i = 0; i < nodo.length; i++) {
          dot2 = dot2 +"\n\t" +name+ "->" + nodo[i].split(",")[0]+ "\t[label =" + nodo[i].split(",")[1].replace("]","")+ "];";
        }

      });
      setTextIn(dot2+ "\n}")
    };
    reader.readAsText(file);
  };

  if (Object.keys(textIn).length === 0){
    return (
      <div>
        <form>
          <input className='button-4' type="file" onChange={handleFileInput} />
        </form>
        <div className='grafoIn'>
        </div>
      </div>
    );

  }
  else{

    return (
      <div>
        <div>
          <form>
            <input className='button-4' type="file" onChange={handleFileInput} />
          </form>
        </div>

        <div className='grafoIn'>
          <Graphviz dot={textIn} options={{ width: 200, height: 200 }} />
        </div>

      </div>
    );
  }

};

export default InputText;
