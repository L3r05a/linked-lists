import { Node } from "./node.js";

export class LinkedList {

    #head;

    constructor () {
        this.#head = null;
    }

// Methods

append(value) {

const newNode = new Node(value);

if(this.#head === null) { //if the list is empty
    this.#head = newNode; //the head value is the new node
}
else {
    let current = this.#head; 
    while(current.nextNode !== null) { //if the nextNode value is not null
        current = current.nextNode; //make current refer to the nextNode value
        
    }

    current.nextNode = newNode; 
    //when the nextValue IS null, the current nextNode points to newNode
}

}

prepend (value) {

const newNode = new Node(value);

    if(this.#head === null) { //if empty head points to newNode
        this.#head = newNode;
    } else {
        
    newNode.nextNode = this.#head; //newNode nextNode points to the old head

    this.#head = newNode;  //newNode is the new head

    }

}

size () {

    let current = this.#head;
    let counter = 0;

    while (current !== null) { 
        current = current.nextNode; //putting a reference to the nextNode object in current
        counter ++;
        
    }

    return counter; // returns 0 if current is null
}

head () {
    let current = this.#head;

    if (current === null) {
        return undefined
    } else {
        return current.value;
    }

}

tail () {
    let current = this.#head;
    if(current === null) {
        return undefined;
    }
    while (current.nextNode !== null) {
        current = current.nextNode;
    }

    return current.value;
}

at(index) {
    let current = this.#head;
    let counter = 0;

    while (current !== null){

       if (counter === index){
        
        return current.value;
        }
        counter ++;
        current = current.nextNode
    } 
        return undefined;
}




toString () {
    let current = this.#head;

    let result = [];

    while (current !== null) { //push the value of each node to result until ypu reach nextNode === null
        result.push(current.value);
        current = current.nextNode;
             
    }

    const string = result.join(" -> ") + " => null";

    

    return string;
}


}