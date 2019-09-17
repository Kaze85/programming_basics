var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

function drawDiamond() {
    ctx.fillStyle = "#d11313";
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(150, 400);
    ctx.lineTo(300, 200);
    ctx.lineTo(150, 0);
    ctx.lineTo(0, 200);
    ctx.lineTo(150, 400);
    ctx.fill();
    console.log("Diamond is drawn");
}

function clearCanvas() {
    ctx.clearRect(0,0,c.width,c.height);
    console.log("Diamond is erased");
}