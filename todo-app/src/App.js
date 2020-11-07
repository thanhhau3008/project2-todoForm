import React, { Component } from "react";
import TaskForm from './components/TaskForm'
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
            <div className="row">
              <div className="col-6">
                <form className=" form-inline mt-2 mb-2 mr-2">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>

              <div className="col-6">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-danger dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item">Action</a>
                    <a className="dropdown-item">Another action</a>
                    <a className="dropdown-item">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item">Separated link</a>
                  </div>
                </div>
              </div>
              <div className="row mt-15">
                <div className="col-12">
                  <table className="table bordered table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Active</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            name="filterName"
                          />
                        </td>
                        <td>
                          <select className="form-control" name="filterStatus">
                            <option value={0}>Hiden</option>
                            <option value={1}>Active</option>
                          </select>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Learnning reactjs</td>
                        <td className="text-center">
                          <span className="label label-danger">active</span>{" "}
                        </td>
                        <td className="text-center">
                          <button type="button" className="btn btn-success mr-3">
                          <i className="fas fa-pencil-alt"></i>
                            Edit
                          </button>
                          <button type="button" className="btn btn-success">
                          <i className="fas fa-trash-alt"></i>
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
