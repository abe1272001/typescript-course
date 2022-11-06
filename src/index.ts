// Basic Type
let id: number = 6
let company: string = 'Abe co.'
let isPublished: boolean = true
let x: any = 'hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'string']

// Tuple: specify type
let person: [number, string, boolean] = [2, 'bird', true]

// Tuple Array
let employee: [number, string][] = []

employee = [
	[2, 'JJ'],
	[3, 'Hank'],
	[4, 'Jack'],
]

//Union: hold more than one type
let pid: string | number = 22

pid = '22'

//Enum
enum Direction1 {
	Up = 1, // 若沒給值，會從 0 開始
	Down,
	Left,
	Right,
}

enum Direction2 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}

// Object
type User = {
	id: number
	name: string
}

const user: User = {
	id: 1,
	name: 'John',
}

//Type Assertion: tell compiler that we want to treat an entity as a different type
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number // same as above

// Functions
function addNum(x: number, y: number): number {
	return x + y
}

function log(message: string | number): void {
	console.log(message)
}

// Interfaces
interface UserInterface {
	readonly id: number
	name: string
	age?: number
}

const user1: UserInterface = {
	id: 1,
	name: 'John',
}

interface MathFunc {
	(x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

//The different between type and interface: type can be use to describe union, but interface cannot be.
type Point = number | string
const p1: Point = 22

interface PersonInterface {
	id: number
	name: string
	register(): string
}

//Classes
class Person implements PersonInterface {
	// public: 可被外部使用
	// private: 僅能在此class內使用
	// protected: 能夠在此 class 或是 extend class 使用
	id: number
	name: string

	constructor(id: number, name: string) {
		this.id = id
		this.name = name
	}

	register() {
		return `${this.name} is now registered`
	}
}

const abe = new Person(1, 'Abe Chen')
const mike = new Person(2, 'Mike Jordan')

// Subclasses
class Employee extends Person {
	position: string

	constructor(id: number, name: string, position: string) {
		super(id, name)
		this.position = position
	}
}

const emp = new Employee(3, 'Shawn', 'Developer')

// console.log(emp.register())

// Generics
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'john', 'joe'])
