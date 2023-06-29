# -*- coding: utf-8 -*-
"""
Created on Sun Jun  4 18:37:54 2023

@author: Antonio
"""

import json
from StateClassN import State


#Create the nodes list for Mealy and Moore machines
def obtainNodos(json_object):
    nodos = []
    for key in json_object:
        x=json_object[key].split("],[")
        nodos=nodos + [State(x[0][1],x[1:],x[0][3])]
    return nodos


#Separete the groups and redefine Next State
def SeparateGroupes(nodes):
    for nodo in nodes:
        
        if nodo.Outputs=="1":
            nodo.grupo="1"
        else:
            nodo.grupo="0"
        NextS = []
        for NS in nodo.NextState:
            sp = NS.replace("]","").split(",")
            NextS = NextS + [(getnodMoore(sp[0],nodes),sp[1])]
        nodo.NextState = NextS
    return

# comparador de nodos



def CompararNodos(nodo1,nodo2,nodos):
    # compares the length -------------------------------------------------------------------
    size = len(nodo1.NextState) == len(nodo2.NextState)
#Conditions to test -----------------------------------------------------------------------------
#Is it in the description of the class = iguales??
    Iguales1y2=nodo1.Iguales[getNum(nodo1, nodo2)][2]=="T"
    
    
# Are them in the same group??
    Grupos_diferentes=nodo1.grupo!=nodo2.grupo
    if not size:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "F"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "F"]
        return False
        
    if Iguales1y2:
        return True
    if nodo1.NextState == nodo2.NextState:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "T"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "T"]
        return True
    elif Grupos_diferentes:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "F"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "F"]
        return False
    return
def buscarHomologo(Actual,newNodes):
    for i in newNodes:
        if Actual in i:
            return i
#creo que este tmbnn esta bien
# Creates the extra nodes for condensing
#newNodes me da los nodos nuevos y se usa para hacer la nueva maquina
def createNewMachine(nodes):
    newNodes = []
    encontrados=[]
    for node in nodes:
        iguales = set(node.Iguales)
        lol = ""
        if node.Actual[0] in encontrados:
            node.newNode = buscarHomologo(node.Actual, newNodes)
        else:
            for j in iguales:
                if j[2]=="T":
                    lol = lol + j[0]
                    encontrados= encontrados + [j[0]]
                elif j[2]=="F":
                    continue
            newNodes = newNodes + [node.Actual + lol]
            node.newNode = node.Actual[0] + lol
    return newNodes,encontrados


#este tengo que arreglar



def getNum(nodo1,nodo2):
    l=0
    for i in range(len(nodo1.Iguales)):
        if nodo1.Iguales[i][0]==nodo2.Actual:
            l=i
    return l

def getnodMoore(name,lista):
    for n in range(len(lista)):
        if name==lista[n].Actual[0]:
            return lista[n]
#funciona perfecto
def DefineEqualNode(nodos):
    for i in range(len(nodos)-1):
        for j in range(1 + i,len(nodos)):
            CompararNodos(nodos[i],nodos[j],nodos)
    return

"""
Tests
f5 = open("vendingmachine.json","r")
f5_json = json.load(f5)
x1= obtainNodos(f5_json)
SeparateGroupes(x1)
DefineEqualNode(x1)
a,b=createNewMachine(x1)
l=specifyNodes(x1,a)
"""
#Aca creo la nueva maquina es como specify nodes
def SpNodes(nodes,a):
    res=[]
    done=[]
    for i in range(len(nodes)):
        estadosSig=[]
        EstadoActual = ""
        if nodes[i].Actual not in done:
            if nodes[i].Actual in a:
                EstadoActual = nodes[i].Actual + "," + nodes[i].Outputs
            else:
                EstadoActual = buscarHomologo(nodes[i].Actual,a) +"," +nodes[i].Outputs
            for estado in nodes[i].NextState:
                if estado[0].Actual not in a:
                    estadosSig=estadosSig + [(buscarHomologo(estado[0].Actual,a),estado[1])]
                else:
                    estadosSig = estadosSig +[(estado[0].Actual ,estado[1]) ]
            res = res + [(EstadoActual,estadosSig)]
            done = done + list(EstadoActual[0])
    return res,done
            
            
            
                
            
        