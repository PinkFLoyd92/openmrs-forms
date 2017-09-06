function draw(state = true, action) {
  switch (action.type) {
    case 'TOGGLE_DRAW':
      return !state;
    default:
      return state;
  }
}

export { draw };
