function mergesort(arr){
    if(arr.length<2){
        return arr
    }
   let middle=Math.floor(arr.length/2)
   let left=arr.slice(0,middle)
   let right= arr.slice(middle)

   return merge(mergesort(left),mergesort(right))

   
}
function merge(left,right){
    let sorted=[]


    while(left.length && right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }
        else{
            sorted.push(right.shift())
        }
    }
   return sorted.concat(left,right)
}

var arr=[1,-2,36,7,-9]


console.log(mergesort(arr));