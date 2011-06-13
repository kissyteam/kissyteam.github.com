.. currentmodule:: DD

Draggable
===============================================

|  拖拽功能
|  依赖于: core
|  作者: `承玉 <yiminghe@gmail.com>`_
|  源码: `查看 <../../../../../../kissy/src/dd/draggable.js>`_


Class
-----------------------------------------------

  * :js:class:`KISSY.DD.Draggable`


Config Attributes
-----------------------------------------------

  * :js:attr:`node`
  * :js:attr:`handlers`
  * :js:attr:`cursor`
  * :js:attr:`mode`
  
Properties
-----------------------------------------------

  * :js:data:`POINT`
  * :js:data:`INTERSECT`
  * :js:data:`STRICT`
  * :js:attr:`node`
  * :js:attr:`dragNode`
  
Methods
-----------------------------------------------

  * :js:func:`destroy`

Events
-----------------------------------------------

  * :js:func:`dragstart`
  * :js:func:`drag`
  * :js:func:`dragend`
  * :js:func:`dragenter`
  * :js:func:`dragover`
  * :js:func:`dragexit`
  * :js:func:`dragdrophit`
  * :js:func:`dragdropmiss`


Class Detail
-----------------------------------------------

.. js:class:: KISSY.DD.Draggable(config)

    :param Object config: 实例化可拖放对象的配置项, 详细见下节.


Config Attributes Detail
-----------------------------------------------

.. js:attribute:: node

    {String|HTMLElement} - 将要进行拖放的节点.

.. js:attribute:: handlers

    {Array<String|HTMLElement>} - 作为鼠标在其上按下时触发节点拖放的钩子. 如果不设置, 则整个 ``node`` 作为触发钩子.

    .. note ::

        handlers 的每个元素 DOM 节点必须位于配置项 ``node`` DOM 子树中.

.. js:attribute:: cursor

    {String} - 默认值 "move", handlers 元素中的每个元素要设置的鼠标样式.

.. js:attribute:: mode

    {String} - 枚举值, 默认值 "point", 和 ``Droppable`` 关联, 决定何时和可放对象开始交互（触发相应事件）, 可取值 "point","intersect","strict"

        * 在 "point" 模式下, 只要鼠标略过可放对象, 即开始和可放对象交互.
        * 在 "intersect" 模式下, 只要拖动对象和可放对象有交集, 即开始和可放对象交互.
        * 在 "strict" 模式下, 只有拖动对象完全位于可放对象内, 才开始和可放对象交互.


Properties Detail
-----------------------------------------------

.. js:data:: POINT

    ``static``, {String} - 等于 "point"
    
.. js:data:: INTERSECT

    ``static``, {String} - 等于 "intersect"
    
.. js:data:: STRICT

    ``static``, {String} - 等于 "strict"

.. js:attribute:: node

    {KISSY.Node} - 表示当前拖动的节点, 在应用 ``DD.Proxy`` 时表示代理节点.
    
.. js:attribute:: dragNode

    {KISSY.Node} - 表示配置项中 :js:class:`~KISSY.DD.Draggable` 中 `config.node` 的值.

.. note::

    实例属性通过 ``get`` 方法获取, 例如 ``drag.get("node")``     


Methods Detail
-----------------------------------------------

.. js:function::  destroy()

    销毁当前可拖放对象实例, 清除绑定事件.     

Events Detail
-----------------------------------------------

.. js:function:: dragstart(ev)

    当可拖放对象开始被用户拖放时触发, 传给事件处理函数参数为事件对象 event .

    :param Object ev: 自定义事件传递的参数
    :param Object ev.event.drag: 自身, 当前拖放对象


.. js:function:: drag(ev)

    当可拖放对象拖放过程中触发, 传给事件处理函数为事件对象 event .

    :param Object ev: 自定义事件传递的参数
    :param Number ev.event.left: 拖放节点应该设置的相对文档根节点的横坐标位置.
    :param Number ev.event.top: 拖放节点应该设置的相对文档根节点的纵坐标位置.
    :param Number ev.event.pageX: 当前鼠标的绝对横坐标
    :param Number ev.event.pageY: 当前鼠标的绝对纵坐标
    :param Object ev.event.drag: 自身, 当前拖放对象

.. js:function::  dragend(ev)

    当用户鼠标弹起放弃拖放时触发 , 传给事件处理函数参数为事件对象 event.

    :param Object ev.event.drag: 自身, 当前拖放对象


.. js:function::  dragenter(ev)

    同 :js:data:`dropenter` , 只不过该事件在当前 Draggable 对象上触发.
    
.. js:function:: dragover(ev)

    同 :js:data:`dropover` , 只不过该事件在当前 Draggable 对象上触发.

.. js:function:: dragexit(ev)

    同 :js:data:`dropexit` , 只不过该事件在当前 Draggable 对象上触发.
    
.. js:function:: dragdrophit(ev)

    同 :js:data:`drophit` , 只不过该事件在当前 Draggable 对象上触发.
    
.. js:function:: dragdropmiss(ev)

    当用户鼠标弹起但是没有放置当前 ``Draggable`` 对象到一个 Droppable 对象时触发.
    传给事件处理函数参数为一个事件对象 event

    :param Object ev.event.drag: 自身, 当前拖放对象

.. note ::

    ``Draggable`` 实例化后仅表示会根据鼠标拖放触发相应的事件, 但具体怎么处理仍需要调用者自己控制, 
    例如可监听 :js:data:`drag` 事件, 根据事件对象参数的坐标设置拖放节点的具体位置.
    
    .. code-block:: javascript

        new Draggable({node :"#d"}).on("drag",function(ev){
            this.get("node").offset({left:ev.left,top:ev.top});
        });
                
                              
