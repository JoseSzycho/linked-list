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

    show(){
        let pointer = this.head;
        while(pointer.nextNode != null){
            console.log(pointer.value);
            pointer = pointer.nextNode;
        }
    }

}

export default LinkedList;