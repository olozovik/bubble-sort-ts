import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollection';

const numbers = new NumbersCollection([2, 1, 3, 0]);
const numbersSort = new Sorter(numbers);
numbersSort.sort();
console.log(numbers.data);

const string = new StringCollection('fedCba');
const stringSort = new Sorter(string);
stringSort.sort();
console.log(string.data);
