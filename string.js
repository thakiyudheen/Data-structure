var str="hello world"

var re=str.split(" ")
  var arr=[]
  var x=re[0].split("").reverse().join("")
  arr.push(x)
  arr.push(re[1].split("").join(""))
  console.log(arr.join(" "));