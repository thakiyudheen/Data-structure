// function sum(arr,index){
//     if(arr.length==index){
//         return 0;
//     }
//     return arr[index]+sum(arr,index+1)
// }

// const arr=[1,3,4,4,12,7]
// const sum1= sum(arr,0)
// console.log(sum1);

function sum(arr,index){
    if(arr.length<=index){
        return 0;
    }
    return arr[index]+sum(arr,index+1)
}

const arr=[12,34,5,6,1]
var sum1=sum(arr,0)
console.log(sum1);