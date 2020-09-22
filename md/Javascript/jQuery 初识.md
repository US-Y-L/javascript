jQuery 初识

* jq是js的一个库文件

* 在jq中   $等价于jQuery

* window.onload  和$(document).ready(function(){的区别

  * onload 是当页面的文档结构和资源加载完毕后再执行onload事件的处理函数中的内容
  * onload一个页面只能有一个后写的会覆盖先写的
  * onload没有简写形式
  * ready是当页面文档结构加载完毕后就执行，无需等待资源加载
  * ready一个页面可以写多个，不会覆盖
  * ready有简写形式

  ```javascript
      <script>
          // window.onload = function(){  
          //     var oDiv = document.getElementById('box');
          //     console.log(111);
          //     console.log(oDiv);
          // }
  
          // window.onload = function(){
          //     var aDiv = document.getElementsByTagName('div');
          //     console.log(222);
          //     console.log(aDiv);
          // }
  
          $(document).ready(function(){
              console.log(111);
              console.log($('#box'));
          })
  
          $(function(){//$(document).ready(function(){})的简写形式
              console.log($('div'));
              console.log(222);
              // $('div').html('aaaa')
          })
  
          // ready 类似于我们昨天讲的  DOMContentLoaded
      </script>
  ```

* jq对象和DOM对象

  * DOM对象就是原生方法获取到的DOM节点  <div id="box"></div>
  * jq对象是用jq的方法包装过的DOM节点    init [div#box, context: document, selector: "#box"]

* jq对象和DOM对象的相互转换

  * jq对象转DOM  将jq对象中的第0个取出  就是DOM对象

  * DOM对象转jq对象  就用$包裹原生对象

  * 在 jQuery 对象中无法使用 DOM 对象的任何方法。同样。DOM 对象也不能使用 jQuery 里的方法。

    ```javascript
        <script>
            $(function(){
                var oDiv = document.getElementById('box');
                console.log(oDiv);
    
                console.log($('#box'));
    
                // jq对象转原生DOM
                console.log($('#box')[0]);
                console.log($('#box').get(0));
    
                // 原生DOM转jq对象
                console.log($(oDiv));
    
                // innerHTML 是原生方法   html 是jq方法  原生不能使用html  jq对象不能使用innerHTML
                // oDiv.html('aaa');
                // $('#box').innerHTML('aaa');
            })
        </script>
    ```

* jq让出$权限

  * jQuery.noConflict()  将jq的$ 使用权让出

  * 后续使用jq时  要么  用 jQuery 来代替$   要么使用闭包 将jQuery传到函数中的$参数在闭包函数中  使用jq的$ 

    ```javascript
        <script>
            jQuery.noConflict();//将jq的$的使用权让出
            $('aaaa');
            // 当你将$权限让出后  还要使用jq  就可以用jQuery来代替$ 
            // jQuery(function(){
            //     jQuery('#box').html('bbb')
            // })
    
            // 如果任然希望在做jq操作时 使用$ 那么就进行 闭包来使用$  在闭包内就是jq的$ 
            ;(function($){
                $(function(){
                    $('div').html('哈哈')
                })
                
            })(jQuery)
        </script>
    ```

* jq的选择器（字符串）

  * 基本选择器  id  class  标签  多个一起选取 用,隔开

    ```javascript
        <script>
            $(function(){
                console.log($('#box'));//id获取
                console.log($('.aa'));//class获取
                console.log($('div'));//标签
                console.log($('.aa,div'));
            })
        </script>
    ```

  *  层次选择器  子孙元素   子元素   后边的兄弟元素

    ```javascript
        <script>
            $(function(){
                console.log($('ul li'));//ul下的子孙li
                console.log($('ul>li'));//子li不算孙li  ul下的第一层级的li
                console.log($('.aa~li'));//.aa后边的所有的兄弟li
                console.log($('.aa+li'));//.aa后边的下一个兄弟li
            })
        </script>
    ```

  * 过滤选择器

    * 基本过滤选择器

      ```javascript
          <script>
              $(function(){
                  $('li:first').css('background','red');//所有li中的第一个
                  $('li:last').css('background','blue');//所有li中的最后一个
                  $('li:not(#li1)').css('background','#ccc');//获取所有li 排除带有#li1的li
                  $('li:even').css('background','red');//索引为偶数的li
                  $('li:odd').css('background','green');//索引为奇数的li
                  $('li:eq(3)').css('background','pink');//索引等于3的li
                  // $('li').eq(1).css('background','purple')
                  $('li:gt(3)').css('background','orange');//索引大于3的li
                  $('li:lt(3)').css('background','yellow');//索引小于3的li
              })
          </script>
      ```

    * 属性过滤选择器

      ```javascript
          <script>
              $(function(){
                  $('li[name]').css('background','#ccc');//具有name属性的li
                  $('li[name=tom]').css('background','red');//name的值为tom的li
                  $('li[name!=john]').css('background','green');//name的值不是john的li
                  $('li[name^=j]').css('background','purple');//name值是以j开头的li
                  $('li[name$=m]').css('background','yellow');//name值是以m结尾的li
                  $('li[name*=o]').css('background','pink');//name的值包含o的li
              })
          </script>
      ```

    * 表单选择器

      ```javascript
          <script>
              $(function(){
                  console.log($('input'));//通过标签input选取元素
                  console.log($(':input'));//基本上的所有表单元素都可以选取到
                  console.log($(':checkbox'));//所有的checkbox
                  console.log($(':radio'));//所有的radio
                  console.log($(':submit'));//所有按钮
                  console.log($(':button'));//button的按钮
                  console.log($(':checked'));//所有被选中的选择框  具有checked 和 selected的属性的
              })
          </script>
      ```

* 节点遍历操作

  * 获取子节点

  * 获取兄弟节点

  * 获取父节点

    ```javascript
        <script>
            $(function(){
                // 获取子节点
                // $('ul').children().css('background','red');//ul下的所有子节点
                // $('ul').children('li').css('background','red');//ul下的所有子节点中的li
    
                // 获取兄弟节点
                // $('#li1').next().css('background','red');//#li1的最近的下一个兄弟节点
                // $('#li1').nextAll().css('background','red');//#li1的所有后续兄弟节点
                $('#li1').nextAll('li').css('background','red');//#li1的所有后续兄弟节点中的li
    
                // $('#li1').prev().css('background','red');//#li1的最近的上一个兄弟节点
                // $('#li1').prevAll().css('background','red');//#li1的所有前边兄弟节点
                $('#li1').prevAll('li').css('background','red');//#li1的所有前边兄弟节点中的li
    
                $('#li1').siblings().css('background','yellow');//#li1的所有兄弟节点  之前+之后的
                $('#li1').siblings('div').css('background','purple');//#li1的所有兄弟节点 中的div
    
                // 查找父节点
                console.log($('.aa').parent());//.aa的父节点
                console.log($('.aa').parents());//.aa的所有层级上的父级  直到html
            })
        </script>
    ```

  * 遍历节点-过滤

    * find(选择器) 查找 符合选择器的 所有子孙节点
    * filter(选择器) 从获取到的元素中过滤出符合选择器的元素
    * not('选择器') 从获取到的元素中排除符合选择器的元素

    ```javascript
        <script>
            $(function(){
                // find(选择器)  查找 符合选择器的  所有子孙节点
                console.log($('ul').find('li'));
                $('ul').find('li').eq(6).css('background','red');
    
                // filter(选择器)  从获取到的元素中过滤出符合选择器的元素
                // console.log($('li'));
                $('li').filter('.aa').css('background','green');
    
                // not('选择器')  从获取到的元素中排除符合选择器的元素
                $('li').not('#li1').css('background','purple');
            })
        </script>
    ```

* 属性操作

  * attr()   括号内一个参数代表获取  两个参数代表赋值  对象形式参数就是赋值多个属性

  * removeAttr()  删除某个属性

  * attr一般是用来操作有值的属性   

  * 而某些只需属性名就可以起作用的属性,和值为true和false的属性  如 checked需要用prop来进行操作  prop()   removePorp()

    ```javascript
        <script>
            $(function(){
                // attr
                // 获取属性值
                console.log($('div').attr('title'));
                console.log($('div').attr('name'));
    
                // 设置属性值
                $('div').attr('title','aaaa');
                $('div').attr('name','rose');
    
                // $('div').removeAttr('name');
                // 通过对象 添加多个属性和值
                $('div').attr({
                    age :18,
                    sex:'male'
                })
    
                // console.log($(':checkbox').attr('checked'));//'checked'
    
                // $(':checkbox').attr('checked',false);
    
                // prop
                console.log($(':checkbox').prop('checked'));
                $(':checkbox').prop('checked',false)
    
                // $(':checkbox').removeProp('checked');
            })
        </script>
    ```

* class的相关操作   

  * addClass   添加样式类

  * removeClass  删除样式类

  * hasClass  判断有没有该类  有就返回true  没有就返回false   等价方法  is（）

  * toggleClass  切换类  有就删除  没有就添加

    ```javascript
        <script>
            $(function(){
                console.log($('.box').hasClass('red'));
                console.log($('.box').is('blue'));
    
                // 给div添加一个red的类
                $('.box').addClass('red');
                $('.box').addClass('blue');
    
                // 删除一个类
                $('.box').removeClass('red');
            })
        </script>
    
        <script>
            $(function(){
                // $('button').on('click',function(){
                //     if($('.box').hasClass('red')){
                //         $('.box').removeClass('red');
                //     }else{
                //         $('.box').addClass('red');
                //     }
                // })
    
                // 切换class   toggleClass
                $('button').on('click',function(){
                    $('.box').toggleClass('red');
                })
            })
        </script>
    ```

* css操作

  * $('').css('css属性名')  获取css属性名对应的值

  * $().css('css属性名'，'值')  给对应的css属性设置值

  * $().css({'css属性名1'，'值,'css属性名2'，'值.....})  通过对象批量设置css属性值

    ```javascript
        <script>
            $(function(){
                // 获取样式值
                console.log($('div').css('width'));
    
                // 设置样式值
                $('div').css('background','red');
    
                // 批量设置样式值  对象形式传参
                $('div').css({border:'1px solid #000',margin:'0 auto',width:300});
            })
        </script>
    ```

* jq操作html文本和值

  * html()  ===> innerHTML

  * text() ===>innerText

  * 表单  val()  ===>  value

    ```javascript
        <script>
            $(function(){
                console.log($('div').html());
                console.log($('div').text());
    
                // $('div').html('<i>奔流到海不复回</i>');
                $('div').text('<i>奔流到海不复回</i>');
    
                console.log($(':text').val());
    
                $(':text').val('哈哈哈');
            })
        </script>
    ```

* $下的常用的方法  $('div').html()//对象级别的方法    $.each() 工具级别的方法

  * 遍历方法

    * $.each 类似于forEach 但是可以遍历数组和对象
      * $.each(arr/obj,function(index, item){}) 没有返回值  只是遍历每一项
    * $.map  类似于map  很早只能遍历数组  现在可以遍历数组和对象
      * $.map(arr/obj,function(item,index){})  有返回值  组成新数组或对象

    ```javascript
        <script>
            var arr = [1,2,3,4,5];
    
            $.each(arr,function(index,item){
                console.log(index + '---' + item);
            })
    
            var arr1 = [
                {name:'joth',age:18},
                {name:'rose',age:22}
            ]
    
            $.each(arr1,function(index,item){
                console.log(index,item);
                console.log(item.name);
                console.log(this.name);
            })
    
            // 遍历对象
            var obj = {name:'joth',age:18}
    
            $.each(obj,function(key,value){
                console.log(key + '---' + value);
                console.log(this);
            })
    
            // map  只是比each多了返回值  返回一个新的数组或对象
            var arr = [1,2,3,4,5];
            var nArr = $.map(arr,function(item,index){
                return item * item;
            })
            console.log(nArr);
        </script>
    ```

* 深拷贝和浅拷贝---对象类型

  * 浅拷贝---当使用一个对象给另一对象直接赋值时  实际上是复制了引用类型的地址，导致两个对象指向同一地址的数据，只要数据修改所有对象下的数据都发生了变化

  * 深拷贝---希望在不同的地址下的两个对象之间  复制属性和值

  * for in的问题：

    * 1只能复制对象下的第一层级的属性和值
    * 2forin会将对象的原型上的属性也给复制过来
      * 解决  hasOwnProperty判断该属性 是否是对象拥有的属性

  * 原生的深拷贝的方法

    * 递归     是否是数组  是  拷贝的对象是[]  否就是{}    hasOwnProperty判断该属性 是否是对象拥有的属性

    ```javascript
        <script>
            var obj111 = {
                name:'joth',
                age:18,
                body:{
                    eyes:{
                        left:1.0,
                        right:1.2
                    },
                    weight:'65kg',
                    height:'175cm'
                },
                arr:[1,2,3,4],
                eat:function(){
                    console.log('吃饭饭');
                }
            }
    
            function deepClone(obj){
                var cloneObj = Array.isArray(obj) ? [] : {};//判断传入是否是数组  是  cloneObj = []  否  cloneObj = {}
                if(obj && typeof obj == 'object'){//判断 有参数传入，且 传入的参数是一个对象
                    for(var key in obj){//开始使用forin
                        if(obj.hasOwnProperty(key)){//判断属性是否是对象拥有的属性，而不是对象原型上的属性
                            if(obj[key] && typeof obj[key] == 'object'){//如果某个属性对应的值又是一个对象
                                cloneObj[key] = deepClone(obj[key]);//clone的对象的属性的值 继续递归调用deepclone 继续进行内部的对象的forin  直到所有的属性 不再是对象  都是基本类型时
                            }else{
                                cloneObj[key] = obj[key];//如果不是对象了 属性的值是基本类型了  直接进行赋值
                            }
                        }
                    }
                }
                return cloneObj;
            }
    
            var nObj = deepClone(obj111);
    
            console.log(obj111, nObj);
    
            nObj.arr.push(100);
            nObj.body.eyes.right = 0.8;
            nObj.eat = function(){
                console.log('吃肉肉');
            }
    
            console.log(obj111, nObj);
            obj111.eat();
            nObj.eat();
        </script>
    ```

* jq的extend方法使用

  * $.extend(dest,obj1,obj2,obj3...) 将多个对象合并到dest的目标对象中 返回修改后的目标对象

  * 如果不希望目标对象被修改 合并  $.extend({},obj1,obj2,obj3....) 将后续对象合并到一个空对象中  在返回这个对象  用一个空对象作为目标对象

    ```javascript
        <script>
            var obj1 = {
                a:10
            }
            var obj2 = {
                b:20
            }
            var obj3 = {
                c:30
            }
            var obj4 = {
                d:40
            }
    
            // 将  obj  2-4  合并到1中  obj1就被修改了
            // $.extend(obj1,obj2,obj3,obj4);
            // console.log(obj1);
    
            // 希望不修改任何对象   合并后返回一个新对象
            var nObj = $.extend({},obj1,obj2,obj3,obj4);
            console.log(nObj,obj1);
        </script>
    ```

    

  * $.extend(true,{},obj)  当第一个参数为true时 进行深拷贝  为false或不写 默认为false  就是浅拷贝

    ```javascript
        <script>
            var obj111 = {
                name:'joth',
                age:18,
                body:{
                    eyes:{
                        left:1.0,
                        right:1.2
                    },
                    weight:'65kg',
                    height:'175cm'
                },
                arr:[1,2,3,4],
                eat:function(){
                    console.log('吃饭饭');
                }
            }
    
            // jq的浅拷贝
            // var nObj = $.extend({},obj111);
            // console.log(obj111,nObj);
            // nObj.body.eyes.right = 0.8;
            // console.log(obj111,nObj);
    
            //jq的深拷贝
            var nObj = $.extend(true,{},obj111);
            console.log(obj111,nObj);
            nObj.body.eyes.right = 0.8;
            console.log(obj111,nObj);
        </script>
    ```

    

  