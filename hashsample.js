class ht{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let totel=0;
        for(let i=0;i<key.length;i++){
            totel +=key.charCodeAt(i)
        }
        return totel % this.size
    }
    set(key,value){
        const index=this.hash(key)
        const bucket=this.table[index]
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
            let match=bucket.find(el=> el[0]==key)
            return match[1]
        }
    }
    remove(key)
    {
        const index=this.hash(key)
        const bucket=this.table[index]
        if (bucket){
            let match=bucket.find(el=> el[0]==key)
            this.table[index].splice(this.table[index].indexOf(match),1)
        }else{
            console.log("not found")
        }
    }
   
    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
           
        }
    }
}

const htable=new ht(50)
htable.set("name","thakiyu")
htable.set("age","21")
htable.set("aeg","34")
console.log(htable.get("name")); 
// htable.remove("age")
htable.set("age","22")
htable.print()

