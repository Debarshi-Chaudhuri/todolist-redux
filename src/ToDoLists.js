import ToDoItem from './ToDoItem.js';
import React, { Component } from 'react';
import { connect } from "react-redux";
const mapStateToProps=(state)=>{
  return{
    todos:state.todos
  }
}

class ToDoLists extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(<div>{
                    this.props.todos.map((element,index)=>
                          <ToDoItem element={element} index={index}/>)
          
           }
        </div>
       )
  }
}
export default connect(mapStateToProps,null)(ToDoLists)
