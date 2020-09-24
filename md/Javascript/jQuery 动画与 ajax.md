jQuery 动画与 ajax

* 自定义动画  

  * animate({属性名：目标值，属性名：目标值。。}，duration动画时间，easing，callback)

  * 基本，累加，多属性，链式

    ```javascript
        <script>
            $(function(){
                //基本用法
                // $('#box').click(function(){
                //     $('#box').animate({width:300},1000,function(){
                //         console.log('俺到了！！');
                //     })
                // })
    
                // 累加
    
                // $('#box').click(function(){
                //     $('#box').animate({width:'+=50'},1000,function(){
                //         console.log('俺到了！！');
                //     })
                // })
    
                // 多属性运动
                // $('#box').click(function(){
                //     $('#box').animate({width:300,height:300,opacity:.5},1000,function(){
                //         console.log('俺到了！！');
                //     })
                // })
    
                // 链式运动
                // $('#box').click(function(){
                //     $('#box').animate({width:300},800)
                //              .animate({height:400},600)
                //              .animate({opacity:.5},300)
                // })
            })
        </script>
    ```

  * 动画队列

    * 将一些非动画操作 加入到动画执行的队列中，从而产生先后顺序

    ```javascript
        <script>
            $(function(){
                // $('#box').click(function(){
                //     $('#box').animate({width:1000},1000).css('background','blue');
                // })
    
                // 利用回调函数来  形成动画队列
                // $('#box').click(function(){
                //     $('#box').animate({width:1000},1000,function(){
                //         $(this).css('background','blue').animate({height:300})
                //     });
                // })
    
                // 专门管理动画队列的  queue(function(next){})
                $('#box').click(function(){
                    $('#box').animate({width:1000},1000)
                             .queue(function(next){
                                 $(this).css('background','blue');
                                 next();
                             })
                             .animate({height:400})
                })
    
            })
        </script>
    ```

  * 判断是否处于动画状态

    ```javascript
        <script>
            $(function(){
                $('div').hover(function(){
                    if(!$(this).is(':animated')){//没有动画为false  !false -->true  当前元素没有动画效果时 加动画
                        $(this).animate({height:400},600)
                    }
                },function(){
                    $(this).animate({height:100},600)
                })
            })
        </script>
    ```

  * 延迟动画  delay（时间）  在动画队列中可以间隔一段时间

    ```javascript
        <script>
            $(function(){
                $('#box').click(function(){
                    $('#box').animate({width:300},800)
                             .delay(1000)//停一秒 在向下执行动画
                             .animate({height:400},600)
                             .animate({opacity:.5},300)
                })
            })
        </script>
    ```

    

  * 停止动画

    * stop(是否停止动画队列，是否直接到达目标值)
    * finish（）直接到达所有动画队列的目标值  至少版本2以上

    ```javascript
        <script>
            $(function(){
                $('#box').click(function(){
                    $('#box').animate({width:600},1000)
                             .animate({height:500},1000)
                })
    
                $('button').eq(0).click(function(){
                    // $('#box').stop()//默认参数为false  false   此时的stop就是停止当前在执行的动画，后续动画不受影响
                    // $('#box').stop(true,false);//第一个参数为true时  当前动画停止，并且后续动画队列都清空了（不再执行）
                    // $('#box').stop(false,true);//第二个参数为true  当前动画的属性直接跳到目标值
                     $('#box').stop(true,true);//
                })
    
                $('button').eq(1).click(function(){
                    $('#box').finish();
                })
            })
        </script>
    ```

* jq的ajax应用

  * ajax 的优势和不足

    * 1、不需要插件支持
    * 2、优秀的用户体验
    * 3、提高 web 程序的性能
    * 4、减轻服务器和带宽的负担

  * ajax的不足

    * 破坏浏览器前进、后退按钮的正常功能
    * 对搜索引擎的支持不足
    * w ww.aaa.com/news/detail.html?id=12--->动态地址静态化

  * jq的ajax的使用

    * $.ajax({type？:方法get/post，url地址，data？数据，dataType返回的数据类型  text、jsonp，timeout超时时间，success成功回调，error 失败回调，complate 完成回调，cache是否启用缓存 })
    * get和post获取数据的方法 在jq中有单独封装的方法
      * $.get(url,data,success)   $.post(url,data,success)

    ```javascript
        <script>
            $(function(){
                // ajax
                // $.ajax({
                //     type:'get',
                //     url:'./mydata.txt',
                //     success:function(res){
                //         show(res)
                //     }
                // })
    
                //get方法
                $.get('mydata.txt',function(res){
                    show(res)
                })
                //post方法
                // $.post('mydata.txt',function(res){
                //     show(res)
                // })
    
                function show(str){
                    $('div').html(str);
                }
            })
        </script>
    ```

  * get和post的区别

  * 数据单位   一个0 或一个 1  叫1bit 比特  8bit =》 1Byte  1字节  1024Byte ==》1KB  1024KB===>1MB  1024MB==>1GB  1024GB ==>1TB   20Mb  

    * get方法是在url地址中链接传输的数据  一般限制在2KB  post在消息中传输数据，一般来说是没有大小限制的，但是不同浏览器有不同限制
    * get方式有缓存 不安全，psot方式没有缓存 相对比较安全
    * get方式和post方式在服务器中的获取方式不同

* jsonp

  * jsonp和ajax没有任何关系，它是为了解决跨域的一个方法

  * 跨域同源策略

    * 同源策略
      * 浏览器限定的一个策略，就是指前台获取数据的页面和后端服务的域名，协议，端口都需要一致，不一致就报错

  * 使用原生jsonp 跨域

    ```javascript
        <!-- <script>
            function fn(data){
                console.log(data);
            }
        </script>
        <script src="./mydata.txt"></script> -->
    
        <script>
            function fn(data){//跨域的函数必须是全局的
                console.log(data);
            }
        </script>
    
        <script src="https://www.baidu.com/sugrec?prod=pc&wd=tt&cb=fn"></script>
        <!-- <script src="https://www.baidu.com/sugrec?prod=pc&wd=ttt&cb=fn"></script>
        <script src="https://www.baidu.com/sugrec?prod=pc&wd=tttt&cb=fn"></script> -->
    </head>
    ```

  * jq的跨域

    ```javascript
        <script>
            // https://www.baidu.com/sugrec?prod=pc&wd=tt
            var kw = 'y';
            $.ajax({
                type:'get',
                url:'https://www.baidu.com/sugrec',
                dataType:'jsonp',
                data:{prod:'pc',wd:kw},
                success:function(res){
                    console.log(res);
                }
            })
        </script>
    ```

    