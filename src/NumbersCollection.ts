import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
    data: number[];

    constructor(data: number[]) {
        super();
        this.data = data;
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return this.data[leftIdx] > this.data[rightIdx];
    }

    swap(leftIdx: number, rightIdx: number): void {
        const temp = this.data[leftIdx];
        this.data[leftIdx] = this.data[rightIdx];
        this.data[rightIdx] = temp;
    }
}
