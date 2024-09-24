class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.length = 1
    }

    push(value) {

        if (this.length === 0) {
            this.first = newNode;
        }

        const newNode = new Node(value)
        newNode.next = this.first
        this.first = newNode;
        // this.first.next = temp ;
        this.length++
        return this;

    }

    pop() {
        if (this.length === 0) {
            return console.log("Stack is not present");

        }

        let temp = this.first
        this.first = this.first.next
        temp.next = null
        this.length--
        return this;
    }

    
}

let stackValue = new Stack(1)
stackValue.push(2)
stackValue.push(3)
stackValue.push(4)
stackValue.pop()
console.log(stackValue);
