# Day-20 Local Storage

### 1. Local Storage Script

Write a script that `saves, retrieves, and removes` items from localStorage, and displays the saved data on page load.

```javascript
const myObj = {
  car: "Toyotal",
  model: "axio",
  year: "2007",
};

localStorage.setItem("myObj", JSON.stringify(myObj));
const retrieve = JSON.parse(localStorage.getItem("myObj"));
alert(`Data have been retrieved:${retrieve.car} `);
localStorage.remove("myObj");
```
### 2. Session Storage Script

Write a script that `saves, retrieves, and removes` items from sessionStorage, and displays the saved data on page load.



```javascript
const myObj = {
  car: "Toyotal",
  model: "axio",
  year: "2007",
};

sessionStorage.setItem("myObj", JSON.stringify(myObj));
const retrieve = JSON.parse(sessionStorage.getItem("myObj"));
alert(`Data have been retrieved:${retrieve.car} `);
sessionStorage.remove("myObj");
```

### 3. Storage Comparison Script


 Write a script that saves data to both `localStorage and sessionStorage`, retrieves the data, and compares the results.

 
```javascript
const myObj = {
  car: "Toyotal",
  model: "axio",
  year: "2007",
};

localStorage.setItem("myObj", JSON.stringify(myObj));
const retrieve = JSON.parse(localStorage.getItem("myObj"));


sessionStorage.setItem("myObj", JSON.stringify(myObj));
const retrieve = JSON.parse(sessionStorage.getItem("myObj"));
alert(`Data have been retrieved:${retrieve.car} `);
localStorage.remove("myObj");
```

### 4. Clear Storage Script:

Create a script that clears all data from both `localStorage and sessionStorage`, and verifies the operation.

```javascript
localStorage.clear();
sessopmStrorage.clear();
```