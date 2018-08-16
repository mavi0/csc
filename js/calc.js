function draw_leg(fraction) {
    dctx.lineTo(center_x + length * Math.sin(2*Math.PI*fraction),
    center_y - length * Math.cos(2*Math.PI*fraction));
}

function init() {
    var canvas = document.getElementById("clockface");
    // The following variables are created as globals, so they can
    // conveniently be accessed by other functions.
    dctx = canvas.getContext('2d');
    dctx.fillStyle = "black";
    center_x = 100;
    center_y = 100;
    length = 100;
    show_hands();
}

// A single hand is drawn as an isoceles triangle from the centre
// to the edge of the clockface.
function show_hand(fraction, width) {
    dctx.beginPath();
    dctx.moveTo(center_x, center_y);
    draw_leg(fraction - width);
    draw_leg(fraction + width);
    dctx.fill();
}

function show_hands() {
    // Erase anything already present in the area that represents
    // the clock face.
    dctx.clearRect(0, 0, 200, 200);
    // What is the time now?
    var now = new Date();
    seconds = now.getSeconds();
    minutes = now.getMinutes() + seconds / 60;
    hours = now.getHours() + minutes / 60;
    // The second hand is the skinniest of the three
    show_hand(seconds / 60, 0.002);
    show_hand(minutes / 60, 0.005);
    // The hour hand is twice as wide as the minute hand
    show_hand(hours / 12, 0.01);
    var rate = 1000;
    setTimeout(show_hands, rate);
}