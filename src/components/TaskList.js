import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1 // All: -1, Aktif: 0, Tidak Aktif: 1
    }
  }

  _handleChange =  event => {
    const target = event.target;
    const name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.propsHandleChangeDariApp(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    )
    this.setState({
      [name]: value
    })
  }

  render() {
    // console.log(this.props.tasks);
    const { filterName, filterStatus } = this.state;
    // const { propsTasksDariApp } = this.props; // const propsTasksDariApp = this.props.propsTasksDariApp;
    const { tasks } = this.props;  // const tasks = this.props.tasks
    // const elmTasks = propsTasksDariApp.map((task, index) => {
    const elmTasks = tasks.map((task, index) => {
      return <TaskItem 
                key={task.id} 
                index={index} 
                propsTasksDariTaskList={task}
                propsUpdateStatusDariTaskList={this.props.propsUpdateStatusDariApp}
                propsHandleDeleteDariTaskList={this.props.propsHandleDeleteDariApp}
                propsHandleEditDariTaskList={this.props.propsHandleEditDariApp}
              />
    });

    return (
      <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Nama</th>
            <th className="text-center">Status</th>
            <th className="text-center">Aksi</th>
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
                value={filterName}
                onChange={this._handleChange}
              />
            </td>
            <td>
              <select 
                className="form-control"
                name="filterStatus"
                value={filterStatus}
                onChange={this._handleChange}
              >
                <option value={-1}>Semua</option>
                <option value={0}>Aktif</option>
                <option value={1}>Tidak Aktif</option>
              </select>
            </td>
            <td></td>
          </tr>
          { elmTasks }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, null)(TaskList);
