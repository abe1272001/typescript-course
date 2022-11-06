"use strict";
// Basic Type
let id = 6;
let company = 'Abe co.';
let isPublished = true;
let x = 'hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'string'];
// Tuple: specify type
let person = [2, 'bird', true];
// Tuple Array
let employee = [];
employee = [
    [2, 'JJ'],
    [3, 'Hank'],
    [4, 'Jack'],
];
//Union: hold more than one type
let pid = 22;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
//Type Assertion: tell compiler that we want to treat an entity as a different type
let cid = 1;
// let customerId = <number>cid
let customerId = cid; // same as above
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const p1 = 22;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const abe = new Person(1, 'Abe Chen');
const mike = new Person(2, 'Mike Jordan');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// console.log(emp.register())
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'joe']);
