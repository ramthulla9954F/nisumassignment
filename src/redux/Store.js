import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddlware from 'redux-thunk';
import { rootReducer } from './reducers/RootReducer';

const bindMiddlware = (middlware) => {
  return applyMiddleware(...middlware);
};

const reducer = (state, action) => {
  if (action.type == HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const initStore = () => {
  const store = createStore(reducer, bindMiddlware([thunkMiddlware]));
  return store;
};

export const wrapper = createWrapper(initStore);