// var arr=[1,2,34,5,6,5]
// var arr1=[2,46,77,89]
// // var temp;
// // for(let i=0;i<arr.length/2;i++){
// //     temp=arr[i];
// //     arr[i]=arr[(arr.length-1)-i]
// //     arr[(arr.length-1)-i]=temp
// // }

// var x=arr1.concat(arr)
// console.log(x);

// function sum (n){
//     if(n<=1){
//         return 1;
//     }
   

//   return n+sum(n-1)
    
 
// }
// // const arr11=[1,35,5,7]
// // console.log(sum(5));
//  var x=sum(5)
//  console.log(x);

function sum(arr,index){

    if(index==arr.length){
        return 1;
    }
    return arr[index]+sum(arr,index+1)
}
var arr=[1,34,5,67,7]
console.log(sum(arr,0));