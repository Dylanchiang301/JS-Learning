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

