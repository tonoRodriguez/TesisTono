# -*- coding: utf-8 -*-
"""
Created on Wed Feb 15 21:30:50 2023

@author: Antonio
"""

#include json library
import json
from StateClass import State


"""
Tests
f1=open("4Nodes_Mealy.json","r")
f2=open("4Nodes_Moore.json","r")

f1_json = json.load(f1)
f2_json = json.load(f2)
"""


"""
separation for mealy and moore
"""

#Create the nodes list for Mealy and Moore machines
def obtainNodos(json_object):
    nodos = []
    for key in json_object:
        x=json_object[key].split("],[")
        nodos=nodos + [State(x[0][1],x[1:],x[0][3])]
    return nodos

"""
separation for mealy and moore
"""

# Separate in groups according to the outputs
def SeparateGroupes(nodes):
    for i in range(len(nodes)):
        if nodes[i].Outputs=="1":
            nodes[i].grupo="1"
        else:
            nodes[i].grupo="0"
    return
"""
separation for mealy and moore
"""
#Optimize the nodes
def CompararNodos(nodo1,nodo2,nodos):
    #cuntity of next states
# compares the length -------------------------------------------------------------------
    size = len(nodo1.NextState) == len(nodo2.NextState)
#Obtain NextNodes me faltan los extras ------------------------------------------------------
    Nodo1_NS=[]
    Nodo2_NS=[]
    for i in range(len(nodo1.NextState)):
        Nodo1_NS=Nodo1_NS + [getnodMoore(nodo1.NextState[i][0],nodos)]
        Nodo2_NS=Nodo2_NS + [getnodMoore(nodo2.NextState[i][0],nodos)]
#Conditions to test -----------------------------------------------------------------------------
#Is it in the description of the class = iguales??
    Iguales1y2=nodo1.Iguales[getNum(nodo1, nodo2)][2]=="T"
    Iguales_NextState=[]
    for i in range(len(nodo1.NextState)):
        Iguales_NextState=Iguales_NextState+ [nodo1.NextState[i]==nodo2.NextState[i]]
    
# Are them in the same group??
    Grupos_diferentes=nodo1.grupo!=nodo2.grupo
    
#Do the groups of the next states are the same??
    NextState_Grupos=[]
    for i in range(len(nodo1.NextState)):
        NextState_Grupos= NextState_Grupos +[Nodo1_NS[i].grupo == Nodo2_NS[i].grupo]
    
 #Loop answers desde aca no creo que este bien
    LoopNode1S1=LoopNMoore(nodo1,nodos)

    LoopNode1S2=LoopNMoore(nodo2,nodos)

    #Loop answer.2
    #Basic veryfing answer
    
    #cheque que todos sean TRUE
    if (False in Iguales_NextState) == False:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "T"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "T"]
        return True
    
    if Iguales1y2:
        return True
    
    elif Grupos_diferentes:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "F"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "F"]
        return False
    elif False in NextState_Grupos:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "F"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "F"]
        return False
    elif LoopNode1S1 and LoopNode1S2:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "T"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "T"]
        return True
# iguales next state 1
    elif False in Iguales_NextState:
        a=findFalseIndex()
        c=0
        for i in range(len(a)):
            if CompararNodos(Nodo1_NS[i],Nodo2_NS[i],nodos):
                c=c+1
        if c==len(a):
            nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "T"]
            nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "T"]
            return True   
    else:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "F"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "F"]
        return False
    return

"""
aLL THE FUNCTIONS that are used in the comparator are put in here
"""
#auxiliar functions

def findFalseIndex(falses):
    indexes=[]
    for i in range(len(falses)):
        if falses[i]==False:
            indexes= indexes + [i]
    return indexes
#it returns the number of equal nodes


def getNum(nodo1,nodo2):
    l=0
    for i in range(len(nodo1.Iguales)):
        if nodo1.Iguales[i][0]==nodo2.Actual:
            l=i
    return l




#it returns the node

def getnodMoore(name,lista):
    for n in range(len(lista)):
        if name==lista[n].Actual[0]:
            return lista[n]
        
        
def getnodMealy(name,lista):
    for n in range(len(lista)):
        if name==lista[n].Actual:
            return lista[n]

#It checks that the loop of nodes is not ok?????????????
def LoopNMoore(nodo1,nodos):
    bol1= False
    bol2= False
    Nodo1_NS1=nodo1
    n1=0;
    n2=0;
    numer=False;
    for i in range(1,len(nodos)):
        Nodo1_NS1=getnodMoore(Nodo1_NS1.NextState[1][0],nodos)
        if nodo1.Actual[0]==Nodo1_NS1.NextState[1][0]:
            bol1=True
            n1=i
    Nodo1_NS2=nodo1
    for i in range(1,len(nodos)):
        Nodo1_NS2 =getnodMoore(Nodo1_NS2.NextState[0][0],nodos)
        if nodo1.Actual[0]==Nodo1_NS2.NextState[0][0]:
            bol2=True
            n2=i
    if n1==n2:
        numer=True
    return bol1 and bol2 and numer
1

# Para optimizar el grafo puedo ver todos los que son iguales y juntarlos en una lista
def buscarHomologo(Actual,newNodes):
    for i in newNodes:
        if Actual in i:
            return i
      
# Creates the extra nodes for condensing
def createNewMachine(nodes):
    newNodes = []
    encontrados=[]
    for node in nodes:
        iguales = set(node.Iguales)
        lol = ""
        if node.Actual[0] in encontrados:
            print(buscarHomologo(node.Actual[0], newNodes))
            node.newNode = buscarHomologo(node.Actual[0], newNodes)
        else:
            for j in iguales:
                if j[2]=="T":
                    lol = lol + j[0]
                    encontrados= encontrados + [j[0]]
                elif j[2]=="F":
                    print("weno")
            newNodes = newNodes + [node.Actual + lol]
            node.newNode = node.Actual[0] + lol
    return newNodes,encontrados

def specifyNodes(nodes,newNodes):
    Fnodes=[]
    homologados = []
    for node in nodes:
        print(homologados)
        if node.newNode == "":
            NodeN = node
            state=NodeN.NextState
            if buscarHomologo(node.NextState[0][0],newNodes) !="":
                state[0] = buscarHomologo(node.NextState[0][0],newNodes) + node.NextState[0][1:]
            if buscarHomologo(node.NextState[1][0],newNodes) !="":
                state[1] = buscarHomologo(node.NextState[1][0],newNodes) + node.NextState[1][1:]
            NodeN.NextState= state
            Fnodes = Fnodes + [NodeN]
        else:
            NodeN = node
            state=NodeN.NextState
            if node.Actual in homologados:
                print(node.Actual)
            else:
                NodeN = node
                NodeN.Actual = buscarHomologo(node.Actual[0],newNodes)
                homologados = homologados +[NodeN.Actual[1:]]
                if buscarHomologo(node.NextState[0][0],newNodes) !="":
                    state[0] = buscarHomologo(node.NextState[0][0],newNodes) + node.NextState[0][1:]
                if buscarHomologo(node.NextState[1][0],newNodes) !="":
                    state[1] = buscarHomologo(node.NextState[1][0],newNodes) + node.NextState[1][1:]
                NodeN.NextState= state
                Fnodes = Fnodes + [NodeN]
                
    return Fnodes
        #if node.
        
def DefineEqualNode(nodos):
    for i in range(len(nodos)-1):
        for j in range(1 + i,len(nodos)):
            CompararNodos(nodos[i],nodos[j],nodos)
    return