import React from "react";

function Canvas() {
    return (
        <div>
            {function draw() {
                var canvas = document.getElementById('canvas');
                if (canvas.getContext) {
                    var context = canvas.getContext('2d');
                    for (var x = 0.5; x < 500; x += 25) {
                        context.moveTo(x, 0);
                        context.lineTo(x, 500);
                    }
                    for (var y = 0.5; y < 500; y += 25) {
                        context.moveTo(0, y);
                        context.lineTo(500, y);
                    }
                    context.strokeStyle = 'grey';
                    context.stroke();
                }
            }}
           
            {

                function showCoords(event) {
                    var x = event.clientX //- 25;
                    var y = event.clientY //- 25;
                    var coords = "X coordinates: " + x + ", Y coordinates: " + y;
                    document.getElementById('showCoords').innerHTML = coords;
                }}

        </div>
    );
}

export default Canvas;
