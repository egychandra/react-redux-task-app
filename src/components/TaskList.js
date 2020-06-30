import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {

    const { propsTasksDariApp } = this.props; // const tasks = this.props.tasks;
    const elmTasks = propsTasksDariApp.map((task, index) => {
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
              />
            </td>
            <td>
              <select 
                className="form-control"
                name="filterStatus"
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

export default TaskList;
