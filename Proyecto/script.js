const HEIGHT = 600;
const WIDTH = 1000;
const circle_radius = 130;

const margin = {top: 20, bottom: 20, left: 20, right: 20};

const Elements = ["Water", "Earth", "Fire", "Air"];
const Signs = [
    "Cancer","Scorpio","Piscies",
    "Taurus", "Virgo", "Capricorn",
    "Aries", "Leo", "Sagittarius", 
    "Gemini", "Libra", "Aquarius"]

const Colors = 
{
    "Earth":"#538d22",
    "Water":"#1e88e5",
    "Air":"#e0c3fc",
    "Fire":"#d00000",
    "Taurus":"#143601",
    "Virgo":"#245501",
    "Capricorn":"#538d22",
    "Aries":"#6a040f",
    "Leo":"#9d0208",
    "Sagittarius":"#d00000",
    "Cancer":"#0d47a1",
    "Scorpio":"#1565c0",
    "Piscies":"#1e88e5",
    "Gemini":"#9163cb",
    "Libra":"#c19ee0",
    "Aquarius":"#dec9e9"
};

// Inicializamos el svg

const svg = d3.select('body')
    .append('svg')
    .attr('id', 'circle-graph-container')
    .attr('width', WIDTH)
    .attr('height', HEIGHT);

const circleGraphM = svg.append('g')
    .attr('id','circle-container-m')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

const textCircleM =circleGraphM.append('text')
    .attr('id','circle-text-container-m')
    .attr('transform', `translate(${circle_radius+margin.left}, ${circle_radius + margin.top})`)
    .attr("font-size", "20px")
    .style("text-anchor", "middle");

const circleGraphF = svg.append('g')
    .attr('id','circle-container-f')
    .attr('transform', `translate(${2*(margin.left + circle_radius + margin.right)}, ${margin.top})`);

const textCircleF =circleGraphF.append('text')
    .attr('id','circle-text-container-m')
    .attr('transform', `translate(${circle_radius+margin.left}, ${circle_radius + margin.top})`)
    .attr("font-size", "20px")
    .style("text-anchor", "middle");

// Se agrupan los actores por elemento
async function loadFiles(){
    const actors_info = await d3.json('actores.json');
    const actresses_info = await d3.json('actrices.json');
    const actors = actors_info.Objects
    const actresses = actresses_info.Objects
    return {actors, actresses}
};

const mouseLeave = (m,d) => {
    textCircleF
        .text("");
        d3.select(m.currentTarget)
        .attr("fill",`${Colors[d.data.key]}`)
    textCircleM
        .text("");
        d3.select(m.currentTarget)
        .attr("fill",`${Colors[d.data.key]}`)
        
}

const actors = loadFiles().then(({actors, actresses}) => {
    const mapActorElement = d3.group(actors , d => d.Element);
    const mapActressElement = d3.group(actresses, d => d.Element);
    const mapActorSign = d3.group(actors , d=> d.Sign);
    const mapActressSign= d3.group(actresses , d=> d.Sign);
    let sign_data_m = [];
    let element_data_m = [];
    let sign_data_f = [];
    let element_data_f = [];
    let sign_data_g = [];
    let element_data_g = [];


    for (let i = 0; i < Elements.length; i++) {
        let this_m = {"key":Elements[i],
                    "value":mapActorElement.get(`${Elements[i]}`).length};
        let this_f = {"key":Elements[i],
                    "value":mapActressElement.get(`${Elements[i]}`).length};
        let this_g = {"key":Elements[i],
                      "value": (this_m.value + this_f.value)};

        element_data_f.push(this_f);
        element_data_m.push(this_m);
        element_data_g.push(this_g);
    };
    
    for (let i = 0; i < Signs.length; i++) {
        let this_m = {"key":Signs[i],
                    "value":mapActorSign.get(`${Signs[i]}`).length};
        let this_f = {"key":Signs[i],
                    "value":mapActressSign.get(`${Signs[i]}`).length};
        let this_g = {"key":Signs[i],
                    "value": (this_m.value + this_f.value)};

        sign_data_f.push(this_f);
        sign_data_m.push(this_m);
        sign_data_g.push(this_g);
    };

    


    let pie = d3.pie()
        .sort(null)
        .value(function(d) {return d.value; })

    let m_s_data_ready = pie(sign_data_m);
    let f_s_data_ready = pie(sign_data_f);
    let g_s_data_ready = pie(sign_data_g);
    let m_e_data_ready = pie(element_data_m);
    let f_e_data_ready = pie(element_data_f);
    let g_e_data_ready = pie(element_data_g);
    

    function createCircleGraphs(data_chosen){
        let d_m, d_f;
        if(data_chosen === "s"){
            d_m = m_s_data_ready;
            d_f = f_s_data_ready;
        }
        else{
            d_m= m_e_data_ready;
            d_f = f_e_data_ready;
        };
        circleGraphM
        .selectAll('circleGraph')
        .data(d_m)
        .enter()
        .append('path')
        .attr('d', d3.arc()
            .innerRadius(circle_radius-40)
            .outerRadius(circle_radius)
        )
        .attr("transform",`translate(${circle_radius + 20},${circle_radius + 20})`)
        .attr('fill', function(d){return(Colors[`${d.data.key}`]) })
        .attr("stroke", "black")
        .style("stroke-width", "0px")
        .style("opacity", 0.7)
        .on("mouseenter", (m, d) => {
            textCircleF
                .text(`${d.data.key}`);
            textCircleM
                .text(`${d.data.key}`);
                t = d3.select(m.currentTarget);
                t.attr("fill","#ffff")
            
          })
        .on("mouseleave", mouseLeave);

        circleGraphF
        .selectAll('circleGraph')
        .data(d_f)
        .enter()
        .append('path')
        .attr('d', d3.arc()
            .innerRadius(circle_radius - 40)
            .outerRadius(circle_radius)
        )
        .attr("id",function(d){`CGS-${d.data.key}`})
        .attr("transform",`translate(${circle_radius + 20},${circle_radius + 20})`)
        .attr('fill', function(d){return(Colors[`${d.data.key}`]) })
        .attr("stroke", "black")
        .style("stroke-width", "0px")
        .style("opacity", 0.7)
        .on("mouseenter", (m, d) => {
            textCircleF
                .text(`${d.data.key}`)
            sec = textCircleF.selectAll(`${d.data.key}`)
            sec.attr("fill","#ffff")
            textCircleM
                .text(`${d.data.key}`);
            t = d3.select(m.currentTarget);
            t.attr("fill","#ffff")
          })
          .on("mouseleave", mouseLeave);
    };

    createCircleGraphs("s");
});

