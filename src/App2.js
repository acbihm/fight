import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import Canvas from './components/Canvas'

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Use arrow keys on your keyboard!',
            xxx: 0,
            yyy: 0
        };
        ArrowKeysReact.config({
            left: () => {
                this.setState({
                    content: 'left key detected.'
                });
            },
            right: () => {

                this.setState({
                    content: 'right key detected.',
                    xxx: 5

                });
            },
            up: () => {
                this.setState({
                    content: 'up key detected.'
                });
            },
            down: () => {
                this.setState({
                    content: 'down key detected.'
                });
            }
        });
    }
    render() {
        return (
            <div>
                <Canvas />
                <div {...ArrowKeysReact.events} tabIndex="1">
                    {this.state.content}
                </div>
            </div>
        );
    }
}

export default App2;