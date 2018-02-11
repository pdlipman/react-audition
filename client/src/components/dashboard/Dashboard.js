import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClassSubject from '../subject/ClassSubject';

import {
  apiTest,
  getStudentData,
} from './dashboardThunks';

const mapStateToProps = state => ({
  message: state.getIn(['dashboard', 'message']),
  error: state.getIn(['dashboard', 'error']),
  classes: state.getIn(['dashboard', 'classes']),
});

const mapDispatchToProps = dispatch => ({
  testAPI: bindActionCreators(apiTest, dispatch),
  getStudents: bindActionCreators(getStudentData, dispatch),
});

class Dashboard extends Component {
  static propTypes = {
    classes: ImmutablePropTypes.map,
    message: PropTypes.string,
    error: PropTypes.string,
    testApi: PropTypes.func,
  };

  static defaultProps = {
    classes: Map(),
  };

  componentWillMount() {
    const {
      testAPI,
      getStudents,
    } = this.props;

    testAPI();
    getStudents();
  }

  renderClasses() {
    const {
      classes,
    } = this.props;
    return classes.map((classSubject, i) => {
      return (
        <ClassSubject
          key={ classSubject.get('id') }
          id={ classSubject.get('id') }
          label={ classSubject.get('label') }
        />
      )
    }).toArray();
  }

  render() {
    const { message } = this.props;
    return (
      <div>
        Dashboard: { message }
        { this.renderClasses() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);