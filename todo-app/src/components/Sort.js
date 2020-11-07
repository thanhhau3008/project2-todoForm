import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="col-6">
        <select className="form-control" name="filterStatus">
          <option value={0}>Hiden</option>
          <option value={1}>Active</option>
        </select>
      </div>
    );
  }
}
export default Sort;
