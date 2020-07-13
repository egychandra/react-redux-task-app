let initialState = {
  byName: 'status',
  byValue: 1
}

let myReducer = (state = initialState, action) => {
  if(action.type === 'SORT') {
    let { byName, byValue } = action.sort;  // byName = action.sort.byName, byValue = action.sort.byValue
    // let { status } = state; // status = state.status
    return {
      // status: status,  // old state
      // sort: {  // new state
      //   byName: byName,
      //   byValue: byValue
      // }
      byName,
      byValue
    }
  }
  return state;
}

export default myReducer;