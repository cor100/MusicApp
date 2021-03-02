import React from 'react'

function ListItem(props) {
  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}
export default ListItem