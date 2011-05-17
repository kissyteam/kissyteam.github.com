.. currentmodule:: Editor

初始化编辑器
-----------------
构造器:

.. class:: KISSY.Editor(textareaId,config)

    获得编辑器实例
    
    :param string textareaId: 编辑器装饰的文本输入框 id，注意 id前加 ``#``
    :param Object config: 编辑器以及其插件的配置项。包括：
    
        .. attribute:: config.attachForm
        
            类型 boolean， 是否监控编辑器所属的表单提交
            
        .. attribute:: config.baseZIndex
        
            类型 number，编辑器内弹窗z-index下限。
            
            .. note::
            
                为防止和其他页面元素互相覆盖, 请保证这个数字整个页面最高     
                
        .. attribute:: config.customStyle
        
            类型 string，编辑区域的自定义样式   
            
        .. attribute:: config.focus
        
            类型 boolean，是否编辑器初始自动聚焦（光标位于编辑器内）
            
        .. attribute:: config.pluginConfig
        
            类型 object，编辑器插件的相应配置                              
    
        
    
    
例如：    

.. code-block:: javascript
   
    KISSY.ready(function(S){
        S.Editor(“#textareaId”,{
            // 是否监控编辑器所属的表单提交
            "attachForm":true,
    
            // 编辑器内弹窗z-index下限, 防止互相覆盖, 请保证这个数字整个页面最高
            "baseZIndex":10000,
    
            // 自定义样式，将自己的样式加入编辑器
            customStyle:"p{color:red;}",
    
            // 是否编辑器初始自动聚焦（光标位于编辑器内）
            focus:true
        }).use(plugins);
    });


使用插件
-----------------




.. toctree::
    :titlesonly:
		
    plugin-api.rst
    plugin.rst
    plugin-config.rst