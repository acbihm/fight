import React, { Fragment } from 'react';
import PlayerTest from "../PlayerTest";
import PlayerTest2 from "../PlayerTest2";
import KeyEvents from "../KeyEvents";
import HPBar from "../HPBar";

const p1Styles = {
    position: 'absolute',
    height: 420,
    width: 300,
    bottom: 20,
    zIndex: 20,

    // left: 35,
    // borderStyle: 'solid',
    // borderWith: 7,
};

const p2Styles = {
    position: 'absolute',
    height: 420,
    width: 300,
    bottom: 20,

    zIndex: 20,
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
            roundIsRunning: this.props.roundIsRunning,
            roundWinner: this.props.roundWinner,
            x1: 0,
            y1: 0,
            p1width: 250,
            punch1: false,
            p1Img: "https://imgur.com/xnEn1uo.gif",
            kick1: false,
            stand1: true,
            walk1: false,
            jump1: false,
            player1HP: 100,
            spec1: 0,
            x2: 950,
            y2: 0,
            p2width: 250,
            punch2: false,
            p2Img: "https://imgur.com/muX9UYS.gif",
            kick2: false,
            stand2: true,
            walk2: false,
            jump2: false,
            player2HP: 100,
            spec2: 0,
            distanceApart: 900
        };
    }

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
                        this.setState({
                            jump1: false,
                            y1: prevState.y1
                        });

                    }.bind(this), 500
                );
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
        });
    };

    p1Left = () => {
        this.setState(prevState => {
            if (this.state.x1 < (10)) {
                this.setState({
                    x2: prevState.x2 + 0,
                    walk1: false,
                });
            }
            else {
                this.setState({
                    x1: prevState.x1 - 25,
                    walk1: true,
                    // p1Img: "https://imgur.com/ONGYTbc.gif"
                });
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
        });
        setTimeout(
            function () {
                this.setState({
                    walk1: false,
                });
            }.bind(this), 300
        );
    };

    p1Right = () => {
        this.setState(prevState => {
            if (this.state.x1 > (this.state.x2 - 15)) {
                this.setState({
                    x1: prevState.x1 + 0,
                    walk1: false,
                    // stand1: true,
                });
            }
            else {
                this.setState({
                    x1: prevState.x1 + 25,
                    walk1: true,
                    // stand1: false,
                    // p1Img: "https://imgur.com/ONGYTbc.gif"
                });
            }
            this.setState({ distanceApart: Math.abs((this.state.x2 + this.state.p2width) - (this.state.x1 + this.state.p1width)) })
        });
        setTimeout(
            function () {
                this.setState({
                    walk1: false,
                });
            }.bind(this), 300
        );
    };

    p1Punch = () => {
        this.setState({
            punch1: true,
            // p1Img: "https://media.giphy.com/media/mhh4VA7LKYL9S/giphy.gif",
            p1Img: "https://imgur.com/RANtUzH.gif"
        })
        if ((this.state.distanceApart <= 160)) {
            this.setState((state) => ({
                player2HP: state.player2HP - 9,
                spec1: this.state.spec1 + 8,
            }));
        }
        setTimeout(
            function () {
                this.setState({
                    punch1: false,
                    p1Img: "https://imgur.com/xnEn1uo.gif",
                });
            }.bind(this), 350
        );
    };

    p1Kick = () => {
        this.setState({
            kick1: true,
            p1Img: "https://imgur.com/wODT8v3.gif"
        })
        if ((this.state.distanceApart <= 190)) {
            this.setState((state) => ({
                player2HP: state.player2HP - 20,
                spec1: this.state.spec1 + 8,
            }));
        }
        setTimeout(
            function () {
                this.setState({
                    kick1: false,
                    p1Img: "https://imgur.com/xnEn1uo.gif",
                });
            }.bind(this), 800
        );
    }

    p2Left = () => {
        this.setState(prevState => {
            if (this.state.x2 < (this.state.x1 + 15)) {
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
        this.setState({
            punch2: true,
            p2Img: "https://imgur.com/BVhxMaG.gif"
        })
        if ((this.state.distanceApart <= 160)) {
            this.setState((state) => ({
                player1HP: state.player1HP - 9,
                spec2: this.state.spec2 + 8,
            }));
        }
        setTimeout(
            function () {
                this.setState({
                    // punch2: false,
                    p2Img: "https://imgur.com/muX9UYS.gif"
                });
            }.bind(this), 250
        );
    };

    p2Kick = () => {
        this.setState({
            kick2: true,
            p2Img: "https://imgur.com/GfHaAzi.gif"
        })
        if ((this.state.distanceApart <= 190)) {
            this.setState((state) => ({
                player1HP: state.player1HP - 20,
                spec2: this.state.spec2 + 8,
            }));
        }
        setTimeout(
            function () {
                this.setState({
                    // kick2: false,
                    p2Img: "https://imgur.com/muX9UYS.gif"
                });
            }.bind(this), 500
        );
    }

    updateWinsTest = (testCount) => {
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
                // alert(this.state.player2Char + ' WINS')
                this.updateWinsTest(this.state.player2Char)
            }
            if (this.state.player1HP >= 0 && this.state.player2HP <= 0) {
                this.setState({
                    player1Wins: this.state.player1Wins + 1,
                    roundIsRunning: false,
                    roundWinner: this.state.player2Char
                });
                // alert(this.state.player1Char + ' WINS')
                this.updateWinsTest(this.state.player2Char)
            }
        }
    }

    componentDidUpdate(_, prevState) {
        if (this.state.roundIsRunning === true) {
            this.checkForKnockout();
            // this.p1Stand();
        }
        else if (this.state.roundIsRunning === false) {
            return null
        }
    }

    componentDidMount() {
        // console.log(this.state.p1Img)
    }
    render() {

        return (
            <Fragment>
                <HPBar
                    player1HP={this.state.player1HP}
                    player2HP={this.state.player2HP}
                spec1={this.state.spec1}
                spec2={this.state.spec2}
                player1Wins={this.props.player1Wins}
            player2Wins={this.props.player2Wins}
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
                    <PlayerTest
                        ImgProps={this.state.p1Img}
                    />
                </div>

                <div style={{
                    ...p2Styles, ...{
                        transform: `translate(${this.state.x2}px, ${this.state.y2}px)`,
                        pointerEvents: 'none',
                    }
                }}>
                    <PlayerTest2
                        Img2Props={this.state.p2Img}
                    />
                </div>
            </Fragment>
        );
    }
}
export default BothPlayers;