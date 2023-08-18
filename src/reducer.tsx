const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1 };
    case 'Decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;
