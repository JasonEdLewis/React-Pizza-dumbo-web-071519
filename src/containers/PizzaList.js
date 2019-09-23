import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {


  state ={
    pizzas: []
  }

componentDidMount(){
  fetch('http://localhost:3000/pizzas')
  .then(resp => resp.json())
  .then(data => this.setState({
      pizzas: data}))
}

addEachPizza=()=>{
    return this.state.pizzas.map( pie => <Pizza pie={pie} />)
}

  render() {
    console.log(this.state)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
           this.addEachPizza()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
