"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const Sorter_1 = require("./Sorter");
class StringCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        var _a;
        return (this.data[leftIdx].toLowerCase() >
            ((_a = this.data[rightIdx]) === null || _a === void 0 ? void 0 : _a.toLowerCase()));
    }
    swap(leftIdx, rightIdx) {
        const arr = this.data.split('');
        const temp = arr[leftIdx];
        arr[leftIdx] = arr[rightIdx];
        arr[rightIdx] = temp;
        this.data = arr.join('').trim();
    }
}
exports.StringCollection = StringCollection;
