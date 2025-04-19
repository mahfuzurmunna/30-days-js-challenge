let faang = {
    name: "google",
    salary: function () {
        console.log("600K salaray");
    }
}

let engineer = Object.create(faang, {
    taskAssigned : {value : 2}
})
engineer.__proto__ = faang;

console.log(engineer);
engineer.salary()