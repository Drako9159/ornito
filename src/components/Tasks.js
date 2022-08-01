import React from "react";
import Task from "./Task";

class Tasks extends React.Component{
    
    render(){
        return this.props.tasks.map((e) => <Task task={e} key={e.id}/>) 
    }
}
export default Tasks