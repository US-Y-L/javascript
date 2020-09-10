### JavaScript 特效动画

* 拖拽效果

  * 鼠标按下  onmousedown

    * 计算按下时  鼠标和元素的内部 距离

  * 鼠标移动  onmousemove

    * 将移动的鼠标位置给到元素的top和left  并且减去  鼠标和元素的内部 距离

  * 鼠标抬起  onmouseup

    * 将mousemove事件和up事件的处理函数 赋值 null  回收

  * 移动和抬起要写  document  

    ```javascript
        <script>
            window.onload = function(){
                var oDiv = document.getElementById('box');
                var disX = disY = 0;
    
                oDiv.onmousedown = function(ev){
                    var ev = ev || event;
                    disX = ev.clientX - oDiv.offsetLeft;//ev.offsetX
                    disY = ev.clientY - oDiv.offsetTop;
                    // 移动和释放 都是在文档中进行的
                    document.onmousemove = function(ev){
                        var ev = ev || event;
                        // 要将鼠标移动的x y  给到div的left  top
                        oDiv.style.left = ev.clientX - disX + 'px';
                        oDiv.style.top = ev.clientY - disY + 'px';
                    }
                    document.onmouseup = function(){
                        document.onmousemove = null;
                        document.onmouseup = null;
                    }
                }
            }
        </script>
    ```

    

  * 范围限定

    ```javascript
        <script>
            window.onload = function(){
                var oDiv = document.getElementById('box');
                var disX = disY = 0;
    
                oDiv.onmousedown = function(ev){
                    var ev = ev || event;
                    disX = ev.clientX - oDiv.offsetLeft;
                    disY = ev.clientY - oDiv.offsetTop;
                    // 移动和释放 都是在文档中进行的
                    document.onmousemove = function(ev){
                        var ev = ev || event;
                        // 限定范围
                        var l = ev.clientX - disX;
                        var t = ev.clientY - disY
                        // 判断l和t的范围  不能超出可视区的范围-盒子的宽/高
                        if(l <= 0){
                            l = 0;
                        }else if(l >= document.documentElement.clientWidth - oDiv.offsetWidth){
                            l = document.documentElement.clientWidth - oDiv.offsetWidth;
                        }
    
                        if(t <= 0){
                            t = 0;
                        }else if(t >= document.documentElement.clientHeight - oDiv.offsetHeight){
                            t = document.documentElement.clientHeight - oDiv.offsetHeight;
                        }
    
                        // 吸附  小于50 就设置为0   距离最大值还有50px时 就设置为最大值
                        // if(l <= 50){
                        //     l = 0;
                        // }else if(l >= document.documentElement.clientWidth - oDiv.offsetWidth - 50){
                        //     l = document.documentElement.clientWidth - oDiv.offsetWidth;
                        // }
    
                        // if(t <= 50){
                        //     t = 0;
                        // }else if(t >= document.documentElement.clientHeight - oDiv.offsetHeight - 50){
                        //     t = document.documentElement.clientHeight - oDiv.offsetHeight;
                        // }
    
    
                        oDiv.style.left = l + 'px';
                        oDiv.style.top = t + 'px';
                    }
                    document.onmouseup = function(){
                        document.onmousemove = null;
                        document.onmouseup = null;
                    }
                }
            }
        </script>
    ```

  * 阻止拖拽时的文字选中

    * chrome等  return false
    * ie   setCapture  和 releaseCapture   事件捕获和释放捕获

    ```javascript
        <script>
            window.onload = function(){
                var oDiv = document.getElementById('box');
                var disX = disY = 0;
    
                oDiv.onmousedown = function(ev){
                    var ev = ev || event;
                    disX = ev.clientX - oDiv.offsetLeft;
                    disY = ev.clientY - oDiv.offsetTop;
                    // 移动和释放 都是在文档中进行的
                    document.onmousemove = function(ev){
                        var ev = ev || event;
                        // 要将鼠标移动的x y  给到div的left  top
                        oDiv.style.left = ev.clientX - disX + 'px';
                        oDiv.style.top = ev.clientY - disY + 'px';
                    }
                    document.onmouseup = function(){
                        // 如果是ie  释放捕获
                        if(oDiv.releaseCapture) oDiv.releaseCapture()
                        document.onmousemove = null;
                        document.onmouseup = null;
                    }
                    if(oDiv.setCapture) oDiv.setCapture();//如果是ie  就行事件捕获
                    return false;//ie8-不行
                }
            }
        </script>
    ```

  * 拖拽的碰撞检测

    ```javascript
        <script>
            window.onload = function(){
                var oDiv = document.getElementById('box');
                var big = document.getElementById('bigbox');
                var disX = disY = 0;
    
                oDiv.onmousedown = function(ev){
                    var ev = ev || event;
                    disX = ev.clientX - oDiv.offsetLeft;
                    disY = ev.clientY - oDiv.offsetTop;
                    
                    document.onmousemove = function(ev){
                        var ev = ev || event;
                        var l = ev.clientX - disX;
                        var t = ev.clientY - disY;
                        
                        oDiv.style.left = l + 'px';
                        oDiv.style.top = t + 'px';
    
                        if(oDiv.offsetLeft + oDiv.offsetWidth >= big.offsetLeft && oDiv.offsetLeft <= big.offsetLeft + big.offsetWidth && oDiv.offsetTop + oDiv.offsetHeight >= big.offsetTop && oDiv.offsetTop <= big.offsetTop + big.offsetHeight){
                            // oDiv.style.left = big.offsetLeft + 'px';
                            // oDiv.style.top = big.offsetTop + 'px';
                            big.style.background = 'green';
                        }else{
                            big.style.background = '';
                        }
                    }
                    document.onmouseup = function(){
                        document.onmousemove = null;
                        document.onmouseup = null;
                    }
                }
            }
        </script>
    ```

* 缓冲运动

  * 缓冲运动基础

    ```javascript
    function getStyle(el, attr){
        return el.currentStyle ? el.currentStyle[attr] : getComputedStyle(el)[attr];
    }
    
    // var timer = null;
    
    function bufferMove(el, attr, target){
        clearInterval(el.timer);
        // el是元素对象  对象中可以任意增加属性  现在我就给el元素加了一个属性  timer  值是一个定时器
        el.timer = setInterval(function(){
            var cur = parseInt(getStyle(el, attr));//每次运动获取元素的当前值
            var speed = (target - cur) / 10;//目标值-当前值除以运动系数  得到每次运动的步长  如果该步长值为正 则说明正向运动  如果步长为负 则反向运动
            // 当speed为正值  则向上取整  speed为负值 则向下取整
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // 边界判断  可以用 == 来判断
            if(cur == target){
                // 当当前值等于了  目标值  则清除定时器  运动结束
                clearInterval(el.timer);
            }
            // 将每次当前值+ 步长值的结果 赋值给 元素的属性  让元素运动
            el.style[attr] = cur + speed + 'px';
        },20)
    }
    
    // 元素 在js中是什么类型  对象
    /* 
        var obj = {}
        obj.aa = 'aaa';
    
        el.timer = setInterl()
    */
    ```

  * 带有透明度运动的缓动框架

    ```javascript
    function getStyle(el, attr){
        return el.currentStyle ? el.currentStyle[attr] : getComputedStyle(el)[attr];
    }
    
    function bufferMove(el, attr, target){
        clearInterval(el.timer);
        el.timer = setInterval(function(){
            // 要通过 属性名  来判断是不是 opacity  是opacity  那么 获取的值 要*100 再取整 不是opacity 就直接取整
            if(attr == 'opacity'){
                // 当属性为透明度时  取到的当前值
                var cur = Math.round(getStyle(el, attr) * 100);
            }else{
                var cur = parseInt(getStyle(el, attr));
            }
            // 如果是透明度  目标值 最大为100 最小为0
            var speed = (target - cur) / 20;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            console.log(speed);
            if(cur == target){
                clearInterval(el.timer)
            }
            // 当属性名为  opacity  时  赋值需要加完之后除以100  不是opacity  就直接加完再加px
            if(attr == 'opacity'){
                // console.log((cur + speed));
                el.style.opacity = (cur + speed) / 100;//chrome
                el.style.filter = 'alpha(opacity=' + (cur + speed) + ')';//ie8-
            }else{
                el.style[attr] = cur + speed + 'px';
            }
        },20)
    }
    ```

  * 多属性同时运动的缓动框架

    ```javascript
    function getStyle(el, attr){
        return el.currentStyle ? el.currentStyle[attr] : getComputedStyle(el)[attr];
    }
    
    function bufferMove(el, json){
        clearInterval(el.timer);
        el.timer = setInterval(function(){
            var flag = true;
            for(var attr in json){
                if(attr == 'opacity'){
                    var cur = Math.round(getStyle(el, attr) * 100);
                }else{
                    var cur = parseInt(getStyle(el, attr));
                }
                var speed = (json[attr] - cur) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
    
                // 边界  多属性运动中  当其中一个属性到了目标 就将定时器给清除了
                // if(cur == json[attr]){
                //     clearInterval(el.timer);
                // }
    
                // 边界  多属性运动中  只要存在某个属性没有达到目标值 就应该将flag  设置false
                if(cur != json[attr]){
                    flag = false;
                }
    
    
                if(attr == 'opacity'){
                    el.style.opacity = (cur + speed) / 100;
                    el.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
                }else{
                    el.style[attr] = cur + speed + 'px';
                }
            }
    
            if(flag){
                clearInterval(el.timer);
            }
        },20)
    }
    ```

  * 链式运动框架

    * 回调函数  callback  就是你写一个函数，让预先写好的系统来调用。你调用系统的函数，是直调。让系统调用你的函数，就是回调。
      * 当你定义的函数运行完毕后  执行调用一个已经写好的函数再进行后续的执行  那么你执行完后调用的这个函数就叫回调函数
      * 所有回调函数的this指向 全部指向window
      * 手动修改this指向到元素

    ```javascript
    function getStyle(el, attr){
        return el.currentStyle ? el.currentStyle[attr] : getComputedStyle(el)[attr];
    }
    
    function bufferMove(el, json, fn){
        clearInterval(el.timer);
        el.timer = setInterval(function(){
            var flag = true;
            for(var attr in json){
                if(attr == 'opacity'){
                    var cur = Math.round(getStyle(el, attr) * 100);
                }else{
                    var cur = parseInt(getStyle(el, attr));
                }
                var speed = (json[attr] - cur) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
    
                if(cur != json[attr]){
                    flag = false;
                }
                if(attr == 'opacity'){
                    el.style.opacity = (cur + speed) / 100;
                    el.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
                }else{
                    el.style[attr] = cur + speed + 'px';
                }
            }
    
            if(flag){
                clearInterval(el.timer);
                // if(fn) fn();//如果有fn  就执行fn  回调函数   
                // 回调函数的this指向window  所以回调之后 我希望this执行 执行动画的元素
                if(fn) fn.call(el);//将回调函数fn的this指向  当前的el元素
            }
        },20)
    }
    ```

    