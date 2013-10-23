.. module:: tabs

Tabs.Tab
===============================

|  标签

.. code-block:: javascript

    KISSY.use('tabs',function(S,Tabs){
        // use Tabs.Tab
    });

Class
---------------------------------

    * :class:`Tab`

Configs
-----------------------------------------------

.. note::

    去除配置 tabSelectedCls panelSelectedCls

    * :data:`~component.Control.config.content`
    * :data:`~Tab.config.selected`
    * :data:`~Tab.config.lazyRender`

Attributes
------------------------------------------------

    * :attr:`~component.Control.prototype.content`
    * :data:`~Tab.prototype.selected`

Class Detail
--------------------------

.. class:: Tab

    | **Tab** (config)
    | Tab: 'tabs'

    * 继承自 :class:`~component.Control` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项，详细见下方 **Configs Detail** .


Configs Detail
-----------------------------------------------

.. data:: Tab.config.selected

    {Boolean} - 是否选中

.. data:: Tab.config.lazyRender

    {Boolean} - 是否启用懒加载机制，默认 false

Attributes Detail
-----------------------------------------------------


.. attribute:: Tab.prototype.selected

    {Boolean} - 是否选中