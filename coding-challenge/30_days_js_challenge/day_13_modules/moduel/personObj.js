const person = {
    name : 'munna',
    age: 27,
    greeting: function () {
        return `The person name is ${this.name} and he is ${this.age} years old`;
    }
}

module.exports = person;