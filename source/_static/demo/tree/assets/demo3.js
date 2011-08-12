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

	tree.on("click", function(e) {
		S.log("action : " + e.target.get("content"));
	});
	$("#expandAll").on("click", function() {
		tree.expandAll();
	});
	$("#collapseAll").on("click", function() {
		tree.collapseAll();
	});
});
