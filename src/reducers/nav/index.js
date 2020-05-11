const name = 'nav';

export const types = {
  SET_CURRENT_SCREEN: `${name}/SET_CURRENT_SCREEN`,
};

const initialState = {
  currentScreen: '',
};

export const selectors = {
  selectCurrentScreen: (state) => state[name].currentScreen,
};

export const actions = {
  // setup globally already; dont call this action in pages
  setCurrentScreen: (currentScreen) => ({
    type: types.SET_CURRENT_SCREEN,
    payload: {currentScreen},
  }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_SCREEN: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
