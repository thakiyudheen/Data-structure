const swap = require('swap-package')

let arr=[10,43,3,1,65,2];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]>arr[j]){
            swap(arr,i,j)
        }
    }
}

console.log(arr);