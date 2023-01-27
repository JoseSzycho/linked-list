//must create package.json in order to work

import LinkedList from "./LinkedList.js";

let list = new LinkedList();

list.append(5)
list.append(4)
list.append(2)
list.append(3)
list.append(1)

console.log(list.show());