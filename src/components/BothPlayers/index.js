import React, { Fragment } from 'react';
import PlayerTest from "../PlayerTest";
import PlayerTest2 from "../PlayerTest2";
import KeyEvents from "../KeyEvents";
import HPBar from "../HPBar";
// import throttle from 'lodash.throttle';

const p1Styles = {
    position: 'absolute',
    height: 420,
    width: 300,
    bottom: 20,
    zIndex: 9999,

    // left: 35,
    // borderStyle: 'solid',
    // borderWith: 7,
};

const p2Styles = {
    position: 'absolute',
    height: 420,
    width: 300,
    bottom: 20,

    zIndex: 9999,
    // left: 35,
    // borderStyle: 'solid',
    // borderWith: 7,
};



class BothPlayers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1Char: this.props.player1Char,
            player2Char: this.props.player2Char,
            // player1Wins: this.props.player1Wins,
            // player2Wins: this.props.player2Wins,
            // gameCount: this.props.gameCount,
            //didn't pass the timer in now

            roundIsRunning: this.props.roundIsRunning,
            roundWinner: this.props.roundWinner,

            // ============================
            x1: 0,
            y1: 0,
            p1width: 250,
            punch1: false,
            kick1: false,
            stand1: true,
            walk1: false,
            jump1: false,
            player1HP: 100,
            spec1: 20,

            x2: 950,
            y2: 0,
            p2width: 250,
            punch2: false,
            kick2: false,
            stand2: true,
            walk2: false,
            jump2: false,
            player2HP: 100,
            spec2: 10,
            distanceApart: 900
        };
    }

    // exitRound = () => {
    //     // this.props.exitRound();
    //     // return
    //     alert("game done")
    // }



    p1Jump = () => {
        this.setState(prevState => {
            this.setState({ jump1: true })
            if (this.state.y1 < -154) {
                return null;
            }
            else {
                this.setState({ y1: prevState.y1 - 155 });
                setTimeout(
                    function () {
                        this.setState({ jump1: false });
                        this.setState({ y1: prevState.y1 });
                    }.bind(this), 300
                );
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
        });
    };

    p1Left = () => {
        this.setState(prevState => {
            if (this.state.x1 < (10)) {
                this.setState({ x2: prevState.x2 + 0 });
            }
            else {
                this.setState({ x1: prevState.x1 - 25 });
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
                this.setState({ x1: prevState.x1 + 25 });
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
        });
    };

    p1Punch = () => {
        this.setState({ punch1: true })
        if ((this.state.distanceApart <= 220)) {
            this.setState((state) => ({
                player2HP: state.player2HP - 9
            }));
            this.setState({ spec1: this.state.spec1 + 8 })
            setTimeout(
                function () {
                    this.setState({ punch1: false });
                }.bind(this), 900
            );
        }
    };

    p1Kick = () => {
        this.setState({ kick1: true })
        if ((this.state.distanceApart <= 280)) {
            this.setState((state) => ({
                player2HP: state.player2HP - 20
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
                this.setState({ x2: prevState.x2 - 25 });
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
        });
    };
    p2Right = () => {
        this.setState(prevState => {
            if (this.state.x2 > 930) {
                this.setState({ x2: prevState.x2 + 0 });
            }
            else {
                this.setState({ x2: prevState.x2 + 25 });
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
            console.log(this.state.distanceApart);
        });
    };
    p2Punch = () => {
        this.setState({ punch2: true })
        if ((this.state.distanceApart <= 220)) {
            this.setState((state) => ({
                player1HP: state.player1HP - 9
            }));
            this.setState({ spec2: this.state.spec2 + 8 })
            setTimeout(
                function () {
                    this.setState({ punch2: false });
                }.bind(this), 900
            );
        }
    }
    p2Kick = () => {
        this.setState({ kick2: true })
        if ((this.state.distanceApart <= 280)) {
            this.setState((state) => ({
                player1HP: state.player1HP - 20
            }));
            this.setState({ spec2: this.state.spec2 + 8 })
            setTimeout(
                function () {
                    this.setState({ kick2: false });
                }.bind(this), 900
            );
        }
    }

//     exitRound = () => {
// alert("trest")
//     }

    updateWinsTest = (testCount)=>{
        this.props.updateWins(testCount)
    }
    checkForKnockout = (e) => {
        if ((this.state.player1HP <= 0) || (this.state.player2HP <= 0)) {
            if (this.state.player1HP <= 0 && this.state.player2HP >= 0) {
                this.setState({
                    player2Wins: this.state.player2Wins + 1,
                    roundIsRunning: false,
                    roundWinner: this.state.player2Char
                });
                
                alert(this.state.player2Char + ' WINS')
                this.updateWinsTest(this.state.player2Char)
            }
            if (this.state.player1HP >= 0 && this.state.player2HP <= 0) {
                this.setState({
                    player1Wins: this.state.player1Wins + 1,
                    roundIsRunning: false,
                    roundWinner: this.state.player2Char
                    
                });
                alert(this.state.player1Char + ' WINS')
                this.updateWinsTest(this.state.player2Char)
                
            }
        }
    }

    componentDidUpdate(_, prevState) {
        // console.log(prevState.roundIsRunning);
        // console.log(this.state.roundIsRunning)
        if (this.state.roundIsRunning === true) {
            this.checkForKnockout();
        }
        else if (this.state.roundIsRunning === false) {

            // this.exitRound();
            // this.setState({gameRunning: false})
            // this.setState({roundWinner: })

        }
    }

 

    render() {
        console.log("======BOTH PLAYERS COMPONENT======")
        // console.log(this.props.testPass)
        // console.log(this.props.player1Char)
        // console.log(this.props.player2Char)
        // console.log(this.props.player1Wins)
        // console.log(this.props.player2Wins)
        // console.log(this.props.gameCount)
        // console.log(this.props.gameTimer)
        // console.log(this.props.roundIsRunning)
        // console.log(this.props.roundWinner)
        console.log("====================================")
        //these all work
        console.log(this.state)

        return (
            <Fragment>
                <HPBar
                    player1HP={this.state.player1HP}
                    player2HP={this.state.player2HP}
                // spec1={this.state.spec1}
                // spec2={this.state.spec2}
                />

                <KeyEvents
                    onAKey={this.p1Left}
                    onDKey={this.p1Right}
                    onQKey={this.p1Punch}
                    onWKey={this.p1Kick}
                    onSpaceKey={this.p1Jump}
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
                    <PlayerTest />
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