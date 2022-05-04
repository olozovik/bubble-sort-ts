import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollection';
import { LinkedList } from './LinkedList';

// const numbers = new NumbersCollection([2, 1, 3, 0]);
// const numbersSort = new Sorter(numbers);
// numbersSort.sort();
// console.log(numbers.data);

// const string = new StringCollection('fedCba');
// const stringSort = new Sorter(string);
// stringSort.sort();
// console.log(string.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(-7);
const listSort = new Sorter(linkedList);
listSort.sort();
linkedList.print();
