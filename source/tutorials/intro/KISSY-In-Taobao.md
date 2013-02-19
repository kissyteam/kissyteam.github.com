# 伴随淘宝一起成长的 KISSY

## 介绍
伴随着淘宝的快速发展，诞生已三年多的 KISSY 也取得了巨大的成长。
目前应用于阿里集团的多个业务团队，特别是淘宝，天猫，一淘的绝大多数业务都采用了 KISSY，
2012 年在淘宝店铺装修中开放了 KISSY 的部分功能给第三方设计师使用，
大大加强了店铺装修的自定义程度，在阿里集团以外也有不少公司和个人使用 KISSY，交流旺旺群成员已将近千人，
在 github 源码库也时常有外部人员参与提交 issue，发起 pull request，另外在 oschina 等开源社区也受到了一定的关注。
淘宝在去年 12 月 25 号发布了 KISSY 最新版本 1.3，
在这篇文章中我将对 KISSY 1.3 结合在淘宝的实践做一次全面概述，希望能对大家能有所帮助。

## 为什么选择 KISSY
KISSY 诞生三年来历经淘宝的各种业务变化考验，证明了自己的扩展性，稳定性和可维护性，足以满足国内一般的互联网业务。
KISSY 具备大量的中文文档，方便不熟悉英文的国内开发者快速入门搭建自己的应用。
KISSY 在国内具备一定的社区规模，通过旺旺群，google group，微博，官方网站等用户随时可以和开发人员快速交流。
KISSY 一直紧跟国际前端发展潮流，在模块化，组件以及工具辅助方面形成了一套完善的机制，可以高效应对日常的需求开发。
KISSY 积极借鉴国际先进的框架类库设计，吸收 jquery 稳定的 dom 核心，yui 坚实的架构，extjs 先进的组件设计，
并在移动设备上也有所支持，满足了淘宝从前台的 web page 到后台的 web app 再到移动端应用（起步阶段）的广泛需求。
KISSY 是一个完全自底向上开发起来的类库，存在时间还不长，在组件以及可测试性上尚有所欠缺，
不过我们坚信这种情况会随着淘宝的不断投入而逐步解决。

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

        KISSY.add('myapp/a',function(S,JSON){
            return JSON.stringify({a:'ok'});
        },{
            requires:['json']
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
KISSY 目前包括众多即开即用的组件，包括工具性质的例如 dd（拖放），
resizable（调整大小），swf（插入flash），stylesheet（操作样式表）等
和 UI 组件的例如 overlay（弹窗），menu（菜单），menubutton（菜单按钮），imagezoom（放大镜），editor（编辑器），
tabs（标签），tree（树）等。
这些组件搭建在公用的组件基础 rich-base 以及 component 模块上，
而 rich-base 和 component 模块充分利用了 javascript 原生的 minxin 和 prototype 继承的特性，
提供了继承，扩展以及插件的特性。

其中的重点 Component 是所有 UI 组件的基类，它提供了两种通用的渲染方式：
将组件实例由 javascript 完全渲染 dom 树或者从已有的 dom 树节点得到组件实例，
其中对于 menu 等组件在 javascript 完全渲染的情况亦可以通过 json 初始化内部嵌套组件。例如

    KISSY.use('menu',function(S,Menu){
        // javascript 渲染一个菜单到 body
        new Menu({
            children:[{
                content:'item1'
            }]
        }).render();
    });


下面主要讲解下 KISSY 其中常用的一个组件 Overlay，类结构图：

![overlay](http://img04.taobaocdn.com/tps/i4/T1LzxpXrFaXXa8LGAz-643-262.png)

然后 Overlay 静态得由一些分散的功能类扩展，如上所述包括定位功能类，对齐功能类，关闭功能类，遮罩层功能类，
这些功能类底层利用 javascript 的 mixin 功能将自己的方法和属性汇入到 Overlay 类中，
使得最终的 Overlay 具备了这些能力。

运行时组件也可以选择性得依赖某些插件模块，在运行中将插件的功能注入到组件中去，既避免了一个组件过于功能繁多导致的文件过大，
又大大增强了组件的可扩展性。

以下为 Overlay 的一个使用示例：

    KISSY.use('overlay,component/plugin/resize',function(S,Overlay,ReizePlugin){

        // 完全由 javascript 将组件实例渲染到 body 中
        new Overlay({
            content:'test'
        }).render();

        // 从已有的 dom 树节点生成 Overlay 实例
        var overlay = new Overlay({
            srcNode:'#existing'
        }).render();

        // 运行时加入调整大小的插件能力
        overlay.plug(new ReizePlugin({
            handles:['t']
        }));

    });

## 设备普适性
当前 javascript 的使用范围越来越广，包括 nodejs，读屏器，移动端浏览器以及各种外壳，window8等，
KISSY 也尽量在各个平台给予支持，保证统一的开发体验。

在 nodejs 上 KISSY 通过调整模块加载器使得 KISSY 可以直接将自身的模块加载到 nodejs 中使用。
例如可以使用 KISSY 的 UA 解析模块来分析日志中的 UA 串，可以载入 jsdom 模块在 nodejs 环境下做单元测试，
直接将用 xtemplate 在服务器端渲染前端模板，使用 KISSY 的 htmlparser，color 等工具模块。

经统计约有 2000 万的盲人用户在使用淘宝，他们实际上是通过读屏器来和淘宝交互，
KISSY 组件通过遵循 WAI-ARAI 规范来给盲人朋友提供无障碍的访问环境，网上人人平等。

KISSY 也计划对 windows8 进行支持，在即将发布的 tmall windows8 app 中仅仅通过使用 KISSY 的模块化机制以及一些语法糖 API
就可以达到和平常开发一样的高效。

随着用户越来越多得在移动设备上购物产生交易，移动应用在流量的比重上也越来越多，KISSY 也开始注意适配移动设备，
目前在两方面进行了支持：

1. 按照设备条件加载

    对于移动端由于网络速度等原因对于文件大小比较敏感，KISSY 为了保证一致的 API又不能随意删减功能，
    因而采取了独立兼容模块的方法来保持瘦身。
    在架构一节也阐述过，KISSY 对基础核心模块中的兼容非标准浏览器的模块进行条件加载，由于目前移动设备都是标准浏览器，
    从而可以大大减少实际下载到用户设备上的代码大小。未来还将对具体组件也实行拆分，将 pc 的功能交互独立到单独的模块，
    在移动触摸设备上只加载触摸交互需要用到的模块。

2. 渐进增强

    对于触屏设备，很多交互是建立在手势操作上。而手势操作除了在 safari 上有 gesture 事件做有限支持外，
    在 android 上则完全没有对应事件。
    得益于 KISSY 具备扩展性的事件机制，KISSY 在底层多点触摸 touch 事件的基础上模拟出了 tap rotate pinch
    等触屏设备上独有的事件，而对于用户则是透明，用户完全可以把这些事件当做原生事件来使用，例如

        KISSY.use('event',function(S,Event){
            // 监听 div 上的 tap 事件
            Event.on('#div','tap',function(){
            });
        });

## 测试与持续集成
KISSY 经过三年的开发已经不小了，模块间还常常有依赖关系，修改代码有牵一发而动千钧的后果，
为了应对此问题，KISSY 也在逐渐完善单元测试，自动化测试与持续集成。

### 单元测试
KISSY 一个模块的常见目录结构如下：

![KISSY test](http://img02.taobaocdn.com/tps/i2/T1vyNnXwlgXXbwfpMS-198-297.png)

其中 tests 目录下为测试资源，在 runner 目录下为测试启动 html 文件，在 specs 下为对应模块的单元测试代码，
KISSY 采用的单元测试框架为 jasmine ，测试代码举例如下


    describe('S.mix',function(){
        it('works for simple case',function(){
            expect(S.mix({x:1},{y:1})).toEqual({x:1,y:1});
        });
    });

然后打开测试启动 html 即可看到单元测试后的结果：

![run test](http://img01.taobaocdn.com/tps/i1/T1nGRoXCReXXaUZeDF-610-234.png)

### 持续集成
为了提高测试效率，KISSY 还依赖 travis 平台和 phamtomjs 进行持续集成测试。
每次提交代码都会在 travis 平台上启动 phantomjs 来运行 KISSY 所有模块的单元测试代码。
示例图如下：

![travis](http://img01.taobaocdn.com/tps/i1/T18aU8XkBiXXcDcJnW-587-412.png)

## 淘宝应用场景举例
淘宝目前的绝大多数应用已经采用 KISSY 搭建，这次我选取两个大家使用比较多的应用来介绍下 KISSY 在淘宝的实践：

### 店铺应用
这个应用是商家店铺的门户，除了淘宝页头之下都可以由商家自定义内容。

![shop](http://img02.taobaocdn.com/tps/i2/T1OwZ9Xi4iXXb71EHc-985-567.png)

可以看出页面本身就是区块化的组织，在程序内部也是分成很多个模块，
例如店内搜索模块，宝贝分类模块，销量统计模块等，每个模块负责页面一块区域的交互实现，
这些模块又会调用 KISSY 的模块来实现自身的逻辑。
而每个商家的店铺可能使用到的区块并不相同，这也对应着每个商家店铺所用到的程序模块也不相同。

店铺模块与 KISSY 模块依赖关系如下：

![shop-mods](http://img02.taobaocdn.com/tps/i2/T1jXc4XdFkXXX.coEd-494-265.png)

在实际使用中配置店铺应用为一个包，其内的所有模块都放入这个包内，最后由页面初始化脚本加载当前店铺需要的模块列表，例如：

    KISSY.use('shop/search,shop/category,...');

在线上会发出两个 combo 请求：一个为店铺页面需要的应用模块集，一个为 KISSY 自己的模块集，例如

    http://a.tbcdn.cn/s/kissy/1.3.0/??dom/base.js,event/base.js,overlay.js...
    http://a.tbcdn.cn/p/shop/??search.js,category.js...

### 宝贝详情应用
宝贝详情页面用来展示商家单个商品的详细信息，评价，成交趋势等信息，并为下一步购买做准备，是目前淘宝访问量最大的页面。
该应用和店铺应用紧密相关，从页面可以看出，很多区块和店铺页面对应区块相同，实际上在代码层面也是引用同一份模块，
首先宝贝详情应用和店铺应用一样加载当前页面用到的店铺模块，然后再加载这个页面本身的应用模块。
但是这个应用本身逻辑十分复杂，若像店铺应用一样也是采用模块 combo 的方式会导致请求 url 过长，
进而 KISSY 会对过长的 combo url 拆分成多个短的 url，反而适得其反。
因此这里会对宝贝详情页面自身的模块进行一个打包合并操作，将自己模块的主模块和依赖模块都合并到主模块中去，
最终线上会发出三个请求，其中两个为 combo 请求，一个为非 combo 请求，例如：

    http://a.tbcdn.cn/s/kissy/1.3.0/??dom/base.js,event/base.js,overlay.js...
    http://a.tbcdn.cn/p/shop/??search.js,category.js...
    http://a.tbcdn.cn/p/detail/main.js


## 总结
KISSY 才刚刚处于成长初期，相对于国外成熟框架尚有不小差距，不过依然承受住了淘宝复杂多变业务的考验。
下一步 KISSY 会继续进行完善基础组件例如 date，datesource，selector，graphics 等，
重构已有组件例如 switchable，calendar 等，
增加 package manager 方便基于 KISSY 的提交与共享，补全测试用例，实现代码覆盖率检测，不断提高运行稳定性。
将来我们坚信 KISSY 会随着淘宝的发展而继续成长，也会随着国内前端技术的不断发展而不断进步。
希望有兴趣的你也能加入到 KISSY 开发中，一起学习进步，享受成长的乐趣。


参考资料：

KISSY： http://docs.kissyui.com/

KISSY Module Compiler： http://docs.kissyui.com/docs/html/tutorials/tools/module-compiler/index.html

KISSY Module Compiler Node 版本：https://github.com/daxingplay/ModuleCompiler

OSCHINA 访谈：http://www.oschina.net/question/28_71454

nginx combo： https://github.com/perusio/nginx-http-concat

KISSY-PIE: https://github.com/maxbbn/front-build

BRXI: http://etaoux.github.com/brix/

ZOOJS: http://zoojs.org/doc/

KISSY on Travis: https://travis-ci.org/kissyteam/kissy


作者： 承玉，拔赤，左莫，文龙

承玉： 淘宝前端工程师，2010 年加入淘宝，目前是淘宝开源框架 KISSY 负责人

拔赤： 淘宝前端工程师，目前是淘宝基于 KISSY 的移动类库 ZOOJS 负责人

左莫： 一淘前端工程师，目前是一淘基于 KISSY 的开源类库 BRIX 负责人

文龙： 淘宝前端工程师，目前是 KISSY 集成开发工具 KISSY-PIE 负责人
