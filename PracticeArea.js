    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters of the first word
    for (let i = 0; i <= strs[0].length; i++) {
        // Check if this character is present in the same position of every string
        if (!strs.every((string) => string[i] === strs[0][i])) {
            // If not, return the string up to and including the previous character
            return strs[0].slice(0, i);
        }
    }

    return strs[0];

let aa = ['tom','tony','jerry'];
console.log(aa[1][1])

let str = '(([]))' ;
var isVaild = function(str){
    let current, stackArr = [];
    for (let i = 0; i<str.length; i++){
        if(str[i]==='(' || str[i]==='[' || str[i]==='{'){
            stackArr.push(str[i]);
        } 
        else if( str[i]===')'){
            if (stackArr.pop() !== '('){
                return false;
            }
        }
        else if( str[i]===']'){
            if (stackArr.pop() !== '['){
                return false;
            }
        }
        else if( str[i]==='}'){
            if (stackArr.pop() !== '{'){
                return false;
            }
        }
    }
    return true;
}


let twoSum = (nums, target) =>{
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length-1; j++){
            if(nums[i]+nums[j] == target){
                return [i,j];
            } else {
                return null;
            }
        }
    }
}

const long = (strs) =>{
    if(!strs.length) return "";
    let firstStr = strs[0];
    for(let i = 0; i< firstStr.length; i++){
        if(!strs.every(ele => {return ele[i] === firstStr[i]})){
            return firstStr.slice(0,i);
        }
    }
}
let strs = [""];
console.log(strs.length)



/**
 * @param {string} s
 * @return {boolean}
 */
var isBILL = function(str) {
    let current, stackArr = [];
    for (let i = 0; i<str.length; i++){
        if(str[i]==='(' || str[i]==='[' || str[i]==='{'){
            stackArr.push(str[i]);
        } 
        else if( str[i]===')'){
            if (stackArr.pop() !== '('){
                return false;
            }
        }
        else if( str[i]===']'){
            if (stackArr.pop() !== '['){
                return false;
            }
        }
        else if( str[i]==='}'){
            if (stackArr.pop() !== '{'){
                return false;
            }
        }
    }
    return stackArr.length === 0;
};

var isValid = function(s) {
    let stack = [];
    for(let i=0; i < s.length ; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i]);
        } else if (s[i] === ")"){
            if(stack.pop() !== "(" ){
                console.log(stack)
                return false;
            }
        } else if (s[i] === "]"){
            if(stack.pop() !== "[" ){
                return false;
            }
        } else if (s[i] === "}"){
            if(stack.pop() !== "{" ){
                return false;
            }
        }
    }
    return s.length === 0;
};
let s= "()";
console.log(isValid(s));
console.log(isBILL(s));


let l1 = [1,2,3,5,6]
let l2 = [3,4,6,7,8]

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next) 
}

let question = (l1,l2) =>{
    while(l1 && l2){
        if(l1.val <= l2.val){
            console.log(l1.val)
            result.next = new ListNode(l1.val)
            
            result = result.next
            l1 = l1.next
        }
    console.log(l1)
    console.log(result)
    console.log(result.next) 
}}
console.log(question(l1.val))


var mergeTwoLists = function(list1, list2) {
    let result = new ListNode(), l3 = result;

    while(list1 && list2){
        if(list1.val <= list2.val){
            result.next = new ListNode(list1.val)
            
            result = result.next
            list1 = list1.next
        }
        else if(list2.val < list1.val){
            result.next =new ListNode(list2.val)

            result = result.next
            list2 = list2.next
        }
    }
    while(list1){
        result.next = new ListNode(list1.val)
            
        result = result.next
        list1 = list1.next
    }

    while(list2){
        result.next = new ListNode(list2.val)
            
        result = result.next
        list2 = list2.next
    }
    return l3.next
};




function makeAdder(x){
    return function(y){
        return x+y
    }
}

var add5 = makeAdder(5)
console.log(makeAdder(5))
console.log(add5(2))

let bar = [1,8,3,6,89,11,54]
console.log(bar.push(2));
console.log(bar)

push()

shift()
unshift()