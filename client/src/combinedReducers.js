import { combineReducers } from 'redux-immutable';
import dashboardReducer from './components/dashboard/dashboardReducers';

const combinedReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default combinedReducer;
