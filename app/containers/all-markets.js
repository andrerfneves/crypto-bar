// @flow

import { connect } from 'react-redux';
import AllMarketsView from '../views/all-markets';
// import { addTodo } from '../actions/add-todo';
// import { deleteTodo } from '../actions/delete-todo';
// import { toggleEdit } from '../actions/toggle-edit-todo';
// import { updateTodo } from '../actions/update-todo';
// import { cancelUpdateTodo } from '../actions/cancel-update-todo';
// import type { AppState } from '../types/app-state';
// import type { Dispatch } from '../types/redux';

// const mapStateToProps = (state: AppState) => ({
//   todos: state.todos,
// });

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   addTodo: text => dispatch(addTodo(text)),
//   deleteTodo: id => dispatch(deleteTodo(id)),
//   toggleEdit: id => dispatch(toggleEdit(id)),
//   updateTodo: (id, text) => dispatch(updateTodo(id, text)),
//   cancelUpdateTodo: id => dispatch(cancelUpdateTodo(id)),
// });

export default connect(null, null,
  // mapStateToProps,
  // mapDispatchToProps,
)(AllMarketsView);
