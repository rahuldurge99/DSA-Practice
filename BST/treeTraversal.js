class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BFS {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value)      return undefined;
            

            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                } else {
                    temp = temp.left
                    
                }

            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }

        }


    }

    breathFirstSearch(){
        let queue = [] ;
        let data = [] ;
        
    }
}


const treeTraversal = new BFS()

treeTraversal.insert(5)
treeTraversal.insert(8)
treeTraversal.insert(3)
treeTraversal.insert(1)

treeTraversal.insert(7)
treeTraversal.insert(9)
console.log(treeTraversal);
