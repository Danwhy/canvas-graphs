var Graph = (function(){

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    highest = 0;

var stats = {
    word1: 2,
    wordtwo : 10,
    three: 5,
    four : 7,
    five: 15,
    six: 11,
    seven: 3,
};

for (var datum in stats){
    if (stats[datum] > highest){
        highest = stats[datum];
    }
    highest = highest % 2 === 0 ? highest : highest + 1;
}

var options = {
    barColor: 'red',
    barSpacing: 0.5,
    barWidth: 60,
    graphHeight: 300,
    graphWidth: 'auto',
};

canvas.width = options.graphWidth === 'auto' ? (Object.keys(stats).length + 1) * options.barWidth * 1.5 : options.graphWidth;
canvas.height = options.graphHeight === 'auto' ? highest * 15 * 2 : options.graphHeight * 2;

var drawGraph = function(){
    ctx.beginPath();
    ctx.moveTo(15, canvas.height / 2);
    ctx.lineTo(15, 0);
    ctx.stroke();
    ctx.font = "12px sans-serif";
    ctx.fillText('0', 5, canvas.height / 2);
    ctx.fillText(highest / 2, 0, canvas.height / 4);
    ctx.fillText(highest, 0, 10);
    ctx.beginPath();
    ctx.moveTo(15,canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
};

var fillGraph = function(){
    var i = 0;
    ctx.clearRect(0, canvas.height / 2 + 10, canvas.width, canvas.height);
    for (var word in stats){
        ctx.save();
        ctx.translate(canvas.width / 2,canvas.height / 2);
        ctx.rotate(270 * Math.PI / 180);
        ctx.font = "20px sans-serif";
        // FIXED?
        ctx.fillText(word, -ctx.measureText(word).width - 10, -(canvas.width / 2) + 50 + (options.barWidth * options.barSpacing) + i);
        ctx.restore();
        ctx.fillStyle = options.barColor;
        ctx.fillRect(15 + (options.barWidth * options.barSpacing) + i, canvas.height / 2, options.barWidth, -((options.graphHeight / highest) * stats[word]));
        ctx.fillStyle = 'black';
        i += options.barWidth * (1 + options.barSpacing);
    }
};

return {
    drawGraph : drawGraph,
    fillGraph : fillGraph,
    options : options
};

}());

Graph.drawGraph();
Graph.fillGraph();
