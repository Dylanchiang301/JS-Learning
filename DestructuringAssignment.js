// 解構賦值
 *沒有定義的值就是undefined！
1. Array 中的解構賦值
 #將Array中的資料賦值給各個變數
    let arr1 = [11,22,33];
    let [d1, d2, d3] = arr1; //這個動作就是分別賦值 
    console.log(d1); // 11

 #進階變形
  -宣告與賦值分開
    let arr2 = [3,4,5];
    let a1, a2, a3;
    [a1,a2,a3] = arr2;
    console.log(a2); // 4
  -預設值
    let arr3=[3,4];
    let b1,b2,b3;
    [b1, b2=2 ,b3=5] = arr3; //b2,b3都有給default值
    console.log(b1,b2,b3) //→ 依照順序賦值，b1=3, b2=4, b3=5
    // 若是b3沒有給予預設值，b3的結果會是undefined

2. Object 的解構賦值
 #按照Object中的成員名稱(key)做對應
    let obj1={ apple: 12, banana: 22};
     -在沒有做賦值動作的情況下，這邊直接console.log(apple)會出現apple is not defined，因為沒有這個變數的存在。
    let {apple,banana} = obj1; //做Object解構賦值時，這個變名稱就要對應到原Object 中的成員名稱(key)
    console.log(apple); // output: 12
 #進階變形
  -宣告與賦值分開
    let obj2 = {cap: 44, duu: 56};
    let cap, duu; // 宣告
    ( {cap, duu} = obj2 ); //賦值，注意！！！外層要加小括號()
    console.log(duu); //output: 56
  -預設值
    let obj3 = {eco: 200};
    let eco,foo;
    ( {eco, foo=310} =obj3 );
    console.log(eco,foo); //output 200 310
  -指定新的變數名稱
    let obj4 = {xx: 353, yy: 3479};
    let gshock,hell;
    ( {xx:gshock, yy:hell}=obj4 );
    console.log(gshock);
    console.log(xx); →這個會出現 xx is not defined
   
3. 變數的資料交換
    let name1 = 'dylan';
    let name2 = 'red';
    [name1,name2]=[name2, name1]
    console.log(name1);

4. 統整function的參數
    - 參數為物件
    # 原始寫法
    function add ( n1, n2) {
        console.log(n1+n2); //output 7
    }
    add(3,4); //呼叫函式
    # 參數用物件表示
    function add ( args ) {
        console.log(args.n1+ args.n2); //output 8
        console.log(args); //output {n1:4, n2:4}
    }
    add({n1:4, n2:4}); //function中的args 就是{n1:3, n2:4}
    # 使用解構賦值
    function add ({n1,n2}) {  //這裡參數的物件名稱要跟給予的一樣
        console.log(n1, n2); //output 7
    }
    add({n1:3, n2:4});

    # 改變參數名稱的做法
    function add ({n1:boy,n2:girl}) {
        console.log(boy+ girl); //output 12
    }
    add({n1:8, n2:4});

