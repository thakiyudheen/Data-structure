// function reverce(arr,s,e){
//     if(s>=e){
//         return;
//     }
//       [arr[s],arr[e]]=[arr[e],arr[s]]
//     //  [arr[s], arr[e]] = [arr[e], arr[s]];
//     reverce(arr,s+1,e-1)
// }

// const arr = [1, 3, 4, 4, 12, 7];

// reverce(arr,0,arr.length-1)
// console.log(arr);


// function re(arr,s,e){

//     if(s>=e){
//         return;
//     }
//     [arr[s],arr[e]]=[arr[e],arr[s]]
//     re(arr,s+1,e-1)
// }
// var arr=[1,34,5,6,7,8,9]
// re(arr,0,arr.length-1)
// console.log();

function re(arr,s,e){
    if(s>=e){
        return;
    }
   [arr[s],arr[e]]=[arr[e],arr[s]]
   re(arr,s+1,e-1)


}
var arr=[2,44,6,7,7,8,8,5,3]
re(arr,0,arr.length-1)
console.log(arr);