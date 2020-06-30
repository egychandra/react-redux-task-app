import React, { Component } from 'react';

class TaskItem extends Component {

  // Fungsi untuk update status dari aktif ke tidak aktif maupun sebaliknya yang menerima props dari TaskList dan mengembalikan argument berupa id ke TasKList yang kemudian dikirim ke App.  
  _handleUpdateStatus = () => {
    this.props.propsUpdateStatusDariTaskList(this.props.propsTasksDariTaskList.id);
  }

  // Fungsi untuk delete task yang menerima props dari TaskList dan mengembalikan argument berupa id ke TasKList yang kemudian dikirim ke App.
  _handleDelete = () => {
    this.props.propsHandleDeleteDariTaskList(this.props.propsTasksDariTaskList.id);
  }

  _handleEdit = () => {
    this.props.propsHandleEditDariTaskList(this.props.propsTasksDariTaskList.id);
  }

  render() {
    const { propsTasksDariTaskList, index } = this.props;  // const task = this.props.task;  // props ini hasil dari tasks.map yang diambil dari <TaskItem /> di component TaskList.js
    return (
      <tr>
        {/* index + 1 supaya array dimulai dari 1 dan seterusnya */}
        <td>{ index + 1 }</td>
        <td>{ propsTasksDariTaskList.name }</td>
        <td className="text-center">
          {/* jika propsTasksDariTaskList.status sama dengan true maka ya/true tampilkan label-danger tidak/false tampilkan label-success */}
          <span 
            className={ propsTasksDariTaskList.status === true ? 'label label-success' : 'label label-danger' }
            onClick={this._handleUpdateStatus}
          >
            {/* jika propsTasksDariTaskList.status sama dengan true maka ya/true tampilkan Tidak Aktif tidak/false tampilkan Aktif */}
            { propsTasksDariTaskList.status === true ? 'Aktif' : 'Tidak Aktif' }
          </span>
        </td>
        <td className="text-center">
          <button 
            type="button" 
            className="btn btn-warning"
            onClick={this._handleEdit}
          >
            <span className="fa fa-pencil mr-5"></span>Sunting
          </button>
          &nbsp;
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={this._handleDelete}
          >
            <span className="fa fa-trash mr-5"></span>Hapus
          </button>
        </td>
      </tr>
    )
  }
}

export default TaskItem;
