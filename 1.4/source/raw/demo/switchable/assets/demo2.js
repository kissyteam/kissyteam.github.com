KISSY.use("datalazyload,switchable,node", function(S,_,Switchable) {
	var Tabs = Switchable.Tabs;
	S.ready(function(S) {
        //通过DOM元素demo2新那一个Tab
		var tabs = new Tabs('#demo2', {
			switchTo : 0
		});
        //增加事件，更多事件请查看API
		tabs.on('beforeSwitch', function(ev) {
			var index = ev.toIndex;
			if(index !== 0 && index !== 4) { 
			}
		});
	});
});
