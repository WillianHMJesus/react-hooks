export const Actions = {
  ADD_COUNTER: 'ADD_COUNTER',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD_COUNTER:
      return { ...state, counter: state.counter + 1 };
    default:
      return { ...state };
  }
};