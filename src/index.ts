import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([3, 1, -5, -7]);
numbers.sort();
console.log(numbers.data);

const string = new StringCollection('somE Random teXt');
string.sort();
console.log(string.data);

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(-3);
linkedList.add(1);
linkedList.add(-8);
linkedList.sort();
linkedList.print();
