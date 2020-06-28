import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';

class App extends Component {

  constructor(props) {  // Inisialisasi komponen React.
    super(props);  // Mengeksekusi konstruktor dari induk class, yakni React.Component.
    this.state = {  // Mendeklarasikan suatu objek.
      tasks: [], //  berisi id: unique, name, status yang diambil dari _handleGenerateData.
      isDisplayForm: false,  // state untuk display form tambah pekerjaan dengan value awal false.
    }
  }

  componentWillMount() {  // Component lifecycle method di ReactJS. componentWillMount() adalah phase mounting, tahap sebelum component dirender.
    if(localStorage && localStorage.getItem('tasks')) {  // getItem() untuk mendapatkan value dari localStorage dalam hal ini adalah 'tasks'.
      let tasks = JSON.parse(localStorage.getItem('tasks'));  // JSON.parse() untuk mengubah string JSON menjadi javascript object.
      this.setState({
        tasks: tasks
      });
    }
  }

  _handleGenerateData = () => {
    let tasks = [
      {
        id: this.generateID(),
        name: 'Bapuk 1',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Bapuk 2',
        status: false
      },
      {
        id: this.generateID(),
        name: 'Bapuk 3',
        status: true
      }
    ];
    this.setState({  // Method untuk mengubah state.
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));  // untuk menset localStorage, terdapat 2 parameter keyName dan valueName. JSON.stringify() untuk mengubah javascript object menjadi string JSON.
  }

  s4 () { // Fungsi untuk membuat unique id, setiap s4 berisi 4 karakter baik integer maupun number.
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID () { // Fungsi untuk generate unique id.
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  // Fungsi untuk membuka dan menutup form pada tombol tambah pekerjaan. 
  _handleToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  }

  // Fungsi untuk menutup form dan dikirim ke TaskForm sebagai props.
  _handleCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }

  // Fungsi untuk menyimpan form dan dikirim ke TaskForm sebagai props, fungsi ini menerima data yang ditampung dalam parameter yang didapat dari argument berupa this.state yang ada di TaskForm. 
  _handleSubmit = data => {
    const { tasks } = this.state;  // const tasks = this.state.tasks 
    data.id = this.generateID();  // menambahkan id ke dalam data.
    tasks.push(data);  // tasks akan diisi oleh data(id, name, status) sesuai yang diinputkan oleh user.
    this.setState({  // Lalu ubah state nya menggunakan setState.
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Fungsi untuk update status dari aktif ke tidak aktif atau sebaliknya.
  _handleUpdateStatus = (id) => {  // id yang berasal dari TaskItem yang dikirim ke TaskList lalu ditampung disini.
    // console.log(id);
    const { tasks } = this.state;  // const tasks = this.state.tasks
    const index = this.findIndex(id); // buat variable index yang diisi dengan fungsi findIndex(id) dengan parameter id.
    // console.log(index);
    if(index !== -1) {  // Jika index tidak sama dengan -1.
      tasks[index].status = !tasks[index].status; // Maka tasks[index].status = tidak tasks[index].status 
      this.setState({  // // Lalu ubah state nya menggunakan setState.
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Simpan ke localStorage.
    }
  }

  // Fungsi untuk menemukan index.
  findIndex = (id) => {
    const { tasks } = this.state;  // const tasks = this.state.tasks
    let result = -1;  // buat variable result yang diisi dengan value -1.
    tasks.forEach((task, index) => {  // forEach() looping method yang tidak menghasilkan array baru. // tasks kita looping dengan 2 parameter value = task dan index.
      if(task.id === id) {  // Jika task.id sama dengan id.
        // console.log(index);
        // return index;
        result = index; // Maka ubah variable result dengan index dari tasks.
      }
    });
    return result;
  }

  _handleDelete = (id) => { // id yang berasal dari TaskItem yang dikirim ke TaskList lalu ditampung disini.
    const { tasks } = this.state;  // const tasks = this.state.tasks
    const index = this.findIndex(id); // buat variable index yang diisi dengan fungsi findIndex(id) dengan parameter id.
    if(index !== -1) {  // Jika index tidak sama dengan -1.
      tasks.splice(index, 1); // Array.splice(index, howmany) Menambah / menghapus item ke / dari array, dan mengembalikan item yang dihapus. namun method ini akan mengubah array asal.
      this.setState({  // // Lalu ubah state nya menggunakan setState.
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Simpan ke localStorage.
    }
    this._handleCloseForm();
  }

  render () {
    const { tasks, isDisplayForm } = this.state; // const tasks = this.state.tasks
    const elmTaskForm = isDisplayForm ? <TaskForm propsHandleSubmitDariApp={ this._handleSubmit }  propsCloseFormdariApp={ this._handleCloseForm } /> : '';  // Jika isDisplayForm true maka tampilkan <TaskForm /> jika false tetap pada tampilan awal.
    return (
      <div className="container">
        <div className="text-center">
          <h1>ReactJS CRUD</h1><hr/>
        </div>
        <div className="row">
          <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
            {elmTaskForm}
          </div>
          <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={this._handleToggleForm}
              >
              <span className="fa fa-plus mr-5"></span>Tambah Pekerjaan
            </button>
            <button 
              type="button" 
              className="btn btn-danger ml-5"
              onClick={this._handleGenerateData}
            >
              Generate Data
            </button>
            {/* Search and Sort */}
            <TaskControl />
            {/* List */}
            <TaskList 
              propsTasksDariApp={tasks} 
              propsUpdateStatusDariApp={this._handleUpdateStatus}
              propsHandleDeleteDariApp={this._handleDelete}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
