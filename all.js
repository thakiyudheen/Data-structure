// bubble sort 

// function bubble(arr){
//     for (let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>=arr[j+1]){
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

// insertion sort sort

// function insertion(arr){

//     for(let i=1;i<arr.length;i++){
//         let j=i-1;
//         let inserted=arr[i]
//         while(j>=0&&arr[j]>inserted){
//             arr[j+1]=arr[j]
//             j=j-1;
        
//         }
//         arr[j+1]=inserted
//     }
// }

// var arr=[1,-2,36,7,-9]
// insertion(arr)

// console.log(arr);


// quik sort

// function quik(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivo= arr[arr.length-1]
//     let left= []
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivo){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
       
//     }
//     return [...quik(left),pivo,...quik(right)]
// }
// var arr=[1,-2,36,7,-9]


// console.log(quik(arr));

function mergesort(arr){
    if(arr.length<2){
        return  arr
    }
    let m=Math.floor(arr.length/2)
    let left=arr.slice(0,m)
    let right=arr.slice(m)
    return merge(mergesort(left),mergesort(right))
}

function merge(left,right){
 let  sorted=[]
 while(left.length&&right.length){
    if(left[0]<=right[0]){
         sorted.push(left.shift())
    }else{
        sorted.push(right.shift())
    }
 }
 return sorted.concat(left,right)
}

var arr=[1,-2,36,7,-9]


console.log(mergesort(arr));