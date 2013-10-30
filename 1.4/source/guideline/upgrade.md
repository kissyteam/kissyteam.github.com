# 1.3.x `=>` 1.4.x 升级指南

## 升级必读

### 种子引用路径

1.4.x 的引用地址域名由之前的`a.tbcdn.cn`改为`g.tbcdn.cn`：

	http://g.tbcdn.cn/kissy/k/1.4.0/seed-min.js

> 注意：`http://g.tbcdn.cn/`对应到`http://a.tbcdn.cn/g/`下的文件，比如，`http://g.tbcdn.cn/abc.js`和`http://a.tbcdn.cn/g/abc.js`实际是一个文件。

### 1.4.x 将不再提供`kissy.js`

为了增强 KISSY 的模块架构和减轻体积，1.4.0 之后将不再提供粗粒度的`kissy.js`，因此`http://g.tbcdn.cn/kissy/k/1.4.0/kissy.js`不存在。KISSY 将只提供`seed.js`。

即，使用 1.4.x 的功能必须首先`use('mod-name')`再使用，注意之前比较滥用的`KISSY.ready()`，在 1.4.x 中不建议使用。使用模块请参照 [1.4.x 模块列表](module-map.html)。

### 模块名称变更
- 不推荐使用 core，推荐依赖对应模块。
- ajax, io 为同一模块，推荐使用 io。
- sizzle 被移除，不用再加载。
- calendar、datalazyload、switchable、imagezoom、waterfall 被移出，被替代为Gallery中的组件，
[calendar-deprecated](http://gallery.kissyui.com/calendar-deprecated/1.0/guide/index.html)，
[switchable](http://gallery.kissyui.com/switchable/1.3/guide/index.html)，
[datalazyload](http://gallery.kissyui.com/datalazyload/1.0/guide/index.html)，
[imagezoom](http://gallery.kissyui.com/imagezoom/1.0/guide/index.html)，
[waterfall](http://gallery.kissyui.com/waterfall/1.0/guide/index.html)。

对于用到这些模块（基于 kissy 1.3.0）的页面升级到`1.4.0`后，需要在全局自行添加映射（KISSY 1.4.0 不提供）：

	KISSY.config({
		modules: {
			'sizzle':{
				alias: ['node']
			},
			'ajax':{
				alias: ['io']
			},
			'calendar':{
				alias: ['gallery/calendar-deprecated/1.0/']
			},
			'datalazyload':{
				alias: ['gallery/datalazyload/1.0/']
			},
			'switchable':{
				alias: ['gallery/switchable/1.3.1/']
			},
			'imagezoom':{
				alias: ['gallery/imagezoom/1.0/']
			},
			'waterfall':{
				alias: ['gallery/waterfall/1.0/']
			}
		}
	});

-----------------------------------------

## 1.4.0 Changelog

1. loader 在 [1.3.1](https://github.com/kissyteam/kissy/issues/269) 支持跨包 combo, error 回调，超时回调，importStyle 后，1.4 更添加了[全球化支持](https://github.com/kissyteam/kissy/issues/429)。
1. lang 支持 [KISSY.setImmediate](https://github.com/kissyteam/kissy/issues/498) 实现跨浏览器的快速异步执行代码。
1. anim 
    1. 实现 [promise api](https://github.com/kissyteam/kissy/issues/496)，废弃事件通知。
    1. 支持使用 [transition](https://github.com/kissyteam/kissy/issues/285) 动画。
    1. 对 [transform](https://github.com/kissyteam/kissy/issues/402) 做了兼容处理。
1. base 与 rich-base 合并，并支持 [callSuper](https://github.com/kissyteam/kissy/issues/447) 调用，形成完善的 KISSY 类系统.
    1. 请使用 Base.extend 而不是 S.extend(Base)。
    2. 如果为了兼容，使用 S.extend，其中请不要包含函数名 initializer 和 destructor。
1. [date](https://github.com/kissyteam/kissy/issues/164) 系列工具类实现，并支持 en/zh 两种语言以及序列化和 parse 功能。
1. 在 date 以及 KISSY 组件架构的基础上实现 [date/picker](https://github.com/kissyteam/kissy/issues/162)。
1. [dom](https://github.com/kissyteam/kissy/issues/282) 。
    1. 支持 classList 以及 [transform](https://github.com/kissyteam/kissy/issues/402)。
    1. 自主实现 ie6-8 下的兼容 css3 的选择器引擎，并针对常用的选择器做[特殊优化](https://github.com/kissyteam/kissy/pull/406)，通过透明的按需加载来实现全平台 css3 选择器兼容。
1. [touch 手势](https://github.com/kissyteam/kissy/issues/363) 对于 windows phone/win8 ie 的支持。
1. node 支持 [filter](https://github.com/kissyteam/kissy/issues/367) 方法。
1. filter-menu 模块从 menu 模块中分离。
1. overlay 
    1. show/hide 方法不会设置行内样式，只会添加对应的 class。
    1. srcNode 初始化是 html 结构必须包含 content 节点。
    1. content/bodyContent 只允许字符串类型。
    1. 修改 close 按钮样式名。
1. promise 模块从 seed 中分离，并支持 [done](https://github.com/kissyteam/kissy/issues/311) 和 [progress](https://github.com/kissyteam/kissy/issues/480) api。
1. [resizable](https://github.com/kissyteam/kissy/issues/223)。
    1. 支持 preserveRatio。
    1. 支持代理。
1. tabs 支持[懒渲染](https://github.com/kissyteam/kissy/issues/335)。
1. 在 KISSY 组件架构的基础上实现 [scroll-view](https://github.com/kissyteam/kissy/issues/222)，可模拟触屏以及普通滚动条。
1. xtemplate     
    1. [宏的支持](https://github.com/kissyteam/kissy/issues/449)。
    1. [根作用域的支持](https://github.com/kissyteam/kissy/issues/431)。
    1. [模块加载的支持](https://github.com/kissyteam/kissy/issues/389)。
    1. 优化产生代码，完善 kissy-xtemplate 命令离线编译代码。