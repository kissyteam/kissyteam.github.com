.. module:: Draggable

Draggable
===============================================

|  拖拽功能
|  作者: `承玉 <yiminghe@gmail.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/draggable.js>`_ | `Demo <../../../demo/component/dd/draggable.html>`_

.. versionadded:: 1.2

Class
-----------------------------------------------

  * :class:`KISSY.DD.Draggable`

Config Attributes
-----------------------------------------------

  * :attr:`node`
  * :attr:`handlers`
  * :attr:`cursor`
  * :attr:`mode`
  
Properties
-----------------------------------------------

  * :data:`POINT`
  * :data:`INTERSECT`
  * :data:`STRICT`
  * :attr:`node`
  * :attr:`dragNode`
  
Methods
-----------------------------------------------

  * :meth:`destroy`

Events
-----------------------------------------------

  * :meth:`dragstart`
  * :meth:`drag`
  * :meth:`dragend`
  * :meth:`dragenter`
  * :meth:`dragover`
  * :meth:`dragexit`
  * :meth:`dragdrophit`
  * :meth:`dragdropmiss`


Class Detail
-----------------------------------------------

.. class:: KISSY.DD.Draggable
    
    | **KISSY.DD.Draggable** (config)
    
    :param Object config: 实例化可拖放对象的配置项, 详细见下节.

Config Attributes Detail
-----------------------------------------------

.. attribute:: node

    {String|HTMLElement} - 将要进行拖放的节点.

.. attribute:: handlers

    {Array<String|HTMLElement>} - 作为鼠标在其上按下时触发节点拖放的钩子. 如果不设置, 则整个 ``node`` 作为触发钩子.

    .. note ::

        handlers 的每个元素 DOM 节点必须位于配置项 ``node`` DOM 子树中.

.. attribute:: cursor

    {String} - 默认值 "move", handlers 元素中的每个元素要设置的鼠标样式.

.. attribute:: mode

    {String} - 枚举值, 默认值 "point", 和 ``Droppable`` 关联, 决定何时和可放对象开始交互（触发相应事件）, 可取值 "point","intersect","strict"

        * 在 "point" 模式下, 只要鼠标略过可放对象, 即开始和可放对象交互.
        * 在 "intersect" 模式下, 只要拖动对象和可放对象有交集, 即开始和可放对象交互.
        * 在 "strict" 模式下, 只有拖动对象完全位于可放对象内, 才开始和可放对象交互.


Properties Detail
-----------------------------------------------

.. data:: POINT

    ``static``, {String} - 等于 "point"
    
.. data:: INTERSECT

    ``static``, {String} - 等于 "intersect"
    
.. data:: STRICT

    ``static``, {String} - 等于 "strict"

.. attribute:: node

    {KISSY.Node} - 表示当前拖动的节点, 在应用 ``DD.Proxy`` 时表示代理节点.
    
.. attribute:: dragNode

    {KISSY.Node} - 表示配置项中  :attr:`node` 的值.

    .. note::

        实例属性通过 ``get`` 方法获取, 例如 ``drag.get("node")``


Methods Detail
-----------------------------------------------

.. method:: destroy
    
    | **destroy** ()
    | 销毁当前可拖放对象实例, 清除绑定事件.     

Events Detail
-----------------------------------------------

.. method:: dragstart

    | **dragstart** ( ev )
    | 当可拖放对象开始被用户拖放时触发.
    
    :param Object ev.drag: 自身, 当前拖放对象.

.. method:: drag

    | **drag** ( ev )
    | 当可拖放对象拖放过程中触发.
    
    :param Number ev.left: 拖放节点应该设置的相对文档根节点的横坐标位置.
    :param Number ev.top: 拖放节点应该设置的相对文档根节点的纵坐标位置.
    :param Number ev.pageX: 当前鼠标的绝对横坐标.
    :param Number ev.pageY: 当前鼠标的绝对纵坐标.
    :param Object ev.drag: 自身, 当前拖放对象.

.. method:: dragend

    | **dragend** ( ev )
    | 当用户鼠标弹起放弃拖放时触发.

    :param Object ev.drag: 自身, 当前拖放对象.

.. method:: dragenter

    | **dragenter** ( ev )
    | 当前 Draggable 对象达到一个 Droppable 对象时触发，可简单理解成 mouseenter。

    :param Object ev.drag: 自身, 当前拖放对象.
    :param Object ev.drop: 当前交互的Droppable对象.
    
.. method:: dragover

    | **dragover** ( ev )
    | 当前 Draggable 对象在一个 Droppable 实例上移动时触发，可简单理解成 mouseover。

    :param Object ev.drag: 自身, 当前拖放对象.
    :param Object ev.drop: 当前交互的Droppable对象.

.. method:: dragexit

    | **dragexit** ( ev )
    | 当前 Draggable 对象离开一个 Droppable 实例上移动时触发，可简单理解成 mouseleave。

    :param Object ev.drag: 自身, 当前拖放对象.
    :param Object ev.drop: 当前交互的Droppable对象.
    
.. method:: dragdrophit

    | **dragdrophit** ( ev )
    | 当前 Draggable 对象被放置在一个 Droppable 实例时触发。

    :param Object ev.drag: 自身, 当前拖放对象.
    :param Object ev.drop: 当前交互的Droppable对象.
    
.. method:: dragdropmiss

    | **dragdropmiss** ( ev )
    | 当用户鼠标弹起但是没有放置当前 ``Draggable`` 对象到一个 Droppable 对象时触发.

    :param Object ev.drag: 自身, 当前拖放对象.

.. note ::

    ``Draggable`` 实例化后仅表示会根据鼠标拖放触发相应的事件, 但具体怎么处理仍需要调用者自己控制, 
    例如可监听 :data:`drag` 事件, 根据事件对象参数的坐标设置拖放节点的具体位置.
    
    .. code-block:: javascript

        new Draggable({node :"#d"}).on("drag",function(ev){
            this.get("node").offset({left:ev.left,top:ev.top});
        });
                
                              
