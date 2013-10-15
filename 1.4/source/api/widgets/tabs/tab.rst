.. module:: button

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

    * :data:`~component.extension.Box.config.content`
    * :data:`~Tab.config.selected`

Attributes
------------------------------------------------

    * :attr:`~component.extension.Box.prototype.content`
    * :data:`~Tab.prototype.selected`

Class Detail
--------------------------

.. class:: Tab

    | **Tab** (config)
    | Tab: 'tabs'

    * 继承自 :class:`~component.Controller` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项，详细见下方 **Configs Detail** .


Configs Detail
-----------------------------------------------


.. data:: Tab.config.selected

    {Boolean} - 是否选中


Attributes Detail
-----------------------------------------------------


.. attribute:: Tab.prototype.selected

    {Boolean} - 是否选中