import React from 'react'
import { data } from '../App'


function ChildD() {
  return (
   
        <>
      <data.Consumer>
  {(name) => {
    return (
      <h1>My friend  name is {name}</h1>
    );
  }}
</data.Consumer>
</>
  )
}

export default ChildD
