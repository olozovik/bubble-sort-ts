import { Sorter } from './Sorter';

export class StringCollection extends Sorter {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return (
            this.data[leftIdx].toLowerCase() >
            this.data[rightIdx]?.toLowerCase()
        );
    }

    swap(leftIdx: number, rightIdx: number): void {
        const arr = this.data.split('');

        const temp = arr[leftIdx];
        arr[leftIdx] = arr[rightIdx];
        arr[rightIdx] = temp;

        this.data = arr.join('').trim();
    }
}
