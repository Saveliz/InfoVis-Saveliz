const HEIGHT = 600;
const WIDTH = 1000;

const margin = {top: 20, bottom: 20, left: 20, right: 20};

const Elements = ["Water", "Earth", "Fire", "Air"];
const Signs = [
    "Cancer","Scorpio","Piscies",
    "Taurus", "Virgo", "Capricorn",
    "Aries", "Leo", "Sagitarius", 
    "Gemini", "Libra", "Aquarius"]

const Colors = 
{
    "Earth":"#245501",
    "Water":"1565c0",
    "Air":"e0c3fc",
    "Fire":"#6a040f",
    "Taurus":"#143601",
    "Virgo":"#245501",
    "Capricorn":"#538d22",
    "Aries":"#6a040f",
    "Leo":"#6a040f",
    "Saggitarius":"#dc2f02",
    "Cancer":"#0d47a1",
    "Scorpio":"#1565c0",
    "Piscies":"#1e88e5",
    "Gemini":"#e0c3fc",
    "Libra":"#dab6fc",
    "Aquarius":"#bbadff"
};

// Inicializamos el svg

const svg = d3.select('body')
    .append('svg')
    .attr('id', 'circle-graph-container')
    .attr('width', WIDTH)
    .attr('height', HEIGHT);

const circleGraph = svg.append('g')
    .attr('id','geo-container')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

// Se agrupan los actores por elemento
async function loadFiles(){
    const actors_info = await d3.json('actores.json');
    const actresses_info = await d3.json('actrices.json');
    const actors = actors_info.Objects
    const actresses = actresses_info.Objects
    return {actors, actresses}
}

const actors = loadFiles().then(({actors, actresses}) => {
    const mapActorElement = d3.group(actors , d => d.Element);
    const mapActressElement = d3.group(actresses, d => d.Element);
    const mapActorSign = d3.group(actors , d=> d.Sign);
    const mapActressSign= d3.group(actors , d=> d.Sign);
});

