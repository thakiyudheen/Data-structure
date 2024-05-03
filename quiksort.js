function quik(arr){
     if(arr.length<2){
        return arr
    }
    let pre=arr[arr.length-1]
    let right=[]
    let left =[]
   
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>pre){
            right.push(arr[i])

        }else{
            left.push(arr[i])
        }
    }
    
    return [...quik(left),pre,...quik(right)]
}

var arr=[1,-2,36,7,-9]


console.log(quik(arr));

// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] <= pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// var arr = [1, -2, 36, 7, -9];
// var sortedArr = quickSort(arr);

// console.log(sortedArr);
