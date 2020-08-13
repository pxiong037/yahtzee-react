import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
	const {handleClick, locked, disabled, rolling} = this.props;
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={handleClick}
          val={d}
          locked={locked[idx]}
          idx={idx}
          key={idx} 
		  disabled={disabled}
		  rolling={rolling && !locked[idx]}
		/>
      )}
    </div>
  }
}

export default Dice;