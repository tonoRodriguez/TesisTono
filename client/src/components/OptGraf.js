
const OptGraf = (todos) => {

    const sendGraph = (event) => {
        event.preventDefault();

        const sendFile = todos.todos.map( (x,y)=> {
            return y +":[" +x.Node +"],[" + x.Node0 + "],["+ x.Node1 +"]";
        });
        console.log(sendFile);
        const response = fetch('http://localhost:5000/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendFile, null, 2),
          });
    };
    const CreateGraph = (event) => {
        event.preventDefault();
        console.log("here i create the graph")
        const response = fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <form onSubmit={sendGraph}>
                <button className="button-add" type="submit">Optimizar</button>
            </form>
            <form onSubmit = {CreateGraph}>
            <button className="button-add" type="submit">See new graph</button>
            </form>
        </div>
    )

};

export default OptGraf;