import "./Home.css";
const Home = () => {
    return (
      <div>
        <div className="home">
          <div className="home-container">
            <h1 className="home-titleHome">Optimizador de máquinas de estados finito (FSM)</h1>
          </div>
          <div className="home-subcontainer">
            <p className="home-subtitleHome">Memoria para optar al título de ingeniero civil eléctrico <br/> Antonio Rodríguez <br/>  Universidad de Chile</p>

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
