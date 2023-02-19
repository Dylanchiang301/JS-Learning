// 桶(Bucket):雜湊表中儲存資料的位置，每一個位置對應唯一位址(Bucket Address)。
// 槽(Slot):每一個桶中的資料欄位，例如：一筆資料有2個欄位，則代表桶中有2個槽。
// 碰撞(Collision):若2筆資料經過雜湊函數運算後的雜湊值相同，也就是對應到相同位址時，稱為碰撞。
// 溢位(Overflow):資料經過雜湊函數運算後，雜湊值所指向的桶位址已滿，無法再儲存，稱為溢位。

class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0;
        for(let i =0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        const index = this.hash(key)
        //this.table[index] = value
        const bucket = this.table[index]
        if(!bucket){
            this.table.index = [[key,value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === item)
            if(sameKeyItem){
                sameKeyItem[1] = value  
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key){
        const index = this.hash(key)
        //return this.table[index]
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        //this.table[index] = undefined
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }

    display(){
        for(let i =0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }

}

const table = new HashTable(50);
table.set('name','dylan')
table.set('age', 27)
table.set('gen','male')
console.log(table.hash('gen'))
table.display()
/* output: 
1 27
14 male
17 dylan */
console.log(table.get('name'))
// output: dylan
table.set('mane', 'abby') //collision 衝突
table.display()
/*
1 27
14 male
17 abby */