var socket = io();


function setup() {
    createCanvas(25* 30, 25 * 30);
    background("#acacac");
    frameRate(5);
}

function drawMatrix(matrix) {
    background("#acacac");
    for(var y in matrix) {
        for(var x in matrix[y]) {
            if(matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if(matrix[y][x] == 1) {
                fill("green");
            }
            else if(matrix[y][x] == 2) {
                fill("yellow");
            }
            else if(matrix[y][x] == 3) {
                fill("red");
            }
            rect(x * side, y * side, side, side);
        }
    }
}


socket.on("matrix",drawMatrix)
