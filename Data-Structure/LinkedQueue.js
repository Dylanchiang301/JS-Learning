const LinkdeList = require('./LInkedList');

class LinkedListQueue{
    constructor(){
        this.list = new LinkdeList()
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
        this.list.removeFromEndt()
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

const queue = new LinkedListStack;
console.log(queue.isEmpty());
queue.push(20);
queue.push(30);
console.log(queue);
queue.push(40);
console.log(queue.dequeue);
console.log(queue);