import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pie.topping}</td>
      <td>{props.pie.size}</td>
      <td>{props.pie.vegetarian.toString()}</td>
      <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
