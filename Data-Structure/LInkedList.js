// # 鏈結串列：
// 不必以連續空間來儲存串列中的元素。由多個節點 (node) 所組成，
// 而每個 node 至少包含資料 (ele) 欄及連結欄位 (next)，透過某
// 個 node 的連結欄位可以取得下一個 node。

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkdeList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size
    }

    // BigO : O(1)
    prepend(value){   //加入資料到最前端
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else{
            node.next = this.head
            this.head = node
        }
        this.size ++
    }

    // BigO : O(n)
    append(value){ //加入資料到最後端
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else{
            this.tail.next = node;
            this.tail = node;
            // let prev = this.head;
            // while(prev.next){
            //     prev = prev.next;
            // }
            // prev.next = node;
        }
        this.size ++
    }

    insert(value, index){  // 在指定的位置加入資料
        if(index <0 || index > this.size){
            return
        }
        if(index === 0 ){
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; i < index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size ++
        }
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size --
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size === 1){
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null;
            this.tail = prev
        }
        this.size -- 
        return value
    }

    removeFrom(index){ //資料刪除by index
        if(index < 0 || index >= this.size){
            return null
        }
        let removedNode
        if(index === 0 ){
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head;
            for(let i = 0; i < index -1; i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size --
        return removedNode.value
    }

    removeValue(value){ //資料刪除by value
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size --
            return value
        } else {
            let prev = this.head
            while( prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size --
                return value
            }
            return null;
        }
    }

    search(value){ // 透過搜尋value 來尋找 index位置
        if(this.isEmpty()){
            return -1
        }
        let i = 0 ;
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
    }
    
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        } else {
            let curr = this.head
            let listValue = '';
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue);
        }
    }
}

module.exports= LinkdeList;

// const list = new LinkdeList();
// list.insert(10,0)
// list.insert(20,0)
// list.insert(40,1)
// list.insert(30,2)
// list.print()
// list.removeValue(40)
// list.print()
// list.removeFrom(2)
// list.print()


// console.log('List is Empty?', list.isEmpty()); //output: List is Empty? true
// console.log('List size?', list.getSize()); //output: List size? 0
// list.print() // output: 'List is Empty'
// list.prepend(12)
// list.prepend(20)
// list.print() // output: 20 12
// console.log(list) 
// /*output: 
// LinkdeList {
//   head: Node { value: 20, next: Node { value: 12, next: null } },
//   size: 2
// }*/
// list.prepend(20)
// list.print() // output: 30 20 12


