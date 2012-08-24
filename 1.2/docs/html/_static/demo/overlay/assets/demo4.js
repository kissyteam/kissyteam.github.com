KISSY.use("node, overlay", function(S, Node, O) {
    // 为每个小图创建一个 popup
    Node.all('#multi2 img').each(function(t) {
        new O.Popup({
            trigger: t,
            triggerType: 'mouse',
            elStyle:{
                border:"2px solid gray",
                lineHeight: 0
            },
            content: '<img src="' + t.attr('bigpicurl') + '"/>',
            width: 120,
            height: 120,
            align: {
                node: t,
                points: ["tr","tl"]
            }
        });
    });
});
