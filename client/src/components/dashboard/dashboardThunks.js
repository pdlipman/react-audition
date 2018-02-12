import axios from 'axios';
import Immutable from 'immutable';

import * as dashboardActions from './dashboardActions';

export function apiTest() {
  return dispatch => axios
    .get('/api/hello')
    .then(response => dispatch(dashboardActions.apiTest(response.data.message)))
    .catch(error => apiError(dispatch, error.response));
}

export function getStudentData() {
  return dispatch => axios
    .get('/api/students')
    .then((response) => {
      const classes = classesFromStudentsParser(response.data);
      dispatch(dashboardActions.getClasses(classes));
    })
    .catch(error => apiError(dispatch, error.response));
}

function sumGrades(arr) {
  return arr.reduce((sum, currentValue) => sum + currentValue.grade, 0);
}

function roundAverage(number, length) {
  return Math.round(number / length);
}

function classesFromStudentsParser(students) {
  let classMap = new Immutable.Map();
  students.forEach((student) => {
    student.classes.forEach((cls) => {
      const className = cls.name;
      const tests = cls.tests;
      const sum = sumGrades(tests);
      const averageGrade = roundAverage(sum, tests.length);
      if (classMap.has(className)) {
        const studentsInClass = classMap.getIn([className, 'students']);
        studentsInClass.push({ name: student.name, grade: `${averageGrade}%` });
        classMap = classMap.setIn([className, 'students'], studentsInClass);
        // classMap = classMap.updateIn([className, 'students'], list => list.push({ name: student.name, grade: averageGrade }));
      } else {
        classMap = classMap
          .setIn([className, 'label'], className)
          .setIn([className, 'id'], className)
          .setIn([className, 'sort'], Immutable.fromJS({column: 'name', isAscending: true}))
          .setIn([className, 'students'], [{ name: student.name, grade: `${averageGrade}%` }]);
      }
    });
  });

  return classMap.map((cls) => {
    const studentsInClass = cls.get('students');
    return cls.set('students', Immutable.fromJS(studentsInClass));
  });
}

function apiError(dispatch, error) {
  const errorMessage = error;
  dispatch(dashboardActions.apiError(errorMessage));
}