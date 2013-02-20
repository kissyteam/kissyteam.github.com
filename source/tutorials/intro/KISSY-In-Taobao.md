# 模块化高扩展性的前端框架 KISSY

## 介绍
伴随着淘宝的快速发展，诞生已三年多的 KISSY 也取得了巨大的成长。
目前应用于阿里集团的多个业务团队，特别是淘宝，天猫，一淘的绝大多数业务都采用了 KISSY，
满足了从前台的 web page 到后台的 web app 再到移动端应用（起步阶段）的广泛需求。

在阿里集团以外也有不少公司和个人使用 KISSY，交流旺旺群成员已将近千人，
在 github 源码库也时常有外部人员参与提交 issue，发起 pull request，另外在 oschina 等开源社区也受到了一定的关注。

淘宝在 2012 年 12 月 25 号发布了 KISSY 最新版本 1.3，
在这篇文章中我将对 KISSY 1.3 结合在淘宝的实践做一次全面概述，希望能对想了解淘宝前端技术的朋友有所帮助。

## 为什么选择 KISSY
KISSY 作为国内一个完全自底向上开发起来的框架，诞生三年来历经淘宝的各种业务变化的考验，体现了 KISSY 的可扩展性，高稳定性和可维护性。
它在以下方面具有一定优势:

* 拥有大量的中文文档： 方便不熟悉英文的国内开发者快速入门学习。
* 在国内具备一定的社区规模： 通过旺旺群，google group，微博，官方网站等用户随时可以和开发人员快速交流。
* 开发便捷： 在模块化，组件以及工具辅助方面形成了一套完善的机制，可以高效应对日常的需求开发。
* 综合借鉴国际先进的框架类库设计：

    * 在吸收 jquery 稳定的 dom 核心之外提供了模块化，按需加载的基础架构。
    * 在学习 yui 坚实的架构之外着重于组件开发，积累了一批贴近淘宝应用的组件集。
    * 在研究 extjs 优秀的组件设计之外探索轻量级，可扩展的组件开发，同时满足 web app 与 web page 的需求。

* 应用场景广泛： 在各种设备上都有所支持。

    * 可以使用 seed 和 core 简单快速地搭建页面
    * 也可以进一步使用 KISSY 的大量组件构建富客户端应用
    * 也可以使用统一的 API 开发移动应用
    * 更可以利用 KISSY 灵活的模块化机制高效进行大规模团队协作

不过由于 KISSY 开发时间还不长，在组件完备性以及可测试性上有待进一步完善，我们坚信这种情况会随着团队的不断努力而逐步解决。

## 架构
KISSY 的架构由淘宝复杂多变的业务决定，在松耦合、无污染、模块化的核心前提下，也从众多优秀类库和框架的思路得到一些启发。 如图1所示：

图1： KISSY 整体架构图

![KISSY-architecture](http://img03.taobaocdn.com/tps/i3/T1QDBbXDliXXaoYMUR-865-661.png)

1. 最底层的 seed 是类似目前流行的 AMD 模块化机制实现，为了更高效地共享通用组件加入了自动 combo 的支持，
    另外 seed 也包含一些像 each（循环数组以及对象），mix（合并对象），param（编码对象为 url），
    ready（等待 dom ready）等常用的静态工具方法以及 Path，Uri，Promise，UA 等模块化需要用到的基础类。

2. seed 之上的第二层是处理 dom 兼容性的核心模块，其中每个模块都是由更小的模块打包合并而来。
    特殊之处在于 KISSY 把一些不标准浏览器的兼容代码单独抽取成内部模块，用户可用的外部模块会根据不同的设备分别依赖不同的内部模块。
    虽然加载不同的具体实现模块代码，但是最终提供给用户的是一致的模块名，api 以及渐进增强的能力。
    例如用户使用 event 模块，在 touch 设备上会加载 event/touch 模块从而可以使用一些手势事件，
    而在 ie<9 下会加载 event/hashchange 模块，以类似 es5-shim 的方式来补全浏览器的能力，提供给用户统一的 api。

3. 第三层为组件架构层。提供包括模拟 es5 属性管理，插件和多继承机制的 rich-base 模块，
所有 UI 组件渲染机制的基类 component 模块以及具备一定逻辑的模板引擎 xtemplate。

4. 第四层为独立可用的 KISSY 组件，用户可自由组合继承搭建最终页面。包括：
    * 工具模块，例如拖放，调整大小，操作 swf，操作样式表，mvc（model，router）架构等。
    * UI 组件，例如弹窗，菜单，标签，日历等。

5. 最外层为 KISSY gallery，KISSY 社区开发的一些通用模块会放入 gallery 中，
    从而可以方便得在所有使用 KISSY 的团队间共享模块。
    如果该模块确实十分通用则会经过重构放入 KISSY 自身。

## 模块化机制
### 介绍
由于淘宝业务的复杂，为了提高代码的可维护性和重用性，KISSY 在早期就引入了简单的模块化机制，并且随着前端技术的发展而不断改进。
KISSY 1.3 的模块化机制与目前的 AMD 规范比较类似，并根据淘宝自身业务特点加入了自动 combo 功能。

注：combo 举例：请求 a.tbcdn.cn/??a.js,b.js 相当于把 a.tbcdn.cn/a.js 与 a.tbcdn.cn/b.js 的文件内容合并后返回。

KISSY 之外的每个模块必须属于一个包，一个包内可以有很多相关模块，它们具备相同的加载基地址。
包的设计一方面通过约定优先配置的原则可以减少同一个包内多个模块的请求路径配置，
另一方面也方便了部署在不同地址的多个应用间互相调用模块。
所以开发应用前请先配置包地址，例如：

```javascript

    KISSY.config('packages', {
        myapp: {
            base:'./x'
        }
    });
```

之后在 x 目录下建立 myapp 目录，并在 myapp 目录下新建模块 a 对应的代码文件： a.js

```javascript

    KISSY.add(function(S,JSON){
        return JSON.stringify({a:'ok'});
    },{
        requires:['json']
    });
```

以及依赖 a 的入口主模块 main 的代码文件： main.js

```javascript

    KISSY.add(function(S,DOM,a){
        S.ready(function(){
            DOM.text(document.body,a);
        });
    },{
        requires:['dom','./a']
    });
```

应用模块可依赖 KISSY 自身模块，例如以上的 dom json。

最后新建 index.html 来调用应用模块：

```html

    <script src='http://a.tbcdn.cn/s/kissy/1.3.0/seed.js'></script>
    <script>
        // ... 上述包配置

        KISSY.use('myapp/main',function(){
            alert('page loaded');
        });
    </script>
```

### 工具支持
打开上述 index.html 会发现链接数不少，有从淘宝 cdn 的链接也有本地的链接。
因此 KISSY 提供了配套工具 KISSY Module Compiler 进行脚本打包以及抽取依赖后用 cdn combo 来解决这个问题，
对工具有兴趣可查看参考资料中的链接地址，以下仅作简单介绍：

#### 脚本打包
如果应用脚本非常多，可以用 module compiler 将入口模块 main 以及其依赖的所有应用模块打包压缩到 main-min.js 中，
同时 module compiler 会生成一份依赖描述文件：

```javascript

    KISSY.config('modules',{
        'myapp/main':{
            requires:['dom','json']
        }
    });
```

接着设置 KISSY 启用 combo 模式，并载入上述的依赖描述文件：

```javascript

    KISSY.config('combine',true);
```

最后修改 index.html 引用 seed-min.js，打开网络面板后会发现现在只产生两个链接请求：

    http://a.tbcdn.cn/s/kissy/??dom/base,json/native.js
    http://localhost/myapp/main-min.js

注：在 ie<9 等非标准浏览器下第一个链接地址会加上 dom/ie json/json2 等脚本地址

#### 抽取依赖
如果应用脚本不多，并且自身服务器也支持 combo 的话，那么可以采用更加灵活的抽取依赖后全部 combo 的解决方案。
这时 module compiler 会做两件事情：

1. 补全模块名，例如 a.js 变为

```javascript

        KISSY.add('myapp/a',function(S,JSON){
            return JSON.stringify({a:'ok'});
        },{
            requires:['json']
        });
```

2. 将各个模块的依赖收集为一个单独的文件，例如

```javascript

        KISSY.config('modules',{
            'myapp/main':{
                requires:['dom,','./a']
            },
            'myapp/a':{
                requires:['json']
            }
        });
```

接着设置 KISSY 启用 combo 模式，并载入上述的依赖描述文件：

```javascript

    KISSY.config('combine',true);
```

访问 index.html，打开网络面板会发现同样只产生两个链接请求：

    http://a.tbcdn.cn/s/kissy/??dom/base,json/native.js
    http://localhost/myapp/??a.js,main.js

### KISSY-PIE
KISSY 还提供了一套基于约定的前端打包解决方案 KISSY-PIE，通过统一的约定，提升应用的可维护性，将大家从重复的打包脚本的编写中解放出来。

KISSY-PIE 包括了以下功能：

* JS（KISSY 的模块编译，HTML 模板到 KISSY 模块编译，代码压缩）
* CSS（基于 CSS-Combo 的合并，压缩）
* Less
* Sass

并且在命令行之外还提供了 web 操作界面，如图2所示：

图2： KISSY-PIE 打包界面

![kissy-pie](http://img01.taobaocdn.com/tps/i1/T1.xNpXy0cXXXoylk9-771-513.png)


## 组件机制
### 核心
KISSY 目前包括众多即开即用的组件，
包括工具性质的例如 dd（拖放），resizable（调整大小），swf（插入flash），stylesheet（操作样式表）等
和 UI 性质的例如 overlay（弹窗），menu（菜单），menubutton（菜单按钮），imagezoom（放大镜），editor（编辑器），
tabs（标签），tree（树）等。
这些组件都基于公共的 rich-base 以及 component 模块：
rich-base 和 component 模块充分利用了 javascript 语言的 minxin 和原型链继承，
提供了属性绑定，类继承，扩展以及插件等特性。

其中的重点是 Component，它是所有 UI 组件的基类，提供了两种通用的渲染方式：

1. 组件实例由 javascript 完全渲染 dom 树。

    其中对于 menu 等组件在 javascript 完全渲染的情况亦可以通过 json 初始化内部嵌套组件。例如

    ```javascript

        KISSY.use('menu',function(S,Menu){
            // javascript 渲染一个菜单到 body
            new Menu({
                children:[{
                    content:'item1'
                }]
            }).render();
        });
    ```

2. 从已有的 dom 树节点得到组件实例。


下面以 KISSY 中常用的一个组件 Overlay 为例讲解下，首先看图3类结构图：

图3： Overlay 类结构图

![overlay](http://img04.taobaocdn.com/tps/i4/T1LzxpXrFaXXa8LGAz-643-262.png)

Overlay 继承自 Component，然后静态地由一些分散的功能类扩展而来，包括定位功能类，对齐功能类，关闭功能类，遮罩层功能类，
这些功能类底层利用 javascript 的 mixin 功能将自己的方法和属性汇入到 Overlay 类中，使得最终的 Overlay 具备了这些能力。

组件在运行时也可以选择性依赖某些插件模块，将插件的功能注入到组件中去，
既避免了一个组件过于功能繁多导致的文件过大，又大大增强了组件的可扩展性。

以下为 Overlay 的使用示例代码：

```javascript

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
```

### Brix
除了 KISSY 自身的组件机制，一淘开发人员根据自己的应用特点在组件开发和使用上找寻了另一条途径。即 Brix 解决方案：

* 基于统一的渲染方式：模板（tmpl）和数据（data）产生html片段后使用 innerHTML 到 DOM 节点中.
* 提取子模板，结合数据的更新，达到局部刷新，开发者不需要再关心页面的表现，而专心于数据的变化。
* DOM 节点自定义属性设置组件标志，Brix 提供 Pagelet 按照统一的方式实例化组件。

图4： Brix 类库结构

![brix](http://img02.taobaocdn.com/tps/i2/T10wc7Xf4iXXcMABjZ-1027-1025.png)

## 设备普适性
当前 javascript 的使用范围越来越广，平台包括 pc 浏览器与读屏器，nodejs，移动端浏览器以及各种外壳，window8 等。
KISSY 也尽量在各个平台给予支持，保证统一的开发体验。

在 nodejs 上 KISSY 通过调整模块加载器使得 KISSY 可以直接将自身的模块加载到 nodejs 中使用。例如

* 可以使用 KISSY 的 UA 解析模块来分析日志中的 UA 串
* 可以载入 jsdom 模块在 nodejs 环境下做单元测试
* 用 xtemplate 在服务器端渲染前端模板
* 使用 KISSY 的 htmlparser，color 等工具模块

经统计约有 1000 万的盲人用户在使用淘宝，他们实际上是通过读屏器来和淘宝交互，
KISSY 组件通过遵循 WAI-ARAI 规范来给盲人朋友提供无障碍的访问环境，网上人人平等。

KISSY 也计划对 windows8 进行支持，在即将发布的 tmall windows8 app 中仅仅通过使用 KISSY 的模块化机制以及一些语法糖 API
就可以达到和平常开发一样的高效。

随着用户越来越多地在移动设备上购物产生交易，移动应用在流量的比重上也越来越多，KISSY 及时适配移动设备，
目前在两方面进行了支持：

1. 根据设备条件加载。

    对于移动端由于网络速度等原因对于文件大小比较敏感，KISSY 为了保证一致的 API 又不能随意删减功能，
    因而采取了独立兼容模块的方法来保持瘦身。

    在架构一节也阐述过，KISSY 对基础核心模块中的兼容非标准浏览器的模块进行选择性加载，
    同时移动设备上都是标准浏览器，从而可以大大减少实际下载到用户设备上的代码大小。

    部分组件也实行了拆分，将 pc 的功能交互独立到单独的模块，在移动触摸设备上只加载触摸交互需要用到的模块。

2. 渐进增强 API。

    对于触屏设备，很多交互是建立在手势操作上。而手势操作除了在 safari 上有 gesture 事件做有限支持外，
    在 android 上则完全没有对应事件。
    得益于 KISSY 易于扩展的事件机制，KISSY 在底层多点触摸 touch 事件的基础上模拟出了 tap rotate pinch
    等触屏设备上独有的事件，这对于用户则是透明，用户完全可以把这些事件当做原生事件来使用，例如

    ```javascript

        KISSY.use('event',function(S,Event){
            // 监听 div 上的 tap 事件
            Event.on('#div','tap',function(){
            });
        });
    ```

### ZOOJS
另外淘宝北京团队还基于 KISSY 核心打造了专门面向 Web 无线设备的一整套工具库 ZOOJS，
包含控件级的事件支持、触屏行为的封装、富控件、皮肤、App的基础架构等。
这套独特的 Web 无线解决方案力争将 HTML5 和 CSS3 的优势发挥至最佳，做到即调即用。


## 测试与持续集成
KISSY 经过三年的开发代码库已经相当庞大了，模块间还常常有依赖关系，修改代码有牵一发而动千钧的后果。
为了应对此问题，KISSY 也在逐渐完善单元测试，自动化测试与持续集成。

### 单元测试
KISSY 一个模块的常见目录结构如图5所示：

图5： 模块目录结构

![KISSY test](http://img02.taobaocdn.com/tps/i2/T1vyNnXwlgXXbwfpMS-198-297.png)

其中 tests 目录下为测试资源，runner 目录下启动测试的 html 文件，specs 下为对应模块的单元测试代码。
KISSY 采用的单元测试框架为 jasmine ，测试代码举例如下：

```javascript

    describe('S.mix',function(){
        it('works for simple case',function(){
            expect(S.mix({x:1},{y:1})).toEqual({x:1,y:1});
        });
    });
```

然后打开启动测试的 html 文件 即可看到图6所示的单元测试结果：

图6： 单元测试结果

![run test](http://img01.taobaocdn.com/tps/i1/T1nGRoXCReXXaUZeDF-610-234.png)

### 持续集成
为了提高测试效率，KISSY 还依赖 travis 平台和 phamtomjs 进行持续集成测试。
每次提交代码都会在 travis 平台上启动 phantomjs 来运行 KISSY 所有模块的单元测试代码。
如图7所示：

图7： travis 平台上的 KISSY

![travis](http://img01.taobaocdn.com/tps/i1/T18aU8XkBiXXcDcJnW-587-412.png)

## 淘宝应用场景举例
淘宝目前的绝大多数页面已经采用 KISSY 搭建，这次我选取两个大家使用比较多的应用来介绍下 KISSY 在淘宝的实践：

### 店铺页面
店铺页面是商家店铺的门户，除了淘宝页头之下都可以由商家自定义内容，如图8所示：

图8：典型的店铺页面

![shop](http://img02.taobaocdn.com/tps/i2/T1OwZ9Xi4iXXb71EHc-985-567.png)

可以看出页面本身就是区块化的组织，在程序内部也是分成很多个模块，例如店内搜索模块，宝贝分类模块，销量统计模块等，
每个模块负责页面一块区域的交互实现，这些模块又会调用 KISSY 的模块来实现自身的逻辑。
而每个商家的店铺可能使用到的区块并不相同，这也意味着每个商家店铺所用到的程序模块也不相同。

店铺模块与 KISSY 模块依赖关系如图9所示：

图9：店铺模块与 KISSY 模块的关系

![shop-mods](http://img02.taobaocdn.com/tps/i2/T1jXc4XdFkXXX.coEd-494-265.png)

在实际开发中配置店铺应用为一个包，其内的所有模块都放入这个包内，最后由页面初始化脚本加载当前店铺需要的模块列表。例如：

```javascript

    KISSY.use('shop/search,shop/category,...');
```

在线上会发出两个 combo 请求：一个为店铺页面需要的应用模块集，一个为 KISSY 自己的模块集，例如

    http://a.tbcdn.cn/s/kissy/1.3.0/??dom/base.js,event/base.js,overlay.js...
    http://a.tbcdn.cn/p/shop/??search.js,category.js...

### 宝贝详情应用
宝贝详情页面用来展示商家单个商品的详细信息，评价，成交趋势等信息，并为下一步购买做准备，是目前淘宝访问量最大的页面。

该应用和店铺应用紧密相关，从页面可以看出，很多区块和店铺页面对应区块相同，实际上在代码层面也是引用同一份模块，
首先宝贝详情应用和店铺应用一样加载当前页面用到的店铺模块，然后再加载这个页面本身的应用模块。
但是宝贝详情业务本身逻辑十分复杂，若像店铺应用一样也是采用模块 combo 的方式则会导致请求 url 过长，
进而 KISSY 会对过长的 combo url 拆分成多个短的 url，反而适得其反。
因此这里会把宝贝详情页自身的模块打包合并，将自己模块的主模块和依赖模块都合并到主模块中去，
最终线上会发出三个请求，其中两个为 combo 请求，一个为非 combo 请求，例如：

    http://a.tbcdn.cn/s/kissy/1.3.0/??dom/base.js,event/base.js,overlay.js...
    http://a.tbcdn.cn/p/shop/??search.js,category.js...
    http://a.tbcdn.cn/p/detail/main.js


## 总结
KISSY 才刚刚处于成长初期，相对于国外成熟框架尚有不小差距，不过依然承受住了淘宝复杂多变业务的考验。
下一步 KISSY 会继续完善基础组件例如 date，datasource，selector，graphics 等，
重构已有组件例如 switchable，calendar 等，
增加 package manager 方便基于 KISSY 模块的提交与共享，补全测试用例，实现代码覆盖率检测，不断提高运行稳定性。
将来我们坚信 KISSY 会随着淘宝的发展而继续成长，也会随着国内外前端技术的不断发展而不断进步。
希望有兴趣的你也能加入到 KISSY 开发中，一起学习进步，享受成长的乐趣。

---

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

---

作者： 承玉

何一鸣，淘宝花名承玉，2010年自复旦大学硕士毕业后加入淘宝，
先后参与 KISSY Editor，KISSY 核心以及系列组件的研发，目前负责淘宝前端框架 KISSY。