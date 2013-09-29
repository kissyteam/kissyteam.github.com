KISSY.add(function(S,Dep){
    alert(Dep);
    alert("my/mod loaded");
    return 'my/mod called';
},{
    requires:["./dep","./mod.css"] //相对于当前模块js 定位
});