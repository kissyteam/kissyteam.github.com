# KISSY Mobile 最佳实践

## 开启 Combo

KISSY Loader 可以开启Combo功能，将多JS文件进行合并输出，以减少HTTP请求数，在移动终端中**更要如此**，开启方法参照[Loader](loader.html)。

对于本地文件，使用[KMC](kmc.html)进行静态合并。

## KISSY DOM 的 CSS3 选择器加速

Zepto 由于充分利用了浏览器原生`querySelector`和`querySelectorAll`两个函数来查找DOM，因此DOM查找效率很不错，但并非所有的选择器用这两个函数都能达到速度最快。[通过测试发现](https://speakerdeck.com/lijing00333/css-selector-performance)，`#id`、`#ClassName`、`tags`、`#id .cls`、`级联查找`等场景下，`querySelector`性能并非最优。我们在 DOM 模块中重构了 CSS3 选择器引擎，有选择的调用原生函数，在90%的场景中让DOM查找速度加倍：

![](http://gtms04.alicdn.com/tps/i4/T19b5yFkdXXXXvDWMq-529-511.png)

> 最佳实践：在对选择器查找性能要求苛刻的场景中，使用 KISSY DOM 代替 Zepto。

如果你对选择器有更极致的性能邀请，参考这些最佳实践：

### 简单选择器

你的选择器只是简单选择器，建议你这样写

	// 速度很快
	S.one( "#container" ).one( "div.robotarm" );

	// 速度更快
	S.one( "#container div.robotarm" );


第二行代码执行速度更快，因为选择器被解析为两个Token，对于每个Token，KISSY都会调用最快的方法，而对于简单选择器，尽可能用一个方法包括，由KISSY自身按需调用最快的方法去查找每个Token。[测试代码](http://jsperf.com/kissy-vs-zepto-id/8)。

简单选择器只包含ID，ClassName，Tag和他们的组合。


### 循环的优化

如果循环中有多级选择器，建议这样写：

	// 速度一般
	for(var i = 0 ; i < length; i++){
		S.one('#a').one('.b');
	}

	// 速度更快
	var el = S.one('#a');
	for(var i = 0 ; i < length; i++){
		el.one('.b');
	}


### 尽可能避免 `tag.cls` ，直接使用`.cls`

由于`.cls`查询在高级浏览器中会直接调用`getElementsByClassName`，此方法性能仅次于`getElementById`，而`tag.cls`会调用`querySelector`，性能更差。

	// 不要这样做
	S.one( "div.data .gonzalez" );

	// 这样性能更优
	S.one( ".data td.gonzalez" );

### 删除累赘选择器

	S.one( ".data table.attendees td.gonzalez" );

	// 性能更好: 把中间的选择器去掉，保持选择器的直达和简单
	S.one( ".data td.gonzalez" );

选择器多，意味着查询次数多，应当尽可能的避免。

### 避免全局选择器

尽可能的避免使用模糊查询和全遍历，使用更精确的选择器查询：

	S.one( ".buttons > *" ); // 非常耗性能
	S.one( ".buttons" ).children(); // 性能好一些
	S.one( ".category :radio" ); // 避免这样用
	S.one( ".category *:radio" ); // 同上，也要避免
	S.one( ".category input:radio" ); // 这种写法更好

## 触屏事件

[KISSY Event](event.html) 包含对触屏事件的封装，这样载入`event`模块：

	// 在触屏设备中运行
	KISSY.use('event');

在触屏设备中将会加载`event-min.js`：214B（gzip）。事件用法和普通的浏览器事件一样：

	Event.on('#t', "swipe", function (e) {
		if(e.direction=='left'){
			e.preventDefault();
		}
	});

> 最佳实践，使用 KISSY Event 封装后的触屏事件，触屏行为更统一、精确。事件种类参照[Event](event.html)。

## 组件的触屏兼容

KISSY Gallery 提供大量兼容 Mobile 的组件，尽可能的使用这些跨终端的组件，比如[Slide](http://gallery.kissyui.com/slide/1.1/guide/index.html)，支持CSS3动画的加速和手势事件触发切换。

--------------------------------------

## 其他重要的优化手段

### 图片体积优化

性能分为两类：

- 载入性能
- 渲染性能

KISSY 只能保证在 JavaScript 层面优化性能，根据[34军规](http://developer.yahoo.com/performance/rules.html)的原则，影响载入性能最大的因素在于HTTP请求数和资源体积，一般情况下占用页面体积80%的是图片，因此优化图片的效果比优化 JavaScript 体积要更显著更重要。

#### 根据不同DPI载入不同尺寸图片

	/* 高 dpi */
	@media only screen and (min-resolution: 300dpi),
		only screen and (-webkit-min-device-pixel-ratio: 1.5) {
			#header { background-image: url(header-300dpi.png); }
	}

	/* 低 dpi */
	@media only screen and (max-resolution: 299dpi),
		only screen and (-webkit-max-device-pixel-ratio: 1.5) {
			#header { background-image: url(header-72dpi.png); }
	}

#### 使用带有alpha通道的PNG8图片

带有半透明效果的图片可以以PNG8形式保存，通过工具[tinypng](http://tinypng.org/)来优化。这类图片体积将会减少一倍。

## 两篇H5开发最佳实践的 PPT

- [H5 开发性能优化实战](https://speakerdeck.com/ningzbruc/mobile-h5-xing-neng-you-hua)
- [H5 项目开发调试技巧](https://speakerdeck.com/paulguo/h5-mobile-kai-fa-diao-shi-shi-jian)
