// function bubblesort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp 
//             }
//         }
//     }
// }


// function inserotion(arr){
    
//     for(let i=1;i<arr.length;i++){
//         let inserted=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>inserted){
//             arr[j+1]=arr[j]
//             j=j-1;
//         }
//         arr[j+1]=inserted
//     }
// }



// function quiksort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//   let pivo =arr[arr.length-1]
//   let left=[]
//   let right=[]
//   for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<pivo){
//         left.push(arr[i])
//     }else{
//         right.push(arr[i])
//     }
//   }
//   return [...quiksort(left),pivo,...quiksort(right)]
// }
// function merge(arr){
//     if(arr.length<2){
//         return arr
//     }
//    let middle=Math.floor(arr.length/2)
//    let left=arr.slice(0,middle)
//    let right=arr.slice(middle)
//    return merge1(merge(left),merge(right))
// }
// function merge1(left,right){
//     let sorted=[]
//     while(left[0]&&right[0]){
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())

//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return sorted.concat(left,right)
// }

function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let minin=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minin]){
                minin=j
            }
        }
        let temp =arr[i]
        arr[i]=arr[minin]
        arr[minin]=temp
       
        
    }
    return arr
}


var arr=[3,5,1,2,4,6]

console.log(selection(arr))

