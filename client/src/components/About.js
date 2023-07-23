import "./About.css";
import diagramaFlujo from './imgs/diagramaFlujo.png';
import diagramaMDS from './imgs/diagramaMDS.png';
const About = () => {

    return (
      <div>
        <div className="about">
          <div className="about-title-div">
            <h1 className="about-title">Software optimizador y compilador de máquinas de estado finito (FSM)</h1>
          </div>
          <div className="about-subtitle-div">
          <h2 className="about-subtitle">Esta herramienta utiliza diagramas estados mnemotécnicos <br/>  documentados (MDS) para especificar máquinas <br/> de estados finitos (FSM). Analiza la máquina, <br/> la optimiza y la compila a SystemVerilog.</h2>
          </div>
        </div>
        <div className="subcontainerAbout">
          <div className="subcontainerAbout-title">
            <h1>Diagrama mnemotécnico documentado y máquina FSM</h1>
          </div>
          <div className="tutorial-text">
            <h2>Instrucciones:</h2>
              <p>1. Escribir el Diagrama de Flujo como se muestra en el primer cuadrado
                <br/> 2.  Escribir el Diagrama usando Diagramas mnemotécnicos como se muestra en el segundo cuadrado
                <br/>3. Utilizar la version escrita del diagramo mnemotécnico como se muestra en el tercer cuadrado</p>
            </div>
          <div className="tutorial">
            <div className="FSM">
              <h2>Diagrama de Flujo</h2>
              <img src={diagramaFlujo} alt="diagrama de Flujo" />
            </div>
            <div className="MDS">
              <h2>Diagrama MDS</h2>
              <img src={diagramaMDS} alt="diagrama MDS" />
            </div>
            <div className="Def">
              <h2>Definición de nodos</h2>
              <p><code>&#123; <br/> "1" : "[A,0],[B,f1],[A,f2]", <br/> "2" : "[B,0]" <br/>&#125;</code></p>

            </div>

          </div>
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