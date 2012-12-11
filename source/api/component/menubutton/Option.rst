.. currentmodule:: menubutton

Option
===============================

|  菜单.


.. code-block:: javascript

    KISSY.use('menubutton',function(S,MenuButton){
        // use MenuButton.Option
    });


Class
---------------------------------

    * :class:`Option`
    

Class Detail
--------------------------

.. class:: Option

    | **Option** (config)
    | xclass: 'option'
    
    * 继承自 :class:`~menu.Item` , 包含其全部配置,属性,方法,事件.
    * 不过其默认 :data:`~menu.Item.config.selectable` 为 ``true`` ，可选择
    
    :param Object config: 配置项.
    
.. note::

    从已有元素实例 MenuButton 对象时 , 元素节点标明类名 ``{prefixCls}option`` . 
    ``prefixCls`` 为配置的类名前缀，默认为 ``ks-`` .  