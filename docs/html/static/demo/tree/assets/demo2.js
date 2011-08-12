KISSY.use("tree", function(S, Tree) {
	var $ = S.all;
	
	//通过DOM元素生成一棵可选择树
	var tree = new Tree.CheckTree({
		content : "淘宝网",
		prefixCls : "goog-",
		expanded : true,
		render : "#treeContainer"
	});

	//新建一个树结点favorates
	var favorates = new Tree.CheckNode({
		prefixCls : "goog-",
		content : "收藏夹",
		tree : tree
	});
	
	//在favorates结点下添加新的子结点
	favorates.addChild(new Tree.CheckNode({
		prefixCls : "goog-",
		content : "收藏的宝贝"
	}));

	//在favorates结点下再添加新的子结点
	favorates.addChild(new Tree.CheckNode({
		prefixCls : "goog-",
		content : "收藏的店铺"
	}));
	
	//将结点favorates加入到树中
	tree.addChild(favorates);
	
	/*
	 * 以下同理都是增加树了了结点以及子子结点
	 */
	tree.addChild(new Tree.CheckNode({
		prefixCls : "goog-",
		content : "我要买"
	}));

	var one = new Tree.CheckNode({
		prefixCls : "goog-",
		content : "我的淘宝",
		tree : tree
	});

	one.addChild(new Tree.CheckNode({
		prefixCls : "goog-",
		content : "已买到的宝贝"
	}));

	one.addChild(new Tree.CheckNode({
		prefixCls : "goog-",
		content : "已卖出的宝贝"
	}));

	tree.addChild(one);

	//在所有结点关系确定后，将树的特性绑定到DOM元素
	tree.render();

	//添加事件
	tree.on("click", function(e) {
		S.log("action : " + e.target.get("content"));
	});
		
	//外部外部调用树的接口操作树
	$("#expandAll").on("click", function() {
		tree.expandAll();
	});
	$("#collapseAll").on("click", function() {
		tree.collapseAll();
	});
});
