#### DOM

* Doucment  Object   Model   文档对象模型

  * 就是 html可扩展标记语言的标准接口API----》所有标签在js中怎么用  js中如何通过某些方法（API接口）来操作这些标签。

* 获取节点

  * 获取子节点

    * childNodes
      * 会获取三种节点  元素节点， 属性节点， 文本节点
      * 在chrome中会获取元素节点和空文本节点      在ie8-  不会获取空文本节点
      * nodeType---返回节点的节点属性值  元素---1     属性--2      文本--3
      * nodeName--返回节点的节点的名称
      * nodeValue--返回文本节点的内容
    * children
      * 在chrome中返回所有元素节点  不会返回文本节点  但是在ie8- 会返回注释节点

    ```javascript
        <script>
            window.onload = function(){
                // console.log(document);
                // console.log(document.documentElement);//html
                // console.log(document.head);
                // console.log(document.body);
                var oUl = document.getElementById('list');
                // 获取子节点
                var aLi = oUl.childNodes;
                console.log(aLi.length);//13 // ie 6 
                // console.log(aLi[0].nodeType);
                // console.log(aLi[1].nodeType);
                // console.log(aLi[2].nodeType);
                // console.log(aLi[3].nodeType);
                // console.log(aLi[0].nodeName);
                // console.log(aLi[1].nodeName);
    
                // console.log(aLi[0].nodeValue);
                // console.log(aLi[1].nodeValue);
    
                // console.log('-----------------------------------------');
                // var aLi1 = oUl.children;
                // console.log(aLi1.length);
    
                var nodes = oUl.childNodes;
                var aLi = [];
                for(var i = 0; i < nodes.length; i++){
                    if(nodes[i].nodeType == 1){
                        aLi.push(nodes[i]);
                    }
                }
                console.log(aLi.length);
            }
        </script>
    ```

  * 获取父节点

    * parentNode
      * 获取子节点的父节点
    * offsetParent
      * 获取当前子节点最近的有定位属性的父节点，如果所有父节点都没有定位属性，则获取到body

    ```javascript
        // 获取父节点
        var aLi = oUl.children;
    
        console.log(aLi[0].parentNode);//ul
        console.log(oUl.parentNode);//body
        console.log(aLi[0].parentNode.parentNode);
    
    //offsetParent
        <script>
            window.onload = function(){
                var oDiv1 = document.getElementById('div1');
                var oDiv2 = document.getElementById('div2');
                var oDiv3 = document.getElementById('div3');
    
                console.log(oDiv3.offsetParent);//最近的有定位属性的父级  如果所有父级节点都没有定位属性 则找到body
                console.log(oDiv3.offsetTop);//距离有定位属性的父级的top值
    
                // 希望求得  div3到body的top值   套了多少层盒子  不清除  有的盒子有定位 有top  有的盒子没有
                
                function getTop(el){
                    var iTop = 0; //存放从传入的元素到body的top的累加值
                    while(el.offsetParent){
                        iTop += el.offsetTop;
                        el = el.offsetParent;
                    }
                    return iTop;
                }
    
                /* 
                    1 el-->div3  判断条件  div3的offsetParent--》div2  为真  iTop += div3.offsetTop  30  iTop = 30   el = div3.offsetParent<--div2
    
                    2 el-->div2  判断条件  div2的offsetParent--》div1  为真  iTop += div2.offsetTop  50  iTop = 80  el = div2.offsetParent<--div1
    
                    3 el-->div1  判断条件 div1的offsetParent--》body  为真  iTop += div1.offsetTop  100 iTop = 180  el = div1.offsetParent<--body
                    
                    4 el-->body 判断条件  body的offsetParent--》null--》循环结束
                
                */
    
                console.log(getTop(oDiv3));
            }
        </script>
    ```

  * 获取其他节点（兼容性）---查找节点

    * 获取首位节点
      * 首节点  firstChild    firstElementChild
      * 尾节点  lasetChild  lastElementChild
      * 兼容方法  要先找到那一项在某个浏览器中会返回假  就用那个做判断条件  兼容可以用ifelse   三目  短路运算来写
      * 上一个兄弟节点： previousSibling      previousElementSibling
      * 下一个兄弟节点： nextSibling     nextElementSibling

    ```javascript
        <script>
            window.onload = function(){
                var oUl = document.getElementById('list');
                // 首节点
                // console.log(oUl.firstChild);//chrome text  ie li
                // console.log(oUl.firstElementChild);// chrome li ie undefined
    
                // 做兼容  
                var fLi = oUl.firstElementChild || oUl.firstChild;
                console.log(fLi);
                // 尾节点
                var lastLi = oUl.lastElementChild || oUl.lastChild;
    
                // 上一个兄弟节点
                var oLi = document.getElementById('sub');
                var prevLi = oLi.previousElementSibling || oLi.previousSibling;
                prevLi.style.background = 'red';
    
                // 下一个兄弟节点
                var nLi = oLi.nextElementSibling || oLi.nextSibling;
                nLi.style.background = 'purple';
            }
        </script>
    ```

* 操作节点

  * 创建节点

    * document.createElement（'标签名'）创建元素节点
    * doucment.createTextNode（'文本内容'）创建文本节点
      * 所有的创建都是在  document下创建的

    ```javascript
    var oUl = document.getElementById('list');
                // 创建一个元素节点 
                var oLi = document.createElement('li');
                // // 创建一个文本节点
                // var oTxt = document.createTextNode('hahaha');
                // // 将文本节点 追加到 创建的元素节点中
                // oLi.appendChild(oTxt);
                oLi.innerHTML = 'hehehe';
    ```

    

  * 追加节点

    * 父节点.appendChild(子节点)：将子节点追加到父节点的最后

    ```javascript
    var oLi = document.createElement('li');
    oUl.appendChild(oLi);
    ```

    

  * 插入节点

    * 父节点.insertBefore(新节点，目标节点)：在目标节点之前插入新节点

    ```javascript
    var oLi = document.createElement('li');
                oLi.innerHTML = '我是一个新节点'
                oUl.insertBefore(oLi, oUl.children[1]);
    ```

    

  * 删除节点

    * 父节点.removeChild(子节点)：从父节点删除子节点
    * 节点.remove()：删除节点本身

    ```javascript
    var aLi = oUl.children;
                for(var i = 0; i < aLi.length; i++){
                    aLi[i].onclick = function(){
                        // 从父节点删除子节点
                        // oUl.removeChild(this);
                        // 删除当前节点
                        this.remove();
                    }
                }
    ```

    

  * 替换节点

    * replaceChild（新节点， 要被替换的节点）：用新节点替换要被替换的节点

    ```javascript
    //  替换节点
                var oLi = document.createElement('li');
                oLi.innerHTML = 'xixixi';
                oUl.replaceChild(oLi, oUl.children[3]);
    ```

    

  * 复制节点

    * cloneNode(): 当该方法参数为空默认为false时 只复制当前节点的标签不复制内容
    * cloneNode(true): 当该方法参数为true时  即复制标签页复制节点的内容

    ```javascript
    // 复制节点
                // 复制03节点再追加到ul的最后
                var oBtn = document.getElementsByTagName('button')[0];
                oBtn.onclick = function(){
                    // var cLi = oUl.children[2].cloneNode();
                    // oUl.appendChild(cLi);
                    var cLi = oUl.children[2].cloneNode(true);
                    oUl.appendChild(cLi);
                }
    ```

* 获取标签的其他方法  ie8+

  * 通过选择器来获取一个元素：document.querySelector('选择器')

    * 即便是一组元素的选择器  也可以选取第0个

  * 通过选择器来获取一组元素：doucment.querySelectorAll('选择器')

     ```javascript
        <script>
            window.onload = function(){
                // var oUl = document.getElementById('list');
                // var oUl = document.getElementsByTagName('ul')[0];
                var oList = document.querySelector('#list');
                console.log(oList);
                var oUl = document.querySelector('ul');
                console.log(oUl);
                var oLi = document.querySelector('li');
                console.log(oLi);
    
                // var aLi = document.getElementsByTagName('li');
                // console.log(aLi);
    
                // var aLi = document.querySelectorAll('li');
                // console.log(aLi);
                // var oUl = document.getElementById('list');
                // var aLi = oUl.getElementsByTagName('li');
                // console.log(aLi);
    
                // var aLi = document.querySelectorAll('ul li');
                // console.log(aLi);
                // var aLi = document.querySelectorAll('#list li');
                // console.log(aLi);
    
                var aLi4 = document.querySelectorAll('#list li:nth-child(5)');
                console.log(aLi4);
    
                var aAA = document.getElementsByClassName('aa');
                var aAA1 = document.querySelectorAll('.aa');
                console.log(aAA, aAA1);
            }
        </script>
     ```

* 操作元素属性

  * 元素.属性名  --->操作元素的固有属性，不能操作自定义属性

  * getAttribute（'属性名'）获取属性值

  * setAttribute('属性名'，'新属性值')：给该属性设置新的属性值

    * 可以获取和设置自定义属性

    ```javascript
        <script>
            window.onload = function(){
                var oA = document.getElementById('a1');
    
                console.log(oA.title);
                oA.title = 'aaa';
    
                console.log(oA.data);
    
                // 获取自定义属性
                console.log(oA.getAttribute('data'));
                oA.setAttribute('data','1234');
            }
        </script>
    ```

* 操作表格

  * 获取表格

    * 表头  oTab.tHead    表尾 oTab.tFoot   
    * 表体---一个表格可以有n个tbody,所以获取tbody  要用  tBodies  一般情况下只有一个tbody所以我们获取  oTab.tBodies[0];
    * 获取行   通过tbody来获取   oTb.rows['下标']
    * 获取单元格  通过  行来进行获取  oTr.cells['下标']

    ```javascript
        <script>
            window.onload = function(){
                // 获取表格
                var oTab = document.getElementById('tab');
                // 获取表头
                var tHead = oTab.tHead;
                console.log(tHead);
    
                // 获取表尾
                var tFoot = oTab.tFoot;
                console.log(tFoot);
    
                // 获取表体
                var oTb = oTab.tBodies[0];
                console.log(oTb);
    
                // 获取行---通过tbody来获取
                var oTr = oTb.rows[1];
                console.log(oTr);
                // 获取单元格 ---》从tr中获取
                var oTd = oTr.cells[1];
                console.log(oTd);
            }
        </script>
    ```

    