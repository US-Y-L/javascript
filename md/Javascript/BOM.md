#### BOM

* Browser Object Model  浏览器对象模型---浏览器的功能操作的接口，没有规范

* 弹窗

  * alert(' 消息')  
  * confirm('消息')  确定--返回true和取消--false
  * prompt（'标题'，'默认值'）：可以输入的弹窗   有内容返回内容 没有内容返回空  取消返回null

  ```javascript
      <script>
          // alert('hello world!');
  
          // var b = confirm('hello beijing!');
          // console.log(b);
  
          // var n = prompt('请开始你的表演','才艺名称');
          // console.log(n);
      </script>
  ```

* open&close

  * open(url, target,窗口的宽高， 是否替换当前历史记录中的位置)具有a标签的功能可以打开页面链接

  * close关闭当前页面

    ```javascript
        <script>
            window.onload = function(){
                var aBtn = document.getElementsByTagName('button');
    
                aBtn[0].onclick = function(){
                    open('http://www.163.com','_blank');
                }
    
                aBtn[1].onclick = function(){
                    close();
                }
            }
        </script>
    </head>
    <body>
        <!-- <button onclick="window.open('http://www.163.com')">网易</button>
        <button onclick="window.close()">关闭</button> -->
        <button>网易</button>
        <button>关闭</button>
    ```

* location 位置，定位   返回地址中的一些信息

  * location对象既属于window也属于document

    ```javascript
        <script>
            window.onload = function(){
                var aBtn = document.getElementsByTagName('button');
                var oDiv = document.getElementById('show');
    
                aBtn[2].onclick = function(){
                    oDiv.innerHTML = '哈希值：' + location.hash + '<br/>' +
                                     '域名+端口：' + location.host + '<br/>' +
                                     '域名：' + location.hostname + '<br/>' +
                                     '路径地址' + location.href + '<br/>' +
                                     '来源' + location.origin + '<br/>' +
                                     '路径名' + location.pathname + '<br/>' +
                                     '端口' + location.port + '<br/>' +
                                     '协议' + location.protocol + '<br/>' +
                                     '表单提交数据' + location.search + '<br/>' 
                }
    
                // 跳转地址栏
                aBtn[0].onclick = function(){
                    window.location.href = 'http://www.163.com';
                }
    
                // 刷新页面
                aBtn[1].onclick = function(){
                    window.location.reload();
                }
            }
        </script>
    ```

* history--历史记录：按你浏览访问的页面的顺来记录

  * forward（）:前进一步

  * back（）：后退一步

  * go（）：可进可退  正值为在历史记录中前进几步  负值在历史记录中后退几步

    ```javascript
        <script>
            window.onload = function(){
                var aBtn = document.getElementsByTagName('button');
                // 后退按钮
                aBtn[0].onclick = function(){
                    history.back();//在历史记录中后退一步
                }
    
                // 前进
                aBtn[1].onclick = function(){
                    history.forward();//在历史记录中前进一步
                }
            }
        </script>
    
    oBtn.onclick = function(){
                    history.go(n);//在历史记录中前进n步
                }
    
    oBtn.onclick = function(){
                    history.go(-n);//在历史记录中后退n步
                }
    ```

* navigator---记录浏览器和操作系统的相关信息

  ```javascript
      <script>
          window.onload = function(){
              var aBtn = document.getElementsByTagName('button');
              var oDiv = document.getElementById('show');
  
              oDiv.innerHTML = '浏览器代号：' + navigator.appCodeName + '<br/>' +
                               '浏览器名称：' + navigator.appName + '<br/>' +
                               '浏览器版本' + navigator.appVersion + '<br/>' +
                               '操作系统：' + navigator.platform + '<br/>' +
                               '浏览器用户代理：' + navigator.userAgent + '<br/>' +
                               '是否启用cookie：' + navigator.cookieEnabled + '<br/>' +
                               '系统语言：' + navigator.language + '<br/>' +
                               '系统语言：' + navigator.systemLanguage + '<br/>'             
          }
      </script>
  ```

* body的位置属性

  * client系列
    * 元素.clientWidth/元素.clientHeight   元素的可视宽/可视高
    * 浏览器可视区的宽/高：
    * 元素.clientTop/元素.clientLeft:   元素的上和左边框的宽

  ```javascript
      <script>
          window.onload = function(){
              var oBox = document.getElementById('box');
              var oBox1 = document.getElementById('box1');
              // // 元素的内容宽
              // console.log(getComputedStyle(oBox).width);
  
              // // 元素的可视宽
              // console.log(oBox.clientWidth);
  
              // // 元素的内容宽
              // console.log(getComputedStyle(oBox1).width);  //就是样式的width值
  
              // // 元素的可视宽
              // console.log(oBox1.clientWidth);//  width + 左右的padding
  
              // 浏览器可视区的宽/高
              console.log(document.documentElement.clientWidth);
              console.log(document.documentElement.clientHeight);
  
              // 元素的上 左边框的宽
              console.log(oBox1.clientTop);//5
              console.log(oBox1.clientLeft);//5
          }
      </script>
  ```

* offset系列

  * offsetParent: 获取有定位属性的父节点，如果所有父节点都没有定位属性，则获取到body
  * offsetTop：元素顶部到有定位属性父级的顶部的距离，当没有定位属性的父级时  到body的距离
  * offsetLeft：元素左边到有定位属性父级的左边的距离，当没有定位属性的父级时  到body的距离
  * offsetWidth：获取元素的占位宽    内容宽 + 左右的padding + 左右的边框
  * offsetHeight：获取元素的占位高  内容高 + 上下的padding + 上下的边框

  ```javascript
      <script>
          window.onload = function(){
              var oBox = document.getElementById('box');
              var oSub = document.getElementById('sub');
              // box没有定位属性时
              // console.log(oSub.offsetTop);//50
              // console.log(oBox.offsetTop);//8
              // box有定位属性了
              console.log(oSub.offsetTop);//
              console.log(oBox.offsetTop);//
  
              // 元素的占位宽高
              console.log(oSub.offsetWidth);
              console.log(oSub.offsetHeight);
          }
      </script>
  ```

* scroll系列

  * 滚动事件 onscroll  连续触发

  * 浏览器滚动条滚动获取页面卷走的高度/宽度  scrollTop/scrollLeft

    * 也可获取  子元素卷走的高度

  * 获取页面或元素实际的高度/宽度  scrollHeight  scrollWidth

    ```javascript
        <script>
            window.onload = function(){
                var oDiv = document.getElementById('box');
                // 滚动事件
                oDiv.onscroll = function(){
                    console.log(this.scrollTop);//子元素卷走的高度
                }
    
                console.log(oDiv.scrollHeight);//子元素的占位高
            }
        </script>
    ```

* 总结

  * 内容宽/高  width 和height
  * 元素可视宽高  clientWidth / clientHeight
  * 元素的占位宽高 offsetWidth/ offsetHeight
  * 滚动的内容元素的实际宽高 scorllWidth /scrollHeight
  * 页面在浏览器中卷走的高度   document.documentElement.scrollTop || doucment.body.scrollTop
  * 元素的上左边框的宽   clientTop  / clientLeft
  * 到有定位属性父级的上左距离，如果没有有定位属性的父级 则是到body的上左距离  offsetTop/offsetLeft

* 回到顶部

* 懒加载  lazyload

  * 当页面加载时 加载一张图片就和服务进行一次请求  当图片比较多的时候  我们先加载显示在可视区的图片，没有进入可视区的图片不进行加载。当滚动条滚动  当前未进入可视区的图片进入可视区（当前图片到文档顶部的高度  小于 浏览器卷走的高度 加上浏览器的可视区高度）时 将图片的src给到正真的地址  进行图片的加载

* 当可视区尺寸发生变化的事件

  * onresize  事件  无论宽或高  的尺寸发生变化就执行该事件对应的事件处理函数



