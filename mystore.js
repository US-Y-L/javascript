// 获取非行间样式
function getStyle (ele,attr){
    return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele)[attr];
}

//线形运动函数
/* @parama: ele 对象 attr要获取的对象的属性  tarrget 要移动到的目标值   step 步长，也就是一次移动多远的距离

*/
function linearMove(ele, attr, tarrget, step) {
    var timer = null;
    clearInterval(timer);
    
    // var curr = parseInt(getStyle(ele, attr));
    var step = parseInt(getStyle(ele, attr)) > tarrget ? -step : step;

    timer = setInterval(function () {
        
        var curr = parseInt(getStyle(ele, attr));
        var speed = curr + step;

        if (speed >= tarrget && step > 0 || speed <= tarrget && step < 0) {
            speed = tarrget;
            clearInterval(timer);
        }
        ele.style[attr] = speed + "px";
    }, 20);
    
    //获取元素非行间样式函数
    function getStyle(ele, attr) {
        return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele)[attr];
    }

}

//随机区间公式
// @parama min:最小值 max:最大值
function getRandom(max,min){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

//获取时间时前面加0
function double(num){
    return num >= 10 ? ""+num : "0"+num;
}

//封装一个事件绑定函数
function bindEvent(ele,oEvent,fn){
    if(ele.addEventListener){
        ele.addEventListener(oEvent,fn,false);
    }else{
        ele.attachEvent("on" + oEvent,fn)
    }
}

//取消事件绑定的函数
//@params : ele,要取消绑定事件的元素  oEvent,事件，不带on  fn,要取消绑定的事件处理函数
function removeEvent(ele,oEvent,fn){
    if(ele.removeEventListener){
        ele.removeEventListener(oEvent,fn,false);
    }else{
        ele.detachEvent("on" + oEvent , fn);
    }
}

//随机n位验证码
function checkCode(n){
    var str = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var code = "";
    for(var i = 0; i< n; i++){
        code += str.charAt(random(str.length - 1 , 0));
    }
    return code;
}


//创建元素的函数
function setEle(tar,inner){
    if(!inner){
        inner = "";
    }
    var ele = document.createElement(tar);
    tar.innerHTML = inner;
    return ele;
}




//如果想要获取嵌套在最里面的节点的offsetTop,假如嵌套很多难以计算
        //封装一个函数用来获取到任意节点的offsetTop值
        function getTop(ele){
            var iTop = 0;
            while(ele.offsetTop){
                iTop += ele.offsetTop;
                ele = ele.offsetParent;
            }
            return iTop;
        }

//缓动框架
function getStyle(el,attr){
    return el.currentStyle ? el.currentStyle[attr] : getComputedStyle(el)[attr];
}

var timer = null
function bufferMove(el,json,fn){
    clearInterval(el.timer);
    el.timer = setInterval(function(){
        var flag = true;

        for(var attr in json){
            if(attr == "opacity"){
                var cur = Math.round(getStyle(el,attr) * 100);
            }else{
                var cur = parseInt(getStyle(el,attr));
            }

            var speed = (json[attr] - cur) / 10;
            speed = speed >0 ? Math.ceil(speed) : Math.floor(speed);

            if(cur != json[attr]){
                flag = false;
            }

            if(attr == "opacity"){
                el.style.opacity = (cur + speed) / 100;
                el.style.filter = "alpha (opacity = " + (cur + speed) + ")";
            }else{
                el.style[attr] = cur + speed +"px";
            }
        }
        if(flag){
            clearInterval(el.timer);
            if(fn) fn.call(el);
        }

    },30)
}

//ajax封装
function ajax(option) {
    var ajax = new XMLHttpRequest;
    option.data = option.data || "";

    if (option.method.toLowerCase() == "get") {
        option.url += "?" + option.data;
        ajax.open("get", option.url, true);
        ajax.send();
    } else if (option.method.toLowerCase() == "post") {
        ajax.open("post", option.url, true);
        ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        ajax.send(option.data);
    }

    ajax.onreadystatechange = function () {
        // if(ajax.readyState == 4 && ajax.status == 200){
        //     option.success && option.success(ajax.responseText);
        // }else{
        //     alert("error :" + ajax.status);

        // }
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                option.success && option.success(ajax.responseText);
            } else {
                alert("error:" + ajax.status);
            }
        }
    }
}
