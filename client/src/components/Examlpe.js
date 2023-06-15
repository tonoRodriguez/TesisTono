import "./Home.css";
import Graphviz from 'graphviz-react';
const Examples = () => {
    const dot = `
    digraph simple_graph {
      A -> B;
      B -> C;
    }
  `;
    return (
      <div className="hero">
        <h1 className="hero-title">Examples here</h1>
        <h2 className="hero-subtitle">Nuestra herramienta</h2>
      </div>
    );
}
export default Examples;