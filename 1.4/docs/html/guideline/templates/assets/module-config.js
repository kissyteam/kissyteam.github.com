KISSY.use('node',function(S,N){

	var mods = S.Env.mods;
	var all_mods = '';

	buildHtml();

	function buildHtml(){
		S.each(mods,function(v,k){
			all_mods += '<a class="btn btn-default btn-sm" type="button" title="'+des[k]+'">'+k+'</a>';
		});
		S.one('#all_mods').html(all_mods);
		S.all('#all_mods .btn').on('click',function(e){
			e.halt();
			var el = S.one(e.target);
			if(el.hasClass('btn-default')){
				el.replaceClass('btn-default','btn-info');
				el.addClass('added');
			} else {
				el.replaceClass('btn-info','btn-default');
				el.removeClass('added');
			}
			toggleOutput();
		});
		S.one('#cancel_select_all').on('click',function(e){
			S.all('#all_mods .btn')
				.replaceClass('btn-info','btn-default')
				.removeClass('added');
			toggleOutput();
		});
		toggleOutput();
		hlAbMods();
	}

	function toggleOutput(){
		var mods = S.all('#all_mods .btn');
		var out_arr = ['seed'];
		var out_jrr = ['seed-min.js'];
		mods.each(function(v,k){
			if(v.hasClass('added')){
				if(v.html() == 'core'){
					S.each(['dom', 'event', 'io', 'anim', 'base', 'node', 'json', 'ua', 'cookie'],function(v,k){
						out_jrr.push(v + '-min.js');
						out_arr.push(v);
					});
				}
				var t = getAbsoluteModule(v.html());
				out_arr.push(t);
				out_jrr.push(t + '-min.js');
			}
		});
		out_jrr = S.unique(out_jrr);
		out_arr = S.unique(out_arr);
		var out_script = S.Config.base + S.Config.comboPrefix + out_jrr.join(',');
		out_script = out_script.replace('dom/basic','dom/base');
		S.one('#output_src').html(out_script);
		S.one('#open_url').attr('href',out_script);
		// 最终包含的模块列表
		var out_mods = [];
		S.each(out_arr,function(v,k){
			out_mods = out_mods.concat(getModules(v));
		});
		out_mods = S.unique(out_mods);
		var out_li = '';
		for(var i = 0;i<out_mods.length;i++){
			var desp = des[out_mods[i]] ? des[out_mods[i]] : '';
			out_li += '<li><strong>'+out_mods[i]+'</strong> &nbsp; <span class="text-muted">'+desp+'</span></li>';
		}
		S.one('#output_mods').html(out_li);
	}

	// highlight 顶级模块
	function hlAbMods(){
		S.each(mods,function(v,k){
			hlAbModsAction(getAbsoluteModule(k));
		});
	}

	function hlAbModsAction(name){
		var els = S.all('#all_mods .btn');
		els.each(function(v,k){
			if(name === v.html()){
				v.addClass('hl');
			}
		});
	}
	
	// 得到它所从属的模块名称
	function getAbsoluteModule(name){
		var fathor_name = name;
		if(S.inArray(name,[
						'empty','promise','ua','uri','path'
					])){
			return 'seed';
		}
		S.each(mods,function(v,k){
			if(!v.normalizedRequires){
				return;
			}
			if(S.inArray(name,v.normalizedRequires)){
				fathor_name = k;
			}
		});
		if(fathor_name === name){
			return name;
		} else {
			return getAbsoluteModule(fathor_name);
		}
	}

	// 得到当前加载的模块列表
	function getModules(name){
		var mds = [name];
		// 这里的递归循环有问题,TODO
		if(mods[name] && mods[name].normalizedRequires){
			for(var i =0;i<mods[name].normalizedRequires.length;i++){
				var getm = getModules(mods[name].normalizedRequires[i]);
				if(getm.length > 0){
					mds = mds.concat(getm);
				}
			}
		}
		return mds; 
	}
});

var des = {
	'seed':'种子文件，包含lang、loader、features、path、ua、promise、uri 模块',
	'i18n':'多语言插件，内置于Loader中，通过S.config("lang")查看当前库的语言，默认为zh-cn'	,
	'core':'最常用的核心模块的别名，在1.3.x及以下版本中为组成kissy.js的模块，是这些模块的别名：dom,event,io,anim,base,node,json,ua,cookie',
	'anim':'DOM 的动画模块，高级浏览器优先使用CSS3动画',
	'anim/base':'动画 API 的实现，包含动画工具函数，自定义事件和动画队列',
	'anim/timer':'动画的时间程序，包括缓动、特效、快捷调用、颜色等',
	'anim/transition':'CSS Transition 动画',
	'base':'KISSY 的 attribute 模块, 模拟实现了属性描述符, 提供属性的获取和设置操作, 即属性的 getter 和 setter 动作.',
	'button':'button 组件',
	'color':'颜色格式组件',
	'combobox':'复合输入框组件',
	'component/container':'容器渲染组件，DOM 容器常见行为及其生命周期',
	'component/control':'控制器组件',
	'component/extension/align':'DOM 元素的对齐插件',
	'component/extension/delegate-children':'DOM 元素的子节点代理',
	'component/plugin/drag':'拖拽插件',
	'component/plugin/resize':'缩放插件',
	'date/format':'日期格式',
	'date/gregorian':'日期的公历格式',
	'date/picker':'日期选择组件',
	'date/popup-picker':'弹出式日期选择组件',
	'dd':'拖拽组件',
	'dd/plugin/constrain':'拖拽插件：容器拖拽',
	'dd/plugin/proxy':'拖拽插件：容器代理',
	'dd/plugin/scroll':'拖拽插件：拖拽滚动',
	'dom/basic':'dom/base 的同名模块',
	'dom':'DOM 节点操作，是dom/basic的别名',
	'dom/class-list':'类名选列表择器的实现',
	'dom/ie':'降级到ie中时的一些降级处理方案',
	'dom/selector':'CSS 3 选择器引擎，在高级浏览器中自动选择加载',
	'editor':'富文本编辑器组件',
	'event':'Event 组件',
	'event/custom':'自定义事件，用来被类扩充，被扩充的类具有自定义事件的机制',
	'event/dom':'基于自定义事件的DOM扩充，实现了DOM操作中的事件，是这些模块的别名：event/dom/base,event/dom/shake,event/dom/focusin',
	'event/dom/base':'基础事件的实现，包括鼠标、键盘、手势、重力感应等实现',
	'event/dom/focusin':'DOM 元素获得焦点时的事件',
	'event/dom/hashchange':'ie中的hashchange事件的实现，高级浏览器中不会被加载',
	'event/dom/ie':'IE中的事件的降级处理',
	'event/dom/shake':'手持终端里的摇一摇事件',
	'event/dom/touch':'基础的触屏事件的封装，包括tap、swipe、singleTap、doubleTap等',
	'filter-menu':'过滤菜单组件',
	'io':'ajax的别名，实现了Ajax',
	'kison':'KISSY 对象格式，内部使用',
	'menu':'菜单组件',
	'menubutton':'菜单按钮组件',
	'mvc':'mvc组件',
	'node':'KISSY 对 Node 进行了统一的接口封装，大部分方法继承自 Dom',
	'overlay':'浮层行为的封装',
	'resizable':'DOM 缩放组件',
	'resizable/plugin/proxy':'DOM 缩放插件：节点代理',
	'scroll-view':'scroll-view 组件，实现了自定义滚动条，是scroll-view/base的别名',
	'scroll-view/base':'同scroll-view，被映射到scroll-view',
	'scroll-view/drag':'scroll-view中的拖拽滚动功能',
	'scroll-view/plugin/pull-to-refresh':'scroll-view插件：下拉刷新功能',
	'scroll-view/plugin/scrollbar':'scroll-view插件：滚动条的自定义',
	'separator':'对象分割组件，内部使用',
	'split-button':'split-button 组件',
	'stylesheet':'样式表模块，用来实现通过js读写样式',
	'swf':'flash 模块',
	'tabs':'选项卡组件',
	'toolbar':'工具条组件',
	'tree':'树形菜单组件',
	'xtemplate':'KISSY 模板语言',
	'xtemplate/compiler':'KISSY 模板语言的浏览器端的编译器实现',
	'xtemplate/nodejs':'在NodeJS端编译xtemplate模板',
	'empty':'NodeJS 环境中使用的模块，清空内容',
	'promise':'Promise 的 JS 实现，内置于Seed.js中，是最核心的模块之一',
	'ua':'浏览器特性检测，通过KISSY.UA来访问',
	'uri':'URL 路径操作工具箱',
	'path':'路径拼合、相对路径等功能的实现',
	'json':'读写JSON格式',
	'node/base':'node节点的api的统一封装',
	'node/attach':'node节点挂载新特性的方法',
	'node/override':'从dom模块中继承方法',
	'node/anim':'node节点动画的实现',
	'dom/base':'KISSY 对 DOM 操作的统一封装',
	'dom/base/api':'DOM 操作 API 列表',
	'dom/base/attr':'DOM 节点的属性操作',
	'dom/base/class':'DOM 节点的类名的操作',
	'dom/base/create':'创建 DOM 节点',
	'dom/base/data':'DOM 节点挂在数据对象',
	'dom/base/insertion':'DOM 插入操作',
	'dom/base/offset':'DOM 节点位置相关的操作',
	'dom/base/style':'DOM 节点样式操作',
	'dom/base/selector':'DOM 选择器的实现',
	'dom/base/traversal':'DOM 节点的查找和遍历',
	'event/dom/base/utils':'DOM 操作常见方法所依赖的工具函数',
	'event/dom/base/special':'DOM 节点的特殊方法的实现',
	'event/dom/base/observer':'同event/dom/base/special',
	'event/dom/base/object':'事件门面对象的封装',
	'event/dom/base/observable':'DOM 事件的观察者模式',
	'event/dom/base/dom-event':'DOM 事件的具体实现',
	'event/dom/base/key-codes':'DOM 事件实现：键盘事件',
	'event/dom/base/gesture':'DOM 事件实现：手势事件',
	'event/dom/base/special-events':'DOM 事件实现：特殊事件',
	'event/dom/base/mouseenter':'DOM 事件实现：mouseenter事件',
	'event/dom/base/valuechange':'DOM 事件实现：valuechange事件',
	'event/base':'基础事件模块',
	'event/base/utils':'基础事件模块所依赖的工具方法',
	'event/base/object':'事件门面对象',
	'event/base/observer':'不依赖于DOM的事件观察者模式：被观察者',
	'event/base/observable':'不依赖与DOM的事件观察者模式：观察者',
	'anim/base/queue':'动画队列',
	'anim/base/utils':'动画基础实现',
	'anim/timer/easing':'动画的缓动效果的JS实现',
	'anim/timer/manager':'动画时间程序管理',
	'anim/timer/fx':'动画特效种类的实现',
	'anim/timer/short-hand':'调用动画的快捷方式',
	'anim/timer/color':'动画过程总的颜色过渡和变化的实现',
	'anim/timer/transform':'动画transform的实现',
	'event/custom/observer':'自定义事件的观察者模式',
	'event/custom/object':'自定义事件的事件门面对象的封装',
	'event/custom/observable':'自定义事件的观察者模式',
	'event/custom/target':'EventTarget 掺元类实现'
};
