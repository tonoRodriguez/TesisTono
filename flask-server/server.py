from flask import Flask, request
import FinalData as ts
import json
from flask_cors import CORS
import QMC as qm
from flask import jsonify

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

@app.route('/data', methods=['POST'])

def insert_data():
  global dat 
  if request.method == 'POST':
    data = json.loads(request.get_json())
    func={}
    for keys in data[1]:
      f = qm.QuineMcCluskey(data[1][keys],[]).split(" = ")
      func[keys]=f[1]

    q=ts.obtainNodos(data[0])
    ts.SeparateGroupes(q)
    ts.DefineEqualNode(q)
    a,b=ts.createNewMachine(q)
    l=ts.SpNodes(q,a)
    sets = {}
    for i in l:
      sets[i[0]] =  i[1]
   # dat={l: str(l)}
    dat = sets
    dat = [sets,func]

    #Aca tengo que aplicar QM- metod
  
    #
  # Do something with the data, such as inserting it into a database
    #q= ts.obtainNodosMoore(newData)
    #ts.SeparateGroupesMoore(q)
    #ts.DefineEqualNodesMoore(q)
    #a,b= ts.createNewMachineMoore (q)
    #l=ts.specifyNodes(q,a)
    #for i in l:
    #  dat[i.Actual]=i.NextState
    #print(dat)
    return jsonify({'fo': 'br', 'baz': 123})
  else :
    return "error"
if __name__ == '__main__':
  app.run(debug=True)
