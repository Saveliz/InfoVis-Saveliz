const HEIGHT = 600;
const WIDTH = 1000;

const margin = {top: 20, bottom: 20, left: 20, right: 20};

// Inicializamos el svg

const svg = d3.select('body')
    .append('svg')
    .attr('id', 'circle-graph-container')
    .attr('width', WIDTH)
    .attr('height', HEIGHT);

const circleGraph = svg.append('g')
    .attr('id','geo-container')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

