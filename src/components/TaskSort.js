import React, { Component } from 'react'

class TaskSort extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sortByName: 'name',
  //     sortByValue: 1
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  // }

  _handleSort = (sortByName, sortByValue) => {
    // console.log(sortByName, '-', sortByValue);
    // console.log(sortByName);
    // console.log(sortByValue);
    // this.setState({
    //   sortByName: sortByName,
    //   sortByValue: sortByValue
    // });
    // console.log(this.state);
    this.props.propsHandleSortDariTaskControl(sortByName, sortByValue);
  }

  render() {

    // const { sortByName, sortByValue } = this.state;

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Urutkan <span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {/* Buat event listener onClick dengan arrow function yang berisi argument 'name' dan 1 yang sama dengan state yang ada di App */}
            <li onClick={() => this._handleSort('name', 1)}>
              <a 
                href 
                role="button" 
                // className={(sortByName === 'name' && sortByValue === 1) ? 'sort_selected' : ''}
                // JIKA sortByName sama dengan 'name' dan sortByValue sama dengan 1, maka className='sort_selected' ini untuk memunculkan icon ceklis
                className={(this.props.sortByName === 'name' && this.props.sortByValue === 1) ? 'sort_selected' : ''}
              >
                <span className="fa fa-sort-alpha-asc pr-5">
                  Nama A-Z
                </span>
              </a>
            </li>
            {/* Buat event listener onClick dengan arrow function yang berisi argument 'name' dan -1 yang sama dengan state yang ada di App */}
            <li onClick={() => this._handleSort('name', -1)}>
              <a 
                href 
                role="button"
                // className={(sortByName === 'name' && sortByValue === -1) ? 'sort_selected' : ''}
                // JIKA sortByName sama dengan 'name' dan sortByValue sama dengan -1, maka className='sort_selected' ini untuk memunculkan icon ceklis
                className={(this.props.sortByName === 'name' && this.props.sortByValue === -1) ? 'sort_selected' : ''}
              >
                <span className="fa fa-sort-alpha-desc pr-5">
                  Nama Z-A
                </span>
              </a>
            </li>
            <li role="separator" className="divider"></li>
            {/* Buat event listener onClick dengan arrow function yang berisi argument 'status' dan 1 yang sama dengan state yang ada di App */}
            <li onClick={() => this._handleSort('status', 1)}>
              <a 
                href 
                role="button"
                // className={(sortByName === 'status' && sortByValue === 1) ? 'sort_selected' : ''}
                // JIKA sortByName sama dengan 'status' dan sortByValue sama dengan 1, maka className='sort_selected' ini untuk memunculkan icon ceklis
                className={(this.props.sortByName === 'status' && this.props.sortByValue === 1) ? 'sort_selected' : ''}
              >
                Status Aktif
              </a>
            </li>
            {/* Buat event listener onClick dengan arrow function yang berisi argument 'status' dan -1 yang sama dengan state yang ada di App */}
            <li onClick={() => this._handleSort('status', -1)}>
              <a 
                href 
                role="button"
                // className={(sortByName === 'status' && sortByValue === -1) ? 'sort_selected' : ''}
                // JIKA sortByName sama dengan 'status' dan sortByValue sama dengan -1, maka className='sort_selected' ini untuk memunculkan icon ceklis
                className={(this.props.sortByName === 'status' && this.props.sortByValue === -1) ? 'sort_selected' : ''}
              >
                Status Tidak Aktif
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TaskSort;
