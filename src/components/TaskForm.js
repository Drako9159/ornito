import React from "react";

class TaskForm extends React.Component{
    state ={
        title: "",
        description: ""
    }
    onChange = (e) => {
        //console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
            
        })

        
    }
    onSubmit = (e) => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }
    render(){
        
        return (<form onSubmit={this.onSubmit}>
            <input type="text"
            name="title"
            placeholder="write a task" 
            onChange={this.onChange} 
            value={this.state.title}>

            </input>
            <br></br>
            <br></br>
            <textarea 
            placeholder="write a description" 
            name="description"
            onChange={this.onChange} 
            value={this.state.description}>
            </textarea>
            
            <button type="submit">Enviar</button>
        </form>)
    }
    
}
export default TaskForm;