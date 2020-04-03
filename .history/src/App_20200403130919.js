import React from 'react';
import axios from 'axios';
import './reset.css'
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
  }
  componentDidMount() {
    axios.get('/api/inventory').then(res => {
    this.setState({
      inventory: res.data.product
    })
    }).catch(err => console.log(err))
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


