.. currentmodule:: editor

FAQ
===========

插入外部 html
------------------------------

    可通过 editor.insertHTML 在当前光标位置插入指定的 html
    
    .. code-block:: javascript
        
        var editor = KE({...}).use("...");
        editor.insertHTML("<p>i'm new</p>");
        

数据同步
-----------------

form 同步
~~~~~~~~~~~~~~~~~~~~~~~

	如果后端通过 form 提交(submit)来获得用户输入数据, 则只需配置参数
	 :class:`attachForm <editor.KISSY.Editor>`  .
	
	.. code-block:: javascript

  		// 是否监控编辑器所属的表单提交
  		"attachForm":true,

	编辑器自动会监控 form 的 sbumit 事件进行同步


手动同步
~~~~~~~~~~~~~~~~~~~~~~~

	涉及三个 api
	
	editor 为调用 KISSY.Editor 返回的编辑器实例

	``editor.sync()`` : 手动同步编辑器内容到对应 textarea

	``editor.getData()`` : 获得当前编辑器的内容

	``editor.setData(html:string)`` :设置当前编辑器的内容, 参数为html, 类型为 string 字符串


拒绝访问错误
------------------------------

    当引入 sns 组件时可能会出现初始化编辑器时报 ``拒绝访问错误`` ，这时请在页头一开始就设置 domain

    .. code-block:: html

        <head>
            <script>
            document.domain = 'taobao.com';
            </script>
        </head>


自动保存
-----------------
	
	自动保存为 localStorage/flash 机制, 保存在本地, 可 :attr:`配置参数 <pluginConfig.draft>` .

字数统计
-------------------

    可参考以下 demo  :

    http://docs.kissyui.com/kissy-editor/demo/cdn/1.2.0/wordCount.html

    其中 `wordcount 代码 <http://docs.kissyui.com/kissy-editor/demo/word-count.js>`_ 自行下载, 随意修改.
	
绑定 ctrl-enter
----------------------------------

不少的应用场景要求在编辑器编辑区域内按下 ctrl+enter 按键时, 编辑器所在表单会自动提交, 解决方案是监控编辑器的文档按键事件：
    
    
.. code-block:: javascript
    
    editor.ready(function () {
        KISSY.Event.on(editor.document, "keydown", function (ev) {
            if (ev.keyCode == 13 && ev.ctrlKey) {
                editor.sync();
                editor.textarea[0].form.submit();
    
            }
        })
    });	
    
其中 editor 为编辑器实例的对象, 通过 ``var editor=KISSY.Editor("#id",cfg)`` 获取而来.


placeholder(tip) 功能
-------------------------------

    可参考以下 demo  :

    http://docs.kissyui.com/kissy-editor/demo/cdn/1.2.0/tip.html

    其中 `tip 代码 <http://docs.kissyui.com/kissy-editor/demo/tip.js>`_ 自行下载，随意修改。
    
    
截获 paste 事件
---------------------------------------

可以通过监听编辑器实例对象的 "paste" 事件来截获用户粘贴的内容

.. code-block:: javascript

    var editor=KISSY.Editor(..);
    editor.on("paste",function(ev){
        var html=ev.html;// 用户的原始粘贴内容
        // do sth to html
        html="changed";
        return html;  // 返回修改后的粘贴内容        
    });     


编辑器焦点事件
---------------------------------------------

可以通过监听编辑器实例对象的 "focus" "blur" 事件来获得编辑器焦点转移情况

.. code-block:: javascript

    var editor=KISSY.Editor(..);
    
    editor.on("focus",function(){
        // 编辑器获得焦点
        // TODO       
    });     
    
    editor.on("blur",function(){
        // 编辑器失去焦点
        // TODO       
    });
    
    
多编辑器草稿混淆问题
---------------------------------------------

因为目前编辑器草稿箱使用客户端存储：


#. 标准浏览器使用本地存储，那么同一个 host 下的编辑器公用存储空间
#. ie < 8使用 flash，所有编辑器实例共享一份 flash 存储空间

如果需要某个编辑器具备单独的存储空间，可设置草稿箱插件的 :attr:`saveKey <pluginConfig.draft>` 配置唯一标识的存储空间.

.. note::

    客户端存储容量有限，如果文章平均长度很长，推荐结合后端自行实现，
    历史保存在数据库中，通过 :mod:`ajax <io>` 拉取. 
    这时就不需要 ``use("draft")`` 了.    
    
    
如何自己添加编辑器功能按钮 (初级模式)   
------------------------------------------

举例：要做一个简单的插件，统计用户的编辑内容中元素 a 的个数，那么可以这么做:

1. 等待编辑器完成

.. code-block:: javascript

    KE({}).use("xx",function(){
        // TODO
    });

2. 添加一个自定义按钮

.. code-block:: javascript

    KE({}).use("xx",function(){
        this.addButton(
        // 按钮名称
        "myButton",{
            // optional, 按钮的提示信息            
            title:"statics", 
            // optional, 按钮文字，
            text:"statics",
            // optional, 设置图标，css 参考自带按钮样子自己写。注意：text 和 contentCls 配置只能设置一项！
            contentCls:"ke-toolbar-statics",
            // optional, 源码模式时会被禁用，不设置则源码模式不被禁用
            mode:KE.WYSIWYG_MODE
        });   
    });    
    
3. 响应点击事件

.. code-block:: javascript

    KE({}).use("xx",function(){
        this.addButton(
        // 按钮名称
        "myButton",{
            // optional, 按钮的提示信息            
            title:"statics", 
            // optional, 按钮文字，如果设置了图标该项可不设置
            text:"statics",
            // optional, 设置图标，css 参考自带按钮样子自己写
            contentCls:"ke-toolbar-statics",
            // optional, 源码模式时会被禁用，不设置则源码模式不被禁用
            mode:KE.WYSIWYG_MODE,
            // optional 非选中非禁用状态时被点击
            offClick:function(){
                // 统计编辑器内容文档中 a 的个数
                alert(KISSY.DOM.query("a",editor.document).length);
            }
            /**
              还可以设置 
                        disabledClick 禁用时点击被触发
                        onClick 选中状态时点击被触发                  
            **/
        });   
    });
    
如何使得编辑内容超长数字自动换行    
-------------------------------------------------------

设置 :attr:`customStyle <editor.KISSY.Editor.config.customStyle>` 为

.. code-block:: javascript

    body {word-wrap:break-word;word-break:break-all;} 
    
具体详见：

    http://ued.taobao.com/blog/2010/10/14/research-of-word-wrap/
    
    
如何程序触发全屏与恢复
----------------------------------------------------  

在编辑器实例上直接调用对应的命令即可：

.. code-block:: javascript

    var editor=new Editor(...);
    editor.execCommand("maximizeWindow"); // => 手动全屏
    editor.execCommand("restoreWindow"); // => 手动恢复全屏


多读上传 chrome/firefox 失败问题
---------------------------------------------------------------

多图上传在非 ie 下并不会携带 cookie，如确实需要可通过 serverParams 传递：

.. code-block:: javascript

    serverParams: {
        cookie: function () {
            return document.cookie;
        }
    }