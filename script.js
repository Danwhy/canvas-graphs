var Graph = (function(){

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

var stats = {
    hello: 2,
    how : 10,
    are: 5,
    you : 7,
    doing: 15,
    today: 11,
    goodbye: 3
};

var options = {
    barWidth: 40,
    barColor: 'red',
    graphWidth: 'auto'
};

canvas.width = options.graphWidth === 'auto' ? (Object.keys(stats).length) * options.barWidth : options.graphWidth;

var drawGraph = function(){
    ctx.beginPath();
    ctx.moveTo(15, 300);
    ctx.lineTo(15, 0);
    ctx.stroke();
    ctx.font = "12 px sans-serif";
    ctx.fillText('0', 5, 300);
    ctx.fillText('10', 0, 150);
    ctx.fillText('20', 0, 10);
    ctx.beginPath();
    ctx.moveTo(15,300);
    ctx.lineTo(canvas.width, 300);
    ctx.stroke();
};

var fillGraph = function(){
    var i = 0;
    ctx.clearRect(0, 310, 300, 300);
    for (var word in stats){
        ctx.save();
        ctx.translate(250,250);
        ctx.rotate(90 * Math.PI / 180);
        ctx.font = "20px sans-serif";
        ctx.fillText(word, 60, 223 - i);
        ctx.restore();
        ctx.fillStyle = options.barColor;
        ctx.fillRect(25 + i, 300, 15, -(15 * stats[word]));
        ctx.fillStyle = 'black';
        i += 30;
    }
};

return {
    drawGraph : drawGraph,
    fillGraph : fillGraph
};

}());

Graph.drawGraph();
Graph.fillGraph();
