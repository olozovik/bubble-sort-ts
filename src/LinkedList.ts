class Node {
    data: number;
    next: Node | null = null;

    constructor(data: number) {
        this.data = data;
    }
}

export class LinkedList {
    head: Node | null = null;

    add(data: number): void {
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

    get length(): number {
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

    at(index: number): Node {
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
            } else break;
        }

        throw new Error('Index out of the list');
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        if (!this.head) {
            throw new Error('List is empty');
        }

        return this.at(leftIdx).data > this.at(rightIdx).data;
    }

    swap(leftIdx: number, rightIdx: number): void {
        if (!this.head) {
            throw new Error('List is empty');
        }

        const leftNode = this.at(leftIdx);
        const rightNode = this.at(rightIdx);

        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }

    print(): void {
        if (!this.head) {
            throw new Error('List is empty');
        }

        let node: Node | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
