.. currentmodule:: Editor

api
====================================

.. method:: KISSY.Editor.use(plugins)

    :param string plugins: 需要加载的插件名称, 多个以 ``,`` 号分隔
    
例如：    

.. code-block:: javascript

    S.Editor("#textareaId").use("font,image,separator")