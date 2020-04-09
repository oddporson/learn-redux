const loggedReducer = (state = false, action) => {
  switch(action.type){
    case 'SIGN_IN':
      return !state; // true. the opposite of false.
    default: 
      return state;
  }
};

export default loggedReducer;
