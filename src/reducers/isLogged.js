const loggedReducer = (state = false, action) => {
  switch(action.type){
    case 'SIGN_IN':
      return !state; // true. the opposite of false.
  }
};

export default loggedReducer;
