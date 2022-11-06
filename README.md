# Typescript 練習

## 安裝 typescript

全域安裝：`sudo npm i -g typescript`
查看版本號：`tsc -v`

## 編譯 ts file

編譯指定檔案：`tsc {fileName}`

觀察檔案即時編譯： `tsc --watch {fileName}`

## 產生 ts config

產生 config file：`tsc --init`

有 config 的話，可直接輸入 `tsc` or `tsc --watch` 進行編譯

## Folder structure

`rootDir`：要編譯的 files 的路徑

`outDir`：編譯後產生 files 的路徑

修改 config 的 `outdir` 改為 "./dist"，`rootDir` 改為 "./src"

## 基本型別

```ts
let id: number = 6
let company: string = 'Abe co.'
let isPublished: boolean = true
let x: any = 'hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'string']
```

## Tuple

1. 不可變(immutable)
2. 有順序性的
3. 一開始就已經固定長度
4. 允許包含不同的值

```ts
let person: [number, string, boolean] = [2, 'bird', true]
```

## Union

可能為不只一種型別

```ts
let pid: string | number = 22
```

## Enum

```ts
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
```

## Object type

```ts
type User = {
	id: number
	name: string
}

const user: User = {
	id: 1,
	name: 'John',
}
```

## Type Assertion

型別斷言可以手動指定一個值的型別

```ts
let cid: any = 1

let customerId_1 = <number>cid
let customerId_2 = cid as number // same as above
```

## Functions

```ts
function addNum(x: number, y: number): number {
	return x + y
}

function log(message: string | number): void {
	console.log(message)
}
```

## Interface

介面用來定義物件的型別，在 ts 中可用來對類別的行為進行抽象之外，也可以對物件的形狀進行描述

與 type 的不同之處在於 type 可以用來描述 union type, interface 則不能使用 union

```ts
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
```

## Class

```ts
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
```

## Subclass

```ts
class Employee extends Person {
	position: string

	constructor(id: number, name: string, position: string) {
		super(id, name)
		this.position = position
	}
}

const emp = new Employee(3, 'Shawn', 'Developer')
```

## Generics 泛型

指在定義函式、介面或類別的時候，不預先指定具體的型別，而在使用的時候再指定型別的一種特性。

```ts
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'john', 'joe'])
```
