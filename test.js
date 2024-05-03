// function sumodd(arr,index)
// {
//     if(index==arr.length){
//         return 0;
//     }
//     if(arr[index]%2==0){
//         return arr[index]+sumodd(arr,index+1)
//     }else{
//         return sumodd(arr,index+1)
//     }
// }
// var arr=[1,3,45,6,7]
// console.log(sumodd(arr,0))
// function reverce(arr,s,e){
//     if(s>=e){

//         return ;
//     }
//     [arr[s],arr[e]]=[arr[e],arr[s]]
//     reverce(arr,s+1,e-1)
// }

// var arr=[1,3,45,6,7]
// reverce(arr,0,arr.length-1)
// console.log(arr)

// function sum(n){
//     if(n==0){
//         return 1
//     }
//     if(n%2==0){
//         return n+sum(n-1)
//     }else{
//         return sum(n-1)
//     }
   
// }

// console.log(sum(5))


// function re(arr,t,s,e){
//     if(s>e){
//         return -1;
//     }
//     let m=Math.floor((s+e)/2)
//     if(arr[m]==t){
//         return m
//     }
//     if(t<arr[m]){
//         return re(arr,t,s,e=m-1)
//     }
//     if(t>arr[m]){
//         return re(arr,t,s=m+1,e)
//     }
// }
var arr=[2,34,6,7,38,5]
// console.log(re(arr,6,0,arr.length-1))
console.log(arr[-1]);