// function search(arr,target){
//  let s=0;
//  let e=arr.length;
//  while(s<=e){
//     let middle= Math.floor((s+e)/2)
//     if(arr[middle]==target){
//         return middle;
//     }else if(target<arr[middle]){
//       e=middle-1
//     }else{
//         s=middle+1
//     }
//  }

// }
// var arr=[2,4,5,6,10,13]
// console.log(search(arr,13))

// function search(arr,t,s,e){
//     if(s>e){
//  return -1;
//     }
//     let  m=Math.floor((s+e)/2)
//     if(arr[m]==t){
//         return m;
//     }
//     if( t>arr[m]){
//         return search(arr,t,s=m+1,e)
//     }
//     if(t<arr[m]){
//         return search(arr,t,s,e=m-1)
//     }

// }
// var arr=[2,4,5,6,10,13]
// console.log(arr.length);
// console.log(search(arr,13,0,arr.length-1))

// function search(arr,t){
//     let s=0;
//     let e=arr.length-1;
//     while(s<=e){
//         let m=Math.floor((s+e)/2)
//         if(arr[m]==t){
//             return m;
//         }else if(t<arr[m]){
//             e=m-1;
//         }else{
//             s=m+1;
//         }
//     }




// }
// var arr=[2,4,5,6,10,13]
// console.log(search(arr,13))

// function search(arr,t,s,e){
//     if(s>e){
//         return -1;
//     }
//     let m=Math.floor((e+s)/2)

        
    
//     if(arr[m]==t){
//         return m;
//     } 
//     if(t<arr[m]){
//         return search(arr,t,s,e=m-1)
//     }else{
//         return search(arr,t,s=m+1,e)
//     }
// }
// var arr=[2,4,5,6,10,13,8]

// console.log(search(arr,6,0,arr.length-1))


// function se(arr,t){
//     let s=0;
//     let e=arr.length-1
//     while(s<=e){
//         let m=Math.floor((e+s)/2)
//         if(arr[m]== t){
//             return m;
//         }else if(t<arr[m]){
//             e=m-1
//         }else{
//             s=m+1
//         }
//     }
//     return -1
// }

// var arr=[1,2,34,45,56,78]
//  var pos=se(arr,2)
//  console.log(pos);

// function bi(arr,t){
//   let  s=0;
//    let  e=arr.length-1
//    while(s<=e){
//     let m= Math.floor((s+e)/2)
//     if(arr[m]==t){
//         return m;
//     }else if(t<arr[m]){
//         e=m-1
//     }else{
//         s=m+1
//     }
//    }
//    return -1;

// }
// var arr=[1,2,4,5,7,8,9]
// console.log(bi(arr,7))
// using recursion  

// function bi(arr,s,e,t){
//     if(s>e){
//         return -1;
//     }
//     let m=Math.floor((e+s)/2)
//     // console.log(m)
//     if(arr[m]==t){
//         return m

//     }
//     if(t<arr[m]){
//         return bi(arr,s,e=m-1,t)
//     }
//     if(t>arr[m]){
//         return bi(arr,s=m+1,e,t)
//     }
// }
// var arr=[1,3,4,6,7,8]
// console.log(bi(arr,0,arr.length,4))

function bi(arr,t,s,e){
    if(s>e){
        return -1;
    }
    let m=Math.floor((e+s)/2)
    if(arr[m]==t){
        console.log(m)
        return m
    }
    if(t<arr[m]){
        return bi(arr,t,s,e=m-1)
    }
    if(t<arr[m]){
        
        return bi(arr,t,s=m+1,e)
    }

}
var arr=[1,3,4,6,7,8]
 console.log(bi(arr,4,0,arr.length))