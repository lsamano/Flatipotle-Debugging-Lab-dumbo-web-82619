import React, { Component } from 'react'
import ProteinForm from './ProteinForm'
import FillingForm from './FillingForm'
import ToppingForm from './ToppingForm'
import SideForm from './SideForm'

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: []
}

class Form extends Component {
  state = {
    protein: [],
    fillings: [],
    toppings: [],
    sides: []
  }

  handleSubmit = (event) => {
    event.preventDefault()
    document.getElementById("order-form").reset()
    this.props.addOrder(this.state)

    this.setState({
      protein: [],
      fillings: [],
      toppings: [],
      sides: []
    })
  }

  handleChange = (event) => {
    const itemType = event.target.name
    const item = event.target.value
    
    !this.state[`${itemType}`].includes(item) ?
    this.setState({
      [itemType]: this.state[`${itemType}`].concat(item)
    })
    :
    this.setState({
      [itemType]: this.state[`${itemType}`].filter(
        ingr => ingr !== item
        )
    })
      
  }

  render() {
    return(
      <div className="ui raised container segment">
        <h1 className="ui block header">Order Form</h1>
        <form className="ui form" id="order-form" onSubmit={ this.handleSubmit }>
          <ProteinForm
            protein={ this.state.protein }
            handleChange={ this.handleChange }
          />

          <FillingForm
            fillings={ this.state.fillings }
            handleChange={ this.handleChange }
          />

          <ToppingForm
            toppings={ this.state.toppings }
            handleChange={ this.handleChange }
          />

          <SideForm
            sides={ this.state.sides }
            handleChange={ this.handleChange }
          />

          <br />

          <button className="ui blue big button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
