// Stack

1. 定義函數
push(ele):  從最頂端加入
pop(): 從最頂端移除
top():  return 最上面的 ele
isEmpty(): 檢查是否為空
clear(): 清空 stack 裡的東西
size(): return 長度

2. 用class的方式，使用Array來建立一個Stack
push 從最頂端加入
pop 從最頂端
class Stack {
  constructor(){
    this.stackList = []
  }
  // 從最頂端加入
  push(ele) {
    this.stackList.push(ele)
  }
  // 從最頂端移除
  pop(){
    return this.stackList.pop()
  }
  // 總共堆了幾個元素
  size(){
    return this.stackList.length;
  }
  // 看最上面是甚麼
  top(){
    return this.stackList[this.stackList.length -  1]
  }
  // 通通刪掉
  clear(){
    this.stackList = []
  }

}
let stack = new Stack()
stack.push('盤子 1')
stack.push('盤子 2')

console.log(stack.size())


function test(){
  let val = [];
  val.push(1);
  return val.length === 1;
}
console.log(test());

let aaaa = [123,35,46546];
console.log(aaaa);