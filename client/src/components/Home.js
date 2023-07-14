import "./Home.css";
const Home = () => {
    return (
      <div>
        <div className="hero">
          <div className="hero-container">
            <h1 className="hero-titleHome">Optimizador de máquinas de estados finito (fsm)</h1>
          </div>
          <div className="home-subcontainer">
            <p className="hero-subtitleHome">Memoria para optar al titulo de ingeniero civil electrico <br/> Antonio Rodríguez <br/>  Universidad de Chile</p>

          </div>
        </div>
        <div className="subcontaier">
          <div className="TituloOpt">
            <h1 className="tituloOptTx" >Descubre el algoritmo</h1>
          </div>
          <div className="divB">
            <button className="OptButton">Optimizador</button>
          </div>
        </div>

      </div>
    );
}
export default Home;
