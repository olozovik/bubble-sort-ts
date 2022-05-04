"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx] > this.data[rightIdx];
    }
    swap(leftIdx, rightIdx) {
        const temp = this.data[leftIdx];
        this.data[leftIdx] = this.data[rightIdx];
        this.data[rightIdx] = temp;
    }
}
exports.NumbersCollection = NumbersCollection;
