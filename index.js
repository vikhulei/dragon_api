const Dragon = require("./dragon");
const Generation = require ("./generation")

const generation = new Generation()

console.log("generation", generation)

const gooby = generation.newDragon()

console.log("gooby", gooby);

setTimeout(() => {
    const mimar = generation.newDragon()
    console.log("mimar", mimar)
}, 5000)

