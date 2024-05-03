class ht{
    constructor(size){
        this.table=new Array(size)
        this.size=size;
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        const index=this.hash(key)
        const bucket =this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let match=bucket.find(el=> el[0]==key)
            if(match){
               match[1]=value
            }else{
                this.table[index].push([key,value])
            }
        }
    }
    get(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            let match=bucket.find(el=>el[0]==key)
            return match[1]
        }
        
    }
    remove(key){
        const index=this.hash(key)
        const bucket =this.table[index]
        if(bucket){
            let match=bucket.find(el=>el[0]==key)
            if(match){
                bucket.splice(bucket.indexOf(match),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
            console.log(i,this.table[i]);
            }
        }
    }
}

const htt=new ht(40)
htt.set("name","thakiyu")
htt.set("year","2002")
htt.set("age","21")
console.log("this is age",htt.get("age"));
htt.set("aeg","67")
htt.remove("aeg")
htt.display()
