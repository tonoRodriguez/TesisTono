# -*- coding: utf-8 -*-
"""
Created on Fri Feb 17 06:13:50 2023

@author: Antonio
"""

class State:
  def __init__(self, Actual,NextState, Outputs): 
    self.Actual=Actual
    self.NextState= NextState
    self.Outputs= Outputs
    self.grupo=""
    self.Iguales=["321"]
    self.newNode=""