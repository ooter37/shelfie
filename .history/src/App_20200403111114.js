import React from 'react';

import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Carrot from '../media/carrot.png'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inventory: [
        {name: 'carrot', price: 5, img: './media/carrot.png'},
        {name: 'lettuce', price: 7, img: 'carrot pic'},
        {name: 'corn', price: 9, img: 'carrot pic'},
      ]
    }
  }

  render() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Dashboard/>
    </div>
  );
  }
}


