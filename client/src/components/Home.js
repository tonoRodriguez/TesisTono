import "./Home.css";
const Home = () => {
    return (
      <div>
        <div className="hero">
          <h1 className="hero-titleHome">Optimizador de máquinas de estados finito (fsm)</h1>
          <div className="hero-subcontainer">
            <h2 className="hero-subtitleHome">Memoria para optar al titulo de ingeniero civil electrico</h2>
            <h2 className="hero-subtitleHome">Antonio Rodríguez</h2>
            <h2 className="hero-subtitleHome">Universidad de Chile</h2>

          </div>
        </div>
        <div className="subcontaier">
          <div className="TituloOpt">
            <h1 className="tituloOptTx" >Descubre el algoritmo</h1>
          </div>
          <button className="OptButton">Optimizaor</button>
        </div>

      </div>
    );
}
export default Home;
