interface ISortable {
    length: number;
    compare(leftIdx: number, rightIdx: number): boolean;
    swap(leftIdx: number, rightIdx: number): void;
}

export class Sorter {
    collection: ISortable;

    constructor(collection: ISortable) {
        this.collection = collection;
    }

    sort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
