function oddsum(n){
    if(n==0){
        return 0;

    }else if(n%2!=0){
        return n+oddsum(n-1)
    }else{
        return oddsum(n-1)
    }
}


console.log(oddsum(5));