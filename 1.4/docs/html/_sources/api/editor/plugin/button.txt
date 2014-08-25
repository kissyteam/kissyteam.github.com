.. currentmodule:: editor

button
===================

|  编辑器的按钮插件，加载后为 Editor 拓展 addButton 方法(为编辑器工具栏增加一个按钮. 一般用于插件编写.)。而这个插件模块提供的接口就是 button 模块的接口

.. code-block:: javascript
    
    KISSY.use('editor,editor/plugin/button',function(S, Editor, Button){
        var editor = new Editor({
            render : '#container'
        });
        editor.addButton("plugin2", {
            content:'<div style="margin: 2px;border: 1px solid red;padding: 1px;">p2</div>',
            listeners:{
                click:function () {
                    alert('i am running')
                }
            }
        });
    });

Configs
-------------------------------

无
