KISSY.use("tree", function(S, Tree) {
	var $ = S.all;
	
	//通过DOM元素生成一棵简单树
	var tree = new Tree({
		content : "淘宝网",
		
		expanded : true,
		render : "#treeContainer"
	});
	
	//新建一个树结点favorates
	var favorates = new Tree.Node({
		
		content : "收藏夹",
		tree : tree
	});
	
	//在favorates结点下添加新的子结点
	favorates.addChild(new Tree.Node({
		
		content : "收藏的宝贝"
	}));
	
	//在favorates结点下再添加新的子结点
	favorates.addChild(new Tree.Node({
		
		// 即使没有儿子也强制指定为 folder 样式
		isLeaf : false,
		content : "收藏的店铺"
	}));
	
	//将结点favorates加入到树中
	tree.addChild(favorates);
	
	/*
	 * 以下同理都是增加树了了结点以及子子结点
	 */
	tree.addChild(new Tree.Node({
		
		content : "我要买"
	}));

	var one = new Tree.Node({
		
		content : "我的淘宝",
		tree : tree
	});

	one.addChild(new Tree.Node({
		
		content : "已买到的宝贝"
	}));

	one.addChild(new Tree.Node({
		
		content : "已卖出的宝贝"
	}));

	tree.addChild(one);
	
	//在所有结点关系确定后，将树的特性绑定到DOM元素
	tree.render();
	
	//添加事件
	tree.on("expand", function(e) {
		alert("expand : " + e.target.get("content"));
	});
	tree.on("collapse", function(e) {
		alert("collapse : " + e.target.get("content"));
	});
	tree.on("click", function(e) {
		alert("action : " + e.target.get("content"));
	});
	
    //增加两个Button来调用树的接口    
    $('<input type="button" value="全部收缩" style="margin:5px;" />')
        .on('click',function(){
            //通过外部调用树的接口操作树
            tree.collapseAll();
        })
        .prependTo($('#treeContainer'));
    $('<input type="button" value="全部展开" style="margin:5px;" />')
        .on('click',function(){tree.expandAll();})
        .prependTo($('#treeContainer'));

	
});
