/* CONSTANTS AND GLOBALS */
const width = window.innerWidth *.8 ;
const height = 500;

const margin = {
    right: 50,
    left: 50,
    top: 50,
    bottom: 50
}

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
        .scale([110])
        // .center(markers[0].geometry.coordinates)
        .translate([360, 330]);
    // .fitSize([
    //     width - margin.right - margin.left,
    //     height - margin.bottom - margin.top
    // ], worldMapData);
                // Fit size tells D3 to fit usMapData into the specified x and y area

    // // Sizes for airport dots
    // const sizeScale = d3.scaleSqrt()
    //     .domain([2, 3])
    //     .range([5, 10])

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

  })
