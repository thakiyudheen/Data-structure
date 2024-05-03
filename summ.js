// function sum(n){
//     if(n<=1){
//         return 1;
//     }
//     sum(n-1)
//     console.log(n);
//     sum(n-1)
// }

// sum(5)

function odd(n){
    if(n==0){
        return 0;
    }else if(n%2==0){
        return n+odd(n-1)
    }else{
        return odd(n-1)
    }


}
console.log(odd(5));