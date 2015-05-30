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
    barColor: 'red',
    barSpacing: 0.5,
    barWidth: 60,
    graphWidth: 'auto'
};

canvas.width = options.graphWidth === 'auto' ? (Object.keys(stats).length + 1) * options.barWidth * 2 : options.graphWidth;

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
        ctx.fillText(word, 60, 250 - i - 15 - (options.barWidth * options.barSpacing * 1.75));
        ctx.restore();
        ctx.fillStyle = options.barColor;
        ctx.fillRect(15 + (options.barWidth * options.barSpacing) + i, 300, options.barWidth, -(15 * stats[word]));
        ctx.fillStyle = 'black';
        i += options.barWidth * (1 + options.barSpacing);
    }
};

return {
    drawGraph : drawGraph,
    fillGraph : fillGraph
};

}());

Graph.drawGraph();
Graph.fillGraph();
