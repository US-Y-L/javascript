jQuery 插件与 Zepto

* jq插件的编写---jq插件分为两种 

  * 类级别插件    $.each(arr,function(){})   直接挂载给  jQuery  的方法

  * 对象级别插件  $('li').each(function(){})   挂载给jQuery的成员对象  的方法

  * 类插件  用 $.extend()

    ```javascript
        <script>
            // 类级别插件
            // 去除字符串  开头  或者  结尾的空格   trim() 去除开头和结尾的空格
            // 数组去重
            $.extend({
                startTrim: function(str){
                    var reg = /^\s+/;
                    var nstr = str.replace(reg,'');
                    return nstr;
                },
                endTrim:function(str){
                    var reg = /\s+$/;
                    var nstr = str.replace(reg,'');
                    return nstr;
                },
                removal:function(arr){
                    for(var i = 0; i < arr.length; i++){
                        for(var j = i + 1; j < arr.length; j++){
                            if(arr[i] == arr[j]){
                                arr.splice(j,1);
                                j--;
                            }
                        }
                    }
                    return arr;
                }
    
            })
    
            var ss = '                     hello                 ';
            // console.log($.startTrim(ss));
            console.log($.endTrim(ss));
    
            var arr = [1,1,1,1,2,2,2,2,3,3,3,33,4,4,4,44,5,5,5,5,6,6,6,67,7,]
            console.log($.removal(arr));
        </script>
    ```

    

  * 对象级别插件  $.fn.extend()

    ```javascript
        <script>
            $.fn.extend({
                changeColor:function(oddColor,evenColor){
                    this.children(':odd').css({background: oddColor});
                    this.children(':even').css({background: evenColor});
                    return this;
                }
            })
    
            $(function(){
                $('ul').changeColor('#ccc','orange').css('fontSize','20px')
            })
        </script>
    ```

  * 无缝左右滑动插件编写

    ```javascript
    $.fn.extend({
        // settings {showNum:1,duration:300,auto:true/false,interval:2000}
                    // 显示个数  滑动的时长   是否自动播放     自动播放的间隔时间
        slide:function(settings){
            // 如果不设置自动播放的参数 那么默认为false
            if(!settings.auto){
                settings.auto = false;
            }
    
            var that = this;//this指向调用slide方法的对象  存给that
            var timer = null;
            // 获取li的个数
            var len = this.find('li').length;
            // 获取一个li的整个宽 带margin
            var iW = this.find('li').outerWidth(true);
            // ul的宽
            this.find('ul').width(len * iW);
            // content盒子的宽
            this.find('.content').width(settings.showNum * iW);
            // a的宽度
            var aW = this.find('a').outerWidth(true);
            // slide盒子的宽
            this.width(aW * 2 + settings.showNum * iW)
    
            // 无缝的左右滑动
            // 点击next
            this.find('.next').click(function(){
                // 该函数的this指向的是a  我们要通过方法slide的对象来获取元素  有个东西指向.slide
                if(!that.find('ul').is(':animated')){
                    that.find('ul').animate({left:-iW},settings.duration,function(){
                        that.find('ul').css({left:0}).append(that.find('li').eq(0));
                    })
                }
            })
    
            // 点击prev
            this.find('.prev').click(function(){
                if(!that.find('ul').is(':animated')){
                    that.find('ul').css({left:-iW}).prepend(that.find('li').last());
                    that.find('ul').animate({left:0},settings.duration);
                }
            })
    
            // 根据  auto的真假 来进行自动播放
            if(settings.auto){
                timer = setInterval(function(){
                    that.find('ul').animate({left:-iW},settings.duration,function(){
                        that.find('ul').css({left:0}).append(that.find('li').eq(0));
                    })
                },settings.interval);
    
                that.hover(function(){
                    clearInterval(timer);
                },function(){
                    timer = setInterval(function(){
                        that.find('ul').animate({left:-iW},settings.duration,function(){
                            that.find('ul').css({left:0}).append(that.find('li').eq(0));
                        })
                    },settings.interval);
                })
            }
        }
    })
    ```

* Zepto.js

  * 移动版的jq  语法基本上和jq一样  但是底层的一些写法和jq不同，而且zepto移动端放弃了兼容

  * zepto中 只有width()/height()方法 没有其他的获取方法  取到的值为  占位宽/高（盒模型宽高）  padding + contentwidth + border

  * zepto中法获取隐藏的元素的宽高

  * zepto中的offset()方法  多返回了  占位的宽高

    ```javascript
        <script>
            /* 
                jq中  获取宽高
                内容宽：contentwidth  -----   width()
                可视宽：padding+contentwidth  --  innerWidth()
                占位宽：padding + contentwidth + border  outerWidth()
                整个宽：padding + contentwidth + border + margin   outerWidth(true)    
            */
            $(function(){
                // zepto中  只有width方法  没有其他的获取方法
            //    console.log($('#box').width()); // 126   padding + contentwidth + border  
    
                // jq中 对于隐藏元素的宽获取
                // console.log($('#box2').width());
                // zepto中
                // console.log($('#box2').width());
    
                // jq中  offset()方法的返回值  为{left:,top:}
                // console.log($('#box').offset());//{top: 20, left: 28}
                // zepto中  offset()
                // console.log($('#box').offset());//{left: 28, top: 20, width: 126, height: 126}
            })
            
        </script>
    ```

    

  * zepto使用touch事件 需要单独引入touch模块

    ```javascript
        <script>
            $(function(){
                // $('#box').on('tap',function(){
                //     console.log('点击了');
                // })
    
                // $('#box').on('singleTap',function(){
                //     console.log('单击了');
                // })
    
                // $('#box').on('doubleTap',function(){
                //     console.log('双击了');
                // })
    
                // $('#box').on('swipe',function(){
                //     console.log('滑动了');
                // })
    
                $('#box').on('swipeLeft',function(){
                    console.log('左滑动了');
                })
    
                $('#box').on('swipeDown',function(){
                    console.log('下滑动了');
                })
            })
        </script>
    ```

    