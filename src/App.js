import React, { Component } from "react";
import styled from 'styled-components';

export const Calculadora = styled.div`

  background-color: grey;
  width: 35%;
  margin: 0 auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  border: 4px solid black;

  input{
    padding: 0.5rem;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: black;
  color: white;
  }

  
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

button{
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  border: none;
  background-color: black;
  color: white;
}



`
export const Titulo = styled.h2`

color: black;
  
`


export default class App extends Component{
  state = {

    inp1: '',
    inp2: '',
    resul: ''
    
  }

  soma = () => {
    this.setState({
      resul: this.state.inp1 + this.state.inp2
    })
  }

  subtracao = () => {
    this.setState({
      resul: this.state.inp1 - this.state.inp2
    })
  }

  multiplicacao = () => {
    this.setState({
      resul: this.state.inp1 * this.state.inp2
    })
  }

  divisao = () => {
    this.setState({
      resul: this.state.inp1 / this.state.inp2
    })
  }

  clear = () => {
    this.setState({
      inp1: '',
      inp2: '',
      resul: ''
    })
  }

  input1 = (event) => 
  {this.setState({inp1: Number(event.target.value)})}

  input2 = (event) => 
  {this.setState({inp2: Number(event.target.value)})}



  render(){
    return(
        <Calculadora>
          <Titulo>Calculadora</Titulo>
          <input onChange={this.input1} type="number" value = {this.state.inp1} />
          <input onChange={this.input2} type="number" value = {this.state.inp2} />
          <div>
            <button onClick={this.soma}>+</button>
            <button onClick={this.subtracao}>-</button>
            <button onClick={this.multiplicacao}>*</button>
            <button onClick={this.divisao}>/</button>
            <button onClick={this.clear}>c</button>
          </div>
          <h3>{this.state.resul}</h3>
        </Calculadora>
      
    )
  }
} 
