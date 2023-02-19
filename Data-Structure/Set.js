# key word → new Set
# method: add/ delete/ has/ size/ clear

const set = new Set([1 ,3, 5 ]);
set.add(4); // 會加在最後面
console.log(set); // output: { 1, 3, 5, 4 }
console.log(set.has(4)); //回傳boolean output: true
set.delete(1);
console.log(set); // output: { 3, 5, 4 }
set.clear(); //清除這個set
console.log(set); // output: {}

1. Union 聯集 - 兩個集合中元素的新集合
const union = (firstSet, otherSet) => {
    // store union, use es6 Spread syntax
    return new Set([...firstSet, ...otherSet]); 
}

// 範例一
let a = new Set([1, 2, 3])
let b = new Set([2, 3, 4, 5, 6])
union(a, b); // 1, 2, 3, 4, 5, 6

// 範例二
let c = new Set();
c.add(1);
c.add(2);
c.add(3);
let d = new Set([1, 2, 3])
union(a, b); // {1, 2, 3, 4, 5, 6}

2. Intersection 交集 - 兩個集合中共有的元素
const intersection = (firstSet, otherSet) => {
    // store intersectionSet 
    let intersectionSet = new Set();
    firstSet.forEach(i => {
        if(otherSet.has(i) == true){
            intersectionSet.add(i)
        }
    })
    // get the same value
    return intersectionSet;   
}
// 範例
let a = new Set([1, 2, 3])
let b = new Set([2, 3, 4, 5, 6])
intersection(a, b); // {2, 3}

3. Symmetric Difference 對稱差 - 兩個集合的元素但不包含共有的重覆元素
// 運用 union 跟 intersection 達成對稱差
const difference = (firstSet, otherSet) => {
    // store union
    let differenceSet = union(firstSet, otherSet);
    let intersectionSet = intersection(firstSet, otherSet);
    differenceSet.forEach(i => {
        if(intersectionSet.has(i) == true){
            differenceSet.delete(i)
        }
    })
    
    return differenceSet;   
}
// 範例
let a = new Set([1, 2, 3])
let b = new Set([2, 3, 4, 5, 6])
difference(a, b); // {1, 4, 5, 6}

4. Subtraction 差集 - 一個包含存在第一個集合元素但不存在於第二集合的集合
const subtracting = (firstSet, otherSet) => {
    let subtractingSet = new Set([...firstSet]);
    otherSet.forEach(i => {
        if(subtractingSet.has(i) == true){
            subtractingSet.delete(i)
        }
    })
    return subtractingSet;
}

// 範例
let a = new Set([1, 2, 3])
let b = new Set([2, 3, 4, 5, 6])
console.log(subtracting(a, b)); // {1}