function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let minin =i
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[minin]){
                minin=j
            }
            
        }
        [arr[i],arr[minin] ]=[arr[minin],arr[i] ]
    }
}
var arr=[4,6,2,5,9,1]
selection(arr)
console.log(arr);