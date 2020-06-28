import React, { Component } from 'react'

class TaskSearch extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            name="keyboard"
            type="text"
            className="form-control"
            placeholder="Masukkan kata kunci..."
          ></input>
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button">
              <span className="fa fa-search mr-5"></span>Cari
            </button>
          </span>
        </div>
      </div>
    )
  }
}

export default TaskSearch;
