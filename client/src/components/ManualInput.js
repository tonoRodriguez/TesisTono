import EnterNode from "./EnterNode";
const ManualInput = ()=> {

    return (
      <div className="screen">
        <div className="subscreenLeft">
          <EnterNode/>
        </div>
          <div className="subscreenRight">
            <h1>Optimizer</h1>
            <div className="grafoIn"></div>
            <h3>Funciones</h3>

          </div>

        </div>
    );
  }
  export default ManualInput;