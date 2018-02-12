import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';

export class Item extends Component {
  static propTypes = {
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    style: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    label: '',
    style: {},
    className: '',
  };

  render() {
    const {
      label,
      style,
      className,
    } = this.props;
    return (
      <Grid
        item
        xs={ 6 }
        style={ style }
        className={ className }
      >
        <Typography
          style={{ color: blue[500] }}
        >
          { label }
        </Typography>
      </Grid>
    );
  }
}

export default Item;
