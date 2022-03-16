import React from 'react'
import Selection from './Selection'
import CpuGuess from './CpuGuess'
import Game from './Game'

const App = () => {

  const guessB = CpuGuess()

  return (
    <div data-cy="header"> <h1> Rock Paper Scissors </h1> 
    <div data-cy="user"><h3> Please enter your guess:</h3></div>
    <Selection />
    <h3> The computer guess is: </h3>
    <CpuGuess />
    <h3> The winner is: </h3>
    
    {guessB}
    <Game />
    </div>

  )
}
export default App


