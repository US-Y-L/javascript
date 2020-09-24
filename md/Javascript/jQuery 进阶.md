jQuery 进阶

* jq获取元素的宽高

  * 内容宽： $().width()  可 获取 可设置

  * 可视宽： $().innerWidth()

  * 占位宽： $().outerWidth()

  * 带外边距的占位宽：$().outerWidth(true)

    ```javascript
        <script>
            $(function(){
                // 内容宽
                console.log($('#box').width());
                // 可视宽
                console.log($('#box').innerWidth());
                // 占位宽
                console.log($('#box').outerWidth());
                // 带外边的占位宽
                console.log($('#box').outerWidth(true));
    
                // 设置
                // $('#box').width(200);
                // $('#box').innerWidth(200);
                // $('#box').outerWidth(200);
                // $('#box').outerWidth(200,true);
            })
    
    
    // 浏览器可视区的宽高
                console.log($(window).width());
                console.log($(window).height());
    
    // 文档的宽高
                console.log($(document).width());
                console.log($(document).height());
        </script>
    ```

* 元素位置

  * offset()   元素相对于文档的位置  返回一个对象  包含 top和left

  * position()  元素相对于有定位属性的父级的位置  返回一个对象  包含 top和left

    ```javascript
        <script>
            $(function(){
                console.log($('#sub').offset());//相对于文档的位置
                console.log($('#sub').position());//相对于有定位属性的父级的位置
    
                console.log($('#sub').offset().top);
            })
        </script>
    ```

* 滚动条卷走的高度和宽度

  * scrollTop()  scrollLeft()

    ```javascript
        <script>
            $(window).scroll(function(){
                console.log($(window).scrollTop());
            })
        </script>
    ```

* DOM操作

  * 创建元素  $('标签')

  * 尾部添加：  jq对象.appendTo(父元素选择器)      父元素选择器.append(jq对象)

  * 头部添加： jq对象.prependTo(父元素选择器)      父元素选择器.prepend(jq对象)

  * 在某个元素之前插入 ：  jq对象.insertBefore(目标jq对象)

  * 在某个元素之后插入 ：  jq对象.insertAfter(目标jq对象)

  * 删除节点  ： 

    * remove() 删除并返回删除的节点 ，该节点不保留节点原有的事件
    * detach()  删除并返回删除的节点，保留该节点原有的事件
    * empty()  清空子孙节点

  * 复制节点：clone()  复制节点及内容，不会复制节点上事件   clone(true) 复制节点及内容，复制节点上的事件

  * 替换节点：

    * jq对象.replaceAll(要被替换的节点)
    * 要被替换的节点.replaceWith(jq对象)

    ```javascript
        <script>
            $(function(){
                // 尾部添加及创建
                // $('<li>巴黎圣母院</li>').appendTo($('#list'));
                // $('#list').append($('<li>巴黎圣母院</li>'));
    
                // 头部添加
                // $('<li>三个火枪手</li>').prependTo($('#list'));
                // $('#list').prepend($('<li>三个火枪手</li>'));
    
                // 在之前插入
                $('<li>海贼王</li>').insertBefore($('li').eq(2));
    
                // 在之后插入
                $('<li>火影忍者</li>').insertAfter($('li').eq(3));
    
                $('li').click(function(){
                    console.log($(this).html());
                })
    
                // remove  删除 然后添加回给ul  原有的事件 没了
    
                // $('#list').append($('li').eq(3).remove());
    
                // detach()  删除 然后添加回给ul  原有的事件 保留
                // $('#list').append($('li').eq(3).detach());
                // empty  清空所有子孙节点
                // $('#list').empty();
    
                // clone
                $('#list').append($('li').eq(4).clone());
                $('#list').append($('li').eq(5).clone(true));
    
                // 替换
                // $('<li>茶花女</li>').replaceAll($('li').eq(2));
                $('li').eq(2).replaceWith($('<li>三体</li>'));
    
            })
        </script>
    ```

* jq的事件及事件对象

  * 事件对象

    ```javascript
        <script>
            $(function(){
                $('#box').mousedown(function(ev){
                    // console.log(ev);
                    // console.log(ev.clientX);//点击位置相对于浏览器可视区的left值
                    // console.log(ev.clientY);//点击位置相对于浏览器可视区的top值
                    // console.log(ev.currentTarget);//当前触发事件的目标
                    // console.log(ev.delegateTarget);
                    // console.log(ev.offsetX);//点击位置相对于元素左边的left值
                    // console.log(ev.offsetY);//点击位置相对于元素上边的top值
                    // console.log(ev.pageX);//点击位置相对于页面的left值
                    // console.log(ev.pageY);//点击位置相对于页面的top值
                    console.log(ev.which);//获取键值和鼠标按下按键值  鼠标按下的按键值中 左键为1  滚轮按下为2  右键为3
                })
    
                $(document).keydown(function(ev){
                    console.log(ev.keyCode);
                    console.log(ev.which);
                })
            })
        </script>
    ```

  * 事件绑定

    * 事件绑定

    * 一个元素多个事件绑定对应一个事件处理函数

    * 一个元素多个事件绑定每个对应一个事件处理函数  通过对象形式进行事件绑定

    * 自定义事件及触发

      ```javascript
          <script>
              $(function(){
                  // $('#box').on('click',function(){
                  //     console.log('被单击了');
                  // })
      
                  // 一个元素绑定多个事件 触发同一个事件处理函数
                  // $('#box').on('click dblclick contextmenu',function(){
                  //     console.log('被点击了');
                  // })
      
                  // 一个元素绑定多个事件 对应触发多个事件处理函数  通过对象形式进行事件绑定
                  $('#box').on({
                      'click':function(){
                          console.log('被单击了');
                      },
                      'dblclick':function(){
                          console.log('被双击了');
                      },
                      'contextmenu':function(){
                          console.log('被右击了');
                      }
                  })
      
                  // 自定义事件
                  $('#box').on('haha',function(){
                      console.log('hahahaha');
                  })
      
                  // 触发自定义事件
                  $('#box').trigger('haha');
      
                  
              })
          </script>
      ```

      

    * 事件委托

      ```javascript
          <script>
              $(function(){
                  // 事件委托
                  // 父元素    事件   选择器
                  $('ul').on('click','li',function(ev){
                      console.log($(this).html());
                      console.log(ev.currentTarget);//触发事件的是li  冒泡冒给ul
                      console.log(ev.delegateTarget);//事件及事件处理函数时绑定给ul
                  })
              })
          </script>
      ```

      

    * 事件命名空间

    * 事件取消绑定:  off()

      ```javascript
          <script>
              $(function(){
                  // $('#box').on('click',function(){
                  //     console.log('执行第一个操作');
                  // })
      
                  // $('#box').on('click',function(){
                  //     console.log('执行第二个操作');
                  // })
                  // // 点击事件下的操作  全部被取消了
                  // $('#box').off('click');
                  // 希望取消第二个绑定  留下第一个
                  // 事件的命名空间
                  $('#box').on('click.a',function(){
                      console.log('执行第一个操作');
                  })
      
                  $('#box').on('click.b',function(){
                      console.log('执行第二个操作');
                  })
      
                  $('#box').off('click.b');
              })
          </script>
      ```

      

    * 执行一次的事件绑定

      ```javascript
          <script>
              $(function(){
                  // $('#box').on('click',function(){
                  //     console.log('被点击了');
                  // })
      
                  // 只执行一次的事件绑定
                  $('#box').one('click',function(){
                      console.log('被点击了');
                  })
      
                  // $('#box').on('click',function(){
                  //     console.log('被点击了');
                  //     $(this).off('click');
                  // })
              })
          </script>
      ```

      

    * 事件合成

      ```javascript
          <script>
              $(function(){
                  // $('#box').mouseenter(function(){
                  //     $(this).css('background','green');
                  // })
      
                  // $('#box').mouseleave(function(){
                  //     $(this).css('background','red');
                  // })
      
                  // 合成事件
                  $('#box').hover(function(){//第一个函数就是鼠标经过的处理函数
                      $(this).css('background','green');
                  },function(){//第二个函数鼠标移开的处理函数
                      $(this).css('background','red');
                  })
              })
          </script>
      ```

* jq的基本动画

  * 显示/隐藏

    * show(duration动画的持续时间,easing动画效果（swing，linear），callback)；

    * hide(duration动画的持续时间,easing动画效果（swing，linear），callback);

    * toggle()在显示和隐藏中切换

    * duration为0  就直接显示和隐藏 没有动画过程  有时间 默认为normal400ms  fast 200ms  slow 600ms  也可以自己定义时间

    * 动画效果为  宽  高 和透明度变化

      ```javascript
          <script>
              $(function(){
                  var flag = true;
                  // $('button').click(function(){
                  //     // $('#box').hide();//直接隐藏  display 为none
                  //     // $('#box').hide(1000);
                  //     if(flag){
                  //         $('#box').hide(1000);
                  //         $(this).html('显示');
                  //     }else{
                  //         $('#box').show(1000);
                  //         $(this).html('隐藏');
                  //     }
                  //     flag = !flag;
                  // })
                  $('button').click(function(){
                      $('#box').toggle(1000);//在显示和隐藏中进行切换
                  })
              })
          </script>
      ```

      

  * 透明度变化

    * fadeIn(duration动画的持续时间,easing动画效果（swing，linear），callback)

    * fadeOut(duration动画的持续时间,easing动画效果（swing，linear），callback)

    * fadeTo(duration,opacity)

    * fadeToggle()

      ```javascript
          <script>
              $(function(){
                  var flag = true;
                  // $('button').click(function(){
                  //     if(flag){
                  //         $('#box').fadeOut(1000);
                  //         $(this).html('显示');
                  //     }else{
                  //         $('#box').fadeIn(1000);
                  //         $(this).html('隐藏');
                  //     }
                  //     flag = !flag;
                  // })
      
                  // 透明度变到50%
                  // $('button').click(function(){
                  //     $('#box').fadeTo(500,0.5);//将透明度变为50%
                  // })
      
                  // 透明度从0 到100 的切换
                  $('button').click(function(){
                      $('#box').fadeToggle(1000);//在显示和隐藏中进行切换
                  })
              })
          </script>
      ```

      

  * 高度变化

    * slideUp(duration动画的持续时间,easing动画效果（swing，linear），callback)收起

    * slideDown(duration动画的持续时间,easing动画效果（swing，linear），callback) 展开

    * slideToggle（）

      ```javascript
          <script>
              $(function(){
                  // var flag = true;
                  // $('button').click(function(){
                  //     if(flag){
                  //         $('#box').slideUp(1000);
                  //         $(this).html('显示');
                  //     }else{
                  //         $('#box').slideDown(1000);
                  //         $(this).html('隐藏');
                  //     }
                  //     flag = !flag;
                  // })
      
      
                  //高度切换
                  $('button').click(function(){
                      $('#box').slideToggle(1000);//在显示和隐藏中进行切换
                  })
              })
          </script>
      ```

      