// function insertion(arr){
//     for(let i=1;i<arr.length;i++){
//         let j=i-1
//         let insertion1= arr[i]
        
//         while(j>=0&&arr[j]>insertion1){
//             arr[j+1]=arr[j]
//             j=j-1;


//         }
//         arr[j+1]=insertion1
//     }
// }

// var arr=[1,-2,36,7,-9]
// insertion(arr)

// console.log(arr);



// function bubble(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
// }
// var arr=[1,-2,36,7,-9]
// bubble(arr)
// console.log(arr);
// function insertion(arr){
//     for(let i=1;i<arr.length;i++){
//        let j=i-1
//         let inserted=arr[i]
//         while(j>=0&&arr[j]>inserted){
//           arr[j+1]=arr[j]
//           j=j-1

//         }
//         arr[j+1]=inserted

//     }
// }

var arr=[1,-2,36,7,-9]
insertion(arr)

console.log(arr);