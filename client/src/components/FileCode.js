import { useState ,useEffect} from "react";
import InputText from "./InputText";
import OutputText from "./OutputText";
import "./FileCode.css";
const FileCode = () => {
  const [texto, setTexto] = useState([]);
  const [content, setContent] = useState([]); // Estado para almacenar el contenido

  useEffect(() => {
    if (Object.keys(texto).length > 0) {
      // Actualiza el estado de 'content'
      const newContent = Object.entries(JSON.parse(texto)[1]).map(([key, value]) => (
        <li key={key}>
          {key}: {value},{' '}
        </li>
      ));
      setContent(newContent);
    }
  }, [texto]); 

  return (
    <div className="screen">
      <div className="subscreenLeft">
        <h1>Maquina FSM</h1>
        <InputText 
          setTexto={setTexto}
          texto={texto}
        />
        <h3>Functions</h3>
        <ul>{content}</ul> {/* Ahora 'content' es parte del estado y se actualizará correctamente */}
      </div>
      <div className="subscreenRight">
        <h1>Nodo Optimizado</h1>
        <OutputText texto={texto}/>
      </div>
    </div>
  );
};

export default FileCode;