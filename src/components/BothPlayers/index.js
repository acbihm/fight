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
        punch1: false,
        kick1: false,
        stand1: true,
        walk1: false,
        jump1: false,
        hp1: 100,   //make this passed in value
        spec1: 0,


        x2: 950,
        y2: 0,
        p2width: 250,
        punch2: false,
        kick2: false,
        stand2: true,
        walk2: false,
        jump2: false,
        hp2: 100,
        spec2: 0,

        distanceApart: 900
    };

    p1Jump = () => {
        this.setState(prevState => {
            this.setState({ jump1: true })
            if (this.state.y1 < -174) {
                return null;
            }
            else {
                this.setState({ y1: prevState.y1 - 175 });
                setTimeout(
                    function () {
                        this.setState({ jump1: false });
                        this.setState({ y1: prevState.y1 });
                    }.bind(this), 400
                );
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
        });
    };

    p1Left = () => {
        this.setState(prevState => {
            if (this.state.x1 < (-20)) {
                this.setState({ x2: prevState.x2 + 0 });
            }

            //****limit jump? */
            else {
                this.setState({ x1: prevState.x1 - 20 });
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
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


        });
    };

    // ======
    p1Punch = () => {
        this.setState({ punch1: true })
        if ((this.state.distanceApart <= 150)) {
            this.setState((state) => ({
                hp2: state.hp2 - 9
            }));
            this.setState({ spec1: this.state.spec1 + 8 })
            setTimeout(
                function () {
                    this.setState({ punch1: false });
                }.bind(this), 900
            );
        }
    }
    // =======
    p1Kick = () => {
        this.setState({ kick1: true })
        if ((this.state.distanceApart <= 250)) {
            this.setState((state) => ({
                hp2: state.hp2 - 20
            }));
            this.setState({ spec1: this.state.spec1 + 8 })
            setTimeout(
                function () {
                    this.setState({ kick1: false });
                }.bind(this), 900
            );
        }
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
            console.log(this.state.distanceApart);
        });
    };
    // p2Punch = () => {
    //     // this.setState(prevState => {
    //     this.setState({ punch2: true })

    //     if ((this.state.distanceApart <= 150) && (this.state.punch2 === true)) {
    //         this.setState({ hp1: this.state.hp1 - 5 })
    //         this.setState({ spec2: this.state.spec2 + 5 })
    //     }
    //     setTimeout(
    //         function () {
    //             this.setState({ punch2: false });
    //         }.bind(this), 500
    //     );
    //     // })
    // }

    // p2Kick = () => {
    //     // this.setState(prevState => {
    //     this.setState({ kick2: true })

    //     if ((this.state.distanceApart <= 250) && (this.state.kick2 === true)) {
    //         this.setState({ hp1: this.state.hp1 - 20 })
    //         this.setState({ spec2: this.state.spec2 + 8 })
    //     }
    //     setTimeout(
    //         function () {
    //             this.setState({ kick2: false });
    //         }.bind(this), 800
    //     );
    //     // })
    // }



    p2Punch = () => {
        this.setState({ punch2: true })
        if ((this.state.distanceApart <= 150)) {
            this.setState((state) => ({
                hp1: state.hp1 - 9
            }));
            this.setState({ spec2: this.state.spec2 + 8 })
            setTimeout(
                function () {
                    this.setState({ punch2: false });
                }.bind(this), 900
            );
        }
    }
    // =======
    p2Kick = () => {
        this.setState({ kick2: true })
        if ((this.state.distanceApart <= 250)) {
            this.setState((state) => ({
                hp1: state.hp1 - 20
            }));
            this.setState({ spec2: this.state.spec2 + 8 })
            setTimeout(
                function () {
                    this.setState({ kick2: false });
                }.bind(this), 900
            );
        }
    }
    render() {
        return (
            <Fragment>
                <HPBar hp1={this.state.hp1} hp2={this.state.hp2} spec1={this.state.spec1} spec2={this.state.spec2} />
                <KeyEvents
                    onAKey={this.p1Left}
                    onDKey={this.p1Right}
                    onQKey={this.p1Punch}
                    onWKey={this.p1Kick}
                    onSpaceKey={this.p1Jump}

                    // =====================
                    onLeft={this.p2Left}
                    onRight={this.p2Right}
                    onPKey={this.p2Punch}
                    onOKey={this.p2Kick}
                />
                <div style={{
                    ...p1Styles, ...{
                        transform: `translate(${this.state.x1}px, ${this.state.y1}px)`,
                        pointerEvents: 'none',
                    }
                }}>
                    <PlayerTest
                    // isPunching={this.state.punching1}
                    />

                </div>
                <div style={{
                    ...p2Styles, ...{
                        transform: `translate(${this.state.x2}px, ${this.state.y2}px)`,
                        pointerEvents: 'none',
                    }
                }}>
                    <PlayerTest2 />

                </div>
            </Fragment>
        );
    }
}
export default BothPlayers;