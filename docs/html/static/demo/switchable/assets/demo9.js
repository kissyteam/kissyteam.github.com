KISSY.use("dom,event,anim,switchable", function(S, DOM, Event, Anim, Switchable) {
    //通过DOM元素新建手风琴
    S.Accordion('#accordion2', {
        'triggerCls': 'trigger',
        'panelCls': 'hesper-cats-list',
        'multiple': 'true',
        'activeTriggerCls': 'collapse'
    });
});