KISSY.use("tree", function(S, Tree) {
	var $ = S.all;

	var data = {
            content:"淘宝网",
            children:[
                {
                    content:"收藏夹",
                    children:[
                        {
                            content:"收藏的宝贝"
                        },
                        {
                            content:"收藏的店铺"
                        }
                    ]
                },
                {
                    content:"我的淘宝",
                    children:[
                        {
                            content:"已买到的宝贝"
                        },
                        {
                            content:"已卖出的宝贝"
                        }
                    ]
                }
            ]
        };

        function getNode(node, content) {
            if (node.content == content) {
                return node;
            }
            var c = node.children || [];
            for (var i = 0; i < c.length; i++) {
                var t = getNode(c[i], content);
                if (t) {
                    return t;
                }
            }
            return null;
        }

        var tree = new Tree({
            content:"淘宝网",
            prefixCls:"goog-",
            isLeaf:false,
            // showRootNode:false,
            render:"#treeContainer"
        });
        tree.on("expand", function (e) {
            var node = e.target;
            if (!node.get("children").length) {
                var c = getNode(data, node.get("content")).children;
                S.each(c, function (v) {
                    node.addChild(new Tree.Node({
                        prefixCls:"goog-",
                        isLeaf:!(v.children && v.children.length),
                        content:v.content
                    }));
                });
            }
        });
        tree.render();
});
