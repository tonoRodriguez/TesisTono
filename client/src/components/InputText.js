import Graphviz from 'graphviz-react';
import React, { useState } from "react";

const InputText = () => {

  const [textIn,setTextIn]=useState({});
  /*
  const dot = `digraph {
    A -> B;
    D -> A;
  }`;
  */


  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async () => {
      const obj = {};
      reader.result.split("\n").forEach((line) => {
        const [key, value] = line.split(":");
        if (value) {
          obj[key.trim()] = value.trim();
        }
        /*
        var nodos=reader.result.split("\n")
        console.log(nodos[1][25])
        nodos = nodos.slice(1,nodos.length -1)
        const newNodos= nodos.map(str => str.slice(12,str.length));
        const dot = newNodos.reduce((accumulator, currentValue)=> accumulator + "\t" + currentValue[0] +" -> " + currentValue[13] + "\n\t" + 
        currentValue[0] +" -> " + currentValue[19] +"\n", "\tdigraph {\n");
        setTextF(dot + "}");
        setObjJson(obj)
        console.log(textF)
        setTextIn(obj)
        */
      });
      var nodos=reader.result.split("\n")
      nodos = nodos.slice(1,nodos.length -1) // entrga los valores del array desde el 1 hasta el large menos 1
      var newNodos= nodos.map(str => str.split(":")[1])
      newNodos = newNodos.slice(0,newNodos.length - 1);
      newNodos = newNodos.map(str => str.split("],["));
      newNodos = newNodos.map(arr => arr.map(str => str.replace(/\[|\]|'|"|\r/g, '').trim() ));
      var dot = newNodos.map(array => array.slice(0,array.length + 1).reduce((accumulator, currentValue) => accumulator +"\n\t" +array[0][0]+ "->" + currentValue[0]+";"));
      dot = dot.map(array => array.slice(4,array.length));
      const dot2 = "digraph {\n"+ dot.join("\n") + "\n}";
      setTextIn(dot2)
    };
    reader.readAsText(file);
  };

  if (Object.keys(textIn).length === 0){
    return (
      <div>
        <form>
          <input type="file" onChange={handleFileInput} />
        </form>
        <h1 > inserta g </h1>
      </div>
    );

  }
  else{

    return (
      <div>
        <form>
          <input type="file" onChange={handleFileInput} />
        </form>
        <Graphviz dot={textIn} options={{ width: 200, height: 200 }} />
      </div>
    );
  }

};

export default InputText;
