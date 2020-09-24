function ajax(json) {
    json.type = json.type ? json.type : 'get';
    json.async = json.async == false ? false : true;
    json.contentType = json.contentType ? json.contentType : 'application/x-www-form-urlencoded';
    json.data = json.data ? json.data : '';
    var ajax = new XMLHttpRequest();
    // 判断是get还是post请求
    if (json.type.toLowerCase() == 'post') {
        ajax.open('post', json.url, json.async);
        ajax.setRequestHeader('Content-type', json.contentType + ';charset=utf-8');
        ajax.send(json.data);
    } else {
        ajax.open('get', json.url + '?' + json.data, json.async);
        ajax.send();
    }
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            json.success(ajax.response);
        }
    }
}