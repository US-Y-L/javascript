#### JavaScript 初识

* 二阶段及整体阶段介绍

  * 一阶段  HTML + CSS  h5  css3    网页布局  结构
  * 二阶段  js编程---编程基础  25天   前15天原生js  4天项目  1touch  4 jquery  1阶段考核（答辩） 7
  * 三阶段  ES6  nodeJS---后端  操作数据库  8
  * 四阶段  Vue2.5     React  ---  混合app   7
  * 五阶段  小程序  6

* 学习要求

  * 单词：背  每天早来20分
  * 理解：每天上课有问题及时问，不理解的地方 晚上 先看视频  看完 通过记忆和理解 去敲
  * 作业：每天的作业2---4  至少完成75%
  * 看100遍 不如理解后敲10遍

* 什么是javascript

  * HTMl ---结构   css -- 样式   js -- 行为
  * **js 具有面向对象能力的，解释型程序设计语言。更详细来说 基于对象和事件驱动的相对安全的客户端（浏览器）脚本语言**
    * 面向对象能力：后续第13章专门来讲
    * 解释型程序语言：当js语言开始执行时，浏览器才会一行一行去翻译js语言为机器语言来进行执行。（优点：跨平台性强，只要客户端支持该语言 就可以执行。缺点：执行速度相对较慢。）解释型语言包括：js  php  python。。。。
    * 编译型程序语言：C/C++   需要安装环境--编译器（缺点跨平台性差），先将所有的程序一次性编译为机器语言（优点:执行快）
    * 基于对象：js中万物皆对象----String字符串对象   Number 数字对象。。。。 原生的对象有不同的功能，我们在编写程序时，使用不同对象和功能构建程序
    * 事件驱动：用户和页面的交互动作   谁  干什么（事件驱动）  怎么样     通过用户交互触发某些事件，来执行某些程序得到想要的结果。

* JavaScript 的历史

  * 95年：js诞生---最开始专门用来做表单验证的   网景公司 希望有一种语言能够在前端页面中对用户表单输入的内容的格式进行验证，不要交给服务端来处理。  借鉴了C  java 开发了一种语言mocha  --  liveScript -- JavaScript（网景版权）
  * 97年：网景公司将  js语法和特性提交  ECMA 欧洲计算机制造商协会   制度一个ECMA-262标准起名  ECMAScript（ES也就是js） ES5.0（二阶段学习的版本基础版本）  三阶段  ES6.0（更新比较大的版本）     最新ES11（变化小  后续自己学习）

* js的组成

  * ECMA---核心  语法  编译器
  * DOM---  Document  Object Model  文档对象模型---对应你页面上所有HTML标签的js接口
  * BOM---  Browser Object Model  浏览器对象模型---浏览上的一些功能属性的接口

* js的特点

  * 解释型
  * 基于对象
  * 事件驱动
  * 跨平台性强

* JavaScript 初识

  * js的引入----script标签
    * 行间  在标签中直接进行事件驱动来执行  第一个事件  onclick---》鼠标左键单击
    * 内部  在内部的任意位置可以写script标签进行引入，但是 一般我们写在head中或</body>之前
    * 外链  在head中用  script标签的src属性进行外链
    * js的注释   //代表单行注释 快捷键  ctrl + /   /**/代表多行注释  快捷键是  shift+alt + a
    * js的弹窗  alert('字符串')   chrome中阻塞页面加载  和js代码的顺序无关
    * js一般写在或引入在head之间  或者所有元素之后</body >之前
  * 关于注释
    * 良好的注释是一个程序员必备的 关键的属性 方法 逻辑  都要写注释
  * 入门三步曲
    * 找谁（获取元素）  document.getElementById('id名称')
    * 干什么（添加事件） onclick  左键单击
    * 结果（事件处理函数）   function（）{}  函数  事件驱动的结果函数

  ```javascript
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      
  </head>
  <body>
      <!-- js的行间引用 -->
      <div style="width:100px; height:100px; background:red"></div>
      <button onclick="alert('曾经沧海难为水')">按钮</button>
      <button id="btn">按钮2</button>
  
  
  
      <script>
          // alert('阻塞页面加载！')
          // 内部或外链写  找谁  获取元素
          // document.getElementById('btn').onclick = function(){//事件驱动结果函数
          //     alert('除却巫山不是云')
          // }
          // 从整个文档中   get（获取）Element（元素） By(通过) Id
          // function  函数 ---  用来保存一段代码
      </script>
      <script src="./myjs.js"></script>
  </body>
  </html>
  ```

  

  * window.onload 事件

    * 如果是在head中引入js  由于代码的执行为自上而下  所以 当js执行开始获取元素时，页面中的html元素还未加载进来，所以这是js获取元素为null 空对象  报错
    * 在head中引入js  就必须添加window。onload事件来进行执行
    * **window.onload  作用是  当页面结构和所有资源（图片，视频。。。）全部加载完毕之后在调用onload事件 执行事件对应的结果函数中的js代码。**

    ```javascript
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
            // 页面中的所有结构和资源加载完毕后  在回过头来执行 onload事件  执行onload事件对应的函数中的js代码
            window.onload = function(){
                console.log(document.getElementById('btn'));//<button id="btn">按钮</button>
                document.getElementById('btn').onclick = function(){
                    console.log('我被点击了')
                }
            }
        </script>
    </head>
    <body>
        <button id="btn">按钮</button>
    
        <script>
            // 这里写  是在所有元素加载完成后 再执行  所以不需要写onload事件
        </script>
    </body>
    </html>
    ```

  * js的鼠标事件

    * onclick  左键单击
    * onmousedown   鼠标按键按下  左右键  （先于onclick执行）
    * onmouseup  鼠标按键抬起   左右键  （先于onclick执行）
    * onmouseenter   鼠标经过   鼠标悬停
    * onmouseleave   鼠标移开   
    * onmouseover    鼠标经过  鼠标悬停（冒泡）
    * onmouseout      鼠标移开
    * onmousemove   鼠标在元素上移动  --- 连续触发
    * oncontextmenu  上下文环境菜单  ---- 右键菜单
    * ondblclick   ---左键双击

* js的变量

  * 变量--js程序在计算的内存空间中开辟一个存储单元 给他命名用来存放数据  变量一次只能存放一个数据（任意类型数据），当后续再进行存储时 会将原有的数据给覆盖掉。

  * 变量的使用方法

    * 先声明  var aa   然后对声明的变量进行初始化（赋值）  aa = 10；
    *  一般情况一次性写好  var aa = 10；
    * 在程序语言中  =  代表的是赋值  要从右向左进行赋值操作
    * 可以一次性声明多个同值变量  连等  var a = b = c = 10;
    * 也可以一次性声明多个存储值不同的变量  var a = 10, b = 20, c = 30;

  * 变量的命名：

    * **见名知意，驼峰命名**
    * **变量名由数字，字母,_ 和$组成，但不能用数字开头**
    * **不能使用关键字和保留字**
      * 关键字：当前js版本中已经被程序占用属性方法等单词就是关键字
      * 保留字：在当前的js版本中还不是关键字 但是在未来的版本中可能会成为关键字的单词叫保留字  Class  let  const
    * **变量名不能重复，后声明的重名变量会覆盖之前的**

    ```javascript
        <script>
            var a = 20;//变量声明并且赋值
            a = 100;
            console.log(a);
            // 一次性同值多个变量
            var a = b = c = 20;
            console.log(a, b, c);
            // 一次性声明多个不同值变量
            var a = 10, b = 20, c = 30;
            console.log(a, b, c);
    
            // oBtn
            // oDiv
            // oBox
    
            var aa = 10;
            var _a = 20;
            var $a1 = 30;
            // var 1a = 40; 不能数字开头
    
            // 不能使用关键字和保留字
            // var var = 20;
            // let aa = 10;
            // var let = 10;
            // console.log(let);
        </script>
    ```

  * console.log()  可以打印1个或多个数据，多个数据之间用,隔开

* js操作元素内容

  * 表单元素内容

    * 表单元素.value  获取
    * 表单元素.value = '新内容'  设置

    ```javascript
        <script>
            window.onload = function(){
                // 获取元素  存储到变量
                var oTxt = document.getElementById('txt');
                var oTxta = document.getElementById('txtare');
                var oSel = document.getElementById('sel');
    
                // 获取表单元素的内容
                console.log(oTxt.value);
                console.log(oTxta.value);
                console.log(oSel.value);
    
                // 设置
                oTxt.value = '没有手机';
                oTxta.value = '不想留言';
                oSel.value = 'cn';
            }
        </script>
    ```

    

  * 闭合标签

    * innerText--- 不识别html标签
      * 获取：元素.innerText
      * 设置：元素.innerText = '新内容'
    * innerHTML--识别html标签
      * 获取：元素.innerHTML
      * 设置：元素.innerHTML = '新内容'
    * 内容的累加
      *  元素.innerHTML = 元素.innerHTML + '需要累加的内容';
      * 3 - 给元素的内容进行赋值   <=   1-获取元素内容  2 --  + 链接新内容

    ```javascript
        <script>
            window.onload = function(){
                var oP = document.getElementById('p1');
    
                // 获取内容
                console.log(oP.innerText);
                console.log(oP.innerHTML);
    
                // 设置内容
                // oP.innerText = '<em>我花开后百花杀</em>';//会将字符串中的标签当做文本内容赋值给p标签的内容
                // oP.innerHTML = '<em>我花开后百花杀</em>';//识别并解析标签
    
                // 内容累加
                oP.innerHTML = oP.innerHTML + ',我花开后百花杀' + '<br />'
                oP.innerHTML = oP.innerHTML + '冲天香阵透长安，满城尽带黄金甲';
            }
        </script>
    ```

    

* js操作元素的属性

  * 元素的属性： 元素的固有属性（w3c 规定）   自定义属性（后续有方法来操作）
  * 当前js操作的是 元素的固有属性 （不包含样式有关的属性）
  * 获取：元素.属性名
  * 设置：元素.属性名 = '新属性值'
  * 特殊：class属性的获取和设置  都使用  className的方法

  ```javascript
      <script>
          window.onload = function(){
              // 获取元素
              var oDiv = document.getElementById('box');
              // 获取属性
              console.log(oDiv.id, oDiv.title, oDiv.aa);//box divdiv undefined(未赋值)
  
              // 设置
              oDiv.id = 'div1';
              oDiv.title = 'boxbox'
  
              // 获取class属性的值
              // console.log(oDiv.class);//undefined  保留字
              console.log(oDiv.className);
          }
      </script>
  ```

* 点操作符和中括号操作符

  * 在js中  凡是用点的地方都可以使用[]来代替  []一般要写入字符串或变量形式的属性名来进行操作。而. 后边必须是已知的属性名

  ```javascript
      <script>
          window.onload = function(){
              var oA = document.getElementById('aa');
              var oTxt = document.getElementById('txt');
              var oBtn = document.getElementById('btn');
              var oSpan = document.getElementById('span');
  
              oBtn.onclick = function(){
                  var attr = oTxt.value;
                  // console.log(attr);
                  oSpan.innerHTML = oA[attr];
              }
  
              // console.log(oA.href);
              // console.log(oA['href']);
              // var abc = 'href';//将字符串形式的属性名  存储给一个变量
              // console.log(oA[abc]);
  
          }
      </script>
  ```

* js操作元素样式

  * 当前我们操作的是行间样式

    * 获取：获取的是行间样式    元素.style.样式名
    * 设置：js中所有设置的样式 都是行间样式---行间具有第二高权重   元素.style.样式名 = '新的样式值'
    * 样式中  复合样式的分支  带 - 这种  都要  去杠变驼峰
    * 整体获取/修改行间样式  获取：元素 .style.cssText   设置：元素 .style.cssText = 'width：100px; height:100px;.....'  设置时会覆盖原有的所有样式

    ```javascript
        <script>
            window.onload = function(){
                var oDiv = document.getElementById('box');
                // 获取
                console.log(oDiv.style.width);
                console.log(oDiv.style.fontSize);
                // console.log(oDiv.style);
    
                // 设置
                // oDiv.style.width = '300px';
                // oDiv.style.height = '300px';
                // oDiv.style = 'width:300px; height:300px; background:green';
    
                console.log(oDiv.style.cssText);
                oDiv.style.cssText = 'width:200px; height:200px';
            }
        </script>
    ```