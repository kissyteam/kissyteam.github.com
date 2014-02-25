# resizable

缩放功能插件，[Demo](http://docs.kissyui.com/1.4/source/raw/demo/resizable/demo1.html)

调用：

	KISSY.use('resizable',function(S,Resizable){
		// use Resizable
	});

初始化示例：

	var r = new Resizable({
		node:"#something-can-resize",
		// 指定可拖动的位置
		handlers:["b","t","r","l","tr","tl","br","bl"],

		// 可选, 设置最小/最大 宽高
		minHeight:50,
		minWidth:50,
		maxHeight:445,
		maxWidth:700
	});

## API

### 配置参数

- node:被缩放的节点
- minWidth：默认为0, 表示拖动缩放的最小宽度.
- minHeight：默认为0, 表示拖动缩放的最小高度.
- maxWidth：默认为 Number.MAX_VALUE, 表示拖动缩放的最大宽度.
- maxHeight：默认为 Number.MAX_VALUE, 表示拖动缩放的最大高度.
- handlers：数组，默认为 [], 表示可拖动元素的哪些位置来进行缩放.可取下列值: “b”,”t”,”r”,”l”,”tr”,”tl”,”br”,”bl”． 其中, t,b,l,r 分别表示 top,bottom,left,right, 加上组合共八种取值, 可在上, 下, 左, 右以及左上, 左下, 右上, 右下进行拖动.

### 实例方法

- destroy() 销毁实例

### 实例提供的事件

- resizeStart：开始拖放后触发
- resize：拖放中触发
- resizeEnd：拖放结束后触发
