Touch

* touch事件---用于手机的webApp   

  * touchstart  手指按下

  * touchmove  手指按下后移动

  * touchend  手指抬起

  * 一般情况为了浏览器支持更顺畅  不用on  一般采用addEventListener来绑定事件

    ```javascript
        <script>
            window.onload = function(){
                var oDiv = document.querySelector('#box');
    
                oDiv.addEventListener('touchstart',function(){
                    console.log('手指按下');
                },false)
    
                oDiv.addEventListener('touchmove',function(){
                    console.log('手指移动');
                },false)
    
                oDiv.addEventListener('touchend',function(){
                    console.log('手指抬起');
                },false)
            }
        </script>
    ```

    

* pc端事件  和移动端事件触发的时间区别

  * 点击事件 比 touch事件要慢300ms

  * 由于有某些元素有点击事件  会造成一个点透问题

    * 当上层元素发生点击的时候，下层元素也有点击事件。在 300ms 之内，如果上层元素消失或隐藏，目标就会漂移到下层元素身上，就会触发点击行为。

  * 如何解决呢：下层元素不要使用有点击特性的元素。

    ```javascript
        <script>
            window.onload = function(){
                var oDiv = document.querySelector('#box');
    
                // oDiv.addEventListener('mousedown',function(){
                //     oDiv.style.display = 'none';
                // },false)
    
                oDiv.addEventListener('touchstart',function(){
                    oDiv.style.display = 'none';
                },false)
            }
        </script>
    ```

* touch的事件对象

  * touches  当前在屏幕上的所有手指（一个列表  就是  数组）

  * targetTouches  在目标元素上的所有手指（一个列表  就是  数组）

  * **changedTouches  在目标元素上  触发事件的所有手指（一个列表  就是  数组）常用**

  * 事件对象下的一些属性

    * clientX 、 clientY    点击事件触发的位置到可视区的左和上边的距离
    * force:压力
    * pageX、pageY      点击事件触发的位置 文档的左和上边的距离
    * radiusX、radiusY：旋转半径
    * rotationAngle：选择角度
    * screenX、screenY 点击事件触发的位置到屏幕的左和上边的距离

    ```javascript
        <script>
            window.onload = function(){
                var oDiv = document.querySelector('#box');
    
                oDiv.addEventListener('touchstart',function(ev){
                    var touch = ev.changedTouches[0];//当前触发事件的第一个手指
                    console.log(touch);
                },false)
            }
        </script>
    ```

* touch.js

  * 百度的手势和事件对象库--只能移动端使用

  * 事件监听（事件绑定）  touch.on(元素，事件（字符串可以空格开多个事件），事件处理函数)

    ```javascript
        <script>
            window.onload = function(){
                var oDiv = document.querySelector('#box');
    
                // touch.on(oDiv,'tap',function(){//手指单击
                //     console.log('被单击了');
                // })
    
                // touch.on(oDiv,'doubletap',function(){//手指双击
                //     console.log('被双击了');
                // })
    
                // touch.on(oDiv,'hold',function(){// 手指长按
                //     console.log('被按了很久');
                // })
    
                touch.on(oDiv,'tap hold doubletap', function(){
                    console.log('有事件触发了');
                })
            }
        </script>
    ```

  * 事件委托（事件代理）

  * touch.on(代理元素，事件，目标元素（字符串  选择器），事件处理函数)

    ```javascript
        <script>
            window.onload = function(){
                var oUl = document.getElementsByTagName('ul')[0];
                // oUl.onclick = function(ev){
                //     var target = ev.target || ev.srcElement;
    
                //     console.log(target.innerHTML);
                // }
    
                touch.on(oUl,'tap','li',function(){
                    // console.log(this);
                    console.log(this.innerHTML);
                })
            }
        </script>
    ```

  * touch.js的事件对象

    * ev.originEvent 元素的touch事件对象
    * ev.fingersCount 手指数量
    * ev.position 相关位置信息 , 不同的操作产生不同的位置信息
    * ev.startRotate() 方法 开始旋转
    * ev.direction 滑动的方向
    * ev.distance  起始点和滑动结束点之间的距离
    *  ev.distanceX x 滑动距离
    *  ev.distanceY y 滑动距离
    * ev.duration  touchstart 与 touchend 之间的时间戳
    * ev.fingerStatus 指事件结束后的状态 一般为 'end'
    * ev.rotation   旋转角度

    ```javascript
        <script>
            window.onload = function(){
                var oDiv = document.querySelector('#box');
    
                // touch.on(oDiv,'tap',function(ev){
                //     console.log(ev);
                //     // ev.originEvent  元素的touch事件对象
                //     // ev.fingersCount 手指数量
                //     // ev.position 相关位置信息 , 不同的操作产生不同的位置信息
                //     // ev.startRotate()  方法  开始旋转
                // })
    
                touch.on(oDiv,'swipeleft',function(ev){
                    console.log(ev);
                    // ev.direction  滑动的方向
                    // ev.distance   起始点和滑动结束点之间的距离
                    // ev.distanceX  x 滑动距离
                    // ev.distanceY  y 滑动距离
                    // ev.duration   touchstart 与 touchend 之间的时间戳
                    // ev.fingerStatus 指事件结束后的状态 一般为 'end'
                })
            }
        </script>
    ```

    