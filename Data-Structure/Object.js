const obj = {
    name: 'Dylan',
    age:26,
    "hello": "kitty",
    true: false,
    sayMyName: function(){
        console.log(this.name);
    }
};

// add
obj.newKey = 'newValue';
// delete
delete obj.deleteKey;

console.log(obj.name); // output: Dylan
console.log(obj['name']); // output: Dylan
console.log(obj.hello); // output: kitty 可以用逗號直接寫
console.log(obj['hello']); // output: kitty
console.log(obj[true]); // output: false 這種寫法只有boolean可以

## Object : Big-O 
    Insert - O(1)
    Remove - O(1)
    Access - O(1)
    Search - O(n)
    Object.keys() - O(n)
    Object.values() - O(n)
    Object.entries() - O(n)