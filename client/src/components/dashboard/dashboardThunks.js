import axios from 'axios';
import { Map } from 'immutable';

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
  let classMap = new Map();
  students.forEach((student) => {
    student.classes.forEach((cls) => {
      const sum = sumGrades(cls.tests);
      const averageGrade = roundAverage(sum, cls.tests.length);

      console.log('avg: ' + averageGrade);
      if (classMap.has(cls.name)) {
        const studentsInClass = classMap.getIn([cls.name, 'students']);
        studentsInClass.push({ name: student.name, grade: averageGrade });
        classMap = classMap.setIn([cls.name, 'students'], studentsInClass);
      } else {
        classMap = classMap.setIn([cls.name, 'students'], [{ name: student.name, grade: averageGrade }]);
      }
    });
  });

  console.log(classMap);
  return classMap;
}

function apiError(dispatch, error) {
  const errorMessage = error;
  dispatch(dashboardActions.apiError(errorMessage));
}