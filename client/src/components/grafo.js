import React from 'react';
import Graphviz from 'graphviz-react';

function Graph(dot,setDot) {

  //  const ass=["digraph {\n" ,"\tA -> B;\n","\tA -> C\n","\tC -> H\n","}" ];

  
 // const dot = ass.reduce((total,a)=> {
 //   return total + a;
//});

  if (dot.dot === "digraph {\n"){
    return <h1> Mete algo</h1>

  }
  else {
    return (
      <Graphviz dot={dot.dot+"}"} options={{ width: 200, height: 200 }} />
    );
  }

}

export default Graph;

