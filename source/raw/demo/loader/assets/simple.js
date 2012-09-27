KISSY.config({
    packages:[
        {
            name:"1.2", //包名
            tag:"20110323",//时间戳, 添加在动态脚本路径后面, 用于更新包内模块代码
            path:"./assets/module_package/", //包对应路径, 相对路径指相对于当前页面路径
            charset:"gbk" //包里模块文件编码格式
        }
    ]
});
KISSY.one("#k12").on("click",function(){
    KISSY.use("1.2/mod");
});