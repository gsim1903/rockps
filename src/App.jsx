import React from 'react'
import Selection from './Selection'

const App = () => {

  
  return (
    <div data-cy="header"> <h1> Rock Paper Scissors </h1> 
    <div data-cy="user"><h3> Please enter your guess:</h3></div>
    
    <Selection />
    <h3> The computer guess is: </h3>
    </div>
  

  )
}
export default App

