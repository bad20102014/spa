/**
 * Created by Administrator on 2015/6/17.
 */
var spa={};

spa.setting={};
spa.setting.viewdiv=document.querySelector("#geview");
spa.url={};
spa.url.home="tpls/index.html"
spa.url.nofound="tpls/404.html"
spa._init=function(){
    spa.render("home");
};
spa.render=function(url){
    spa.ajax(spa.url[url],"get",null,function(status,text){
        if(status==200){
            spa.setting.viewdiv.innerHTML=text;
        }
    })
};
spa.changeurl=function(){
    var url=location.hash.replace("#","");
    if(url=="")
    {
        url="home";
    }
    if(!spa.url[url])
    {
        url="nofound";
    }
    spa.render(url);
};

spa.ajax=function(url,method,data,callback){
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp=new window.XMLHttpRequest();
    }
    if(window.ActiveXObject){
        xmlhttp=window.ActiveXObject("Microsoft XMLHTTP");
    }
    if(method=="get"){
        xmlhttp.open("get",url);

    }
    if(method=="post"){
        xmlhttp.open("post",url);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    }
    xmlhttp.send(data);
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            callback(xmlhttp.status, xmlhttp.responseText);
        }
    }
};

spa._init();