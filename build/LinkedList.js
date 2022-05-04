"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error('There are no any nodes');
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            if (node.next) {
                node = node.next;
            }
            else
                break;
        }
        throw new Error('Index out of the list');
    }
    compare(leftIdx, rightIdx) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIdx).data > this.at(rightIdx).data;
    }
    swap(leftIdx, rightIdx) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        const leftNode = this.at(leftIdx);
        const rightNode = this.at(rightIdx);
        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }
    print() {
        if (!this.head) {
            throw new Error('List is empty');
        }
        const dataArray = [];
        let node = this.head;
        while (node) {
            dataArray.push(node.data);
            node = node.next;
        }
        console.log(dataArray);
    }
}
exports.LinkedList = LinkedList;
