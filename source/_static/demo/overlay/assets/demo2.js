KISSY.use('node,overlay', function(S, Node, O) {
    var popup = new O.Popup({
        trigger : '#link2', //触发元素
        triggerType : 'mouse', //解恨类型
        elCls : 'popup2',
        align : {
            node : '#link2',
            points : ['tl', 'tl']
        },
        width : Node.one('#link2').width(),
        height : Node.one('#link2').height()
    });
});
