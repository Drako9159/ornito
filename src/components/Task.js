import React from "react";
import "./Task.css";
import PropTypes from "prop-types";

class Task extends React.Component{
    state = {

    }
    styleCompleted(){
        return {
            fontSize: "20px",
            color: this.props.task.done ? "gray" : "black",
            //Si su propiedad es true, es color gray, si es false, es black
            textDecoration: this.props.task.done ? "line-through" : "none"
        }
    }
    render(){
        const {task} = this.props;
        return <div style={this.styleCompleted()}> 
        {task.id} - 
        {task.title} - 
        {task.description} - 
        {task.done}
        <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}></input>
        <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
        </div>
    }
}
Task.propTypes = {
    task: PropTypes.object.isRequired
}
const btnDelete = {
    fontSize: "18px",
    background: "green",
    color: "blue",
    border: "none",
    padding: "10px 15px",
    borderRadius: "50%",
    cursor: "pointer",
  //  float: "right"
};

export default Task;