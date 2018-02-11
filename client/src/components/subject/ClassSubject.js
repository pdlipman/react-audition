import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  setSortDetails,
} from '../dashboard/dashboardActions';

import {
  getSortedStudents,
} from './classSubjectSelectors';

const mapStateToProps = (state, props) => ({
  students: getSortedStudents(state, props),
});

const mapDispatchToProps = dispatch => ({
  setSort: bindActionCreators(setSortDetails, dispatch),
});

class ClassSubject extends Component {
  static propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    students: ImmutablePropTypes.seq,
  };

  handleClick = () => {
    const {
      id,
      setSort,
    } = this.props;

    setSort(id, 'name', true);
  };

  renderStudents() {
    const {
      students,
    } = this.props;

    return students.map((student) => {
      return (
        <p key={ student.get('name') }>
          { `${student.get('name')} - ${student.get('grade')}` }
        </p>
      )
    })
  }

  render() {
    const { label } = this.props;
    return (
      <div>
        <p
          onClick={ this.handleClick }
        >
          { `Subject Label: ${label}` }
        </p>
        { this.renderStudents() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassSubject);

