//import logo from './logo.svg';
import './App.css';
import React from 'react';
import tasks from "./example/tasks.json";
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';
/* function HelloWordl(props){
  return (
    <div id="hello">
      <h1>{props.subtitle}</h1>
      {props.myText}
    </div>
  )
}*//*
class HelloWordl extends React.Component{
  state = {
    show: true
  }
  toggleShow() {
    this.setState({show: !this.state.show})
  }
  render(){
    if(this.state.show){
      return (
        <div id="hello">
        <h1>{this.props.subtitle}</h1>
        {this.props.myText}
        <button onClick={ this.toggleShow.bind(this) }>Toggle show</button>
        </div>
      )
    } else {
      return <h1>No hay elementos
        <button onClick={ this.toggleShow.bind(this) }>Toggle show</button>
      </h1>
    }
  }
}*/
class App1 extends React.Component{
  state = {
    tasks: tasks
  }
  addTask = (title, description) => {
    console.log(title, description);
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length + 1,
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(e => e.id !== id)
    this.setState({tasks: newTasks})
    console.log(newTasks);
  }
  checkDone = (id) => {
    const newTask = this.state.tasks.map(e => {
      if(e.id === id){
        e.done = !e.done
      }
      return e
  })
  this.setState({tasks: newTask})
  };
  render(){
    return <div>
      <TaskForm addTask={this.addTask}/>
      <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
      <Posts />
    </div>
  }
}
//const App = () => <div> Hello world : <HelloWordl/> </div>
function App() {
  return (
    <div>
      <App1/>
    </div>
    
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
