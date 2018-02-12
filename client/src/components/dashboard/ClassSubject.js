import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// material ui
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Grid from 'material-ui/Grid';
import blue from 'material-ui/colors/blue';

import {
  setSortDetails,
} from './dashboardActions';

import {
  getSortedStudents,
} from './classSubjectSelectors';

import HeaderItem from './HeaderItem';
import Item from './Item';

const mapStateToProps = (state, props) => ({
  students: getSortedStudents(state, props),
  columns: state.getIn(['dashboard', 'columns']),
});

const mapDispatchToProps = dispatch => ({
  setSort: bindActionCreators(setSortDetails, dispatch),
});

export class ClassSubject extends Component {
  static propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    students: ImmutablePropTypes.seq,
  };

  renderHeader() {
    const {
      columns,
      id,
    } = this.props;

    const headerItems = columns.map((column) => {
      const key = column.get('key');
      const label = column.get('label');
      const className = column.get('className');

      return (
        <HeaderItem
          id={ id }
          key={ key }
          itemKey={ key }
          label={ label }
          className={ className }
        />
      );
    });

    return (
      <Grid item>
        <Grid
          container
          direction={ 'row' }
        >
          { headerItems }
        </Grid>
      </Grid>
    );
  }

  renderStudent(student) {
    const {
      columns,
    } = this.props;

    return columns.map((column) => {
      const key = column.get('key');
      const className = column.get('className');

      return (
        <Item
          key={ key }
          className={ className }
          style={ { padding: '0px' } }
          label={ student.get(key) }
        />
      );
    });
  }

  renderStudents() {
    const {
      students,
    } = this.props;

    return students.map((student) => {
      const name = student.get('name');

      return (
        <Grid
          key={ name }
          item
        >
          <Grid
            container
            direction={ 'row' }
          >
            { this.renderStudent(student) }
          </Grid>
        </Grid>
      )
    })
  }

  render() {
    const { label } = this.props;
    return (
      <Grid
        container
        justify={ 'center' }
        spacing={ 0 }
        style={ { paddingBottom: '20px' } }
      >
        <Grid
          item
          xs={ 6 }
        >
          <ExpansionPanel
            className={ 'Expansion' }
            style={ { boxShadow: 'none' } }
          >
            <ExpansionPanelSummary
              expandIcon={ <ExpandMoreIcon style={{ color: blue[500] }}/> }
            >
              <Typography
                style={{ color: blue[500] }}
              >
                { label }
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid
                container
                direction={ 'column' }
                spacing={ 0 }
              >
                { this.renderHeader() }
                { this.renderStudents() }
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassSubject);

