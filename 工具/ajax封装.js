function ajax(option){
    var ajax = new XMLHttpRequest;
    option.data = option.data || "";

    if(option.method.toLowerCase() == "get"){
        option.url += "?" + option.data;
        ajax.open("get",option.url,true);
        ajax.send();
    }else if(option.method.toLowerCase() == "post"){
        ajax.open("post",option.url,true);
        ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");
        ajax.send(option.data);
    }

    ajax.onreadystatechange = function(){
        // if(ajax.readyState == 4 && ajax.status == 200){
        //     option.success && option.success(ajax.responseText);
        // }else{
        //     alert("error :" + ajax.status);
            
        // }
        if(ajax.readyState == 4){
            if(ajax.status == 200){
                option.success && option.success(ajax.responseText);
            }else{
                alert("error:" + ajax.status);
            }
        }
    }
}