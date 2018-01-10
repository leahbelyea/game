import React from 'react';
import './styles.scss';
import { Counter } from './Counter/';
import { Room } from './Room/';
import { BottomCupboard } from './furniture/BottomCupboard/';
import { TopCupboard } from './furniture/TopCupboard/';
import { Utensils } from './furniture/Utensils/';
import { Range } from './furniture/Range/';
import { Window } from './furniture/Window/';
import _ from 'lodash';
import classnames from 'classnames';

const roomContents = [
  {
    type: 'kitchen',
    furniture: [
      {type: BottomCupboard, style: {bottom: 30, right: 50}},
      {type: TopCupboard, style: {top: 0, right: 50}},
      {type: Utensils, style: {top: 126, right: 79}},
      {type: Range, style: {left: 20, bottom: 30}},
      {type: Window, style: {left: 280, top: 0}}
    ],
    balls: [
      {left: 760, bottom: 56, zIndex: 1},
      {left: 34, bottom: 30, zIndex: 1, width: 8, backgroundPosition: 'right'},
      {left: 634, bottom: 340, zIndex: 1}
    ]
  },
  {
    type: 'kitchen',
    furniture: [
      {type: BottomCupboard, style: {bottom: 30, right: 50}},
      {type: TopCupboard, style: {top: 0, right: 50}},
      {type: Utensils, style: {top: 126, right: 79}},
      {type: Range, style: {left: 20, bottom: 30}},
      {type: Window, style: {left: 280, top: 0}}
    ],
    balls: [
      {left: 760, bottom: 56, zIndex: 1},
      {left: 34, bottom: 30, zIndex: 1, width: 8, backgroundPosition: 'right'},
      {left: 634, bottom: 340, zIndex: 1}
    ]
  }
];

export class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ballsCollected: 0,
      currentRoom: 0
    };
  }

  increaseBallCount = () => {
    this.setState({ballsCollected: this.state.ballsCollected + 1});
  }

  moveLeft = () => {
    const nextRoom = (this.state.currentRoom + _.size(roomContents) - 1) % _.size(roomContents);
    this.setState({currentRoom: nextRoom});
  }

  moveRight = () => {
    const nextRoom = (this.state.currentRoom + 1) % _.size(roomContents);
    this.setState({currentRoom: nextRoom});
  }

  test = () => {
    this.moveRight();
  }

  render () {
    console.log(this.state);
    const rooms = _.map(roomContents, ({type, balls, furniture}, index) => {
      const roomClasses = classnames(
        'roomContainer',
        {visible: this.state.currentRoom === index}
      );
      return (
        <div key={index} className={roomClasses}>
          <Room type={type} balls={balls} furniture={furniture} collect={this.increaseBallCount}/>
        </div>
      );
    });

    return (
      <div className="game-container">
        <Counter className="counter" count={this.state.ballsCollected}/>
        <div style={{height: 50, width: 50, background: 'pink', position: 'absolute', left: 50, top: 100, zIndex: 5}} onClick={this.test}/>
        {rooms}
      </div>
    );
  }
}
