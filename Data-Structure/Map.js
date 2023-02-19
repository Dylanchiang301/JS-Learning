# key word → new Map
# 資料是key,value pair
# method: add/ delete/ has/ size/ clear

const map = new Map([['a',1],['b',2]]);
map.set('c',3); // add value
console.log(map); // output: { 'a' => 1, 'b' => 2, 'c' => 3 }
map.delete('b');
console.log(map); // output: { 'a' => 1, 'c' => 3 }
console.log(map.has('a')); // output: true
console.log(map.size); // output: 2

map.clear(); // 清除map