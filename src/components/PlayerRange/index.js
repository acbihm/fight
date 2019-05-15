import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';
import PlayerTest from "../Test/PlayerTest";
import PlayerTest2 from "../Test/PlayerTest2";
import KeyEvents from "../KeyEvents";

const styles1 = {
    position: 'absolute',
    height: 420,
    width: 300,
    bottom: 20,
    // left: 35,
    zIndex: 9999,
    borderStyle: 'solid',
    borderWith: 7,
    transformOrigin: 'bottom left'
};

const styles2 = {
    position: 'absolute',
    height: 420,
    width: 300,
    bottom: 20,
    // left: 35,
    zIndex: 9999,
    borderStyle: 'solid',
    borderWith: 7,
    transformOrigin: 'bottom right'
};
class PlayerRange extends React.Component {
    state = {
        distanceApart: 0,
        x1: 0,
        y1: 0,
        p1width:250,
        punching1: 'none',
        hp1: 100,
        x2: 950,
        y2: 0,
        p2width:250,
        punching2: 'none',
        hp2: 100,
    };
    moveLeft1 = () => {
        this.setState(prevState => {
            this.setState({ x1: prevState.x1 - 20 });
            this.setState({distanceApart: Math.abs(this.p1width + this.x1)});
            console.log(this.state.distanceApart)
        });
    };
    moveRight1 = () => {
        this.setState(prevState => {
            this.setState({ x1: prevState.x1 + 20 });
            this.setState({distanceApart: Math.abs(this.p1width + this.x1)});
            console.log(this.state.distanceApart)
        });
        console.log(this)
    };
    punchMid1 = () => {
        this.setState(prevState => {
            this.setState({ punching1: 'block' })
            setTimeout(
                function () {
                    this.setState({ punching1: 'none' });
                }.bind(this), 600
            );
        })
    }
    // moveUp = () => {
    //     this.setState(prevState => {
    //         this.setState({ y: prevState.y - 28 });
    //     });
    // };
    // moveDown = () => {
    //     this.setState(prevState => {
    //         this.setState({ y: prevState.y + 28 })
    //     });
    // }
    moveLeft2 = () => {
        this.setState(prevState => {
            this.setState({ x2: prevState.x2 - 20 });
        });
    };
    moveRight2 = () => {
        this.setState(prevState => {
            this.setState({ x2: prevState.x2 + 20 });
        });
        console.log(this)
    };
    punchMid2 = () => {
        this.setState(prevState => {
            this.setState({ punching2: 'block' })
            setTimeout(
                function () {
                    this.setState({ punching2: 'none' });
                }.bind(this), 600
            );
        })
    }



    render() {
        return (
            <Fragment>
                <KeyEvents
                    onAKey={this.moveLeft1}
                    onDKey={this.moveRight1}
                    // onUp={this.moveUp}
                    // onDown={this.moveDown}
                    onSpacebar={this.punchMid1}



                    onLeft={this.moveLeft2}
                    onRight={this.moveRight2}
                    onPKey={this.punchMid2}
                />
                <div style={{
                    ...styles1, ...{
                        // transformOrigin: 'bottom left',
                        transform: `translate(${this.state.x1}px, ${this.state.y1}px)`,
                        pointerEvents: 'none',
                        display: `${this.state.punching1}`,
                    }
                }}>
                    <PlayerTest />
                    
                </div>
                <div style={{
                    ...styles2, ...{
                        // transformOrigin: 'bottom right',
                        transform: `translate(${this.state.x2}px, ${this.state.y2}px)`,
                        pointerEvents: 'none',
                        display: `${this.state.punching2}`,
                    }
                }}>
                    <PlayerTest2 />
                    
                </div>
            </Fragment>
        );
    }
}
export default PlayerRange;