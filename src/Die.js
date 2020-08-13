import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
	  numberWords: {
		  1: "one",
		  2: "two",
		  3: "three",
		  4: "four",
		  5: "five",
		  6: "six"
	  },
	  val: 1
  }
	
  constructor(props){
	  super(props);
	  this.handleClick = this.handleClick.bind(this);
  }	
	
  handleClick(){
	  this.props.handleClick(this.props.idx);
  }  

  render() {
	const {numberWords, locked, val, disabled, rolling} = this.props;
	let classes = `Die fas fa-dice-${numberWords[val]} fa-5x `;
	if(locked) classes += "Die-locked ";
	if(rolling) classes += "Die-rolling"
    return (
      <i
        className={classes}
        onClick={this.handleClick}
		disabled={disabled}
      >
      </i>
    );
  }
}

export default Die;
