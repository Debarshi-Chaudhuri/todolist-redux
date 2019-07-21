import React, { Component } from 'react';
import {store} from './index.js'
class ToDoItem extends Component{
  render(){
    return(
      <li >{this.props.element}
      <button onClick={()=>{store.dispatch({type:'DELETE',payload:this.props.index})}}>Delete</button>
        </li>
    )
  }
}
export default ToDoItem;
