import "./About.css";
const About = () => {

    return (
      <div>
        <div className="about">
          <h1 className="hero-title">Software optimizador y compilador de maquinas de estado finito (FSM)</h1>
          <h2 className="hero-subtitle">Esta herramienta utiliza diagramas estados mnemotecnicos documentados (MDS) para especificar maquinas de estados finitos (FSM). Analiza la máquina, la optimiza y la compila a system verilog.</h2>
        </div>
        <div className="subcontainerAbout">
          <h1>Diagrama mnemotecnico documentado y máquina FSM</h1>
          <h2>Maquina FSM</h2>
          <h2>Diagrama MDS, escritura</h2>
        </div>
        <div className="subcontaier">
          <h1>Etapas del optimizador</h1>
          <div className="subC">
            <div className ="Cuadrados">
            <p>ingresar odigo</p>
            </div>
            <div className ="Cuadrados">
            <p>ingresar odigo</p>
            </div>
            <div className ="Cuadrados">
            <p>ingresar odigo</p>
            </div>
            <div className ="Cuadrados">
            <p>ingresar odigo</p>
            </div>
          </div>

        </div>
      </div>
    );
}
export default About;