// -----Creatind custom array by our needs and required methods
class MyArr {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++
        return this.length
    }

    get(index) {
        return this.data[index]
    }
}

const newArray = new MyArr();
newArray.push('mango')
newArray.push('orange')
newArray.push(true)
console.log(newArray);
console.log(newArray.get(1));

