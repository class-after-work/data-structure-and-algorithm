import { HashSet } from "../src/hash-set.mjs";

const hashSet = new HashSet()

console.log(hashSet.isEmpty())
hashSet.add(1)
hashSet.add(2)
hashSet.add(3)
hashSet.add(4)
console.log(hashSet.isEmpty())
hashSet.printAll()

console.log(hashSet.isContain(1))
hashSet.remove(1)
console.log(hashSet.isContain(1))

console.log(hashSet.isContain(2))

hashSet.clear()
hashSet.printAll()
console.log(hashSet.isEmpty())


