import React from 'react';


const styles = {
    player: {
        position: "absolute",
        backgroundColor: "yellow",
        height: 600,
        width: 200,
        top: 0,
        left: 0,
        transform: `translate(${this.state.x}px, ${this.state.y}px)`,
    }
};


function PlayerTest() {
    return (
        <div style={styles.player}>
            <h2>Player Test</h2>
        </div>
    );
}





export default PlayerTest;