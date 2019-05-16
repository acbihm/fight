import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';
import PlayerTest from "../PlayerTest";
import PlayerTest2 from "../PlayerTest2";
import KeyEvents from "../KeyEvents";
import HPBar from "../HPBar";

const p1Styles = {
    position: 'absolute',
    height: 420,
    width: 300,
    bottom: 20,
    // left: 35,
    zIndex: 9999,
    borderStyle: 'solid',
    borderWith: 7,
};

const p2Styles = {
    position: 'absolute',
    height: 420,
    width: 300,
    bottom: 20,
    // left: 35,
    zIndex: 9999,
    borderStyle: 'solid',
    borderWith: 7,
};
class BothPlayers extends React.Component {
    state = {
        x1: 0,
        y1: 0,
        p1width: 250,
        punching1: 'none',
        punch1: false,
        hp1: 50,
        spec1: 25,

        x2: 950,
        y2: 0,
        p2width: 250,
        punching2: 'none',
        punch2: false,
        hp2: 30,
        spec2: 55,

        distanceApart: null
    };

    p1Left = () => {
        this.setState(prevState => {
            if (this.state.x1 < (-20)) {
                this.setState({ x2: prevState.x2 + 0 });
            }
            else {
                this.setState({ x1: prevState.x1 - 20 });
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
            console.log(this.state.distanceApart)
        });
    };
    p1Right = () => {
        this.setState(prevState => {
            if (this.state.x1 > (this.state.x2 - 125)) {
                this.setState({ x1: prevState.x1 + 0 });
            }
            else {
                this.setState({ x1: prevState.x1 + 20 });
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
            console.log(this.state.distanceApart)


        });
        // console.log(this)
    };
    p1Punch = () => {
        this.setState(prevState => {
            this.setState({ punch1: true })
            if ((this.state.distanceApart <= 150) && (this.state.punch1 === true)) {
                // this.setState({hp2: (this.state.hp2 - 50)});
                console.log(this.state.hp2-20)
                this.setState({hp2: this.state.hp2- 5 })
            }
            setTimeout(
                function () {
                    this.setState({ punch1: false });
                }.bind(this), 6000
            );
        })
    }

    //  =======================

    p2Left = () => {
        this.setState(prevState => {
            if (this.state.x2 < (this.state.x1 + 125)) {
                this.setState({ x2: prevState.x2 - 0 });
            }
            else {
                this.setState({ x2: prevState.x2 - 20 });
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
            console.log(this.state.distanceApart)

        });
    };
    p2Right = () => {
        this.setState(prevState => {
            if (this.state.x2 > 950) {
                this.setState({ x2: prevState.x2 + 0 });
            }
            else {
                this.setState({ x2: prevState.x2 + 20 });
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
            console.log(this.state.distanceApart)

        });
    };
    p2Punch = () => {
        this.setState(prevState => {
            this.setState({ punch2: true })
            if ((this.state.distanceApart <= 150) && (this.state.punch2 === true)) {
                // this.setState({hp2: (this.state.hp2 - 50)});
                console.log(this.state.hp2-20)
                this.setState({hp1: this.state.hp1- 5 })
            }
            setTimeout(
                function () {
                    this.setState({ punch2: false });
                }.bind(this), 6000
            );
        })
    }

    render() {
        return (
            <Fragment>
                <HPBar hp1={this.state.hp1} hp2={this.state.hp2} spec1={this.state.spec1} spec2={this.state.spec2} />

                <KeyEvents
                    onAKey={this.p1Left}
                    onDKey={this.p1Right}
                    // onUp={this.moveUp}
                    // onDown={this.moveDown}
                    onSpacebar={this.p1Punch}

                    // =====================
                    onLeft={this.p2Left}

                    onRight={this.p2Right}
                    onPKey={this.p2Punch}
                />
                <div style={{
                    ...p1Styles, ...{
                        transform: `translate(${this.state.x1}px, ${this.state.y1}px)`,
                        pointerEvents: 'none',
                        // display: `${this.state.punching1}`,
                    }
                }}>
                    <PlayerTest isPunching={this.state.punching1} />

                </div>
                <div style={{
                    ...p2Styles, ...{
                        transform: `translate(${this.state.x2}px, ${this.state.y2}px)`,
                        pointerEvents: 'none',
                        // display: `${this.state.punching2}`,
                    }
                }}>
                    <PlayerTest2 />

                </div>
            </Fragment>
        );
    }
}
export default BothPlayers;