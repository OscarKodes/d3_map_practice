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

  })


 
// });

console.log("Hello")