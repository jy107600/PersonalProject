/**
 * Created by jy on 2017/3/16.
 */
window.onload = function () {
    var _iframe = window.parent;
    var id =_iframe.document.getElementById('userid').innerText;   //获取父页面的userid 的dom对象
    var username = document.getElementById('username');  //获取要写入的text 的dom对象
    username.value = id;
}
