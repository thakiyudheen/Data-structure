class node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null 
        this.tail=null
        this.size=0;
    }
    // preppendhead(data){

    //     const newnode=new node(data)
        
    //     if(this.head){
    //         newnode.next=this.head
    //         this.head=newnode
    //         this.size++
           
           
    //     }else{
    //         this.head =newnode
            
    //         this.head=newnode
    //         this.size++
    //     }
       
    // }
    append(data){
        const newnode=new node(data)
     this.current=this.head
     if(this.current){
        this.tail.next=newnode
        this.tail=newnode
        this.size++
        return;
     }else{
         this.head=newnode
         this.tail=newnode
         this.size++
         return;
     }
    }
    pop(){
        //  console.log("here reched",this.head.data,this.tail.data);
       this.current=this.head
       this.pre=null;
       this.removele=null
       while(this.current&&this.current!=this.tail){
        
        this.pre=this.current
        this.current=this.current.next
       }
       if(this.current==this.tail){
        this.removele=this.tail.data
        this.pre.next=null
        this.tail=this.pre
        this.size--;
        return this.removele
       }

    }
    shift(){

        this.current=this.head
        this.removele=null
        if(this.current){
            this.removele=this.head;
            this.head=this.head.next
            this.size--;
            return this.removele.data ;
            
        }else{
            console.log("empty");
        }
    }
    peak(){
        if(this.head){
            return this.head.data
        }else{
            return null;
        }
    }
    getsize(){
        return this.size
    }
    isempty(){
        if(this.head==null){
           return true;
        }
        return false;
    }
    print(){
        
        this.current=this.head
        while(this.current){
            console.log(this.current.data);
            this.current=this.current.next
        }
    }
}
module.exports =  linkedlist
// const nl=new linkedlist()
// nl.preppendhead(1)
// nl.preppendhead(2)
// nl.preppendhead(3)
// nl.pop()

// nl.print()
// console.log(nl.getsize());
// console.log(nl.isempty());