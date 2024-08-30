## Day-16 Recursion

### 1. Factorial and Fibonacci Script:
Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.

```javascript
//factorial
function factorial (number) {
    //base case
    if(number === 1) return 1;
    //recursion
    return number * factorial(number-1);
}

//fibonacci
function fibo (number,cache = {}) {
    //base case 
    if(number <= 1) return number;

    for(number in cache) {
        return cache[number];
    }

    //recursion
    cache[number] = number;
    
    return fibo(n-2) + fibo(n-1);
}
```


### 2.Array Recursion Script:
Create a script that includes recursive functions to find the sum and maximum element of an array.

```javascript
//sum of array
function sumOfArray (arr) {
    //base case
    if(arr.length === 1) {
        return arr[0];
    }

    return arr[0] + sumOfArray(arr.slice(1));
}

//max element
function maxELemnetOfArray (arr,curre) {
    //base case
    if(arr.length === 1) {
        return arr[0];
    }

    return Math.max(arr[0],maxElementOfArray(arr.slice(1)));
}
```

### 3. String Recursion Script:
Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.


```javascript
//reverse string
function reverseString(str) {
    //base case
    if(str.length === 0) return '';

    //recursion
    return reverseString(str.substring(1)) + str[0];
}

//palindrome search
function palindrome (str) {
    if(str.length <= 1) {
        return true;
    }

    if(str[0] !== str[str.length-1]) {
        return false;
    }

    return palindrome(str.substring(1,-1));
}
```