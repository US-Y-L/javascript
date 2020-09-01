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
