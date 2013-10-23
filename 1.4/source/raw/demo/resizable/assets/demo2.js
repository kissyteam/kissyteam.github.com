KISSY.use("resizable,resizable/plugin/proxy", function (S, Resizable, ResizableProxyPlugin) {
    var resize = new Resizable({
        node: "#something-can-resize",
        plugins: [new ResizableProxyPlugin({
            destroyOnEnd:true,
            hideNodeOnResize:true
        })],
        handlers: ["b", "t", "r", "l", "tr", "tl", "br", "bl"],
        // optional configs
        minHeight: 50,
        minWidth: 50,
        maxHeight: 500,
        maxWidth: 700
    });
});