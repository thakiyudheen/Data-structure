  let swap = require('./swap1')
  
  arr=[10,9,3,4,32,6,2]
  for (let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]>arr[j]){
                swap(arr,i,j);
            }
        }
  }
  console.log(arr);


