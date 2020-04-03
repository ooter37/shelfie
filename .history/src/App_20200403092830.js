import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Dashboard>
        <Product/>
      </Dashboard>
    </div>
  );
}

export default App;
