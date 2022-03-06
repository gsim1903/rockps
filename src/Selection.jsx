import React, { Component } from "react";


class Selection  extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
      this.onChangeValue = this.onChangeValue.bind(this);
    }
  
    onChangeValue(event) {
      console.log(event.target.value);
    }
  
    render() {
      return (
        <div data-cy="user_guess"
         onChange={this.onChangeValue}>
          <input type="radio" value="Rock"name="userGuess" /> Rock
          <input type="radio" value="Paper" name="userGuess" /> Paper
          <input type="radio" value="Scissors" name="userGuess" /> Scissors 
        </div>
      );
    }
  }
  

export default Selection