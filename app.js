// reducer function

function reducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + action.amount;
  } else if (action.type === 'DECREMENT') {
    return state - action.amount;
  } else {
    return state;
  }
}

// A factory function that returns two functions.
// State is a private variable and is initialized as 0.

/*
  Whenever the returned functions are called, the same state variable
  will be modified. Its value will only be accessible to the functions
  inside the factory!

  This way no modifications to state can be made accidentally and only 
  from the dispatch() function.
*/
function createStore(reducer) {
  let state = 0;

  const getState = () => (state);

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  return {
    getState,
    dispatch
  };
}

const store = createStore(reducer);

const incrementAction = {
  type: 'INCREMENT',
  amount: 3
};

store.dispatch(incrementAction);
console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());

const decrementAction = {
  type: 'DECREMENT',
  amount: 4
};

store.dispatch(decrementAction);
console.log(store.getState());