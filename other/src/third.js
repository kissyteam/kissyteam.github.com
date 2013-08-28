KISSY.ready(function(){

    KISSY.use("switchable,data/widget,data/tools", function(S,Switchable,widget,tools){
        var $=S.all;

        var tab = new Switchable.Tabs("#content",{
            aria:false,
            triggerType:"click",
            switchTo:~location.href.indexOf("tools")?1:0
        });



        (function(){
            var nav ='', content='';
            S.each(widget, function(item){
                nav += '<li><a target="_self" href="#'+item.name+'">'+item.name+'</a><p>'+item.title+'</p></li>';
                content += '<a  name="'+item.name+'"></a>';
                content +=  '<dl class="list">';
                content +=  '<dt><a href="'+item.href+'">'+item.name+'</a></dt>';
                content +=  '<dd class="img"><a href="'+item.href+'"><img src="'+item.pic+'" alt="'+item.name+'"/></a></dd>';
                content +=  '<dd class="url"><label>官网地址：</label>  <a href="'+item.href+'">'+item.href+'</a></dd>';
                content +=  '<dd class="version"><label>推荐版本：</label> '+item.version+'</dd>';
                content +=  '<dd class="reason"><label>推荐理由：</label>   '+item.reason+'</dd>';
                content +=  '<dd class="intro"><label>组件简介：</label>  '+item.intro+'</dd>';
                content +=  '</dl>';
            })
            $("#nav-widget ul").html(nav);
            $("#content-widget").html(content);
        })();


        (function(){
            var nav ='', content='';
            S.each(tools, function(item){
                nav += '<li><a target="_self" href="#'+item.name+'">'+item.name+'</a><p>'+item.title+'</p></li>';
                content += '<a name="'+item.name+'"></a>';
                content +=  '<dl class="list">';
                content +=  '<dt><a href="'+item.href+'">'+item.name+'</a></dt>';
                content +=  '<dd class="url"><label>官网地址：</label>  <a href="'+item.href+'">'+item.href+'</a></dd>';
                content +=  '<dd class="intro"><label>组件简介：</label>  '+item.intro+'</dd>';
                content +=  '</dl>';
            })
            $("#nav-tools ul").html(nav);
            $("#content-tools").html(content);
        })();

    })


});



KISSY.add("data/widget", function(){

    return [{
        "name": "SWFUpload",
        "title": "Flash文件上传组件",
        "pic": "http://img04.taobaocdn.com/tps/i4/T1lvqDXdVDXXXXXXXX-120-120.png",
        "href": "http://swfupload.org/",
        "version": "v2.2.0.1 ",
        "reason": "支持批量上传，支持各种事件注册，demo丰富",
        "intro": "SWFUpload 是一个小巧实用的JavaScript/Flash文件上传组件。可以在一个窗口中同时选择多个文件上传、所有事件都可以增加回调函数、可以在文件上传之前获取文件信息、可以使用xhtml,css定义上传控件的样式、可以使用xhtml,css显示上传状态信息、无需刷新页面，全部都是‘异步’、只要你的浏览器支持flash就可以使用、不能使用js,flash的网页也能优雅降级、在上传之前可以在客户端校验文件大小、可以定制你要上传的文件类型、上传之前可以增减上传队列中的文件（上传中的文件其实也可以取消）"
    },{
        "name": "Highcharts",
        "title": "图表控件",
        "pic": "http://img01.taobaocdn.com/tps/i1/T1SLGDXgBBXXXXXXXX-120-120.png",
        "href": "http://www.highcharts.com/",
        "version": "2.1.9",
        "reason": "免费还包邮哦亲。",
        "intro": " Highcharts是一个纯脚本实现的表单控件，可以给你的web应用生成只管的图表。Highcharts提供丰富的图表样式，包括 line, spline, area, areaspline, column, bar, pie and scatter，实在是居家旅行，杀人灭口之必备控件。"
    },{
        "name": "zeroclipboard",
        "title": "flash剪贴板",
        "pic": "http://img01.taobaocdn.com/tps/i1/T10yiDXfRkXXXXXXXX-120-120.png",
        "href": "http://code.google.com/p/zeroclipboard/",
        "version": " 2.1.9",
        "reason": "flash实现的剪贴板。",
        "intro": "Provides 'Copy to Clipboard' functionality for your web site using JavaScript and Flash"
    },{
        "name": "xml_to_json",
        "title": "xml to json",
        "pic": "http://img02.taobaocdn.com/tps/i2/T1Og1DXolsXXXXXXXX-120-120.png",
        "href": "http://www.thomasfrank.se/xml_to_json.html",
        "version": "1.1",
        "reason": "很快，很小，很天真，具体怎么样你用过就知道了",
        "intro": "将XML转换为JSON。"
    },{
        "name": "Blowfish",
        "title": "加密/解密",
        "pic": "http://img03.taobaocdn.com/tps/i3/T1nd1DXhhMXXXXXXXX-137-140.jpg",
        "href": "http://dren.ch/js_blowfish/",
        "version": "v1",
        "reason": "调用很方便(不支持中文) ",
        "intro": "著名的blowfish加密解密算法的javascript版。"
    },{
        "name": "SyntaxHighlighter",
        "title": "语法高亮",
        "pic": "http://img02.taobaocdn.com/tps/i2/T1qwmFXn8aXXXXXXXX-120-120.png",
        "href": "http://alexgorbatchev.com/SyntaxHighlighter/",
        "version": "3.0.83",
        "reason": "名气大，功能全，容易扩展",
        "intro": "Javascript语法高亮组件。"
    },{
        "name": "LESSCSS",
        "title": "CSS编程 ^^",
        "pic": "http://img02.taobaocdn.com/tps/i2/T1tLaFXeNfXXXXXXXX-120-120.png",
        "href": "http://lesscss.org/ ",
        "version": "1.1.5",
        "reason": "像写代码一样写CSS，<font color=red>官网需要翻墙</font>，请直接访问<a href='http://www.lesscss.net/'>LESS中文网</a>",
        "intro": "LESS 将 CSS 赋予了动态语言的特性，如 变量， 继承， 运算， 函数. LESS 既可以在 客户端 上运行 (支持IE 6+, Webkit, Firefox)，也可一在服务端运行 (借助 Node.js). "
    }];

});






KISSY.add("data/tools", function(){

    return [{
        "name": "KISSY Html Beautifier and Minifier",
        "title": "KISSY版Html美化压缩工具",
        "pic": "",
        "href": "http://docs.kissyui.com/kissy/src/html-parser/demo.html",
        "version": "",
        "reason": "承玉写的",
        "intro": "KISSY作者承玉写的Html美化和压缩工具"
    },{
        "name": "KISSY Module Compiler",
        "title": "KISSY模块依赖合并工具",
        "pic": "",
        "href": "http://docs.kissyui.com/",
        "version": "",
        "reason": "",
        "intro": "KISSY模块依赖合并工具"
    },{
        "name": "YUI Compressor",
        "title": "代码压缩",
        "pic": "#",
        "href": "http://developer.yahoo.com/yui/compressor/",
        "version": "",
        "reason": "",
        "intro": "CSS压缩"
    },{
        "name": "JsDoc Toolkit:",
        "title": "JS文档工具",
        "pic": "#",
        "href": "http://code.google.com/p/jsdoc-toolkit/",
        "version": "",
        "reason": "",
        "intro": "根据代码注释生成文档，可以定制文档模版风格."
    },{
        "name": "Ant",
        "title": "模块打包",
        "pic": "#",
        "href": "http://ant.apache.org/",
        "version": "",
        "reason": "",
        "intro": "自动配置、打包，当然不仅仅是这些，更多功能你可以自己去挖掘。"
    },{
        "name": "iDebug",
        "title": "调试工具",
        "pic": "#",
        "href": "#",
        "version": "",
        "reason": "",
        "intro": "页面调试"
    },{
        "name": "CSSEmbed",
        "title": "图片转DataURI",
        "pic": "#",
        "href": "",
        "version": "",
        "reason": "",
        "intro": "图片转DataURI"
    },{
        "name": "ConvertZ",
        "title": "繁简转换",
        "pic": "#",
        "href": "",
        "version": "",
        "reason": "",
        "intro": "繁简转换"
    },{
        "name": "PNGOut",
        "title": "PNG优化",
        "pic": "#",
        "href": "",
        "version": "",
        "reason": "",
        "intro": "PNG优化"
    },{
        "name": "csslint",
        "title": "css检查",
        "pic": "#",
        "href": "http://csslint.net/",
        "version": "",
        "reason": "",
        "intro": "一个在线检查你css代码的工具"
    },{
        "name": "JPEG & PNG Stripper",
        "title": "图片优化",
        "pic": "#",
        "href": "http://www.steelbytes.com/?mid=30",
        "version": "",
        "reason": "",
        "intro": "A tool for stripping/cleaning/removing uncessary metadata (junk) from JPG/JPEG/JFIF & PNG files. The image quality IS NOT AFFECTED. Includes command line support. Just specify a folder or file on the commandline (wildcards allowed)"
    },{
        "name": "在线制作loading",
        "title": "在线制作loading图片",
        "pic": "#",
        "href": "http://preloaders.net/",
        "version": "",
        "reason": "",
        "intro": "多种样式，可定制大小，速度等，从此再也不用担心找不到好的菊花了"
    },{
        "name": "ASCII Generator",
        "title": "在线制作ascii字符图",
        "pic": "",
        "href": "http://www.network-science.de/ascii/",
        "version": "",
        "reason": "",
        "intro": "在线制作ascii字符图，复制到你的代码里面，传说中的装13利器。"
    },{
        "name": "在线压缩jpg图片",
        "title": "在线图片压缩",
        "pic": "",
        "href": "http://www.jpegmini.com/main/home",
        "version": "",
        "reason": "",
        "intro": "可以无损压缩你的图片，压缩率能达到50%以上。"
    },{
        "name": "Base64 converter for embeded URI Images",
        "title": "转DataURI",
        "pic": "",
        "href": "http://www.abluestar.com/utilities/encode_base64/index.php",
        "version": "",
        "reason": "",
        "intro": "在线把你的图片编码成BASE64"
    },{
        "name": "在线css3样式生成",
        "title": "css3辅助工具",
        "pic": "",
        "href": "http://css3please.com/",
        "version": "",
        "reason": "",
        "intro": "如果你初学css3，记不住那些属性和名字，这个无疑是你最好的选择。"
    },{
        "name": "DynaTrace AJAX",
        "title": "性能分析",
        "pic": "",
        "href": "http://www.dynatrace.com/en/",
        "version": "",
        "reason": "",
        "intro": "DynaTrace AJAX是一个运行在IE浏览器下的免费页面性能分析工具，它可以支持主流的IE6、IE7、IE8浏览器。这款工具正是DynaTrace为进入前端性能分析领域而发布的。您可以利用它来分析页面渲染时间、DOM方法执行时间，甚至可以看到JS代码的解析时间。连JQuery的创始者 John Resig 也鼎力推荐了一把。"
    },{
        "name": "FastStone Capture",
        "title": "前端辅助小工具",
        "pic": "",
        "href": "http://www.faststone.org/",
        "version": "",
        "reason": "",
        "intro": "FastStone Capture是一款灵活简单的屏幕抓图软件。它可以抓取某个窗口或者对象的图片，也可以全屏或者以矩形模式抓图，甚至可以按照手绘的任意形状抓图。另外它还支持浮动条、热键、调整大小、剪裁、文字注释、打印以及邮件发送等功能。支持包括BMP、JPEG、JPEG 2000、GIF、PNG、PCX、TIFF、WMF、ICO和TGA在内的所有主流图片格式，其独有的光滑和毛刺处理技术让图片更加清晰，提供缩放、旋转、减切、颜色调整功能。只要点点鼠标就能随心抓取屏幕上的任何东西，支持拖放，可以直接从系统、浏览器或其他程序中导入图片，收藏夹功能让你能更好的收集更多精彩图片。"
    },{
        "name": "IETester",
        "title": "多版本IE",
        "pic": "",
        "href": "http://ietester.com/",
        "version": "",
        "reason": "",
        "intro": "IETester 包含5个版本的IE（5.5/6.0/7.0/8.0/9.0 Preview），完全可以满足对 IE 兼容性的测试。（值得提醒的是，有时候这玩意不靠谱，还是装虚拟机好。）"
    },{
        "name": "IE Sieve",
        "title": "E内存泄漏检测",
        "pic": "",
        "href": "http://home.wanadoo.nl/jsrosman/",
        "version": "",
        "reason": "",
        "intro": "IE内存泄漏检测工具。"
    },{
        "name": "js-beautify",
        "title": "代码美化",
        "pic": "",
        "href": "http://jsbeautifier.org/",
        "version": "",
        "reason": "能格式化JSON,压缩过的js代码",
        "intro": "Beautify, unpack or deobfuscate JavaScript, make JSON/JSONP readable, etc.."
    },{
        "name": "jsfiddle",
        "title": "存放脚本片段",
        "pic": "",
        "href": "http://jsfiddle.net/",
        "version": "",
        "reason": "",
        "intro": "用这个存放一些简单的demo或者在线调试还是蛮方便的。"
    },{
        "name": "Network Delay Simulator",
        "title": "低网速模拟工具",
        "pic": "",
        "href": "http://www.akmalabs.com/home.php",
        "version": "",
        "reason": "",
        "intro": "低网速模拟工具。"
    },{
        "name": "browserstack",
        "title": "在线多浏览器工具",
        "pic": "",
        "href": "http://www.browserstack.com/user/dashboard",
        "version": "",
        "reason": "",
        "intro": "在线多浏览器工具"
    },{
        "name": "spritecow",
        "title": "sprite助手",
        "pic": "",
        "href": "http://www.spritecow.com/",
        "version": "",
        "reason": "",
        "intro": "帮你快速生成坐标"
    }];

});




/*

 ,{
 "name": "",
 "pic": "",
 "href": "",
 "version": "",
 "reason": "",
 "intro": ""
 }

 */