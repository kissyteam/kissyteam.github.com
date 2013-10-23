.. module:: tabs

Tabs.Panel
===============================

|  面板

.. code-block:: javascript

    KISSY.use('tabs',function(S,Tabs){
        // use Tabs.Panel
    });

Class
---------------------------------

    * :class:`Panel`

Configs
-----------------------------------------------

    * :data:`~component.Control.config.content`
    * :data:`~Panel.config.selected`

Attributes
------------------------------------------------

    * :data:`~component.Control.prototype.content`
    * :data:`~Panel.prototype.selected`

Class Detail
--------------------------

.. class:: Panel

    | **Panel** (config)
    | Panel: 'tabs'

    * 继承自 :class:`~component.Control` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项，详细见下方 **Configs Detail** .


Configs Detail
-----------------------------------------------

.. data:: Panel.config.selected

    {Boolean} - 是否选中


Attributes Detail
-----------------------------------------------------

.. attribute:: Panel.prototype.selected

    {Boolean} - 是否选中