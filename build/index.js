"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbers = new NumbersCollection_1.NumbersCollection([2, 1, 3, 0]);
const numbersSort = new Sorter_1.Sorter(numbers);
console.log(numbersSort.sort());
console.log(numbers.data);
