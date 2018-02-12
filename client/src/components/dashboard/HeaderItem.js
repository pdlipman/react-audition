import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';
import ArrowDropUp from 'material-ui-icons/ArrowDropUp';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';

import Button from 'material-ui/Button';
import blue from 'material-ui/colors/blue';

import {
  setSortDetails,
} from './dashboardActions';

const mapStateToProps = (state, { id }) => ({
  column: state.getIn(['dashboard', 'classes', id, 'sort', 'column']),
  isAscending: state.getIn(['dashboard', 'classes', id, 'sort', 'isAscending']),
});

const mapDispatchToProps = dispatch => ({
  setSort: bindActionCreators(setSortDetails, dispatch),
});

export class HeaderItem extends Component {
  static propTypes = {
    column: PropTypes.string,
    id: PropTypes.string.isRequired,
    isAscending: PropTypes.bool,
    itemKey: PropTypes.string.isRequired,
    label: PropTypes.string,
    setSort: PropTypes.func.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    style: {},
  };

  handleClick = () => {
    const {
      column,
      id,
      isAscending,
      itemKey,
      setSort,
    } = this.props;

    if (column === itemKey) {
      setSort(id, itemKey, !isAscending);
    } else {
      setSort(id, itemKey, true);
    }
  };

  renderArrow() {
    const {
      column,
      itemKey,
      isAscending,
    } = this.props;

    if (column === itemKey) {
      if (isAscending) {
        return (
          <ArrowDropDown
            className={ 'DownArrow' }
          />
        );
      } else {
        return (
          <ArrowDropUp
            className={ 'UpArrow' }
          />
        );
      }
    } else {
      return (
        <span>
          <ArrowDropUp
            className={ 'UpArrow' }
          />
          <ArrowDropDown
            className={ 'DownArrow DownArrowOverlay' }
          />
        </span>
      );
    }
  }

  render() {
    const {
      label,
      style,
      className,
    } = this.props;

    return (
      <Grid
        sm={ 6 }
        item
        onClick={ this.handleClick }
        style={ style }
        className={ className }
      >
        <Button
          style={ { color: blue[500] } }
        >
          { label }
          { this.renderArrow() }
        </Button>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderItem);
