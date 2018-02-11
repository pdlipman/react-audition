import { createSelector } from 'reselect';

const getStudents =  (state, { id }) => {
  return state.getIn(['dashboard', 'classes', id, 'students']);
};

const getSortDetails = (state, { id }) => {
  return state.getIn(['dashboard', 'classes', id, 'sort']);
};

const comparator = (column, isAscending) =>
  (a, b) => {
    const first = a.get(column);
    const second = b.get(column);
    const comparison = isAscending ? 1 : -1;

    if (typeof first === 'string' & typeof second === 'string') {
      return first.toString().localeCompare(second) * comparison;
    }

    return (second - first) * comparison;
  };

export const getSortedStudents = createSelector(
  [getStudents, getSortDetails], (students, sort) => {
    const column = sort.get('column');
    const isAscending = sort.get('isAscending');
    return students
      .toIndexedSeq()
      .sort(comparator(column, isAscending));
  }
)
