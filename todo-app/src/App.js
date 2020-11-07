import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from './components/TaskList'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Todo Manage</h1>
        </div>
        <div className="row">
          <div className="col-4">
            <TaskForm />
          </div>
          <div className="col-8">
            <button type="button" className="btn btn-primary">
              Add Todo
            </button>
          
            {/* -----control---- */}
              <Control />
            {/* --------------------- */}
              
              <div className="row mt-15">
                <div className="col-12">
                {/* ----table----- */}
                <TaskList />
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
