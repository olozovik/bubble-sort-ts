import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([2, 1, 3, 0]);
const numbersSort = new Sorter(numbers);
console.log(numbersSort.sort());
console.log(numbers.data);
