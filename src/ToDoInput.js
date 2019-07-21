import React, { Component } from 'react';
import {store} from './index.js'
class ToDoInput extends Component{
  constructor(props){
    super(props)
    this.state={text:''}
  }
  change=(event)=>{
    this.setState({text:event.target.value})
  }
  render(){
    return(<div>
      <input type="text" value={this.state.text} onChange={this.change} placeholder="Enter text here"></input>
      <button onClick={()=>{
        console.log(this.state.text)
        store.dispatch({type:"ADD_TO_LIST",payload:this.state.text})
        this.setState({text:''})
        }}>Add To List</button>
    </div>
    );
  }
}
export default ToDoInput;
