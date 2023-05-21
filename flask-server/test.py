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
def obtainNodosMealy(json_object):
    nodos = []
    for key in json_object:
        x=json_object[key].split("],[")
        nodos=nodos + [State(x[0][1],[x[1],x[2]],x[0][3:5],x[0][6:8])]
    return nodos

def obtainNodosMoore(json_object):
    nodos = []
    for key in json_object:
        x=json_object[key].split("],[")
        nodos=nodos + [State(x[0][1] + x[0][9:11],[x[1],x[2]],x[0][3:5],x[0][6:9])]
    return nodos

"""
separation for mealy and moore
"""

# Separate in groups according to the outputs
def SeparateGroupesMealy(nodes):
    for i in range(len(nodes)):
        if nodes[i].NextState[0][4]=="1":
            nodes[i].grupo="1"
        else:
            nodes[i].grupo="0"
        if nodes[i].NextState[1][4]=="1":
            nodes[i].grupo=nodes[i].grupo + "1"
        else:
            nodes[i].grupo=nodes[i].grupo + "0"
        
    return
def SeparateGroupesMoore(nodes):
    for i in range(len(nodes)):
        if nodes[i].Actual[2]=="1":
            nodes[i].grupo="1"
        else:
            nodes[i].grupo="0"
    return
"""
separation for mealy and moore
"""
#Optimize the nodes
def CompararMealy(nodo1,nodo2,nodos):
        #Obtain NextNodes
    Nodo1_NS1=getnodMealy(nodo1.NextState[0][0],nodos)
    Nodo1_NS2=getnodMealy(nodo1.NextState[1][0],nodos)
    Nodo2_NS1=getnodMealy(nodo2.NextState[0][0],nodos)
    Nodo2_NS2=getnodMealy(nodo2.NextState[1][0],nodos)
        # conditions
    Iguales1y2=nodo1.Iguales[getNumMealy(nodo1, nodo2)][2]=="T"
    Iguales_NextState1=nodo1.NextState[0]==nodo2.NextState[0]
    Iguales_NextState2=nodo1.NextState[1]==nodo2.NextState[1]
    Grupos_diferentes=nodo1.grupo!=nodo2.grupo
    NextState1_Grupos_diferentes= Nodo1_NS1.grupo != Nodo2_NS1.grupo
    NextState2_Grupos_diferentes= Nodo1_NS2.grupo != Nodo2_NS2.grupo
         #Loop answers desde aca no creo que este bien
    LoopNode1S1=LoopNMoore(nodo1,nodos)

    LoopNode1S2=LoopNMoore(nodo2,nodos)

    #Loop answer.2
    #Basic veryfing answer
    
    if Iguales1y2:
        return True
    elif Iguales_NextState1 and Iguales_NextState2:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual + "," + "T"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual + "," + "T"]
        return True
    elif Grupos_diferentes:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual + "," + "F"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual + "," + "F"]
        return False
    elif NextState1_Grupos_diferentes or NextState2_Grupos_diferentes:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual + "," + "F"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual + "," + "F"]
        return False
    elif LoopNode1S1 and LoopNode1S2:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual + "," + "T"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual + "," + "T"]
        return True

    elif Iguales_NextState1 and CompararMealy(Nodo1_NS2,Nodo2_NS2,nodos):
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual + "," + "T"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual + "," + "T"]
        return True
    elif Iguales_NextState2 and CompararMealy(Nodo1_NS1,Nodo2_NS1,nodos):
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual + "," + "T"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual + "," + "T"]
        return True
    elif CompararMealy(Nodo1_NS2,Nodo2_NS2,nodos) and CompararMealy(Nodo1_NS1,Nodo2_NS1,nodos):
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual + "," + "T"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual + "," + "T"]
        return True
    else:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual + "," + "F"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual + "," + "F"]
        return False
    return   
    
    
    return

def CompararMoore(nodo1,nodo2,nodos):
    #Obtain NextNodes
    Nodo1_NS1=getnodMoore(nodo1.NextState[0][0],nodos)
    Nodo1_NS2=getnodMoore(nodo1.NextState[1][0],nodos)
    Nodo2_NS1=getnodMoore(nodo2.NextState[0][0],nodos)
    Nodo2_NS2=getnodMoore(nodo2.NextState[1][0],nodos)
    # conditions
    Iguales1y2=nodo1.Iguales[getNumMoore(nodo1, nodo2)][2]=="T"
    Iguales_NextState1=nodo1.NextState[0]==nodo2.NextState[0]
    Iguales_NextState2=nodo1.NextState[1]==nodo2.NextState[1]
    Grupos_diferentes=nodo1.grupo!=nodo2.grupo
    NextState1_Grupos_diferentes= Nodo1_NS1.grupo != Nodo2_NS1.grupo
    NextState2_Grupos_diferentes= Nodo1_NS2.grupo != Nodo2_NS2.grupo
    
        #Loop answers desde aca no creo que este bien
    LoopNode1S1=LoopNMoore(nodo1,nodos)

    LoopNode1S2=LoopNMoore(nodo2,nodos)

    #Loop answer.2
    #Basic veryfing answer
    
    if Iguales1y2:
        return True
    elif Iguales_NextState1 and Iguales_NextState2:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "T"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "T"]
        return True
    elif Grupos_diferentes:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "F"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "F"]
        return False
    elif NextState1_Grupos_diferentes or NextState2_Grupos_diferentes:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "F"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "F"]
        return False
    elif LoopNode1S1 and LoopNode1S2:
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "T"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "T"]
        return True

    elif Iguales_NextState1 and CompararMoore(Nodo1_NS2,Nodo2_NS2,nodos):
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "T"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "T"]
        return True
    elif Iguales_NextState2 and CompararMoore(Nodo1_NS1,Nodo2_NS1,nodos):
        nodo1.Iguales=nodo1.Iguales + [nodo2.Actual[0] + "," + "T"]
        nodo2.Iguales=nodo2.Iguales + [nodo1.Actual[0] + "," + "T"]
        return True
    elif CompararMoore(Nodo1_NS2,Nodo2_NS2,nodos) and CompararMoore(Nodo1_NS1,Nodo2_NS1,nodos):
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

#it returns the number of equal nodes

def getNumMoore(nodo1,nodo2):
    l=0
    for i in range(len(nodo1.Iguales)):
        if nodo1.Iguales[i][0]==nodo2.Actual[0]:
            l=i
    return l

def getNumMealy(nodo1,nodo2):
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

def LoopNMealy(nodo1,nodos):
    bol1= False
    bol2= False
    Nodo1_NS1=nodo1
    n1=0;
    n2=0;
    numer=False;
    for i in range(1,len(nodos)):
        Nodo1_NS1=getnodMoore(Nodo1_NS1.NextState[1][0],nodos)
        if nodo1.Actual==Nodo1_NS1.NextState[1][0]:
            bol1=True
            n1=i
    Nodo1_NS2=nodo1
    for i in range(1,len(nodos)):
        Nodo1_NS2 =getnodMoore(Nodo1_NS2.NextState[0][0],nodos)
        if nodo1.Actual==Nodo1_NS2.NextState[0][0]:
            bol2=True
            n2=i
    if n1==n2:
        numer=True
    return bol1 and bol2 and numer


# Para optimizar el grafo puedo ver todos los que son iguales y juntarlos en una lista
def buscarHomologo(Actual,newNodes):
    for i in newNodes:
        if Actual in i:
            return i
      
# Creates the extra nodes for condensing
def createNewMachineMoore(nodes):
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
            newNodes = newNodes + [node.Actual[0] + lol + node.Actual[2]]
            node.newNode = node.Actual[0] + lol
    return newNodes,encontrados

def createNewMachineMealy(nodes):
    newNodes = []
    encontrados=[]
    for node in nodes:
        iguales = set(node.Iguales)
        lol = ""
        if node.Actual in encontrados:
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
            node.newNode = node.Actual + lol
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
            if node.Actual[0] + node.Actual[2] in homologados:
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
        
# eliminar palindromos

# def OptNode(Iguales,Nodes):
#     for i in range(len(Iguales)):
#         for j in range(1+ i,len(Iguales)):
#             print(Iguales[i][0], Iguales[j])
#             if Iguales[i][0] in Iguales[j]:
#                 Iguales.remove(Iguales[j])
#     for i in Iguales:
#         print("jajaj")
#     return

#transform in vhdl Code 


def DefineEqualNodesMealy(nodos):
    for i in range(len(nodos)-1):
        for j in range(1 + i,len(nodos)):
            CompararMealy(nodos[i],nodos[j],nodos)
    return

def DefineEqualNodesMoore(nodos):
    for i in range(len(nodos)-1):
        for j in range(1 + i,len(nodos)):
            CompararMoore(nodos[i],nodos[j],nodos)
    return

"""
Tests
x1= obtainNodosMealy(f1_json)
SeparateGroupesMealy(x1)
DefineEqualNodesMealy(x1)
a,b=createNewMachine(x1)
l=specifyNodes(x1,a)
x2= obtainNodosMoore(f2_json)
SeparateGroupesMoore(x2)
DefineEqualNodesMoore(x2)
"""
