import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',  // State untuk menampung data id
      name: '',  // State untuk menampung data name
      status: false  // State untuk menampung data status
    }
  }

  componentWillMount() {  // Ketika tombol sunting diklik method ini langsung dijalankan.
    // console.log('componentWillMount');
    const { propsHandleEditFormDariApp } = this.props;
    if(propsHandleEditFormDariApp) {  // Jika propsHandleEditFormDariApp ada value
      this.setState({  // Maka ubah state
        id: propsHandleEditFormDariApp.id,
        name: propsHandleEditFormDariApp.name,
        status: propsHandleEditFormDariApp.status
      });
      // console.log(this.state);
    }
  }

  componentWillReceiveProps(nextProps) {  //fungsi ini akan dieksekusi bila state yang ada di component akan diupdate atau diubah dengan nilai props yang baru. jadi ketika klik tombol sunting maka semua data yang akan diedit akan tampil di form edit
    // console.log(nextProps);
    if(nextProps && nextProps.propsHandleEditFormDariApp) {  // Jika nextProps dan nextProps.propsHandleEditFormDariApp (form memperbarui pekerjaan) ada value
      this.setState({ // True maka ubah state dengan semua data yang baru
        id: nextProps.propsHandleEditFormDariApp.id,
        name: nextProps.propsHandleEditFormDariApp.name,
        status: nextProps.propsHandleEditFormDariApp.status
      });
    }else if(!nextProps.propsHandleEditFormDariApp) {  // Jika tidak nextProps.propsHandleEditFormDariApp (form tambahkan pekerjaan)
      this.setState({  //  False maka ubah state berdasarkan data default
        id: '',
        name: '',
        status: false
      });
    }
  }

  // Fungsi untuk menutup form dengan props yang diambil dari <App />
  _handleCloseForm = () => {
    this.props.propsCloseFormdariApp();
  }

  _handleChange = event => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    if(name === 'status') {  // Jika name sama dengan status
      value = target.value === 'true' ? true : false;  // Maka ubah variabel value dengan pengkondisian yang mengembalikan nilai boolean. 
    }
    this.setState({  // setiap name yang ada pada inputan akan diisi value yang diinputkan oleh user. 
      [name]: value
    });
  }

  // Fungsi untuk menyimpan form dengan menerima props dari App dan mengembalikan argument berupa this.state yang berisi data name, status ke App.
  _handleSubmit = event => {
    event.preventDefault();
    this.props.onAddTask(this.state);
    // this.props.propsHandleSubmitDariApp(this.state);
    // Gunakan fungsi clear dan close ketika tombol submit diklik.
    this._handleClear();
    this._handleCloseForm();
  }

  // Fungsi untuk membersihkan inputan pada form ketika tombol batal diklik.
  _handleClear = () => {
    this.setState({
      name: '',
      status: false
    })
  }

  render () {
    const { id } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {/* Jika id tidak sama dengan kosong/empty benar/true tampilkan Memperbarui Pekerjaan salah/false tampilkan Tambahkan Pekerjaan */}
            { id !== '' ? 'Memperbarui Pekerjaan' : 'Tambahkan Pekerjan' }
            <span 
              className="fa fa-times-circle text-right"
              onClick={ this._handleCloseForm }
            >
            </span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={ this._handleSubmit }>
            <div className="form-group">
              <label>Nama:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={ this.state.name }
                onChange={ this._handleChange }
              />
            </div>
            <label>Status:</label>
            <select
              className="form-control"
              name="status"
              value={ this.state.status }
              onChange={ this._handleChange }
            >
              <option value={true}>Aktif</option>
              <option value={false}>Tidak Aktif</option>
            </select><br/>
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span className="fa fa-check mr-5"></span>Simpan
              </button>&nbsp;
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={this._handleClear}
              >
                <span className="fa fa-close mr-5"></span>Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: task => {
      dispatch(actions.addTask(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
