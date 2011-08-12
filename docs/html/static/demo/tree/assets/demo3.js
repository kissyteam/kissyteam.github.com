KISSY.use("tree", function(S, Tree) {
	var $ = S.all;

	//通过DOM元素结构新建一棵树
	var tree = new Tree({
		content : "淘宝网",
		prefixCls : "goog-",
		expanded : true,
		srcNode : "#root"
	});

	tree.render();
    
    //为树增加事件
	tree.on("click", function(e) {
		alert("action : " + e.target.get("content"));
	});

    //增加两个Button来调用树的接口
	$('<input type="button" value="全部收缩" style="margin:5px;"/>')
        .on('click',function(){
            //通过外部调用树的接口操作树
            tree.collapseAll();
        }).prependTo($('#treeContainer'));
    $('<input type="button" value="全部展开" style="margin:5px;"/>')
        .on('click',function(){tree.expandAll();})
        .prependTo($('#treeContainer'));
});
