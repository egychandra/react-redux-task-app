import React, { Component } from 'react'

class TaskSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  // Fungsi untuk menangkap inputan dari user. biasanya fungsi onChange selalu menggunakan parameter event
  _handleChange = event => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    this.setState({ // Maka ubah/isi name yang ada pada inputan dengan value yang diinputkan oleh user
      [name]: value
    });
  }

  // Fungsi untuk melakukan pencarian berdasarkan kata kunci
  _handleSearch = () => {
    // console.log(this.state);
    this.props.propsHandleSearchDariTaskControl(this.state.keyword);  // Mengirimkan argument berupa state keyword melalui TaskControl > App
  }

  render() {

    const { keyword } = this.state;

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            name="keyword"
            type="text"
            className="form-control"
            placeholder="Masukkan kata kunci..."
            value={keyword}
            onChange={this._handleChange}
          ></input>
          <span className="input-group-btn">
            <button 
              className="btn btn-primary" 
              type="button"
              onClick={this._handleSearch}
            >
              <span className="fa fa-search mr-5"></span>Cari
            </button>
          </span>
        </div>
      </div>
    )
  }
}

export default TaskSearch;
