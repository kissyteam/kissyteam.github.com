 KISSY.use("dom,event,anim,switchable,node", function(S, DOM, Event, Anim, Switchable) {
    var Accordion = Switchable.Accordion;
    //通过DOM元素新建手风琴
    S.ready(function(S) {
        window.accordion = Accordion('#accordion1', {
            multiple: true //,
            //autoplay:true,
            //switchTo:0
            //'activeTriggerCls': 'collapse'
        });
    });
});