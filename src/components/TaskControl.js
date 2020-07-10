import React, { Component } from 'react';
import TaskSearch from './TaskSearch';
import TaskSort from './TaskSort';

class TaskControl extends Component {

  render () {
    return (
      <div className="row mt-15">
        {/* Search */}
        <TaskSearch propsHandleSearchDariTaskControl={this.props.propsHandleSearchDariApp} />
        {/* Sort */}
        <TaskSort 
          propsHandleSortDariTaskControl={this.props.prospHandleSortDariApp} 
          propsSortByNameDariTaskList={this.props.propsSortByNameDariApp}
          propsSortByValueDariTaskList={this.props.propsSortByValueDariApp}
        />
      </div>
    )
  }
}

export default TaskControl;