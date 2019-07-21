import ToDoInput from './ToDoInput.js';
import ToDoLists from './ToDoLists.js';
import React, { Component } from 'react';

class ToDos extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
     
    return(<div>
      <ToDoInput />
      <ToDoLists todos={this.props.todos}/>
        </div>
    );
  }
}
export default (ToDos)

//A function which takes a component and returns a component is called a HOC(Higher Order Component)