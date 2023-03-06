/* CONSTANTS AND GLOBALS */
const width = window.innerWidth *.8 ;
const height = window.innerHeight *.8 ;

// const margin = {
//     right: 50,
//     left: 50,
//     top: 50,
//     bottom: 50
// }

// /* LOAD DATA */
Promise.all([
    d3.json("world.json"),
    d3.csv("cities_data.csv", d3.autoType),
  ]).then(([worldMapData, cityData]) => {

    console.log(worldMapData);

    console.log(cityData);

    // CREATE SCALES / PROJECTIONS==========================

    // Projection for map
    const projection = d3.geoMercator()
        .scale([180])
        .translate([width / 2, height * .7]);


    // HTML ELEMENTS======================================

    // CREATE SVG
    const svg = d3.select("#container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "lavender");

    // PATH GENERATOR FOR MAP
    const pathGen = d3.geoPath(projection);

    // DRAW THE WORLD MAP USING THE PATH GEN
    const world = svg.selectAll(".world-path")
        .data(worldMapData.features)
        .join("path")
        .attr("class", "state-path")
        .attr("stroke", "black")
        .attr("fill", "transparent")
        .attr("d", pathGen)

    // DRAW AIRPORT POINTS/CIRCLES ---------------------------------

    someCities = cityData.filter((_, i) => i % 50 === 0)


    svg.selectAll(".city-points")
        .data(someCities)
        .join("circle")
        .attr("class", "city-points")
        .attr("stroke", "black")
        .attr("opacity", 0.6)
        .attr("r", 1)
        .attr("transform", d => {

            const [x, y] = projection([d.lng, d.lat]);
            
            return `translate(${x}, ${y})`;
          });

  })
