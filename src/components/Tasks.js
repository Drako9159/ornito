import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

class Tasks extends React.Component{
    render(){
        return this.props.tasks.map((e) => 
        <Task task={e} 
        key={e.id} 
        deleteTask={this.props.deleteTask}
        checkDone={this.props.checkDone}
        />) 
    }
}
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}
export default Tasks