// Code ClickityClick Component Here
import React from 'react';
export default class  ClickityClick extends React.Component{

    state={
        hasBeenClicked: false,
        currentTheme: 'blue',
    }
    handleClick =()=>{
    //console.log(1)
    this.setState({
        hasBeenClicked: true
    },
    ()=>console.log(this.state.hasBeenClicked));
    }
    render(){
        return( 
        <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
      )
    }
}