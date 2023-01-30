

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'AddCounter':
      return { ...state, counter: state.counter + 1 };
    default:
      return { ...state };
  }
}