import React, {Component} from 'react'
import './snake.css'

export default class Snake extends Component {

    render() {
        const {length, snake, step, } = this.props;
        return (
            snake.map((cell, index) => {
               return (
                 <div
                   className={'snake-cell'}
                   style={{
                     left: `${snake[index]['x']}px`,
                     top: `${snake[index]['y']}px`,
                   }}></div>
               );
            })
        )
    }
}