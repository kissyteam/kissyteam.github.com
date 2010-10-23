一般配置
====================================

KISSY.Editor("#textareaId",cfg).use(plugins);

#textareaId
---------------------------------------

 将页面中 id为textareaId 的 textarea替换为编辑器;


plugins
-------------------------------------


为需要加载的插件名称, 多个以,号分隔, 例如:

.. code-block:: javascript

    KE("#textareaId").Use("font,image,separator")

    // separator 为在当前位置插入分隔符


cfg
------------------------------------------------

.. _editorusage-common-cfg:

为编辑器的全局配置以及加载插件的插件配置, 例如:

.. code-block:: javascript

    {
    	//是否监控编辑器所属的表单提交
    "attachForm":true,
        //编辑器内弹窗z-index下限, 防止互相覆盖, 请保证这个数字整个页面最高
    "baseZIndex":10000,

    //自定义样式，将自己的样式加入编辑器
    customStyle:"p{color:red;}",

    //是否编辑器初始自动聚焦（光标位于编辑器内）
    focus:true,

    "pluginConfig": pluginConfig
    }