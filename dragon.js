const TRAITS = require("./traits")

const INITIAL_VALUES = {
   nickname: "unnamed",
   get birthday()  {
      return new Date()
   },
   get randomTraits() {
      const traits = [];

      TRAITS.forEach(TRAIT => {
         const traitType = TRAIT.type;
         const traitValues = TRAIT.values;

         const traitValue = traitValues[
            Math.floor(Math.random() * traitValues.length)
         ]
         traits.push({traitType, traitValue})
      })
      return traits
   }
}

class Dragon {
     constructor({birthday, nickname, traits} = {}) {
        this.birthday = birthday || INITIAL_VALUES.birthday
        this.nickname = nickname || INITIAL_VALUES.nickname
        this.traits = traits || INITIAL_VALUES.randomTraits
     }
}

module.exports = Dragon