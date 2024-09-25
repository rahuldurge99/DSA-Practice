class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size);
    }

    _hashFunction(key) {
        let sum = 0;
        const PRIME_NUMBERS = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {

            let charCode = key.charCodeAt(0) - 96;
            sum = (sum * PRIME_NUMBERS + charCode) % this.keyMap.length
        }
        return sum;

    }

    set(key, value) {
        let index = this._hashFunction(key);
        if (!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
        return this;
    }

    get(key) {
        let index = this._hashFunction(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
                else {
                    return undefined;
                }

            }
        }
        return undefined;
    }

    getAllKeys() {
        let keys = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0])

                }
            }

        }
        return keys;
    }

    getAllValues() {
        let values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1])

                }
            }

        }
        return values;
    }
}

let phoneBook = new HashTable();
phoneBook.set("john", "1234-1234")
phoneBook.set("alex", "5678-5678")
phoneBook.set("siri", "100-100")

console.log(phoneBook);
// console.log(phoneBook.get("alex"))
console.log(phoneBook.getAllKeys());
console.log(phoneBook.getAllValues());

