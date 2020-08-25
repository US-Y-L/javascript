#### Js数据类型

* js数据类型分类

  * 6类 

  * 基本5类： String（字符串--一般用单引或双引号包裹），Number（数字），Boolean（布尔值），null（空对象），undefined（未赋值---js特有）

  * 引用（复杂）1类：Object（Object 对象  Array数组  function 函数）

  * 基本类型，由于数据量比较小，一般是直接存储在计算机内存中的栈中，而引用类型 存储数据量大所以引用类型数据是存储在计算的堆当中，然后再通过在栈中存储引用类型的名称和地址对应，通过地址指针指向该堆从而使用该堆中的数据。

  * 也就是说  引用类型：是数据存储在堆区，在栈区通过引用堆区地址来访问的数据类型就称之为引用类型

  * 当需要打印某种数据的类型时，使用typeof

    * typeof   变量或数据               typeof（变量或数据）  

    ```javascript
        <script>
            var a = 10;
            var b = '10';
    
            console.log( a, b);
            console.log(typeof(a), typeof b);
    
            var c;//undefined
            var d = null;//object
            var e = true;//boolean
    
            var f = {};//对象 object
            var g = [];//数组 object
            var h = function(){}//function
    
            console.log(typeof c, typeof d, typeof e, typeof f, typeof g, typeof h);
        </script>
    ```

    

* Number数据类型

  * number用来记录 整数和浮点数（正数和负数），还包括各种进制（8进制  16进制）的数字。

  * 当遇到计算无法得到正确的数字时，会返回NaN   Not a Number  不是一个数字

  * 当10 / 0  会得到infinity  无限

  * 小数运算问题：计算机是二进制存储数据的，所以在小数和小数运算时 存储近似值得到的结果不够精确

  * NaN不等于NaN

    ```javascript
        <script>
            var num = 10;//正整数
            var n1 = 3.1415926;//浮点数
            var n2 = -10;//负数
    
            // 8进制  0开头  后续数字小于等于 7
            var n3 = 017;
            console.log( n3);//15
    
            //   16进制  0x开头  0-9 A-F 组成
            // 0 1 2 3 4 5 6 7 8 9 A B C D E F  10 --- 16
            var n4 = 0x1f;
            console.log(n4);//31
    
            console.log('我' - 10);//NaN
            console.log(10/0);
    
            console.log(0.1 + 0.2);//0.30000000000000004
            console.log(0.07 * 100);//7.000000000000001
            console.log(7 / 100);
    
            console.log(NaN == NaN);//false
        </script>
    ```

* String字符串类型

  * 字符串需要用单引或双引号包裹

  * 表单value获取到的数据都是字符串类型

  * 字符串简单的属性和方法

    * length：获取字符串的字符长度--有多少个字符
    * charAt（下标）:通过下标获取字符串中下标对应的字符  下标从0开始计数
    * str[下标]：通过下标获取字符串中下标对应的字符---ie8+

    ```javascript
        <script>
            window.onload = function(){
                var str = 'abc';
                var str = '10';//数字字符串----编号 手机号
                var oIn = document.getElementById('txt');
                var oBtn = document.getElementById('btn');
    
                oBtn.onclick = function(){
                    console.log(oIn.value, typeof oIn.value);
                }
    
                // length
                var str = 'abcdefghijk';
                console.log(str.length);
    
                // charAt   str[]
                console.log(str.charAt(0));//'a'
                console.log(str[3]);//'d'
            }
        </script>
    ```

* boolean,null,undefined

  ```javascript
      <script>
          window.onload = function(){
              // boolean
              var b = true;
              var b1 = false;
  
              console.log(10 > 2);//true
              console.log('10' > '2');//false
              // 字符串在做比较时 是按位得到该位的ASCII码 来进行比较
  
              // null   空对象  数据类型object
              var nn = null;
              var oDiv = document.getElementById('box');//获取元素对象  但元素对象box不存在 返回null空对象
              console.log(oDiv);//null
  
              // undefined  未赋值 --- js特有的数据类型 别的语言都没有
              var a;
              console.log(a);//undefined
          }
      </script>
  ```

* object类型

  * js中 万物皆对象

  * object对象

    * 对象使用{}来包裹的  在{}中以键值对的形式来记录数据，访问修改和添加都是通过键名来进行操作。所谓的键名 也可以称之为属性名

      ```javascript
          <script>
              var person1 = {
                  name:'joth',
                  age:22,
                  sex:'male'
              }
              var obj = {};//不是空对象  空对象是null
              console.log(person1);
              console.log(obj);
      
              // 对这个对象  进行  获取值  修改值 添加新的键值  
              // 获取某个属性值  需要通过对象 访问属性名
              console.log(person1.name);
              console.log(person1.age);
      
              // 修改  通过给已有的属性名赋一个新值进行修改
              person1.age = 23;
              console.log(person1);
      
              // 添加  就是直接给对象上写新的属性名 给对应的属性值
              person1.work = 'player';
              // console.log(person1);
              // // window 全局对象
              // // console.log(window);
              // aa = 10;
              // console.log(window);
      
              // 对象的声明
              var obj = {};//字面量创建对象
      
              var obj1 = new Object();//实例化创建对象
      
          </script>
      ```

  * 函数function

    * 普通命名函数使用也是分为两步
      * 声明函数   --函数的名称组成和变量名相同
      * 调用执行函数 通过函数名+（）来进行执行
      * 当只使用函数名 而不加（） 代表函数本身

    ```javascript
        <script>
            window.onload = function(){
                // oDiv.onclick = function(){//事件处理函数  在事件触发时 对应执行所以不需要名字 是一个匿名函数
                // }
    
                // 一般的普通函数  有名字  使用分为两步  需要声明和调用
                // 声明函数 不执行
                function fn(){
                    console.log('fn执行'); 
                }
                // 调用执行函数 通过函数名+（）来进行执行
                fn();
                // 当只使用函数名 而不加（） 代表函数本身
                console.log(fn);//函数代码本身
    
                var oBtn = document.getElementById('btn');
                oBtn.onclick = fn;
            }
        </script>
    ```

  * Array数组

    * 由[]包裹的一组数据，数据项与数据项之间用, 隔开
    * 数组中可以存储任意类型的数据，但是我们一般使用时同一数组最好是存储同一类数据
    * 数的简单属性和方法
      * length: 代表数组的长度---数组中有多少个数据项
      * arr[下标]：可以通过下标方法其中的对应数据项 下标从0开始  index索引

    ```javascript
        <script>
            var arr = [1,2,'abc','ddd',true,[1,2,3],{name:'joth'},null,undefined];
    
            var arr1 = [1,2,3,4,5];
            var arr2 = ['a','b','c'];
            console.log(arr1.length);//5
            console.log(arr1[2]);//3
        </script>
    ```

  * typeof  得到的数据类型

    * 数字类型 ---- number
    * 字符串类型---string
    * 布尔值---boolean
    * null ---  object
    * undefined --- undefined
    * object -- object
    * array -- object
    * function --- function

* 数据类型的强制转换

  * 其他类型强制转换为数字

    * Number（其他类型数据或变量）方法
      * 字符串转换为数字时，只要包含非数字的字符 则都转换为NaN 只有纯数字字符串可以转换为数字。
      * 布尔值转换为数字 true --1  false --- 0  
      * null被转换为0 而undefined转换为NaN
      * object，function转换都是NaN，数组中如果只有一个值，且该值为数字或数字字符串则可以转换为数字，其他情况的数组也都转换为NaN

    ```javascript
        <script>
            // 字符串转数字
            var str = '10';
            var str1 = 'abc';
            var str2 = '100px';
            var str3 = 'a100';
            console.log(Number(str), Number(str1), Number(str2), Number(str3));//10 NaN NaN NaN
    
            // 布尔值转数字
            var b = true;
            var b1 = false;
            console.log(Number(b), Number(b1));//1 0
    
            // null  undefined
            console.log(Number(null), Number(undefined));//0 NaN
            // null--> false --> 0
    
            // object  array  function
            console.log(Number(function fn(){}));//NaN
            console.log(Number({name:'joth',age:22}));//NaN
            console.log(Number([1,2,3]));//NaN
            console.log(Number(['10']));//10
        </script>
    ```

    * parseInt 和parseFloat

      * parseInt(str)：将字符串转换为数字，尽可能多的将识别的数字字符串转换为数字，直到识别到非数字字符结束，返回识别的数字字符串转换为数字。不会保留小数位
      * parseInt(str,radix?):parseInt的第二个参数--- 以什么进制来识别第一个字符串参数 进制2-36 0浏览器默认进制
      * parseFloat(str):字符串转换为数字 和parseInt功能基本上差不多，可以保留小数

      ```javascript
          <script>
              console.log(parseInt(10.23));//10
              console.log(parseInt('10.99'));//10
      
              // 数字字符串
              console.log(parseInt('100px'));//100
              console.log(parseInt('100px100'));//100
              console.log(parseInt('s100'));//NaN
      
              // parseInt的第二个参数--- 以什么进制来识别第一个字符串参数  进制2-36  0浏览器默认进制
              console.log(parseInt('070',10));//70
              console.log(parseInt('070',1));//没有1进制  NaN
      
              console.log(parseInt('070',8));//56
              console.log(parseInt('101',2));//5
              console.log(parseInt('1f4d',16));//8013
      
              // 希望转换时保留小数部分 parseFloat
              console.log(parseFloat('10.123'));//10.123
          </script>
      ```

  * isNaN:  确定不是一个数字---  不是数字返回  true  是数字返回false

    * isNaN并没有进行判断，它是调用了Number方法  能够转为数字 则返回false不能转为数字则返回true

    ```javascript
        <script>
            console.log(isNaN('aaa'));//true
            console.log(isNaN('100'));//false
            console.log(isNaN(null));//false
            console.log(isNaN(true));//false
            console.log(isNaN(NaN));//true
        </script>
    ```

  * 其他类型转换为字符串

    * String（其他数据类型或变量）：除了object外 其余的数据类型都是直接转换为字符串  object类型  打印[object Object]
    * 变量.toString(): 是对象的一个方法  所以前边必须是存在的对象
    * toString（radix？）：将数字转为什么进制的字符串

    ```javascript
        <script>
            var num = 123;
            console.log(String(num));//'123'
            var b = false;
            console.log(String(b));//'false'
            var na = null;
            console.log(String(na));//'null'
            var a;
            console.log(String(a));//'undefined'
    
            var obj = {
                name:'joth',
                age:22
            }
    
            console.log(String(obj));//[object Object]
    
            var arr = [1,2,3];
            console.log(String(arr));//'1,2,3'
    
            function fn(){var aaa = 10;}
    
            console.log(String(fn));//'function fn(){var aaa = 10;}'
    
            // toString()
            console.log(num.toString());
            console.log(b.toString());
            // console.log(na.toString());//报错  空对象是不能调用方法的
            // console.log(a.toString());//报错  未赋值也不能调用方法
            var n1 = 100;
            console.log(n1.toString(2));//将100转换为2进制字符串
            console.log(n1.toString(8));
            console.log(n1.toString(16));
    
            // 颜色 通过计算  145734---》变为颜色
            window.onload = function(){
                var oDiv = document.getElementById('box');
                var n = 145734;
                // console.log('#' + n.toString(16));
                oDiv.style.background = '#' + '0' + n.toString(16);
    
                // rgb
            }
        </script>
    ```

  * 其他类型转Boolean

    * Boolean（其他类型数据或变量）:将其他类型数据转换为布尔类型

      * 除了  ''空字符串  0   null  undefined  NaN  false  这六类数据为false以外其他的全部都为true 

      ```javascript
          <script>
              // 6大类型转为假
              console.log(Boolean(0));//false   一切非0的实数都为真
              console.log(Boolean(null));//false
              console.log(Boolean(undefined));//false
              console.log(Boolean(''));//false  一切非空字符串为真
              console.log(Boolean(NaN));//false
              console.log(Boolean(false));//false
      
              console.log(Boolean({}));//true  隐含了别的东西
              console.log(Boolean([]));//true
          </script>
      ```

* js中的运算符

  * 算术运算符

    * 一元运算符   ++自增（每次加一）  --自减（每次减一）    一元运算符在变量之前先自增或自减再进行后续的运算  如果一元运算符在变量之后  先进行其他运算再进行自增或自减
    * +-*/%(取余运算)
      * +-*/运算符会对不同数据进行运算时 进行隐式类型转换
      * +法的转换规则
        * 两端皆为数字则进行加法运算
        * 任意一端出现字符串，则将两端都转为字符串进行字符串连接
        * 两端都不是字符串也不是数字时 ，则将两边都转换为数字（Number）进行运算
        * 如果一端是对象类型，则将对象类型用toString方法转换为字符串进行连接
      * -*/  最多时将数字字符串转换为数字  转不了就是NaN

    ```javascript
        <script>
            // var a = 10;
            // var b = a++;
    
            // console.log(a, b);//11  10
    
            // var a = 10;
            // var b = ++a;
            // console.log(a, b);//11 11
            var a = 10, b = 10;
            var c = a++ + --b + a-- + b++ + a++;
                  // 10     9    11    9     10  =  49
                  // 11     9    10    10    11
            console.log(c);//
    
            // +
            console.log(10 + 2);//12 两个数字则进行数学加法运算
            console.log('a' + 2);//只要在+号运算符中出现字符串 则将两边都转换为字符串进行字符串连接
            console.log(null + false);// 0 两边都不是字符串使用Number转换为数字进行计算
            console.log([1,2,3] + 20);//'1,2,320'
            console.log({} + 20);//[object Object]20
    
            // - * /
            console.log(10/false);
            console.log(10 - '你');//NaN
    
            // % 取余运算
            console.log(13 % 3);//1
            console.log(177 % 7); //2
    
            // 秒转时间
            // 1234567秒---》天 时 分 秒
            // 90 --》90/60  1.5小时  1小时 30分
            // 1天86400秒
            var time = 1234567;
            var d = parseInt(time / 86400);//14
            var h = parseInt(time % 86400 / 3600);//6
            var min = parseInt(time % 3600 / 60);//56
            var s = time % 60;//7
            console.log(d + '天' + h + '时' + min + '分' + s + '秒');
        </script>
    ```

    

  * 比较运算符

    * // >   <   >=    <=    ==   ===    !=     !==
    * ==等于  做一个隐式转换将等号两边的数据类型转换同类（Number转换为数字） 再进行相等比较
    * ===全等  不会转换 需要数据类型和数值都相等 才返回true
    * null 和undefined  用==比较 规定二者相等   ===不相等

    ```javascript
        <script>
            console.log(10 > 2);//true
            console.log('10' > 2);//true
            console.log('10' > '2');//ASCII  false
    
            console.log('10' == 10);//会将两边转换为同数据类型再进行比较  true  Number转换为数字比较
            console.log('10' === 10);//false  不会隐式转换  比较数据类型及值
    
            console.log('10' != 10);//false
            console.log('10' !== 10);//true
    
            console.log(null == undefined);//true  规定
            console.log(null === undefined);
        </script>
    ```

    

  * 逻辑运算符

    * &&与   || 或   ！非（一元运算符）

    * 与运算见假则假，或运算见真则真，非运算直接取反

    * 短路运算--- 一般用来进行后续 兼容性问题 短路或

      * 短路与  当第一项为真，则返回第二项，当第一项为假则返回第一项

      * 短路或  当第一项为真，则返回第一项，当第一项为假则返回第二项

    ```javascript
        <script>
            console.log(true && false);//false
            console.log(10 > 2 && 7 < 3);//false
    
            // ||
            console.log(true || false);//true
            console.log(10 > 2 || 7 < 3);//true
    
            // !  取反
            console.log(!true);//false
    
            // 短路运算--- 一般用来进行后续  兼容性问题  短路或
            // 短路与   当第一项为真，则返回第二项，当第一项为假则返回第一项
            // 短路或   当第一项为真，则返回第一项，当第一项为假则返回第二项
    
            var c = 0 && 10;
            console.log(c);//0
    
            var a = 10 || 1;
            console.log(a);//10
    
            var a = 0 || 9;
            console.log(a);//9
    
            var a = 10 && 1;
            console.log(a);//1
        </script>
    ```

    

  * 三目运算符

    * ?:   判断条件?  判断条件为真时执行 : 判断条件为假时执行；

    ```javascript
        <script>
            // 是不是单身狗? '今晚在宿舍呆着': '出去嗨';
            var x = -3;
            var y = x > 0? 1 : -1;
            console.log(y);//-1
            
        </script>
    ```

    

  * 赋值运算符

    * = 赋值  +=  -=  *=  /=   %=

    ```javascript
        <script>
            var a = 10;
    
            // a = a + 2;
            // 简写
            a += 2;//等价于  a = a + 2
    
            a -= 2;//a 先减2 再将结果赋值给a  a = a - 2
            a *= 2;//a 先乘2 再将结果赋值给a  a = a * 2
            a /= 2;//a 先除2 再将结果赋值给a  a = a / 2
            a %= 2;//a 先模2 再将结果赋值给a  a = a % 2
        </script>
    ```

  * 隐式类型转换

    * +-*/% 都会进行隐式类型转换     使用Number方法进行隐式类型转换 转不了就NaN