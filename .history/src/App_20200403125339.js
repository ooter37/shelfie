import React from 'react';
import './reset.css'
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
  }
  componentDidMount() {
    axios.get('/api/inventory').then(res => {

    }).catch(err => console.log(err))
    console.log(this.state.inventory)
  }
  render() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Dashboard 
      inventory={this.state.inventory}
      />
    </div>
  );
  }
}


