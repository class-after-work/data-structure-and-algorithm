import { Deque } from "../src/deque.mjs";

let deque = new Deque();

console.log("O N E");
console.log(`1. isEmpty : : : ${deque.isEmpty()}`)
deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(4);
deque.addFirst(5);
console.log(`2. isEmpty : : : ${deque.isEmpty()}`)
console.log(deque.printAll())

console.log("T W O");
deque.removeFirst();
deque.printAll()
deque.removeFirst();
deque.printAll()
deque.removeFirst();
deque.printAll()
deque.removeFirst();
deque.printAll()
deque.removeFirst();
deque.printAll()
console.log(`isEmpty : : : ${deque.isEmpty()}`);

console.log("T H R E E");
console.log(`isEmpty : : : ${deque.isEmpty()}`);
deque.addLast(1);
deque.addLast(2);
deque.addLast(3);
deque.addLast(4);
deque.addLast(5);
console.log(`isEmpty : : : ${deque.isEmpty()}`);
console.log(deque.printAll());

console.log("F O U R");
console.log(`isEmpty : : : ${deque.isEmpty()}`);
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
console.log(`isEmpty : : : ${deque.isEmpty()}`);
