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

    prepend(value){
        let node = new Node();
        node.value = value;
        node.nextNode = this.head;
        this.head = node;
    }

    show(){
        let pointer = this.head;
        while(pointer.nextNode != null){
            console.log(pointer.value);
            pointer = pointer.nextNode;
        }
    }

    size(){
        let counter = 0;
        let pointer = this.head;
        while(pointer.nextNode != null){
            counter++;
            pointer = pointer.nextNode;
        }
        return counter;
    }
}

export default LinkedList;