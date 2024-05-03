class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class nl{
    constructor(){
        this.head;
        this.tail;
    }
    addnode(data){
        
        const newnode=new node(data)
        this.temp=this.head;
        if(this.temp==null){
            this.head=newnode;
            this.tail=newnode;
            return;
        }else{
            this.tail.next=newnode
            this.tail=newnode;
            return;
        }
    }
    display(){
        
        this.temp=this.head;
        while(this.temp!=null){
            console.log(this.temp.data)
            this.temp=this.temp.next
        }
    }
    convert(arr){
        if(arr.length==0||arr==null){
            return null
        }

        for (const item of arr){
            
            this.addnode(item)
        }
    }
}

const add1=new nl()
var arr=[1,2,3,45,5,6,7]
// add1.convert(arr) 
add1.display()