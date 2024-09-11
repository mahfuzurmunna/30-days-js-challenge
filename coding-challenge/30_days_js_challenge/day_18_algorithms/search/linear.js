function linearSearch (arr,target) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) result = i;
    }
    return result === 0 ? -1 : result;
}

let arr = [1,2,3,4,5];
console.log(linearSearch(arr,5))