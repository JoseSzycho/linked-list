//must create package.json in order to work

import LinkedList from "./LinkedList.js";
import Node from "./Node.js"

let list = new LinkedList();


list.append(5)
list.append(4)
list.append(2)
list.append(3)
list.append(1)
list.prepend(6)
list.prepend(7)
list.show();
console.log(`thie size is ${list.size()}`)
list.headd();
list.tail();
list.toString();