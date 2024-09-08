function binarySearch (arr,target) {

    let left = 1;
    let right = arr.length;

    while(left<= right) {
        let mid = Math.floor((left+right)/2);

        if(arr[mid] === target) {
            return arr.indexOf(arr[mid]);
        }

        if(arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return 'no target found';
}


let arr = [1,2,3,4,5,6,7,8];

console.log(binarySearch(arr,8))