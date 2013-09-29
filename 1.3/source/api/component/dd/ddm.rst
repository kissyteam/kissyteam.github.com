.. currentmodule:: dd

DDM
===============================================

|  拖放的中央控制对象, 所有的拖放实例的事件都会向其冒泡.

.. code-block:: javascript

    KISSY.use('dd',function(S,dd){
        // use dd.DDM
    });

Class
-----------------------------------------------

  * :class:`DDM`
  
Attributes
-----------------------------------------------

  * :data:`~DDM.prototype.bufferTime`
  * :data:`~DDM.prototype.clickPixelThresh`
  * :data:`~DDM.prototype.dragCursor`
  
Events
-----------------------------------------------

  * :func:`~DDM.Events.dragstart`
  * :func:`~DDM.Events.drag`
  * :func:`~DDM.Events.dragend`
  * :func:`~DDM.Events.dragenter`
  * :func:`~DDM.Events.dragover`
  * :func:`~DDM.Events.dragexit`
  * :func:`~DDM.Events.dragdrophit`
  * :func:`~DDM.Events.dragdropmiss`
  * :func:`~DDM.Events.dropenter`
  * :func:`~DDM.Events.dropover`
  * :func:`~DDM.Events.dropexit`
  * :func:`~DDM.Events.drophit`


Class Detail
-----------------------------------------------

.. class:: DDM
    
    | **DDM** ()
    

Attributes Detail
-----------------------------------------------
    
.. attribute:: DDM.prototype.bufferTime

    {Number} - 默认 1000, 表示鼠标按下多长时间后触发 dragstart 事件.  可通过 DDM.set("bufferTime",xx) 设置.
    
.. attribute:: DDM.prototype.clickPixelThresh

    {Number} - 默认 3, 表示鼠标按下后移动多少像素后触发 dragstart 事件.

.. attribute:: DDM.prototype.dragCursor

    {String} - 默认 'move', 表示拖放过程中鼠标的样式.

Events Detail
-----------------------------------------------

.. function:: DDM.Events.dragstart
    
    | **dragstart** (ev)
    | 同 :func:`Draggable.dragstart` , 只不过在 DDM 上触发.

.. function:: DDM.Events.drag

    | **drag** (ev)
    | 同 :func:`Draggable.drag` , 只不过在 DDM 上触发.

.. function:: DDM.Events.dragend

    | **dragend** (ev)
    | 同 :func:`Draggable.dragend` , 只不过在 DDM 上触发.

.. function:: DDM.Events.dragenter

    | **dragenter** (ev)
    | 同 :func:`Draggable.dragenter` , 只不过在 DDM 上触发.

.. function:: DDM.Events.dragover

    | **dragover** (ev)
    | 同 :func:`Draggable.dragover` , 只不过在 DDM 上触发.

.. function:: DDM.Events.dragexit

    | **dragexit** (ev)
    | 同 :func:`Draggable.dragexit` , 只不过在 DDM 上触发.

.. function:: DDM.Events.dragdrophit

    | **dragdrophit** (ev)
    | 同 :func:`Draggable.dragdrophit` , 只不过在 DDM 上触发.

.. function:: DDM.Events.dragdropmiss

    | **dragdropmiss** (ev)
    | 同 :func:`Draggable.dragdropmiss` , 只不过在 DDM 上触发.

.. function:: DDM.Events.dropenter

    | **dropenter** (ev)
    | 同 :func:`Droppable.dropenter` , 只不过在 DDM 上触发.

.. function:: DDM.Events.dropover

    | **dropover** (ev)
    | 同 :func:`Droppable.dropover` , 只不过在 DDM 上触发.

.. function:: DDM.Events.dropexit

    | **dropexit** (ev)
    | 同 :func:`Droppable.dropexit` , 只不过在 DDM 上触发.

.. function:: DDM.Events.drophit

    | **drophit** (ev)
    | 同 :func:`Droppable.drophit` , 只不过在 DDM 上触发.

