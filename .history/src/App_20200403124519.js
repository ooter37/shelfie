import React from 'react';
import './reset.css'
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
  }
  componentDidMount() {
    Axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res
      })
    })
  }
  render() {
    console.log(this.state.inventory)
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


