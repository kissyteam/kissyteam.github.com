.. module:: resizable

Resizable
===============================



|  缩放功能.

.. code-block:: javascript

    KISSY.use('resizable',function(S,Resizable){
        // use Resizable
    });

Class
---------------------------------

    * :class:`Resizable`


Configs
-----------------------------------------------

    * :data:`~Resizable.config.node`
    * :data:`~Resizable.config.minWidth`
    * :data:`~Resizable.config.minHeight`
    * :data:`~Resizable.config.maxWidth`
    * :data:`~Resizable.config.maxHeight`
    * :data:`~Resizable.config.handlers`


Methods
-----------------------------------------------

  * :meth:`destroy`


Events
-----------------------------------------------

  * :func:`~resizable.Events.resizeStart`
  * :func:`~resizable.Events.resize`
  * :func:`~resizable.Events.resizeEnd`

Class Detail
--------------------------

.. class:: Resizable

    | **Resizable** (config)

    :param Object config: 配置项，详细见下方 **Configs Detail** .


Configs Detail
-----------------------------------------------

.. data:: Resizable.config.node

    {String|HTMLElement|KISSY.Node} - 将要进行缩放的节点.

.. data:: Resizable.config.minWidth

    {Number} - 默认为0, 表示拖动缩放的最小宽度.

.. data:: Resizable.config.minHeight

    {Number} - 默认为0, 表示拖动缩放的最小高度.

.. data:: Resizable.config.maxWidth

    {Number} - 默认为 `Number.MAX_VALUE`, 表示拖动缩放的最大宽度.

.. data:: Resizable.config.maxHeight

    {Number} - 默认为 `Number.MAX_VALUE`, 表示拖动缩放的最大高度.

.. data:: Resizable.config.handlers

    {Array<String>} - 默认为 `[]`, 表示可拖动元素的哪些位置来进行缩放.

    可取下列值: "b","t","r","l","tr","tl","br","bl"． 其中, t,b,l,r 分别表示 top,bottom,left,right, 加上组合共八种取值, 可在上, 下, 左, 右以及左上, 左下, 右上, 右下进行拖动.


Methods Detail
-----------------------------------------------

.. method:: destroy

    | **destroy** ()
    | 销毁该组件, 取消元素上的缩放功能.
    
    
.. note::

    拖放 handler 的样式需要调用者自己编写.


Events Detail
-----------------------------------------------

.. function:: resizable.Events.resizeStart

    | **resizeStart** (e)
    | 开始拖放后触发

.. function:: resizable.Events.resize

    | **resize** (e)
    | 拖放中触发

.. function:: resizable.Events.resizeEnd

    | **resizeEnd** (e)
    | 结束拖放后触发
