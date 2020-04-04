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
      inventory: [],
      selected: null
    }
    this.getInventory = this.getInventory.bind(this)
    this.setSelected = this.setSelected.bind(this)
    this.updateProduct = this.updateProduct.bind(this)

  }

  componentDidMount() {
    this.getInventory()
  }
  getInventory() {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
      }).catch(err => console.log(err))
  }

  updateProduct(id) {
    axios.put(`/api/update/${id}`, {
        name: this.state.name,
        price: this.state.price,
        image: this.state.img
    }).then (res => {
        this.props.getInventory()
    })
}
  setSelected(edit) {
    this.setState({
      selected: edit
    })
  }

  render() {
  return (
    <div className="App">
      <Header/>
      <div className='dashboard-and-form'>
        <Form
          getInventory={this.getInventory}
          selected={this.state.selected}
          updateProduct={this.updateProduct}
          />
        <Dashboard 
        inventory={this.state.inventory}
        getInventory={this.getInventory}
        setSelected={this.setSelected}
        />
      </div>
    </div>
  );
  }
}


