import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    return (
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
    );
  }
}
export default TaskItem;
