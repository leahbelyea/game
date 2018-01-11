import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
import _ from 'lodash';

export class CupboardDrawers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cupboard: false,
      drawers: [false, false, false, false]
    };
  }

  toggleCupboard = () => {
    this.setState({cupboard: !this.state.cupboard});
  }

  toggleDrawer = (e) => {
    console.log(e.target);
    // this.setState({right: !this.state.right});
  }

  render () {
    const drawers = _.times(4, index => {
      const classes = classnames(
        'drawer',
        `drawer-${index}`,
        { open: this.state.drawers[index] }
      );
      return <div key={index} className={classes} onClick={this.toggleDrawer}/>;
    });

    const drawerInsides = _.times(4, index => {
      const classes = classnames(
        'drawer-inside',
        `drawer-inside-${index}`
      );
      return this.state.drawers[index] ? (
        <div key={index} className={classes} onClick={this.toggleDrawer}/>
      ) : null;
    });

    const cupboardClasses = classnames(
      'cupboard-door',
      { open: this.state.cupboard }
    );

    const cupboardInside = this.state.cupboard ? (
      <div className="cupboard-inside" onClick={this.toggleCupboard}/>
    ) : null;

    return (
      <div className="cupboard-drawers" style={this.props.style}>
        <div className={cupboardClasses} onClick={this.toggleCupboard}/>
        {cupboardInside}
        {drawers}
        {drawerInsides}
      </div>
    );
  }
}

CupboardDrawers.propTypes = {
  style: PropTypes.object
};

CupboardDrawers.defaultProps = {
  style: {display: 'none'}
};
