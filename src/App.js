import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Order from './components/Order'

class App extends Component {
  state = {
    orders: []
  }

  addOrder = (order) => {
    fetch('/orders', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(newOrder => {
      this.setState({
        orders: this.state.orders.concat(newOrder)
      }, () => console.log(this.state))

    })
  }

  render() {
    const orders = this.state.orders.map( (order, idx) => {
      return <Order key={idx} {...order} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={ require('./images/logo.png') } className="App-logo" alt="logo" />
        </header>

        <Form addOrder={this.addOrder} />

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            { orders }
          </div>
        </div>
      </div>
    )
  }
}

export default App
