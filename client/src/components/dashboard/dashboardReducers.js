import Immutable from 'immutable';
import {
  API_TEST,
  API_ERROR,
  GET_CLASSES,
} from './dashboardActions';

const initialState = Immutable.fromJS({
  message: 'Hello World',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case API_TEST: {
      return state.setIn(['message'], Immutable.fromJS(action.message));
    }
    case API_ERROR: {
      return state.setIn(['error'], Immutable.fromJS(action.payload));
    }
    case GET_CLASSES: {
      return state.setIn(['classes'], Immutable.fromJS(action.payload));
    }
    default: {
      return state
    }
  }
}