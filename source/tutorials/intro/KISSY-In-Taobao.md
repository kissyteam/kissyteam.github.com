# 伴随淘宝一起成长的 KISSY

## 介绍
伴随着淘宝的快速发展，诞生已三年多的 KISSY 也取得了巨大的成长。
目前应用于阿里集团的多个业务团队，特别是淘宝，天猫，一淘的绝大多数业务都采用了 KISSY，
2012 年在淘宝店铺装修中开放了 KISSY 的部分功能给第三方设计师使用，
大大加强了店铺装修的自定义程度，在阿里集团以外也有不少公司和个人使用 KISSY，交流旺旺群成员已将近千人，
在 github 源码库也时常有外部人员参与提交 issue，发起 pull request，另外在 oschina 等开源社区也受到了一定的关注。
淘宝在去年 12 月 25 号发布了 KISSY 最新版本 1.3，
在这篇文章中我将对 KISSY 1.3 结合在淘宝的实践做一次全面概述，希望能对大家能有所帮助。

## 架构
KISSY 在开发中借鉴了众多类库和框架的思路，结合淘宝业务形成了一套松耦合，无污染，模块化的架构，如下图所示：

![KISSY-architecture](http://img02.taobaocdn.com/tps/i2/T1Xz0bXAthXXXRLd6v-710-445.png)

最底层的 seed 是类似目前流行的 AMD 模块化机制实现，为了更高效地共享通用组件加入了自动 combo 的支持，
另外 seed 也包含一些像 each（循环数组以及对象），mix（合并对象），param（编码对象为 url），
ready（等待 dom ready）等常用的静态工具方法以及 Path，Uri，Promise 等 loader 需要用到的基础类。

seed 之上的第二层是处理 dom 兼容性的基础核心模块，其中每个模块都是由更小的模块打包合并而来。
特殊之处在于 KISSY 把一些不标准浏览器的兼容代码单独抽取成模块，因此这一层的模块用户不可以直接引用。

第三层的模块会根据不同的设备分别依赖不同的第二层模块。
虽然加载不同的具体实现模块代码，但是最终提供给用户的是一致的模块名和 api 以及渐进增强的能力。
例如用户使用 event 模块，在 touch 设备上会加载 event/touch 模块从而可以使用一些手势事件，
而在 ie<9 下会加载 event/hashchange 模块，以类似 es5-shim 的方式来补全浏览器的能力，提供给用户统一的 api。

第三层为基础架构层。提供包括模拟 es5 属性管理的 base 模块，插件和多继承机制的 rich-base 模块以及具备一定逻辑的模板引擎。

第四层在第三层之上构建 UI 基础工具类。例如拖放，调整大小，操作 swf，样式表以及定义所有 UI 组件的基类和一个简单的 mvc 架构。

第五层则基本都是独立的 UI 组件，用户可自由组合继承搭建最终页面。

最外层为 KISSY gallery，业务团队开发人员在日常工作中基于 KISSY 开发的一些通用模块会放入 gallery 中，
从而可以方便得在所有使用 KISSY 的业务团队间共享模块。如果该模块确实十分通用则会经过重构放入 KISSY 自身。

## 模块化机制
### 介绍
KISSY 的模块化机制借鉴自 AMD 规范，并根据淘宝自身业务特点加入了自动 combo 功能，现简单介绍如下：

KISSY 之外的每个模块必须属于一个包，一个包内可以有很多相关模块，它们具备相同的加载基地址，所以开发应用前请先配置包地址，例如

    KISSY.config('packages', {
        myapp: {
            base:'./x'
        }
    });

之后在 x 目录下建立 myapp 目录，并在 myapp 目录下新建模块 a 脚本文件： a.js

    KISSY.add(function(S,JSON){
        return JSON.stringify({a:'ok'});
    },{
        requires:['json']
    });

以及依赖 a 的入口主模块 main 脚本文件： main.js

    KISSY.add(function(S,DOM){
        S.ready(function(){
            DOM.text(document.body,a);
        });
    },{
        requires:['dom','./a']
    });

应用模块可依赖 KISSY 自身模块，例如以上的 dom json。

最后新建 index.html 来调用应用模块：

    <script src='http://a.tbcdn.cn/s/kissy/1.3.0/seed.js'></script>
    <script>
        // ... 上述包配置

        KISSY.use('myapp/main',function(){
            alert('page loaded');
        });
    </script>

### 工具支持
打开上述 index.html 会发现链接数不少，有从淘宝 cdn 的链接也有本地的链接。
KISSY 提供配套工具 KISSY Module Compiler 进行脚本打包以及抽取依赖后用 cdn combo 来解决这个问题，
对工具有兴趣可查看参考资料中的链接地址。

#### 脚本打包
如果应用脚本非常多，可以用 module compiler 将入口模块 main 以及其依赖的所有应用模块打包压缩到 main-min.js 中，
同时 module compiler 会生成一份依赖描述文件：

    KISSY.config('modules',{
        'myapp/main':{
            requires:['dom','json']
        }
    });

接着设置 KISSY 启用 combo 模式，并载入上述的依赖描述文件：

    KISSY.config('combine',true);

最后修改 index.html 引用 seed-min.js，打开网络面板后会发现现在只产生两个链接请求：

    http://a.tbcdn.cn/s/kissy/??dom/ie.js,dom/base,json/json2.js,json/native.js
    http://localhost/myapp/main-min.js

#### 抽取依赖
如果应用脚本不多，并且自身服务器也支持 combo 的话，那么可以采用更加灵活的抽取依赖后全部 combo 的解决方案。
这时 module compiler 简单来说会做两件事情：

1. 补全模块名，例如 a.js 变为


    KISSY.add('myapp/a',function(){
        return {a:'ok'}
    });

2. 将各个模块的依赖收集为一个单独的文件，例如


    KISSY.config('modules',{
        'myapp/main':{
            requires:['dom,','./a']
        },
        'myapp/a':{
            requires:['json']
        }
    });

接着设置 KISSY 启用 combo 模式，并载入上述的依赖描述文件：

    KISSY.config('combine',true);

访问 index.html，打开网络面板会发现同样只产生两个链接请求：

    http://a.tbcdn.cn/s/kissy/??dom/ie.js,dom/base,json/json2.js,json/native.js
    http://localhost/myapp/??a.js,main.js



## 组件机制

## 设备普适性

## 测试与持续集成

## 淘宝应用场景举例

### 店铺应用

### 宝贝详情应用

## 下一步

基础组件完善（添加，重构）

package manager

补全测试用例

## 总结
KISSY 才刚刚处于成长初期，相对于国外成熟框架尚有不小差距，不过依然承受住了淘宝复杂多变业务的考验。
将来我们坚信 KISSY 会随着淘宝的发展而继续成长，也会随着国内前端技术的不断发展而不断进步。
希望有兴趣的你也能加入到 KISSY 开发中，一起学习进步，享受成长的乐趣。


参考资料：

KISSY： http://docs.kissyui.com/

KISSY Module Compiler： http://docs.kissyui.com/docs/html/tutorials/tools/module-compiler/index.html

OSCHINA 访谈：http://www.oschina.net/question/28_71454

nginx combo： https://github.com/perusio/nginx-http-concat

作者： 承玉

淘宝前端工程师，2010 年加入淘宝，目前是淘宝开源框架 KISSY 负责人
