import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      // id, name, status
      isDisplayForm: false,
    };
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }

  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: "Learning java",
        status: true,
      },
      {
        id: this.generateID(),
        name: "Learning react",
        status: false,
      },
      {
        id: this.generateID(),
        name: "Learning angular",
        status: true,
      },
    ];
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  generateID() {
    return this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4();
  }
  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
    });
  };
  onCloseForm =()=>{
    this.setState({
      isDisplayForm: false
    })
  }
  render() {
    var { tasks, isDisplayForm } = this.state;
    var elmTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm}/> : "";
    return (
      <div className="container">
        <div className="text-center">
          <h1>Todo Manage</h1>
        </div>
        <div className="row">
          <div className={isDisplayForm ? "col-4" : ""}>{elmTaskForm}</div>
          <div className={isDisplayForm ? "col-8" : "col-12"}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              Add Todo
            </button>
            <button
              type="button"
              className="btn btn-primary ml-2 "
              onClick={this.onGenerateData}
            >
              Generate Data
            </button>

            {/* -----control---- */}
            <Control />
            {/* --------------------- */}

            <div className="row mt-15">
              <div className="col-12">
                {/* ----table----- */}
                <TaskList tasks={tasks} />
                {/* --------------------- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
