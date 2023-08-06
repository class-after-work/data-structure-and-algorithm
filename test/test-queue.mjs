import { Queue } from "../src/queue.mjs";

let queue = new Queue();

console.log("first")
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.front())

console.log("second")
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(`isEmpty: ${queue.isEmpty()}`)
