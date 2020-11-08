import React, { Component } from "react";

class TaskForm extends Component {
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Add Todo
            <i
              className="fas fa-window-close ml-5"
              onClick={this.onCloseForm}
            ></i>
          </h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Name: </label>
              <input type="text" className="form-control" name="name" />
            </div>
            <label>Status</label>
            <select className="form-control mb-3" name="status">
              <option value={true}>Active</option>
              <option value={false}>Hiden</option>
            </select>
            <div className="text-center">
              <button type="submit" className="btn btn-warning mr-3">
                <i className="fas fa-save"></i>Save
              </button>
              <button type="submit" className="btn btn-warning">
                <i className="fas fa-save"></i>Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default TaskForm;
