// Get Informations from DOM
const canv = document.getElementById('main-headline-text');
var ctx = document.getElementById('main-headline-text').getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0,0, canv.width + 10, canv.height +10);

// Transparent Headline
ctx.globalCompositeOperation = 'destination-out';
ctx.font = "Bold 50px 'Copperplate'";
ctx.fillText("House Plant",5 ,canv.height / 1.6);