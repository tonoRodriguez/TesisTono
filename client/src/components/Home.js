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
        <h1 className="hero-title">DESARROLLO DE TECNICAS DE OPTIMIZACION DE MAQUINAS DE ESTADO FINITO (FSM) PARA SU IMPLEMENTACION BASADA EN UN FPGA</h1>
        <h2 className="hero-subtitle">Memoria de titulo</h2>
        <div className="graph">
            <Graphviz dot={dot} />
        </div>
      </div>
    );
}
export default Home;
