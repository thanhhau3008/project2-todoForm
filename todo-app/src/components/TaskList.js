import React, { Component } from "react";
import TaskItem from './TaskItem'

class TaskList extends Component {
  render() {
    var {tasks}= this.props;
    var elmTasks = tasks.map((task, index)=>{
      return <TaskItem key={task.id} index={index} task={task}/>
    })
    return (
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
              <input type="text" className="form-control" name="filterName" />
            </td>
            <td>
              <select className="form-control" name="filterStatus">
                <option value={0}>Hiden</option>
                <option value={1}>Active</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elmTasks}
        </tbody>
      </table>
    );
  }
}
export default TaskList;
