import React from 'react'

let CpuGuessOptions = ['Rock', 'Paper', 'Scissors']
let guess = CpuGuessOptions[Math.floor(Math.random() * CpuGuessOptions.length)]

const CpuGuess = () => {
  return <div>{guess}</div>
}

export default CpuGuess
