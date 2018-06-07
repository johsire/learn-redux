const redux = require('redux');

console.log('Here we go again!! Redux-todo-example!!');

// since we need to pass more than one argument, we can start by saving it to a variable and passing the variable instead thru our reducer func
const stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

const reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
      return state;
  }
  // case 'CHANGE_TEXT':
  // return {
  //   ...state,
  //   newText: action.newText
};

const store = redux.createStore(reducer);

console.log('currentState', store.getState());


// dispatch our action by passing in the action obj.
// Every Actions MUST have 'type' property.
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});
console.log('searchText should print "work"=>>', store.getState());


// store.dispatch({
//   type: 'CHANGE_TEXT',
//   newText: 'Hello Salt Lake City!'
//   });

// console.log('newText should print out!=>> Hello Salt Lake City!)', store.getState());
