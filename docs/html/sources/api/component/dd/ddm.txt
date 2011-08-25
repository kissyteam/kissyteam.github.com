.. currentmodule:: dd

DDM
===============================================

.. versionadded:: 1.2

|  拖放的中央控制对象, 所有的拖放实例的事件都会向其冒泡.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/ddm.js>`_  | `Demo <../../../demo/component/dd/index.html>`_


Class
-----------------------------------------------

  * :class:`DDM`
  
Properties
-----------------------------------------------

  * :data:`~DDM.protoype.bufferTimer`
  
Events
-----------------------------------------------

  * :func:`~DDM.dragstart`
  * :func:`~DDM.drag`
  * :func:`~DDM.dragend`
  * :func:`~DDM.dragenter`
  * :func:`~DDM.dragover`
  * :func:`~DDM.dragexit`
  * :func:`~DDM.dragdrophit`
  * :func:`~DDM.dragdropmiss`
  * :func:`~DDM.dropenter`
  * :func:`~DDM.dropover`
  * :func:`~DDM.dropexit`
  * :func:`~DDM.drophit`


Class Detail
-----------------------------------------------

.. class:: DDM
    
    | **DDM** ()
    

Properties Detail
-----------------------------------------------
    
.. attribute:: DDM.protoype.bufferTimer

    {Number} - 默认 200, 表示鼠标按下多长时间后触发 dragstart 事件.  可通过 DDM.set("bufferTimer",xx) 设置.


Events Detail
-----------------------------------------------

.. function:: DDM.dragstart
    
    | **dragstart** (ev)
    | 同 :func:`Draggable.dragstart` , 只不过在 DDM 上触发.

.. function:: DDM.drag

    | **drag** (ev)
    | 同 :func:`Draggable.drag` , 只不过在 DDM 上触发.

.. function:: DDM.dragend

    | **dragend** (ev)
    | 同 :func:`Draggable.dragend` , 只不过在 DDM 上触发.

.. function:: DDM.dragenter

    | **dragenter** (ev)
    | 同 :func:`Draggable.dragenter` , 只不过在 DDM 上触发.

.. function:: DDM.dragover

    | **dragover** (ev)
    | 同 :func:`Draggable.dragover` , 只不过在 DDM 上触发.

.. function:: DDM.dragexit

    | **dragexit** (ev)
    | 同 :func:`Draggable.dragexit` , 只不过在 DDM 上触发.

.. function:: DDM.dragdrophit

    | **dragdrophit** (ev)
    | 同 :func:`Draggable.dragdrophit` , 只不过在 DDM 上触发.

.. function:: DDM.dragdropmiss

    | **dragdropmiss** (ev)
    | 同 :func:`Draggable.dragdropmiss` , 只不过在 DDM 上触发.

.. function:: DDM.dropenter

    | **dropenter** (ev)
    | 同 :func:`Droppable.dropenter` , 只不过在 DDM 上触发.

.. function:: DDM.dropover

    | **dropover** (ev)
    | 同 :func:`Droppable.dropover` , 只不过在 DDM 上触发.

.. function:: DDM.dropexit

    | **dropexit** (ev)
    | 同 :func:`Droppable.dropexit` , 只不过在 DDM 上触发.

.. function:: DDM.drophit

    | **drophit** (ev)
    | 同 :func:`Droppable.drophit` , 只不过在 DDM 上触发.

