KISSY.use("dom,event,anim,switchable,node", function(S, DOM, Event, Anim, Switchable) {
	var Slide = Switchable.Slide, Easing = Anim.Easing;

	S.ready(function(S) {
        //获取DOM元素
		var descList = DOM.children('#slideFocus ul.desc-list');
        
        //通过DOM元素新建Slide
		var slide = new Slide('#slideFocus', {
			contentCls : 'pic-list',
			navCls : 'thumbs-list',
			activeTriggerCls : 'current',
			effect : 'scrollx',
			easing : Easing.easeOutStrong
		});

        //添加事件，更多事件参考API
		slide.on('beforeSwitch', function(ev) {
			S.each(descList, function(desc, i) {
				desc.style.display = i === ev.toIndex ? 'block' : 'none';
			});
		});
	});
});
