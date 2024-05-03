class node{
    constructor(data){
        this.data=data
        this.next=null
        
    }
}

class nodelist{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    add(data){
        const newnode=new node(data)
        this.temp=this.head;
        if(this.temp==null){
            this.head=newnode;
            this.tail=newnode;
            return
        }else{
            this.tail.next=newnode;
            this.tail=newnode;
            return ;
        }

    }
    delete(t){

        let pre =null;
        let slowPointer=this.head
        let fastPointer=this.head;
        while(this.fastPointer!=null&&this.fastPointer.next!=null){
            pre=slowPointer
            slowPointer=slowPointer.next
            fastPointer=fastPointer.next.next
        }

        if(pre!=null){
            pre.next=slowPointer.next
        }else{
            this
        }
    }
    display(){
        let str=""
        this.temp=this.head
        while(this.temp!=null){

            str+=this.temp.data
            this.temp=this.temp.next;
        }
        return str
    }
}

const nod=new nodelist()
nod.add(10)
nod.add(11)
nod.add(12)

console.log(nod.display())