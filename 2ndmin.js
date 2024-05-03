display(){
    this.temp = this.head;
    var min=Infinity;
    var min2=Infinity;
    if(this.temp==null){
        console.log("no ones");
    }
    while(this.temp!=null ){
        // console.log(this.temp.data)
        if(this.temp.data<min){
            min2=min
            min=this.temp.data
        }else if(this.temp.data<min2&&min<this.temp.data){
            min2=this.temp.data
        }
        this.temp=this.temp.next;
    }
    console.log(min,min2); 
}