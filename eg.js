// function merge(arr) {
//     if(arr.length<2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return merge1(merge(left),merge(right))
// }
// function merge1(left,right) {
//     let sort=[]
//     while(right.length && left.length){
//     if(left[0]<=right[0]){
//         sort.push(left.shift())
//     }else{
//         sort.push(right.shift())
//     }
// }

//     return sort.concat(left,right)
// }


// let arr=[4,6,3,2,7,8,3,1]

// // console.log(merge(arr));
// function bubble(arr) {
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

// function insertion(arr){
//     for(let i=1;i<arr.length;i++)
//     {
//         let j=i-1
//         let insertion= arr[i]
       
//             while(j>=0&&arr[j]>insertion){
//                 arr[j+1]=arr[j]
//                 j--;
//             }
//         arr[j+1]=insertion
//     }
// }

// function selection(arr) {
//     for(let i=0;i<arr.length-1;i++){
//         let min=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             }
//         }
//         let temp =arr[i]
//         arr[i]=arr[min]
//         arr[min]=temp
//     }
// }
// function quik(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quik(left),pivot,...quik(right)]
// }

function merge(arr){
  if(arr.length<2){
    return arr
  }
  let mid= Math.floor(arr.length/2)
  let left = arr.slice(0,mid)
  let right= arr.slice(mid)
  return merge1(merge(left),merge(right))
}
function merge1(left ,right){
    let sort=[]
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sort.push(left.shift())
        }else{
            sort.push(right.shift())
        }
    }
    return sort.concat(left,right)
}

let arr=[4,6,3,2,7,8,3,1]
// quik(arr)
console.log(merge(arr));