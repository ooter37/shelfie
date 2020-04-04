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
      selected: [],
      hideAdd: false,
      hideEdit: true
    }
    this.getInventory = this.getInventory.bind(this)
    this.setSelected = this.setSelected.bind(this)
    this.showAddHideEdit = this.showAddHideEdit.bind(this)
  }

  showAddHideEdit() {
    this.setState({
        hideAdd: false,
        hideEdit: true
    })
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


  setSelected(product) {
    this.setState({
      selected: product,
      hideAdd: true,
      hideEdit: false
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
          hideAdd={this.state.hideAdd}
          hideEdit={this.state.hideEdit}
          showAddHideEdit={this.state.showAddHideEdit}
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


