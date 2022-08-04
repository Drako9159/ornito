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
        <input type="checkbox"></input>
        <button style={btnDelete}>x</button>
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