import Graphviz from 'graphviz-react';
import React, { useState, useEffect } from "react";

const InputText = ({ texto, setTexto }) => {
  const [textIn, setTextIn] = useState("");

  useEffect(() => {
    try {
      if (texto) {
        const grafo = JSON.parse(texto)[0];
        var dot2 = "digraph {\n";
        Object.keys(grafo).forEach(key => {
          var nodo = grafo[key].split("],[");
          var name = nodo[0].split(",")[0];
          name = name.slice(1, name.length);
          if (nodo[0].split(",")[1].replace("]", "") === "1") {
            dot2 = dot2 + "\n\t" + name + '[shape="doublecircle"];';
          }
          nodo = nodo.slice(1, nodo.length);

          for (let i = 0; i < nodo.length; i++) {
            dot2 = dot2 + "\n\t" + name + "->" + nodo[i].split(",")[0] + "\t[label =" + nodo[i].split(",")[1].replace("]", "") + "];";
          }
        });
      setTextIn(dot2 + "\n}");
    }
    } catch (error) {
      console.error("Error al analizar JSON:", error);
      // Manejo adicional de errores, si es necesario
    }
  }, [texto]);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setTexto(reader.result);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <form>
        <input className='button-4' type="file" onChange={handleFileInput} />
      </form>
      <div className='grafoIn'>
        {textIn && <Graphviz dot={textIn} options={{ width: 200, height: 200 }} />}
      </div>
    </div>
  );
};

export default InputText;
