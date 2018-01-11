import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

export class BottomDrawers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      leftTop: false,
      leftBottom: false,
      rightTop: false,
      rightBottom: false
    };
  }

  toggleLeftTop = () => {
    this.setState({
      leftTop: !this.state.leftTop,
      leftBottom: false,
      rightTop: false,
      rightBottom: false
    });
  }

  toggleLeftBottom = () => {
    this.setState({
      leftTop: false,
      leftBottom: !this.state.leftBottom,
      rightTop: false,
      rightBottom: false
    });
  }

  toggleRightTop = () => {
    this.setState({
      leftTop: false,
      leftBottom: false,
      rightTop: !this.state.rightTop,
      rightBottom: false
    });
  }

  toggleRightBottom = () => {
    this.setState({
      leftTop: false,
      leftBottom: false,
      rightTop: false,
      rightBottom: !this.state.rightBottom
    });
  }

  render () {
    const leftTopClasses = classnames(
      'drawer',
      'left-top',
      { open: this.state.leftTop }
    );
    const leftBottomClasses = classnames(
      'drawer',
      'left-bottom',
      { open: this.state.leftBottom }
    );
    const rightTopClasses = classnames(
      'drawer',
      'right-top',
      { open: this.state.rightTop }
    );
    const rightBottomClasses = classnames(
      'drawer',
      'right-bottom',
      { open: this.state.rightBottom }
    );
    const leftTopInside = this.state.leftTop ? (
      <div className="drawer-inside left-top" onClick={this.toggleLeftTop}/>
    ) : null;
    const leftBottomInside = this.state.leftBottom ? (
      <div className="drawer-inside left-bottom" onClick={this.toggleLeftBottom}/>
    ) : null;
    const rightTopInside = this.state.rightTop ? (
      <div className="drawer-inside right-top" onClick={this.toggleRightTop}/>
    ) : null;
    const rightBottomInside = this.state.rightBottom ? (
      <div className="drawer-inside right-bottom" onClick={this.toggleRightBottom}/>
    ) : null;

    return (
      <div className="bottom-drawers" style={this.props.style}>
        <div className={leftTopClasses} onClick={this.toggleLeftTop}/>
        <div className={leftBottomClasses} onClick={this.toggleLeftBottom}/>
        <div className={rightTopClasses} onClick={this.toggleRightTop}/>
        <div className={rightBottomClasses} onClick={this.toggleRightBottom}/>
        {leftTopInside}
        {leftBottomInside}
        {rightTopInside}
        {rightBottomInside}
      </div>
    );
  }
}

BottomDrawers.propTypes = {
  style: PropTypes.object
};

BottomDrawers.defaultProps = {
  style: {display: 'none'}
};
