const Dragon = require("./dragon")

const fooey = new Dragon({birthday: new Date(), nickname: "fooey"})
const baloo = new Dragon({birthday: new Date(), nickname: "baloo"})
const mimar = new Dragon()
console.log("fooey", fooey)
console.log("baloo", baloo)
console.log("mimar", mimar)

setTimeout(() => {
    const gooby = new Dragon()
    console.log("gooby", gooby)
}, 3000)