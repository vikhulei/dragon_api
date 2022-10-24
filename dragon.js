const INITIAL_VALUES = {
   nickname: "unnamed",
   get birthday()  {
      return new Date()
   }
}

class Dragon {
     constructor({birthday, nickname} = {}) {
        this.birthday = birthday || INITIAL_VALUES.birthday
        this.nickname = nickname || INITIAL_VALUES.nickname
     }
}

module.exports = Dragon