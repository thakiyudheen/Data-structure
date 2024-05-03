class node
{
constructor(data){
    this.data=data
    this.next=null
}
}
class nl{
   constructor(){
      this.head=null
      this.tail=null 
      this.size=0;
    
   }

   push(data){
    const newnode=new node(data)
      this.temp=this.head

      if(this.temp){
        this.tail.next=newnode
        this.tail=newnode
        this.size++;
        return 
      }else{
        this.head=newnode
        this.tail =newnode
        this.size++
        return
      }
   }
   shift(){
    this.temp=this.head
    if(this.temp){
      this.shifted=this.head
      this.head=this.head.next
      this.size--;
      return this.shifted.data;
    }
   

   }
    pop(){
      this.temp=this.head
      let pre=null
    
        
        while(this.temp&&this.temp!=this.tail){
     
        pre=this.temp
        this.temp=this.temp.next
        }
      
      if(this.temp==this.tail){
        this.pop=this.tail
        pre.next=null
        this.tail=pre
        this.size--;
       
        return this.pop.data
      }

    }
    getSize(){
      console.log("this is size",this.size)
      return this.size

    }
    print(){
      this.temp=this.head
      while(this.temp){
        console.log(this.temp.data);
        this.temp=this.temp.next
      }
    }
}

module.exports =nl