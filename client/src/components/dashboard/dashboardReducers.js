import Immutable from 'immutable';
import {
  API_TEST,
  API_ERROR,
  GET_CLASSES,
  SET_SORT_DETAILS,
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
    case SET_SORT_DETAILS: {
      const column = action.column;
      const isAscending = action.isAscending;
      return state.setIn(['classes', action.subject, 'sort'], Immutable.fromJS({ column, isAscending }));
    }
    default: {
      return state
    }
  }
}