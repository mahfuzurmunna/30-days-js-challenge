// object 2

const tinderUser = new Object();

const uberUser = {};

uberUser.id = "123bb";
uberUser.name = "Jafri";
uberUser.isLoggedIn = false;

// console.log(uberUser);

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullname: {
      firstName: "Mahfuz",
      lastName: "Munna",
    },
  },
};

// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 1: "c", 2: "c" };

const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// console.log(Object.keys(uberUser));
// console.log(Object.values(uberUser));
// console.log(Object.entries(uberUser));
