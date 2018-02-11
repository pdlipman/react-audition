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

import { translator } from '../../configs/stringUtils';
import HeaderItem from './HeaderItem';

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

  renderHeader() {
    const {
      id,
      students,
    } = this.props;

    const keys = students.first().keySeq().toArray();
    return keys.map((key) => {
      return (
        <HeaderItem
          id={ id }
          key={ key }
          itemKey={ key }
          label={ translator(key) }
        />
      );
    });
  }

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
        <p>
          { `Subject Label: ${label}` }
        </p>
        { this.renderHeader() }
        { this.renderStudents() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassSubject);

