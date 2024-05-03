class hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let totel=0
        for(let i=0;i<key.length;i++){
            totel+=key.charCodeAt(i)
        }
        
        return totel % this.size
       
    }

    set(key,value){

        let index=this.hash(key)
        
        // this.table[index]=value
        const bucket=this.table[index]    
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let match=bucket.find(el=>el[0]==key)
            if(match){
                match[1]=value
            }else{
                this.table[index].push([key,value])
            }
        }    

    }
    get(key){
        let index=this.hash(key)
        // return this.table[index]
        const bucket=this.table[index]
        if(!bucket){
            return undefined;
        }else{
            let match=bucket.find(el=> el[0]==key )
            if(match){
                return match[1]
            }
        }
        
    }
    remove(key){
        let index=this.hash(key)
        // this.table[index]=undefined 
        const bucket=this.table[index]
        if(!bucket){
            return undefined
        }else{
            let  match=bucket.find(el=>el[0]==key)
            if(match){
                bucket.splice(bucket.indexOf(match),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
           
        }
    }
}

const ht=new hashtable(50)

ht.set("name","thakiyudheen kp")
ht.set("place","21")
ht.set("age","23")
ht.set("aeg","212")
// ht.set("age","22")
console.log("age is this",ht.get("age"))
// ht.remove("age")
ht.display()
// console.log(ht.get);