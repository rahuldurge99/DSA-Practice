class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
        
    }
}

class Queue{
    constructor(value){ 
        const newNode =  new Node(value)
        this.first = newNode ;
        this.last = newNode ;
        this.length = 1 ;
    }

    enqueue(value){
        let newNode = new Node(value)
        if ( this.length === 0 ) {
            this.first = newNode ;
            this.last = newNode ;
        }
        this.last.next = newNode ;
        this.last = newNode ;
        
        this.length++
        return this;

    }

    dequeue(){
        if (this.length === 0) {
            return console.log("Nothing is in Queue to Dequeue");
            
        }
        if ( this.length === 1 ) {
            this.first = null ; 
            this.last = null ;
        }
        let temp = this.first
        this.first = this.first.next ;
        temp.next = null ;
        this.length--
        return this;
    }
}

let addingEle = new Queue(0)
addingEle.enqueue(1)
addingEle.enqueue(2)
addingEle.dequeue()
addingEle.enqueue(2)
console.log(addingEle);
