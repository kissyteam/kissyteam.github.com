# calendar

KISSY 内置日历组件，如无必要，推荐使用`gallery/calendar/1.1/`日历组件。Gallery [日历组件](http://gallery.kissyui.com/calendar/1.2/guide/index.html)。

该组件是由拔赤设计实现，交互清爽、功能实用。支持基本的日期选择、时间选择、嵌入/弹出、范围选择、日期格式化输出等常用功能, 能够满足多数的应用场景, 非常方便用户调用。基本用法：

	KISSY.use('calendar',function(S,Calendar){
		// use Calendar
	});	

[查看日历Demo](http://docs.kissyui.com/1.3/source/raw/demo/calendar/demo1.html)。

### 初始化参数说明：

	new Calendar(trigger,config);

- trigger (String|HTMLDOMNode|Node) – 配置项, 触点/容器id 
- config (JSON对象) – 配置项，包括
	- date：{Date} - 可选, 该日期所在月份, 默认为当天
	- selected：{Date} - 可选, 当前选中的日期
	- startDay：{Number} - 可选, 日历显示星期x为起始日期, 取值范围为0到6, 默认为0,从星期日开始,若取值为1, 则从星期一开始, 若取值为7, 则从周日开始
	- pages：{Number} - 可选, 日历的页数, 默认为1, 包含一页日历
	- closable：{Boolean} - 可选, 在弹出情况下, 点选日期后是否关闭日历, 默认为false
	- rangeSelect：{Boolean} - 可选, 是否支持时间段选择，只有开启时候才会触发rangeSelect事件
	- range：{Object} - 可选, 默认显示的选择范围, 格式为：`{start:s,end:n}`
	- minDate：{Date} - 可选, 日历可选择的最小日期, 默认不开启
	- maxDate：{Date} - 可选, 日历可选择的最大, 默认不开启
	- multiSelect：{Boolean} - 可选, 是否支持多选, 默认不开启，只有开启时候才会触发multiSelect事件
	- navigator：{Boolean} - 可选, 是否可以通过点击导航输入日期, 默认开启
	- popup：{Boolean} - 可选, 日历是否为弹出,默认为false, 不开启
	- showTime：{Boolean} - 可选, 是否显示时间的选择,默认为false, 不开启
	- triggerType：{Array | String} - 可选, 弹出状态下, 触发弹出日历的事件, 例如：[‘click’,’focus’],也可以直接传入’focus’, 默认为[‘click’]
	- disabled：{Array} - 可选, 禁止点击的日期数组[new Date(),new Date(2011,11,26)]
	- align：{Object} - 可选, 日历和trigger对齐方式，默认{points:[‘bl’,’tl’],offset:[0,0]}
	- notLimited：{Boolean} - 可选, 是否出现不限的按钮，默认为false不开启，开启后点击触发select事件
	- rangLinkage：{Boolean} - 可选, 是多个日历是否联动,默认为true, 开启

### 日历实例方法

#### toggle()

切换日历的状态, 从显示到隐藏和从隐藏到显示

#### render (config)

通过render可以带入如上任意参数并重新渲染日历，参数为JSON对象，和初始化的`config`参数用法一样，比如

	KISSY.use('calendar',function(S,Calendar) {
        c = new Calendar('#J_WithTime');
        c.render({maxDate:new Date()});
	});

#### destroy()

销毁日历

#### hide()

如果日历是弹出形式, 隐藏日历

#### show()

显示日历

------------------------------

### 日历实例的事件

#### select

选中一个日期事件,通过e.date来获得选中的日期,如果开启notLimited参数，则e.date=null

#### monthChange

切换月份事件,通过e.date来获取切换到的日期, 通过e.date.getMonth() + 1 来获得切换至的月份，用法：

	KISSY.use('calendar',function(S,Calendar) {
		//月份切换事件
		new Calendar('J_AllEvents').on('switch',function(e){
			alert('切换事件,月份切换到'+(e.date.getMonth()+1));
		});
	});

#### rangeSelect

范围选择事件,通过e.start和e.end来获得开始和结束日期，用法：

	KISSY.use('calendar',function(S,Calendar) {
		//选择范围,并绑定范围回调
		new Calendar('J_Range',{
			multi_page:2,
			rangeSelect:true
		}).on('rangeselect',function(e){
			alert(e.start+' '+e.end);
		});
	});

#### multiSelect

多选触发的事件，通过e.multi来获取选中的日期数组，用法：

	KISSY.use('calendar',function(S,Calendar) {
		new Calendar('#J_Popup23', {
				popup:true,
				triggerType:['click'],
				pages:2,
				multiSelect:true,
				rangeLinkage:false
		}).on('multiSelect', function(e) {
				alert(e.multi);
		});
	});

#### timeSelect

确定选中时间事件,通过e.date来获得日期时间

## FAQ

### 1，如何在初始化时设置时分秒？

	var c = new Calendar('#J_crontab');
	var ca = c.ca[0];
	if(ca){
		ca.timmer.set('h', '08');
		ca.timmer.set('m', '00');
		ca.timmer.set('s', '00');
	}