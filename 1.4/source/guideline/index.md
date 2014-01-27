<p></p>

# What is KISSY ?

KISSY <a href="https://travis-ci.org/kissyteam/kissy" target="_blank">
                        <img src="https://secure.travis-ci.org/kissyteam/kissy.png?branch=master"/>
                    </a> 是一款跨终端、模块化、高性能、使用简单的 JavaScript 框架。除了完备的工具集合如 DOM、Event、Ajax、Anim 等，它还提供了经典的面向对象、动态加载、性能优化解决方案。作为一款全终端支持的 JavaScript 框架，KISSY 为移动终端做了大量适配和优化，让你的程序在全终端均能流畅运行。


KISSY is a powerfull javascript framework for building cross end web application such as desktop, mobile and pad.

<div class="row-fluid">
	<div class="col-md-3 text-center">
		<h2>跨终端</h2>
			<img src="/1.4/source/guideline/templates/assets/img/icon1.png" />
	</div>
	<div class="col-md-3 text-center">
		<h2>模块化</h2>
			<img src="/1.4/source/guideline/templates/assets/img/icon3.png" />
	
	</div>
	<div class="col-md-3 text-center">
		<h2>高性能</h2>
			<img src="/1.4/source/guideline/templates/assets/img/icon4.png" />
	
	</div>
	<div class="col-md-3 text-center">
		<h2>使用简单</h2>
			<img src="/1.4/source/guideline/templates/assets/img/icon2.png" />
	
	</div>
</div>

<p>&nbsp;</p>

# 学习 KISSY，从这里开始

<div class="jumbotron row-fluid text-center">
        <a class="btn btn-primary btn-lg btn-block" href="/1.4/docs/html/guideline/get-started.html">指引手册</a>
        <a class="btn btn-primary btn-lg btn-block" href="/1.4/docs/html/tutorials/">教程</a>
        <a class="btn btn-info btn-lg btn-block" href="/1.4/docs/html/api/" style="color:white">API 参考手册</a>
        <a class="btn btn-info btn-lg btn-block" href="/1.4/docs/html/demo/" style="color:white">DEMO 示例</a>
</div>


# 使用 KISSY 1.4

1. 下载 [KISSY 1.4.1](https://github.com/kissyteam/kissy/archive/v1.4.1.zip)
2. 通过 cdn 使用 ``http://g.tbcdn.cn/kissy/k/1.4.1/seed-min.js?20140106`
3. npm 安装 KISSY: ``npm install kissy``
4. bower 安装 KISSY: ``bower install kissy``    


<h1 class="gallery-coms-title">
    kissy gallery最新发布组件
    <a href="http://gallery.kissyui.com/coms">全部组件</a>
</h1>

<style>
.img-rounded{
    box-shadow:0 0 8px -3px black;
}

.com-desc{
    height:70px;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 10px;
}
.gallery-coms-title{
    margin-top:20px;
    position: relative;
}
.gallery-coms-title a{
    position: absolute;
    right: 0;
    top: 4px;
    font-size:16px;
}
.com{
    border-bottom: 1px solid #999;
    margin: 10px 0;
}
.jumbotron{
    height:150px;
}
.jumbotron a{
    width: 150px;
    float: left;
    margin-top: 5px;
    margin-left: 10px;
}
</style>

<div id="J_Coms">

</div>
<script type="text/xtemplate" class="J_ComsTpl">
    <div class="row-fluid index-box">
        {{#each result}}
            <div class="col-md-4 com">
                <h2><a href="http://gallery.kissyui.com/{{name}}/{{version}}/guide/index.html">{{name}}</a></h2>
                <p class="com-author">by {{author.name}}</p>
                <p class="com-desc">{{desc}}</p>
            </div>
        {{/each}}
    </div>
</script>
 
<p>&nbsp;</p>

<script>
    //gallery组件列表
    (function(){
        KISSY.use('node,io,xtemplate',function(S,Node,io,XTemplate){
            io.jsonp('http://gallery.kissyui.com/api/coms?len=12',function(data){
                var tpl = Node.all('.J_ComsTpl').html();
                var html = new XTemplate(tpl).render(data);
                $('#J_Coms').html(html);
            })
        })
    })();
</script>
