import React, { useState } from 'react'

const Selection = () => {

const [userguess, setUserguess] = useState([""])

const handleChange = (event) => {
  setUserguess(event.target.value)
}

const resetRadioState = () => {
  setUserguess('');
}
  return (
    <div data-cy="user_guess" >
      <input type="radio" value="Rock" name="userGuess"  checked={userguess === 'rock'}
          onChange={handleChange}/> Rock 
      <input type="radio" value="Paper" name="userGuess" checked={userguess === 'paper'}
          onChange={handleChange} /> Paper
      <input type="radio" value="Scissors" name="userGuess" checked={userguess === 'scissors'}
          onChange={handleChange} /> Scissors
          
      <h1>{userguess}</h1>
      <div>
        <button
          type="reset"
          size="large"
          onClick={resetRadioState}
        /> Reset 
      </div>
    </div>

  )
}
export default Selection
