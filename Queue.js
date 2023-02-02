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