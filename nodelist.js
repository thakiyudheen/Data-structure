class node{
    constructor(data){
        this.data=data;
        this.next= null;
    }
}
class nl{
    constructor(){
        this.head =null;
        this.tail=null;
    }
    add(data){
        const newnode=new node(data)
        this.temp= this.head;
        if(this.temp!=null){
            console.log("reach");
           
            this.tail.next=newnode;
            this.tail=newnode ;
            this.size++
            return;
        }else{
            this.head= newnode;
            this.tail= newnode;
            this.size++
            return
           
        }
       

    }
    
    findCenter() {
        let slowPointer = this.head;
        let fastPointer = this.head;

        while (fastPointer !== null && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }

        return slowPointer.data;
    }
    // circleor(){
    //     let sp=this.head;
    //     let fp=this.head;
    // while(sp!=null&&fp!=null){
    //     sp=sp.next;
    //     fp=fp.next.next;
    //     if(sp==fp){
    //         return true
    //     }
    //     return false
    // }
    ornot(){
        let sp= this.head
        let fp= this.head
        while(fp!=null&&fp.next!=null){
            sp= sp.next 
            fp=fp.next.next
            if( sp== fp ){
                return true;
            }
        }
        return false;
    
    }
    deletenth(index){
        // this.pre=this.head;
        this.current=this.head
        if(this.size>index){
            return 
        }else if(index==0){
            this.head=this.head.next
            return
        }else{
            for(let i=0 ;i<index-1;i++){
                this.current=this.current.next
            }
            let rm=this.current.next
            this.current.next=rm.next
            this.size--;
            return
        }
        
        
           
    }

    center(){
       let sp=this.head
       let fp=this.head
       while(fp!=null&&fp.next!=null){
        sp=sp.next 
        fp=fp.next.next;
       }
       return sp
    }
    display(){
        console.log("ysss");
        this.temp = this.head;
        var min=Infinity;
        var min2=Infinity;
        if(this.temp==null){
            console.log("no ones");
        }
        while(this.temp!=null ){
             console.log(this.temp.data)
            // if(this.temp.data<min){
            //     min2=min
            //     min=this.temp.data
            // }else if(this.temp.data<min2&&min<this.temp.data){
            //     min2=this.temp.data
            // }
            this.temp=this.temp.next;
        }
      
    }
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

}

const ad=new nl()
ad.add(19)
ad.add(3)
ad.add(10)
ad.add(11)
ad.add(4)
ad.add(88)
ad.add(17)
ad.deletenth(4)
ad.display()
// ad.reverse()
// ad.display()
// const center = ad.findCenter();
// console.log(ad.ornot())
// console.log(ad.center());
// console.log("Center of the linked list:", center);