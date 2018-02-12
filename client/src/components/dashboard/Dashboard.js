import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import ClassSubject from './ClassSubject';

import {
  getStudentData,
} from './dashboardThunks';

const mapStateToProps = state => ({
  error: state.getIn(['dashboard', 'error']),
  classes: state.getIn(['dashboard', 'classes']),
});

const mapDispatchToProps = dispatch => ({
  getStudents: bindActionCreators(getStudentData, dispatch),
});

export class Dashboard extends Component {
  static propTypes = {
    classes: ImmutablePropTypes.map.isRequired,
    error: PropTypes.string,
    getStudents: PropTypes.func.isRequired,
  };

  static defaultProps = {
    classes: Map(),
    error: '',
  };

  componentWillMount() {
    const {
      getStudents,
    } = this.props;

    getStudents();
  }

  renderClasses() {
    const {
      classes,
    } = this.props;
    return classes.map((classSubject) => {
      return (
        <ClassSubject
          key={ classSubject.get('id') }
          id={ classSubject.get('id') }
          label={ classSubject.get('label') }
        />
      )
    }).toArray();
  }

  renderError() {
    const {
      error,
    } = this.props;
    return error && (
      <TextField
        error
        id='error'
        label='Error'
        defaultValue={ error }
        margin='normal'
      />
    );
  }

  render() {
    return (
      <div>
        { this.renderError() }
        { this.renderClasses() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);