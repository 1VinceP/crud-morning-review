import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      animals: [],
      newAnimal: '',
      edit: false
    }
  }

  componentDidMount() {
    axios.get( 'http://localhost:3005/api/getAnimals' )
      .then( res => {
        // console.log( res )
        this.setState({
          animals: res.data
        })
      } )
  }

  handleChange( e ) {
    this.setState({
      newAnimal: e.target.value
    })
  }

  addAnimal() {
    let body = {
      animal: this.state.newAnimal
    }

    axios.post( 'http://localhost:3005/api/postAnimals', body )
      .then( res => {
        this.setState({
          animals: res.data
        })
      } )
  }

  deleteAnimal( id ) {
    axios.delete( `http://localhost:3005/api/deleteAnimals/${id}` )
      .then( res => {
        this.setState({
          animals: res.data
        })
      } )
  }

  editAnimal( id ) {
    let body = {
      name: 'Vincent'
    }
    axios.put( `http://localhost:3005/api/putAnimals/${id}`, body )
      .then( res => {
        this.setState({
          animals: res.data
        })
      } )
  }
  

  render() {

    let mappedAnimals = this.state.animals.map( ( animal, i ) => {
      return (
        <div key={i}>
          <div onClick={() => this.deleteAnimal(i)}>{animal}</div>
          <button onClick={() => this.editAnimal(i)}>Edit Animal</button>
        </div>
      )
    } )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <input onChange={e => this.handleChange(e)} />
          <button onClick={() => this.addAnimal()}>Add</button>
          {mappedAnimals}
        </div>
      </div>
    );
  }
}

export default App;
