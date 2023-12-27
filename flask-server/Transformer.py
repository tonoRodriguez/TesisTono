# -*- coding: utf-8 -*-
"""
Created on Sun Dec 24 17:23:10 2023

@author: Antonio
"""

class Node:

    def __init__(self,name,nextstate,output):

        self.name = name

        self.nextstate=nextstate

        self.output=output

"""
Code = [{'A,0': [('BC', 'zu'), ('BC', 'uz'), ('A', 'zz')],'BC,1': [('A', 'zz')]},
        {'uz': '', 'zu': "A'B + AB'", 'zz': 'A'}]
"""

def CreationFile(A):
    lista = []
    for key, value in A[0].items():
        lista = lista + [Node(key[0],value, key[1])]
    
    name = "module fsm (\n"
    
    inputs= "uz,zu,uz"
    
    IOdeclaration= "\n\toutput reg gnt,\n\t" + f'input clk, rst_n,{inputs} );'
    
    size = len(bin(len(lista)))-3 #aca va mi codigo no se que hace lista
    
    estados = ""
    
    hamming=["0000","0001","0011","0010","0110","0111","0101","0100","1100"]
    
    end = ",\n\t\t\t\t"
    
    for i in range(len(lista)):
    
        if i== len(lista) - 1:
    
            end = ";\n"
    
        estados += lista[i].name + " = " + str(size) + "'b" + hamming[i] +end
    
       
    
    States= f'\n\tparameter [{size}:0] ' + estados
    
    reg = f'\treg[{size}:0] state, next;\n'
    
     
    
    always1 = f"\talways @(posedge clk or negedge rst_n) \n\t\tif (!rst_n) begin \n\t\t\t state <= {lista[0].name};\n\t\tend else begin \n\t\t\t state <= next;\n\t\tend\n"
    
     
    
    inputs2= "uz or zu or zz"
    
    always2=f"\talways @(state or {inputs}) begin\n"
    
    case="\t\tcase (state)\n"
    
     
    
    for i in range(len(lista)):
    
        if lista[i].output==1 and i == 0:
    
            case+= f"\t\t\t{lista[i].name} : begin\n" + "\t\t\t\t gnt = 1'b1;\n"
        elif  lista[i].output==1 and i != 0:
            case+= f"\t\t\t\tend\n\t\t\tend\n\t\t\t{lista[i].name} : begin\n" + "\t\t\t\tgnt = 1'b1;\n"
    
        elif lista[i].output==0 and i == 0 :
    
            case+= f"\t\t\t{lista[i].name} : begin\n" + "\t\t\t\tgnt = 1'b0;\n"
        else:
            case+= f"\t\t\t\tend\n\t\t\tend\n\t\t\t{lista[i].name} : begin\n" + "\t\t\t\tgnt = 1'b0;\n"
    
        for j in range(len(lista[i].nextstate)):
    
            if j == 0:
    
                case+= f"\t\t\t\t if ({lista[i].nextstate[j][1]}) begin \n\t\t\t\t\tnext = {lista[i].nextstate[j][0]};\n"
    
            else:
    
                case+=f"\t\t\t\tend else if ({lista[i].nextstate[j][1]}) begin \n\t\t\t\t\tnext = {lista[i].nextstate[j][0]};\n"
    
    File = name + IOdeclaration +States + reg + always1 + always2 + case + "\t\t\t\tend \n\t\t\tend \n\t\tendcase\n\tend\nendmodule"
    return File