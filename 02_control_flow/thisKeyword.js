const myDetails = {
  myName: "Munna",
  salary: 0,
  changeSalary: function (value) {
    return (this.salary = value);
  },
  changeValue: (value) => {
    return (this.salary = value);
  },
};

console.log(myDetails.changeValue(100));
