const HEIGHT = 600;
const WIDTH = 1000;
const circle_radius = 130;
const info_square_width = 120;
const total_years = 50;

const margin = {top: 20, bottom: 20, left: 20, right: 20, infoBoxTop:70};
const textSpacing = 30;

const Elements = ["Water", "Earth", "Fire", "Air"];
const Signs = [
    "Cancer","Scorpio","Piscies",
    "Taurus", "Virgo", "Capricorn",
    "Aries", "Leo", "Sagittarius", 
    "Gemini", "Libra", "Aquarius"]


const Images = {
    "Air":"m81.245,40.626c-2.34,0-4.558,0.484-6.615,1.264-1.788-11.321-11.508-20.013-23.326-20.013-13.095,0-23.702,10.608-23.702,23.696,0,0.296,0.081,0.571,0.094,0.867-0.296-0.02-0.578-0.087-0.874-0.087-7.045,0-12.759,5.714-12.759,12.759,0,0.087,0.027,0.168,0.027,0.255-1.008-0.302-2.05-0.518-3.153-0.518-6.043,0-10.937,4.901-10.937,10.938,0,6.043,4.894,8.335,10.937,8.335h70.308c10.358,0,18.755-8.389,18.755-18.748s-8.396-18.748-18.755-18.748z",
    "Earth":"M 5.5,99 L 43.4,26.2 56.2,51 77.8,14.9 127.8,98.7 Z",
    "Fire":"M27.931 10.094c-4.669-8.281-18.362-10.094-18.362-10.094s6.319 6.9-1.756 12.356c-5.106 3.444-7.125 7.919-4.938 12.806 1.675 3.744 5.219 5.269 9.038 5.837-1.825-3.444-0.413-7.65-0.256-8.1 3.569 5.4 10.313 0 6.925-5.869 4.438 0.962 5.1 8.663 1.694 13.469 5.031-1.581 8.381-5.556 9.3-9.1 0.969-3.706 0.231-7.994-1.644-11.306z",
    "Water":"M7.49,15C4.5288,14.827,2.1676,12.4615,2,9.5C2,6.6,6.25,1.66,7.49,0c1.24,1.66,5,6.59,5,9.49S10.17,15,7.49,15z",
    "Aries": "M492 -96v652q0 16 1 30q-1 108 -60 165q-67 65 -157 65t-153 -63t-63 -153q-1 -74 48 -140l-28 -20q-56 56 -60 156q0 112 74 186t180 74t182 -75q37 -37 56 -91q19 54 56 91q76 75 182 75t180 -74t74 -186q-4 -100 -60 -156l-28 20q49 66 48 140q0 90 -63 153t-153 63 t-157 -65q-59 -57 -60 -165q1 -14 1 -30v-652h-40z",
    "Taurus":"M220 212q0 -124 84.5 -208t207.5 -84q121 0 206.5 84t85.5 208q0 120 -85.5 206t-206.5 86q-123 0 -207 -86q-85 -86 -85 -206zM176 212q0 139 97 238q50 50 112 75q-67 25 -117 81q-91 101 -92 229h44q0 -105 79.5 -196t212.5 -91t213 91q79 91 79 196h44 q-1 -128 -92 -229q-50 -56 -118 -81q62 -25 112 -75q98 -99 98 -238q0 -143 -98 -239.5t-238 -96.5q-142 0 -239 96.5t-97 239.5z" ,
    "Gemini":"M44 808l16 44q227 -120 452 -124q225 4 452 124l16 -44q-106 -52 -208 -82v-720q102 -30 208 -82l-16 -44q-227 120 -452 124q-225 -4 -452 -124l-16 44q106 52 208 82v720q-102 30 -208 82zM292 16q112 28 220 28t220 -28v700q-112 -28 -220 -28t-220 28v-700z",
    "Cancer":"M844 -4q-110 -99 -239 -119t-277 27q-147 65 -223 183q-77 117 -78 274q1 79 51 129t122 50t122 -50t50 -122t-50 -122t-122 -50q-69 0 -118 46q20 -81 68 -143q81 -109 198 -155q133 -42 246 -24.5t222 112.5zM180 740q110 99 239 119t277 -27q147 -65 224 -182 q76 -118 74 -268q2 -86 -48 -136t-122 -50t-122 50t-50 122t50 122t122 50q69 0 118 -46q-20 81 -67 144q-82 108 -199 154q-133 42 -246 24.5t-222 -112.5zM107 462q-39 -39 -39 -94t38.5 -93.5t93.5 -38.5t93.5 38.5t38.5 93.5t-38.5 93.5t-93.5 38.5t-93 -38zM918 275 q38 38 38 93t-38.5 93.5t-93.5 38.5t-93.5 -38.5t-38.5 -93.5t38.5 -93.5t93.5 -38.5t94 39z",
    "Leo":"M412 288h-1q5 -19 5 -40q0 -57 -39.5 -96.5t-96.5 -39.5t-96.5 39.5t-39.5 96.5t39.5 96.5t96.5 39.5q32 0 58 -12q-19 43 -41 83q-43 77 -41 165q8 108 80 173.5t192 62.5q135 -11 205 -120.5t11 -315.5q-38 -134 -63.5 -204.5t-32.5 -143.5q-5 -62 18.5 -107t77.5 -45 q65 0 100 96l40 -8q-45 -128 -140 -128q-81 0 -114 63t-22 137q5 66 30.5 143t65.5 205q55 203 -9.5 293.5t-162.5 94.5q-112 4 -170.5 -53.5t-61.5 -146.5q-8 -73 35.5 -153.5t76.5 -174.5zM184 248q0 -40 28 -68t68 -28t68 28t28 68t-28 68t-68 28t-68 -28t-28 -68z",
    "Virgo":"M860 -4q-67 10 -101 56q-25 32 -32 77q-44 -13 -87 -13v40q41 0 84 14v294v140q0 47 -29 70q-29 22 -67 22q-35 0 -67.5 -24.5t-32.5 -67.5v-464h-40v464q0 47 -29 70q-29 22 -67 22q-35 0 -67.5 -24.5t-32.5 -67.5v-464h-40v464q0 43 -20 70q-21 26 -76 26 q-45 0 -73 -45.5t1 -126.5l-36 -18q-40 106 -1.5 168t109.5 62q69 0 103 -37q9 -11 16 -24q8 11 18 20q41 37 99 37q56 0 96 -31q14 -11 23 -26q8 11 18 20q41 37 99 37q56 0 96 -31q40 -29 40 -101v-25q39 38 84 41q65 4 111.5 -38t36.5 -142q-5 -82 -48.5 -149.5 t-119.5 -118.5q-32 -18 -63 -30q5 -42 26 -67q27 -34 69 -39v-40zM800 204q63 36 106.5 99t49.5 137q9 83 -25.5 115.5t-86.5 24.5q-34 -3 -57 -33t-23 -83v-279q18 8 36 19z",
    "Libra":"M48 108v40h920v-40h-920zM48 348v40h206q11 90 70 154q72 78 188 78t188 -78q59 -64 70 -154h206v-40h-244q0 101 -58 167q-58 65 -162 65t-162 -65.5t-58 -166.5h-244z",
    "Scorpio":"M864 164v84v40h40h88v-40h-52q48 -45 54 -85q8 -51 -10 -91q-34 -65 -101 -72.5t-111 32.5q-48 40 -48 108v464q0 47 -29 70q-29 22 -67 22q-35 0 -67.5 -24.5t-32.5 -67.5v-464h-40v464q0 47 -29 70q-29 22 -67 22q-35 0 -67.5 -24.5t-32.5 -67.5v-464h-40v464 q0 43 -20 70q-21 26 -76 26q-45 0 -73 -45.5t1 -126.5l-36 -18q-40 106 -1.5 168t109.5 62q69 0 103 -37q9 -11 16 -24q8 11 18 20q41 37 99 37q56 0 96 -31q14 -11 23 -26q8 11 18 20q41 37 99 37q56 0 96 -31q40 -28 40 -101v-464q1 -43 32 -72q30 -27 77.5 -26.5 t74.5 54.5q12 37 1 70q-9 25 -45 57v-59h-40z",
    "Sagittarius":"M752 804v40h192h40v-40v-196h-40v172l-403 -405l207 -215l-28 -28l-207 215l-457 -459l-28 28l457 459l-209 217l28 28l209 -217l399 401h-160z",
    "Capricorn":"M48 520v40h168l140 -536l140 536h205l-25 44q-22 18 -28 88q0 78 51 129t125 51t125 -51t51 -129q0 -70 -50.5 -121t-181.5 -51l208 -368q24 -47 24 -92q0 -75 -46 -117.5t-125 -44.5q-88 1 -134.5 53t-50.5 125h40q4 -64 43.5 -101t100.5 -35q66 0 99 33t33 91 q-3 34 -28 88l-208 368h-193l-175 -656l-175 656h-133zM920 600q40 39 40 92q0 61 -39.5 100.5t-96.5 39.5t-96.5 -39.5t-39.5 -100.5q8 -58 32 -88l25 -44h23q111 0 152 40z",
    "Aquarius":"M391 192q-59 0 -123 42t-100 42t-61 -7t-55 -25l-8 40q29 16 54.5 24t69.5 8t108 -42t115 -42q53 0 115 40t131 40q55 0 119 -42t100 -42t61 7t55 25l8 -40q-29 -16 -54.5 -24t-69.5 -8t-108 42t-111 42q-61 0 -124.5 -40t-121.5 -40zM390 424q-59 0 -123 42t-100 42 t-61 -7t-55 -25l-8 40q29 16 54.5 24t69.5 8t108 -42t115 -42q53 0 115 40t131 40q55 0 119 -42t100 -42t61 7t55 25l8 -40q-29 -16 -54.5 -24t-69.5 -8t-108 42t-111 42q-61 0 -124.5 -40t-121.5 -40z",
    "Piscies":"M48 344v40h384q-9 219 -212 372l32 24q212 -148 220 -396h80q8 248 220 396l32 -24q-203 -153 -212 -372h384v-40h-384q9 -219 212 -372l-32 -24q-212 148 -220 396h-80q-8 -248 -220 -396l-32 24q203 153 212 372h-384z"
};
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

const scale_map = {
    "Earth":`translate(100, 90) scale(0.75) `,
    "Water":`translate(124, 100) scale(4)`,
    "Air":`translate(100, 85) scale(1)`,
    "Fire":`translate(113, 95) scale(2.3)`,
    "Taurus":`scale(0.075) rotate(180) translate(-2525, -2100)`,
    "Virgo":`scale(0.075) rotate(180) translate(-2525, -2100)`,
    "Capricorn":`scale(0.075) rotate(180) translate(-2525, -2100)`,
    "Aries":`scale(0.075) rotate(180) translate(-2525, -2100)`,
    "Leo":`scale(0.075) rotate(180) translate(-2525, -2100)`,
    "Sagittarius":`scale(0.075) rotate(180) translate(-2525, -2100)`,
    "Cancer":`scale(0.075) rotate(180) translate(-2525, -2100)`,
    "Scorpio":`scale(0.075) rotate(180) translate(-2525, -2100)`,
    "Piscies":`scale(0.075) rotate(180) translate(-2525, -2100)`,
    "Gemini":`scale(0.075) rotate(180) translate(-2525, -2100)`,
    "Libra":`scale(0.075) rotate(180) translate(-2525, -2100)`,
    "Aquarius":`scale(0.075) rotate(180) translate(-2525, -2100)`
}

const selectorContainer = d3.select("#selectors");
selectorContainer.append("p").text("Elegir parámetro de comparación");
const selector = selectorContainer.append('select');

const applyButton = selectorContainer.append('button');
applyButton.text("Aplicar");

selector.append("option").text("Elemento");
selector.append("option").text("Signo");

// Inicializamos el svg

const svg = d3.select('body')
    .append('svg')
    .attr('id', 'circle-graph-container')
    .attr('width', WIDTH)
    .attr('height', HEIGHT);

const infoBox = svg
    .append('g')
    .attr('id', 'info-box-container')
    .attr('transform',`translate(${margin.left + 2*circle_radius + info_square_width/2 + margin.left},${margin.top + textSpacing + margin.infoBoxTop})`)

const infoPercentM = infoBox 
    .append('text')
    .attr('id', 'info-percentage-m')
    .attr('transform', `translate(0,0)`)
    .attr("font-size", "1.2rem")
    .style("text-anchor", "right")
    .text("'Mejor Actor': ");

const infoPercentF = infoBox 
    .append('text')
    .attr('id', 'info-percentage-f')
    .attr('transform', `translate(0,${textSpacing})`)
    .attr("font-size", "1.2rem")
    .style("text-anchor", "right")
    .text("'Mejor Actriz': ");

const infoPercentG = infoBox 
    .append('text')
    .attr('id', 'info-percentage-f')
    .attr('transform', `translate(0,${textSpacing*2})`)
    .attr("font-size", "1.2rem")
    .style("text-anchor", "right")
    .text("'General': ");

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
    sec = circleGraphF.selectAll(`.CGS-${d.data.key}`)
    sec.attr("fill",`${Colors[d.data.key]}`)
    textCircleM
        .text("");
    sec = circleGraphM.selectAll(`.CGS-${d.data.key}`)
    sec.attr("fill",`${Colors[d.data.key]}`)
        
}


const actors = loadFiles().then(({actors, actresses}) => {
    const mapActorElement = d3.group(actors , d => d.Element);
    const mapActressElement = d3.group(actresses, d => d.Element);
    const mapActorSign = d3.group(actors , d=> d.Sign);
    const mapActressSign= d3.group(actresses , d=> d.Sign);
    let repetition = {};
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

        repetition[Elements[i]]={
            "M":mapActorElement.get(`${Elements[i]}`).length,
            "F":mapActressElement.get(`${Elements[i]}`).length,
            "G":(this_m.value + this_f.value)
        }

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

        repetition[Signs[i]]={
            "M":mapActorSign.get(`${Signs[i]}`).length,
            "F":mapActressSign.get(`${Signs[i]}`).length,
            "G":(this_m.value + this_f.value)
        }

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
        const circleGraphM = svg.append('g')
            .attr('id','circle-container-m')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const titleCircleM = circleGraphM.append('text')
            .attr('id','circle-title-container-m')
            .attr('transform', `translate(${circle_radius+margin.left}, 0)`)
            .attr("font-size", "1.5rem")
            .text("Mejor Actor")
            .style("text-anchor", "middle");

        const textCircleM =circleGraphM.append('text')
            .attr('id','circle-text-container-m')
            .attr('transform', `translate(${circle_radius+margin.left}, ${circle_radius + margin.top + 40})`)
            .attr("font-size", "20px")
            .style("text-anchor", "middle");

        const imageCircleM=circleGraphM.append('path')
            .attr('id','circle-image-container')
            .attr('transform',`scale(0.075) rotate(180) translate(-2525, -2100)`);

        const circleGraphF = svg.append('g')
            .attr('id','circle-container-f')
            .attr('transform', `translate(${2*(margin.left + circle_radius + info_square_width + margin.right)}, ${margin.top})`);

        const titleCircleF = circleGraphF.append('text')
            .attr('id','circle-title-container-m')
            .attr('transform', `translate(${circle_radius+margin.left}, 0)`)
            .attr("font-size", "1.5rem")
            .text("Mejor Actriz")
            .style("text-anchor", "middle");

        const textCircleF =circleGraphF.append('text')
            .attr('id','circle-text-container-m')
            .attr('transform', `translate(${circle_radius+margin.left}, ${circle_radius + margin.top + 40})`)
            .attr("font-size", "20px")
            .style("text-anchor", "middle");

        const imageCircleF = circleGraphF.append('path')
            .attr('id','circle-image-container');

        let d_m, d_f;
        if(data_chosen === "Signo"){
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
        .attr("class",function(d){return `CGS-${d.data.key}`})
        .attr("transform",`translate(${circle_radius + 20},${circle_radius + 20})`)
        .attr('fill', function(d){return(Colors[`${d.data.key}`]) })
        .attr("stroke", function(d){return(Colors[`${d.data.key}`]) })
        .style("stroke-width", "0px")
        .style("opacity", 0.8)
        .on("mouseenter", (m, d) => {
            textCircleF
                .text(`${d.data.key}`)
            sec = circleGraphM.selectAll(`.CGS-${d.data.key}`)
            sec
                .style("opacity",1)
                .style("stroke-width",10);
            textCircleM
                .text(`${d.data.key}`);
            sec = circleGraphF.selectAll(`.CGS-${d.data.key}`)
            sec
                .style("opacity",1)
                .style("stroke-width",10);

            imageCircleF
                .attr("d",`${Images[d.data.key]}`)
                .attr("transform",`${scale_map[d.data.key]}`)

            imageCircleM
                .attr("d",`${Images[d.data.key]}`)
                .attr("transform",`${scale_map[d.data.key]}`)

            infoPercentM
                .text(`'Mejor Actor': ${(repetition[d.data.key]["M"]/total_years*100).toFixed(1)}%`);

            infoPercentF
                .text(`'Mejor Actriz': ${(repetition[d.data.key]["F"]/total_years*100).toFixed(1)}%`);
            
            infoPercentG
                .text(`'General': ${(repetition[d.data.key]["G"]/(2*total_years)*100).toFixed(1)}%`);
          })
          .on("mouseleave", (m,d) =>{
            textCircleF
                .text("");
            sec = circleGraphF.selectAll(`.CGS-${d.data.key}`)
            sec
                .style("opacity",0.8)
                .style("stroke-width",0);
            textCircleM
                .text("");
            sec = circleGraphM.selectAll(`.CGS-${d.data.key}`)
            sec
                .style("opacity",0.8)
                .style("stroke-width",0);
            imageCircleF
                .attr("d",``)

            imageCircleM
                .attr("d",``)
            
            infoPercentM
                .text(`'Mejor Actor': `);

            infoPercentF
                .text(`'Mejor Actriz': `);
            
            infoPercentG
                .text(`'General': `);
        });

        circleGraphF
        .selectAll('circleGraph')
        .data(d_f)
        .enter()
        .append('path')
        .attr('d', d3.arc()
            .innerRadius(circle_radius - 40)
            .outerRadius(circle_radius)
        )
        .attr("class",function(d){return `CGS-${d.data.key}`})
        .attr("transform",`translate(${circle_radius + 20},${circle_radius + 20})`)
        .attr('fill', function(d){return(Colors[`${d.data.key}`]) })
        .attr("stroke", function(d){return(Colors[`${d.data.key}`]) })
        .style("stroke-width", "0px")
        .style("opacity", 0.8)
        .on("mouseenter", (m, d) => {
            textCircleF
                .text(`${d.data.key}`)
            sec = circleGraphM.selectAll(`.CGS-${d.data.key}`)
            sec
                .style("opacity",1)
                .style("stroke-width",10);
            textCircleM
                .text(`${d.data.key}`);
            sec = circleGraphF.selectAll(`.CGS-${d.data.key}`)
            sec
                .style("opacity",1)
                .style("stroke-width",10);

            imageCircleF
                .attr("d",`${Images[d.data.key]}`)
                .attr("transform",`${scale_map[d.data.key]}`)

            imageCircleM
                .attr("d",`${Images[d.data.key]}`)
                .attr("transform",`${scale_map[d.data.key]}`)

            infoPercentM
                .text(`'Mejor Actor': ${(repetition[d.data.key]["M"]/total_years*100).toFixed(1)}%`);

            infoPercentF
                .text(`'Mejor Actriz': ${(repetition[d.data.key]["F"]/total_years*100).toFixed(1)}%`);
            
            infoPercentG
                .text(`'General': ${(repetition[d.data.key]["G"]/(2*total_years)*100).toFixed(1)}%`);
          })
          .on("mouseleave", (m,d) =>{
            textCircleF
                .text("");
            sec = circleGraphF.selectAll(`.CGS-${d.data.key}`)
            sec
                .style("opacity",0.8)
                .style("stroke-width",0);
            textCircleM
                .text("");
            sec = circleGraphM.selectAll(`.CGS-${d.data.key}`)
            sec
                .style("opacity",0.8)
                .style("stroke-width",0);
            imageCircleF
                .attr("d",``)

            imageCircleM
                .attr("d",``)

            infoPercentM
                .text(`'Mejor Actor': `);

            infoPercentF
                .text(`'Mejor Actriz': `);
            
            infoPercentG
                .text(`'General': `);
        });

        const paramsSelect = () => {
            let actual = selector.node().value;
            circleGraphF.remove();
            circleGraphM.remove();
            createCircleGraphs(actual);
            
        };

        applyButton.on("click", () => paramsSelect());
    };

    createCircleGraphs("s");
});

