class Node {
    constructor(value) {
        this.head = value
        this.next = null
    }


}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode
        this.length++;
        return this;
    }
 
    pop() {

        if (!this.head) {
            return console.log("No head is present");

        }
        let temp = this.head;
        let prev = this.head;

        while (temp.next) {
            prev = temp;
            temp = prev.next
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head
        this.head = newNode

        this.length++
        return newNode;

    }

    shift() {
        let firstNode
        if (!this.head) {
            return console.log("No head is present");

        }
        firstNode = this.head
        this.head = this.head.next

        firstNode.next = null

        if (this.length === 0) {
            this.tail = null
        }

        this.length--
        return firstNode
    }

    getFirst() {
        if (!this.head) {
            return console.log("No head is present");
        }
        let firstElement = this.head
        return firstElement;
    }

    getLast() {
        if (!this.tail) {
            return console.log("No tail is present");
        }
        let temp = this.head
        while(temp){
            if (!temp.next) {
                return temp
            }
           temp = temp.next
        }
    }

    get(index){
        let counter = 0
        let temp = this.head
        while(temp){
            if (counter === index) {
                return temp;
            }
            counter++;
            temp = temp.next
        }


    }

    set(index, newValue){
    let temp =  this.get(index)
    if (temp) {
        temp.value = newValue;
        return true;
    }
    return console.log("Not found reqiured index");
    
    }

    insert(index, value){
        let newNode = new Node(value)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        if (index === 0) {
            this.unshift(value)

        }
        if (index === this.length) {
            this.push(value)
        }

        let temp = this.get(index - 1)
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++
        return true;

    }

    size(){
       let counter = 0
       let temp = this.head
       while(temp){
        counter++
        temp = temp.next
       }
       return `Size is ${counter}`;
    }

    clear(){
        this.head = null 
    }
}

let myLinkedList = new LinkedList(0)
myLinkedList.push(1)
myLinkedList.push(2)
// myLinkedList.pop()

// myLinkedList.unshift(0)
// myLinkedList.shift()

console.log(myLinkedList);

// console.log( myLinkedList.getFirst());
// console.log( myLinkedList.getLast());

// console.log(myLinkedList.get(1));
// console.log(myLinkedList.set(2, 20));
myLinkedList.insert(1, 10)
// console.log(myLinkedList.size());
console.log(myLinkedList.clear());
 
// console.log(myLinkedList);








