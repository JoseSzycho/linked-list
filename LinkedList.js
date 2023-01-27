import Node from "./Node.js";

class LinkedList{
    constructor(){
        this.head = new Node();
    }

    append(value){
        let pointer = this.head;
        
        while(pointer.nextNode != null){
            pointer = pointer.nextNode;
        }

        pointer.value = value;
        pointer.nextNode = new Node();
    }


}

export default LinkedList;