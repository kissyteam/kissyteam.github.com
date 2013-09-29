.. module:: button

Tabs
===============================

|  标签页

.. code-block:: javascript

    KISSY.use('tabs',function(S,Tabs){
        // use Tabs
    });

Class
---------------------------------

    * :class:`Tabs`

Configs
-----------------------------------------------

    * :data:`~Tabs.config.items`
    * :data:`~Tabs.config.changeType`
    * :data:`~Tabs.config.barOrientation`

Methods
---------------------------------------------

    * :meth:`~Tabs.prototype.addItem`
    * :meth:`~Tabs.prototype.removeItemAt`
    * :meth:`~Tabs.prototype.removeItemAt`
    * :meth:`~Tabs.prototype.removeItemByTab`
    * :meth:`~Tabs.prototype.removeItemByPanel`
    * :meth:`~Tabs.prototype.getSelectedTab`
    * :meth:`~Tabs.prototype.getSelectedPanel`
    * :meth:`~Tabs.prototype.getTabs`
    * :meth:`~Tabs.prototype.getPanels`
    * :meth:`~Tabs.prototype.setSelectedTab`
    * :meth:`~Tabs.prototype.setSelectedPanel`


Static Properties
-----------------------------------

    * :attr:`~Tabs.Orientation`
    * :attr:`~Tabs.ChangeType`


Events
-------------------------------------

    * :data:`~Tabs.Events.beforeSelectedTabChange`
    * :data:`~Tabs.Events.afterSelectedTabChange`


Class Detail
--------------------------

.. class:: Tabs

    | **Tabs** (config)
    | Tabs: 'tabs'

    * 继承自 :class:`~component.Controller` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项，详细见下方 **Configs Detail** .


Configs Detail
-----------------------------------------------

.. data:: Tabs.config.items

    {Object[]} - 对象数组，可用于快速构建 tabs，单个对象包括 title 与 content 两个属性

.. data:: Tabs.config.changeType

    {String} - 枚举自 :attr:`~Tabs.changeType` .取值 click 或者 mouse

.. data:: Tabs.config.barOrientation

    {String} - 枚举自 :attr:`~Tabs.Orientation` .取值 click 或者 mouse


Methods Detail
------------------------------------------

.. method:: Tabs.prototype.addItem

    | **addItem(item )**
    | 添加一个 tab 和 panel

    :param {Object} item: 对象描述
    :param {Object} item.title: tab 标题
    :param {Object} item.content: panel 内容


.. method:: Tabs.prototype.removeItemAt

    | **removeItemAt(index,destroy )**
    | 是否移除指定位置的 item

    :param {Number} index: item 下标
    :param {Boolean} destroy: 是否销毁节点


.. method:: Tabs.prototype.removeItemByTab

    | **removeItemByTab(tab, destroy )**
    | 是否移除 tab 所在位置的 item

    :param {Tabs.Tab} tab: tab 实例
    :param {Boolean} destroy: 是否销毁节点


.. method:: Tabs.prototype.removeItemByPanel

    | **removeItemByPanel(panel, destroy )**
    | 是否移除 panel 所在位置的 item

    :param {Tabs.Panel} panel: panel 实例
    :param {Boolean} destroy: 是否销毁节点


.. method:: Tabs.prototype.getSelectedTab

    | **getSelectedTab( )**
    | 得到选中的 tab 实例

    :returns: {Tabs.Tab}


.. method:: Tabs.prototype.getSelectedPanel

    | **getSelectedPanel( )**
    | 得到选中的 panel 实例

    :returns: {Tabs.Panel}

.. method:: Tabs.prototype.getTabs

    | **getTabs( )**
    | 得到所有 tab 实例数组

    :returns: {Tabs.Tab[]}

.. method:: Tabs.prototype.getPanels

    | **getPanels( )**
    | 得到所有 panel 实例数组

    :returns: {Tabs.Panel[]}


.. method:: Tabs.prototype.setSelectedTab

    | **setSelectedTab( tab )**
    | 设置某个 tab 实例为选中


.. method:: Tabs.prototype.setSelectedPanel

    | **setSelectedPanel( panel )**
    | 设置某个 panel 实例为选中


Static Attributes
--------------------------------------

.. attribute:: Tabs.Orientation

    {Object} -

    .. code-block:: javascript

        {
            TOP: 'top',
            BOTTOM: 'bottom',
            LEFT: 'left',
            RIGHT: 'right'
        }


.. attribute:: Tabs.ChangeType

    {Object} -

    .. code-block:: javascript

        {
            MOUSE:'mouse',
            CLICK:'click'
        }


Events Details
------------------------------------

.. function:: Tabs.Events.beforeSelectedTabChange

    | **beforeSelectedTabChange** (e)
    | 选中 tab 改变前触发

    :param EventObject e: 触发事件对象
    :param {Tabs.Tab} e.newVal: 新的 tab 实例


.. function:: Tabs.Events.afterSelectedTabChange

    | **beforeSelectedTabChange** (e)
    | 选中 tab 改变后触发

    :param EventObject e: 触发事件对象
    :param {Tabs.Tab} e.newVal: 新的 tab 实例


