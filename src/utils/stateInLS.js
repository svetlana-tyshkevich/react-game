const stateInLS = (state, setState) => {
  if (!localStorage.getItem('character')) {
    Object.keys(state).forEach((item) => {
      localStorage.setItem(item, JSON.stringify(state[item]));
    });
  } else {
    Object.keys(state).forEach((item) => {
      setState({ [item]: JSON.parse(localStorage.getItem(item)) });
    });
  }
};

export default stateInLS;
