import "./Home.css";
import Graphviz from 'graphviz-react';
const Home = () => {
    const dot = `
    digraph simple_graph {
      A -> B;
      B -> C;
    }
  `;
    return (
      <div className="hero">
        <h1 className="hero-title">Optimiza tus Máquinas de Estados Finitos con Facilidad</h1>
        <h2 className="hero-subtitle">Nuestra herramienta única analiza y optimiza tus máquinas de estados para maximizar la eficiencia</h2>
        <div className="graph">
            <Graphviz dot={dot} />
        </div>
      </div>
    );
}
export default Home;
