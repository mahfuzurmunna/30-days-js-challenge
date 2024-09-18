var canPlaceFlowers = function(flowerbed, n) {
    if(n===0) return true;
   flowerbed = [0,...flowerbed,0];
   let count = 0; 

   for(let i = 1; i < flowerbed.length-1;i++) {
    if(flowerbed[i] === 0) {
        if(flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
            flowerbed[i] = 1;
            count++;
        }
    }
   }
   return count >= n ? true : false;
};