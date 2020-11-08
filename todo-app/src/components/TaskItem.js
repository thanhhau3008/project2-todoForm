import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    var{task, index} = this.props;
    return (
      <tr>
        <td>{index +1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <p className={task.status === true ? 'text-success' : 'text-danger'}>{task.status===true?'Active':'Hide'}</p>
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
