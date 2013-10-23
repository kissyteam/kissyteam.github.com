KISSY.use("resizable", function (S, Resizable) {
    var resize = new Resizable({
            node: "#something-can-resize",
            handlers: ["b", "t", "r", "l"],
            preserveRatio: true,
            // optional configs
            minHeight:50,
            minWidth:50,
            maxHeight:445,
            maxWidth:700
        });
});