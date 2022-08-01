import React from "react";
import "./Task.css";
class Task extends React.Component{
    state = {

    }
    render(){
        const {task} = this.props;
        return <div style={{ background: "red"}}> 
        {task.id} - 
        {task.title} - 
        {task.description} - 
        {task.done} 
        <input type="checkbox"></input>
        <button>x</button>
        </div>
    }
}
export default Task;