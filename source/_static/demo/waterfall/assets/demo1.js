KISSY.use("waterfall", function (S, Waterfall) {
    new Waterfall({
        container: "#container",    //节点容器
        minColCount: 2,             //最小列数
        colWidth: 235               //每列的宽度
    });
});