function fbin(n) {
    if (n < 2) {
        return n;
    }
    return fbin(n - 1) + fbin(n - 2);
}

var c = fbin(1);
console.log(c);