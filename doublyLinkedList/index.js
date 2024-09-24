class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail
        this.tail = newNode;
        this.length++
        return this;
    }

    pop(){
        let temp = this.tail ;
        if (!this.head) {
            return console.log("No head is present to pop()");
            
        }

        if (this.length === 1) {
            this.head  = null ;
            this.tail = null ;
        }
        this.tail = this.tail.prev ;
        this.tail.next = null ;
        temp.prev = null ;
        this.length-- ;
        return temp ;
    }

    unshift(value){
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        let temp = this.head;
        temp.prev = newNode ;
        newNode.prev = null ;
        newNode.next =  temp; 
        this.head = newNode;
        
        this.length++ ;
        return this;

    }

    shift(){
        if (this.length === 0) {
            return undefined;
        }
        if (this.length === 1) {
            this.head = null ;
            this.tail = null ;
            
        }
        let temp = this.head;
        
        this.head = this.head.next ;
        this.head.prev = null ;
        temp.next = null

        this.length--
        return temp ;


    }

}

const myDoublyLinkedList = new doublyLinkedList(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
myDoublyLinkedList.push(4)
myDoublyLinkedList.pop()
myDoublyLinkedList.unshift(0)
myDoublyLinkedList.shift()
console.log(myDoublyLinkedList);
