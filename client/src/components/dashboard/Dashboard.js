import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  apiTest,
  getStudentData,
} from './dashboardThunks';

const mapStateToProps = state => ({
  message: state.getIn(['dashboard', 'message']),
  error: state.getIn(['dashboard', 'error']),
});

const mapDispatchToProps = dispatch => ({
  testAPI: bindActionCreators(apiTest, dispatch),
  getStudents: bindActionCreators(getStudentData, dispatch),
});

class Dashboard extends Component {
  static propTypes = {
    message: PropTypes.string,
    error: PropTypes.string,
    testApi: PropTypes.func,
  };

  componentDidMount() {
    const {
      testAPI,
      getStudents,
    } = this.props;

    testAPI();
    getStudents();
  }

  render() {
    const { message } = this.props;
    return (
      <div>
        Dashboard: { message }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);