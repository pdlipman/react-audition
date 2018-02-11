import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  setSortDetails,
} from '../dashboard/dashboardActions';

const mapStateToProps = (state, { id }) => ({
  column: state.getIn(['dashboard', 'classes', id, 'sort', 'column']),
  isAscending: state.getIn(['dashboard', 'classes', id, 'sort', 'isAscending']),
});

const mapDispatchToProps = dispatch => ({
  setSort: bindActionCreators(setSortDetails, dispatch),
});

class HeaderItem extends Component {
  static propTypes = {
    column: PropTypes.string,
    id: PropTypes.string.isRequired,
    isAscending: PropTypes.bool,
    itemKey: PropTypes.string.isRequired,
    label: PropTypes.string,
    setSort: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const {
      column,
      id,
      isAscending,
      itemKey,
      label,
      setSort,
    } = this.props;

    console.log(`${column} - ${itemKey}`);
    console.log(`${isAscending}`);
    if (column === itemKey) {
      setSort(id, itemKey, !isAscending);
    } else {
      setSort(id, itemKey, true);
    }
  };

  render() {
    const { label } = this.props;

    return (
      <p onClick={ this.handleClick }>
        { label }
      </p>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderItem);
