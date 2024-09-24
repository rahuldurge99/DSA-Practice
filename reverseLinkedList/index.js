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

    reverse() {
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        if (this.length === 1) {
            this.head = this.tail;
            this.tail = this.head;
        }
        let temp = this.head
        this.head = this.tail;
        this.tail = temp;
        let next = temp;
        let prev = null

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}

const myReverseLinkedList = new LinkedList(1)
myReverseLinkedList.push(2)
myReverseLinkedList.push(3)
myReverseLinkedList.push(4)

console.log(myReverseLinkedList.reverse());
