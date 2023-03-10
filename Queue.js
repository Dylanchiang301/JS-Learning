// Queue

1. 定義函數
enqueue(ele):  從後面插入一個元素
dequeue(): 從前面移除元素
front():  return 最前面的值
clear(): 清空 Queue 裡的所有元素
size(): return 長度

2. 用class的方式，使用Array來建立一個Queue
class Queue {
    constructor () {
      this.list = []
    }
    // 插入一個元素
    enqueue( ele ){
      this.list.push(ele)
    }
    // 從頭移除元素
    dequeue(){
      this.list.shift();
    }
    // 總共幾個
    size(){
      return this.list.length;
    }
    // 回傳最前面的 ele
    front(){
      return this.list[0]
    }
      // 清掉全部
    clear(){
      this.list = []
    }
  }
  
  let queueAnimals = new Queue()
  queueAnimals.enqueue('duck')
  queueAnimals.enqueue('deer')
  queueAnimals.enqueue('bear')
  console.log(queueAnimals.size())

  3. Circular Queue

  class CircularQueue {
    constructor(capacity){
      this.items = new Array(capacity);
      this.capacity = capacity;
      this.rear = -1;
      this.front = -1;
      this.currentLength = 0;
    }

    isFull(){
      return this.currentLength === this.capacity
    }

    isEmpty(){
      return this.currentLength === 0
    }

    enqueue(ele){
      if(!this.isFull()){
        this.rear = (this.rear + 1) % this.capacity
        this.items[this.rear] = ele
        this.currentLength += 1
        if(this.front === -1){
          this.front = this.rear;
        }
      }
    }

    dequeue(){
      if(this.isEmpty()){
        return null;
      }
      const item = this.items[this.front]
      this.items[this.front] = null
      this.front = (this.front + 1) % this.capacity
      this.currentLength -= 1
      if(this.isEmpty()){
        this.rear = -1
        this.front = -1
      }
      return item
    }

    peek(){
      if(!this.isEmpty()){
        return this.items[this.front]
      }
      return null
    }

    print(){
      if(this.isEmpty()){
        console.log('Queue is empty')
      } else {
        let i
        let str ='';
        for(i = this.front; i !== this.rear; i=(1+1) % this.capacity){
          str += this.items[i] + " "
        }
        str += this.items[i]
        console.log(str)
      }
    }
  }

  //測試

  const circularQueuetest = new CircularQueue(5);
  console.log(circularQueuetest.isEmpty()); // output: true
  circularQueuetest.enqueue(10);
  circularQueuetest.enqueue(20);
  circularQueuetest.enqueue(30);
  circularQueuetest.enqueue(40);
  circularQueuetest.enqueue(50);
  console.log(circularQueuetest);
  /* CircularQueue {
      items: [ 10, 20, 30, 40, 50 ],
      capacity: 5,
      rear: 5,
      front: 0,
      currentLength: 5
    }
    */
  console.log(circularQueuetest.isFull()); // output: true
  circularQueuetest.print()
  console.log(circularQueuetest);
