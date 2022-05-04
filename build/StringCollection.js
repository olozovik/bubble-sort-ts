"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
class StringCollection {
    constructor(data) {
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
        this.data = arr.join('');
    }
}
exports.StringCollection = StringCollection;
