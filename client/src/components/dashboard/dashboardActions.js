export const API_TEST = 'API_TEST';
export const GET_CLASSES = 'GET_CLASSES';
export const API_ERROR = 'API_ERROR';
export const SET_SORT_DETAILS = 'SET_SORT_DETAILS';

export function apiTest(message) {
  return {
    type: API_TEST,
    message,
  };
}

export function getClasses(payload) {
  return {
    type: GET_CLASSES,
    payload,
  };
}

export function apiError(payload) {
  return {
    type: API_ERROR,
    payload,
  };
}

export function setSortDetails(subject, column, isAscending) {
  return {
    type: SET_SORT_DETAILS,
    subject,
    column,
    isAscending,
  };
}