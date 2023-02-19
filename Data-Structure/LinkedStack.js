const LinkdeList = require('./LInkedList');

class LinkedListStack{
    constructor(){
        this.list = new LinkdeList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        this.list.getSize()
    }

    print(){
        this.list.print()
    }
}

const stack = new LinkedListStack;
console.log(stack.isEmpty());
stack.push(20);
stack.push(30);
console.log(stack);
stack.push(40);
console.log(stack.pop);
console.log(stack);