
# KISSY 模块自由配置工具

### 注意：

1，KISSY 为细粒度设计粗粒度引用，这样做是为了增强易用性。其中（蓝色）粗体模块表示模块名称对应到独立的文件，非粗体为被包含在其他模块中的模块，比如选择`dom/base/offset`，实际会将整个`dom`模块文件载入。

2，模块文件之间的依赖顺序无关


<div class="panel panel-success">
	<div class="panel-heading">
		<h3 class="panel-title">选择模块 &nbsp;<button id="cancel_select_all" class="btn btn-info btn-xs" type="button">模块重置</button></h3>
	</div>
	<div class="panel-body" id="all_mods">
		loading...
	</div>
</div>


<div class="panel panel-info">
	<div class="panel-heading">
		<h3 class="panel-title">输出URL &nbsp;<a id="open_url" href="#" class="btn btn-default btn-xs" type="button" target=_blank>新窗口打开</a></h3>
	</div>
	<div class="panel-body">
		<code>&lt;script src=&quot;</code><strong><span id="output_src"></span></strong><code>&quot;&gt;&lt;/script&gt;</code>
	</div>
</div>

<div class="panel panel-danger">
	<div class="panel-heading">
		<h3 class="panel-title">包含模块</h3>
	</div>
	<div class="panel-body">
		<ul id="output_mods">
			<li>sdf</li>
		</ul>
	</div>
</div>


<link rel="stylesheet" href="http://gallery.kissyui.com/tip/1.0/demo/tip.css" />
<script src="templates/assets/module-config.js"></script>



<style>

.panel-body:before, .panel-body:after {
	display:inline;
}
#all_mods .btn{
	margin-top:3px;
	margin-right:3px;
}
.hl {
	color:#0066cc;
	font-weight:bold;
}
.hl.added {
	color:white !important;
}
</style>
