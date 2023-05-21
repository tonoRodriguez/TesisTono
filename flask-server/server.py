from flask import Flask, request
import test as ts
import json
from flask_cors import CORS
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
  data = {'foo': 'bar', 'baz': 123}
  return jsonify(dat)

@app.route('/data', methods=['POST'])

def insert_data():
  global dat 

 # a= {
  #  "1" : "[A,Ea,SnC,1],[B,1],[D,0]",
   # "2" : "[B,Ea,SnC,0],[C,1],[A,0]",
    #"3" : "[C,Ea,SnC,1],[D,1],[B,0]",
   # "4" : "[D,Ea,SnC,0],[A,1],[C,0]"
   # }

  #print(a)
  #print(obtainNodosMealy(a))
  if request.method == 'POST':
    data = request.get_json()
    data=json.dumps(data)
    newString = data.replace('\\"', '').replace(',,',',')
    newData=json.loads(newString)
  # Do something with the data, such as inserting it into a database
  # ...
   # print(data[0].split("],["))

   # q=ts.obtainNodosMealy(newData)
    #print(q[0].Actual)
    #ts.SeparateGroupesMealy(q)
    #ts.DefineEqualNodesMealy(q)
    #a,b= ts.createNewMachine(q)
    #l=ts.specifyNodes(q,a)

    q= ts.obtainNodosMoore(newData)
    ts.SeparateGroupesMoore(q)
    ts.DefineEqualNodesMoore(q)
    a,b= ts.createNewMachineMoore (q)
    l=ts.specifyNodes(q,a)
    for i in l:
      dat[i.Actual]=i.NextState
    print(dat)
    data2 = {'fo': 'br', 'baz': 123}
    return jsonify(data2)
  else :
    print("entro a get")
    return "error"
if __name__ == '__main__':
  app.run(debug=True)
