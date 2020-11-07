import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
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
    );
  }
}
export default Search;
