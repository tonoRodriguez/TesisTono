from flask import Flask, request, send_file
import FinalData as ts
import json
from flask_cors import CORS
import QMC as qm
from flask import jsonify
import io
import Transformer as Tr

app = Flask(__name__)
CORS(app)
dat ={}
@app.route('/')
def index():
  return 'Welcome to my Flask server!'

@app.route('/GetData',methods=['GET'])
def get_data():
  global dat
  
  return jsonify(dat)

@app.route('/GetFile',methods=['GET'])
def get_file():
  global dat
  print(dat)
      # Asumiendo que dat es una cadena que quieres enviar en un archivo .txt
  text_content = Tr.CreationFile(dat)

    # Crear un objeto de archivo en memoria
    # Crear un objeto BytesIO para enviar como archivo
  bytes_io = io.BytesIO(text_content.encode('utf-8'))

  # Enviar el archivo como respuesta
  return send_file(
      bytes_io, 
      mimetype='text/plain', 
      as_attachment=True, 
      download_name='texto.txt'
  )

@app.route('/data', methods=['POST'])

def insert_data():
  global dat 
  if request.method == 'POST':
    print(type(request.get_json()))
    if type(request.get_json()) == str:
      data = json.loads(request.get_json())
    else:
      data = request.get_json()
    func={}
    if len(dat) !=1 or dat[1] != None:
      for keys in data[1]:
        f = qm.QuineMcCluskey(data[1][keys],[]).split(" = ")
        func[keys]=f[1]

    q=ts.obtainNodos(data[0])
    ts.SeparateGroupes(q)
    ts.DefineEqualNode(q)
    a,b=ts.createNewMachine(q)
    l=ts.SpNodes(q,a)
    sets = {}
    for i in range(len(l[0])):
      sets[l[0][i][0]]=l[0][i][1]

    dat = [sets,func]

    return jsonify({'fo': 'br', 'baz': 123})
  else :
    return "error"
if __name__ == '__main__':
  app.run(debug=True)
