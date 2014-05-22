# 1.3.x `=>` 1.4.x 升级指南

## 升级必读

### 种子引用路径

1.4.x 的引用地址域名由之前的`a.tbcdn.cn`改为`g.tbcdn.cn`：

	http://g.tbcdn.cn/kissy/k/1.4.3/seed.js

> 注意：`http://g.tbcdn.cn/`对应到`http://a.tbcdn.cn/g/`下的文件，比如，`http://g.tbcdn.cn/abc.js`和`http://a.tbcdn.cn/g/abc.js`实际是一个文件。

### 1.4.x 将不再提供`kissy.js`

为了增强 KISSY 的模块架构和减轻体积，1.4.0 之后将不再提供粗粒度的`kissy.js`，因此`http://g.tbcdn.cn/kissy/k/1.4.3/kissy.js`不存在。KISSY 将只提供`seed.js`。

即，使用 1.4.x 的功能必须首先`use('mod-name')`再使用，注意之前比较滥用的`KISSY.ready()`，在 1.4.x 中不建议使用。使用模块请参照 [1.4.x 模块列表](module-map.html)。


### 模块名称变更
- 不推荐使用 core，推荐依赖对应模块。
- ajax, io 为同一模块，推荐使用 io。
- sizzle 被移除，不用再加载。
- calendar、datalazyload、switchable、imagezoom、waterfall、flash 被移出，被替代为Gallery中的组件，
[calendar-deprecated](http://gallery.kissyui.com/calendar-deprecated/1.0/guide/index.html)，
[switchable](http://gallery.kissyui.com/switchable/1.3/guide/index.html)，
[datalazyload](http://gallery.kissyui.com/datalazyload/1.0/guide/index.html)，
[imagezoom](http://gallery.kissyui.com/imagezoom/1.0/guide/index.html)，
[flash](http://a.tbcdn.cn/s/kissy/gallery/flash/1.0/index.js)，
[waterfall](http://gallery.kissyui.com/waterfall/1.0/guide/index.html)。


对于用到这些模块（基于 kissy 1.3.0）的页面升级到`1.4.0`后，需要在全局自行添加映射（KISSY 1.4.0 不提供）：

	KISSY.config({
		modules: {
			'sizzle':{
				alias: ['node']
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
			},
			'flash':{
				alias: ['gallery/flash/1.0/']
			}
		}
	});

-----------------------------------------
## Changelog

[KISSY Changelog](https://github.com/kissyteam/kissy/releases)