#### this 详解及函数初识

* this--- this对象一般是函数声明时 函数中就自动生成this对象，当声明时this对象不指向任何内容。当函数调用时，根据函数调用时的上下文环境，将this指向调用该函数的对象。也就是说  函数被谁调用，该函数中的this就指向谁。

  * 事件驱动函数：事件驱动函数的this就指向 触发事件的对象
  * 普通函数：普通函数的this 指向window（全局对象）

  ```javascript
      <script>
          window.onload = function(){
              var oDiv = document.getElementsByTagName('div')[0];
  
              oDiv.onclick = function(){
                  console.log(this);//div
                  // 事件驱动处理函数  它当中的this指向  触发了事件函数的 对象
              }
  
              // 普通函数
              // 声明
              function fn(){
                  console.log(this);
              }
  
              // 函数调用
              fn();//普通函数调用时  this指向  window
  
              
          }
      </script>
  ```

* 自定义属性

  * 自定义属性是可以写在标签中，也可以通过js给元素添加自定义标签
  * 元素就是对象，对象可以随意的添加新的属性和属性值

  ```javascript
      <script>
          window.onload = function(){
              var aDiv = document.getElementsByTagName('div');
              var flag = true;
              for(var i = 0; i < aDiv.length; i++){
                  aDiv[i].flag = true;
                  aDiv[i].onclick = function(){
                      if(this.flag){//因为每个div有一个自己的flag  那么判断的就是当前点击的对象的flag的变化
                          this.style.height = '300px';
                      }else{
                          this.style.height = '30px';
                      }
                      this.flag = !this.flag;
                  }
              }
  
              /* 
                  aDiv[0].flag = true;
                  aDiv[1].flag = true;
                  aDiv[2].flag = true;
                  aDiv[3].flag = true;
              
               */
  
              // 多个div共享了一个flag  所以该flag  的真假值切换不是由一个div控制
              // 希望 每个div有一个自己的flag  不会互相影响
              // 在标签中自定义属性 目前我们无法获取和设置  没用
              // 我们可以通过js给每个元素添加一个自定义属性
              // 元素就是对象  只要是对象就可以随意添加属性和属性值
              // var obj = {};
              // obj.aa = 10;
              // var oDiv = {}
              // oDiv.flag = true
          }
      </script>
  ```

* 特殊的自定义属性--自定义索引

  *  通过一个自定义属性 记录每个div的下标值   该自定义属性就称之为自定义索引  惯例起名index也就是说---给每个div给一个自定义属性 用来记录该div在遍历时对应的i值

  ```javascript
      <script>
          window.onload = function(){
              var arr = ['保时捷10元优惠券','洗衣液一袋','谢谢惠顾','再刮一张','100万日元','机械键盘一个','话费100元']
  
              var aDiv = document.getElementsByTagName('div');
  
              for(var i = 0; i < aDiv.length; i++){
                  // 通过一个自定义属性 记录每个div的下标值  
                  // 给每个div给一个自定义属性 用来记录该div在遍历时对应的i值
                  aDiv[i].index = i;
                  aDiv[i].onclick = function(){
                      // 通过自定义索引 也就是当前被点击的这个div的下标（index记录的值） 去arr中找到对应下标的数据项
                      this.innerHTML = arr[this.index];
                      this.style.background = '#fff';
                  }
              }
          }
      </script>
  ```

  * 选项卡的制作

    ```javascript
        <script>
            window.onload = function(){
                var aBtn = document.getElementsByTagName('button');
                var aDiv = document.getElementsByTagName('div');
    
                for(var i = 0; i < aBtn.length; i++){
                    aBtn[i].index = i;
                    aBtn[i].onclick = function(){
                        for(var i = 0; i < aBtn.length; i++){
                            // 通过遍历  先将所有的div都隐藏  然后在将点击按钮的索引对应的div显示
                            aDiv[i].style.display = 'none';
                            // 通过遍历  将所有按钮清除类on
                            aBtn[i].className = '';
                        }
    
                        // 点击按钮用事件触发的这个按钮的索引来显示对应的div
                        aDiv[this.index].style.display = 'block';
                        // 当前点击的按钮获的类on
                        this.className = 'on';
                    }
                }
            }
        </script>
    ```

* 函数

  * 函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块.

  * 函数的声明调用

    * 事件驱动--》事件驱动处理函数
    * 普通声明函数  通过函数名+()来执行
    * 表达式声明函数  通过函数名+()来执行

     ```javascript
        <script>
            window.onload = function(){
                var oBtn = document.getElementsByTagName('button')[0];
                //事件驱动的处理函数  只有当事件被触发 才执行该函数
                oBtn.onclick = function(){
                    console.log('按钮的点击执行函数');
                }
    
                // 普通函数的声明 调用
                function fn(){
                    console.log('函数调用执行');
                }
    
                // 通过函数名 + ()来调用执行
                fn();
                fn();
                fn();
    
                // 表达式声明函数  和  普通函数的使用一样的
                var fnn = function(){
                    console.log('表达式声明函数');
                }
    
                fnn();
                fnn();
            }
        </script>
     ```

* 函数的传参

  * 当函数在声明时，在()定义的占位变量 称之为形参（形式参数），当调用该函数时，在调用的（）中写入对应个数的具体的值 称之为实参（实际参数），然后  实参就会赋值给形参，在函数内部就使用形参来进行具体的操作或计算。
  * 当形参个数 多于实参个数时  多的形参都为undefined
  * 当实参个数多于形参时，多的实参将不会被使用
  * 参数的传递中  实参可以是任意类型的数据，包括null和undefined，但是我们不会传null和undefined，在函数中运算 会报错而且传这个两个数据类型是没有意义。

  ```javascript
      <script>
          function sum(n1, n2){
              console.log(n1 + n2);
          }
  
          sum(10, 30);
          sum(3.12, 5.27);
          sum(-1.45, -6.77);
  
          function sum1(a,b,c,d,e){
              console.log(a + b + c + d + e);
          }
  
          sum1(1,2,3,4,5);
  
          sum1(10,11,12);//NaN
          sum1(3,4,5,6,7,8,9,10);//25
          sum1(3,4,5,6,7,8,9,3,4,5,6,7,8,9,3,4,5,6,7,8,9,3,4,5,6,7,8,9,3,4,5,6,7,8,9,3,4,5,6,7,8,9,3,4,5,6,7,8,9,3,4,5,6,7,8,9,3,4,5,6,7,8,9,3,4,5,6,7,8,9,3,4,5,6,7,8,9,3,4,5,6,7,8,9,3,4,5,6,7,8,9)
  
          // 当实参个数不确定时  也无法声明一个通用函数（实参不确定  形参不能确定）
          // 该情况 我们将使用  不定参  可变参  arguments
  
          // 打印前n个自然数的和
          function ssum(n){
              var result = 0;//存放结果
              for(var i = 1; i <= n; i++){
                  result += i;
              }
  
              console.log(result);
          }
  
          ssum(100);
          ssum(10000);
      </script>
  ```

* arguments--不定参，可变参--

  * 当实参个数不能确定，这时无法定义对应个数的形参。这时就使用arguments。
  * arguments在你传参到函数时，就会自动有一个arguments对象，用来接收你的实际参数--类似于一个数组的伪数组

  ```javascript
      <script>
          function sum(){
              // console.log(arguments);
              var result = 0;
              for(var i = 0; i < arguments.length; i++){
                  result += arguments[i];
              }
              console.log(result);
          }
  
          sum(1,2,3,4,5);
          sum(2,3);
          sum(3,4,5,6,7,3,4,5,6,7,3,4,5,6,7,3,4,5,6,7,3,4,5,6,7,3,4,5,6,7);
      </script>
  ```

* 函数传参类型

  * 参数的传递中  实参可以是任意类型的数据，包括null和undefined，但是我们不会传null和undefined，在函数中运算 会报错而且传这个两个数据类型是没有意义。

  * 函数传对象类型的参数

    ```javascript
        <script>
            // var arr = [1,2,3,4,5];
            // // 计算数组中的每个值的平方
            // function square(arr){
            //     for(var i = 0; i < arr.length; i++){
            //         console.log(arr[i] * arr[i]);
            //     }
            // }
    
            // square(arr);
    
            // function setStyle(el,attr1,val1,attr2,val2,attr3,val3){
            //     el.style[attr1] = val1;
            //     el.style[attr2] = val2;
            //     el.style[attr3] = val3;
            // }
    
            function setStyle(el,obj){
                // 对这个obj样式参数对象进行循环遍历
                for(var key in obj){
                    el.style[key] = obj[key];
                }
            }
    
            window.onload = function(){
                var oDiv = document.getElementsByTagName('div')[0];
                var oP = document.getElementsByTagName('p')[0];
                
                // setStyle(oDiv,'width','200px','height','200px','background','red');
                // setStyle(oP,'fontSize','20px','line-height','50px','background','pink');
                // 缺点  1  形参数名称 起的太多  2  实参顺序不能错  3 设置的样式数量 固定
                // setStyle(oDiv,'width','height','200px','200px','background','red');
    
                // 希望用对象形式将 属性和值  传参
                setStyle(oDiv,{width:'200px',height:'200px',background:'red'});
                setStyle(oP,{width:'100px', height:'100px',background:'pink',fontSize:'20px',border:'1px solid #000'})
            }
        </script>
    ```

* this的指向问题

  * 每个函数在声明时就有一个this对象，这时this没有指向任何对象。当函数被调用时，根据调用的上下文环境指向调用函数的对象，简而言之就是谁调用该函数，该函数的this就指向谁。

    * 事件驱动的函数的this指向 触发事件执行函数的对象
      *  oBtn.onclick = function(){} this-->oBtn

    * 普通声明函数 调用时 this就指向window
      * function fn(){} fn() this --->window

    * 对象中定义的函数
      * 函数被该函数的对象调用 该函数的this就指向包含它的对象

    ```javascript
        <script>
            // 每个函数在声明时就有一个this对象，这时this没有指向任何对象。当函数被调用时，根据调用的上下文环境指向调用函数的对象，简而言之就是谁调用该函数，该函数的this就指向谁。
            // 事件驱动的函数的this指向 触发事件执行函数的对象
            // oBtn.onclick = function(){} this-->oBtn
            // 普通声明函数  调用时 this就指向window
            // function fn(){}  fn()  this --->window
            // 对象中定义的函数
            var obj = {
                name:'joth',//对象的属性
                age:22,
                sex:'male',
                eat: function(){//对象的方法
                    console.log('吃饭饭');
                    console.log(this);
                }
            }
    
            obj.eat();//这时函数被该函数的对象调用  该函数的this就指向包含它的对象
    
            var obj1 = {
                name:'tom',
                obj2:{
                    name:'jerry',
                    eat:function(){
                        console.log('恰饭饭');
                        console.log(this);
                    }
                }
            }
    
            obj1.obj2.eat();//obj2
        </script>
    ```