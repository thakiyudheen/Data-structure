// function bubbleSort(arr) {
//     var n = arr.length;

//     // Outer loop for each pass
//     for (var i = 0; i < n; i++) {
//         // Inner loop for pairwise comparison and swapping
//         for (var j = 0; j < n - 1; j++) {
//             // Compare and swap if necessary
//             if (arr[j] > arr[j + 1]) {
//                 // Swap elements
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
// }

// // Example usage:
// var myArray = [64, 34, 25, 12, 22, 11, 90];
// bubbleSort(myArray);

// console.log("Sorted array:", myArray);

// function bubble(arr){
//    for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             var temp=arr[i]
//             arr[i]=arr[j]
//              arr[j]=temp 
            
//         }
//     }
//    }
// }
//  // Example usage:



function bubble(arr){
    for(let i=0;i<arr.length;i++){
        
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){    
                    let temp=arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=temp 

                
            }
        }
    }
}
var myArray = [64, 34, 25, 12, 22, 11, 90];
bubble(myArray);

console.log("Sorted array:", myArray);