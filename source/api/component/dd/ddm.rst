.. module:: DDM

DDM
===============================================

|  拖放的中央控制对象, 所有的拖放实例的事件都会向其冒泡.
|  作者: `承玉 <chengyu@taobao.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/dd/ddm.js>`_  | `Demo <../../../demo/component/dd/ddm.html>`_

.. versionadded:: 1.2

Class
-----------------------------------------------

  * :class:`~DDM.DDM`
  
Properties
-----------------------------------------------

  * :data:`bufferTimer`
  
Events
-----------------------------------------------

  * :func:`dragstart`
  * :func:`drag`
  * :func:`dragend`
  * :func:`dragenter`
  * :func:`dragover`
  * :func:`dragexit`
  * :func:`dragdrophit`
  * :func:`dragdropmiss`
  * :func:`dropenter`
  * :func:`dropover`
  * :func:`dropexit`
  * :func:`drophit`


Class Detail
-----------------------------------------------

.. class:: DDM
    
    | **DD.DDM** ()
    

Properties Detail
-----------------------------------------------
    
.. attribute:: bufferTimer

    {Number} - 默认 200, 表示鼠标按下多长时间后触发 dragstart 事件.  可通过 DDM.set("bufferTimer",xx) 设置.


Events Detail
-----------------------------------------------

.. function:: dragstart
    
    | **dragstart** (ev)
    | 同 :func:`Draggable.dragstart` , 只不过在 DDM 上触发.

.. function:: drag

    | **drag** (ev)
    | 同 :func:`Draggable.drag` , 只不过在 DDM 上触发.

.. function:: dragend

    | **dragend** (ev)
    | 同 :func:`Draggable.dragend` , 只不过在 DDM 上触发.

.. function:: dragenter

    | **dragenter** (ev)
    | 同 :func:`Draggable.dragenter` , 只不过在 DDM 上触发.

.. function:: dragover

    | **dragover** (ev)
    | 同 :func:`Draggable.dragover` , 只不过在 DDM 上触发.

.. function:: dragexit

    | **dragexit** (ev)
    | 同 :func:`Draggable.dragexit` , 只不过在 DDM 上触发.

.. function:: dragdrophit

    | **dragdrophit** (ev)
    | 同 :func:`Draggable.dragdrophit` , 只不过在 DDM 上触发.

.. function:: dragdropmiss

    | **dragdropmiss** (ev)
    | 同 :func:`Draggable.dragdropmiss` , 只不过在 DDM 上触发.

.. function:: dropenter

    | **dropenter** (ev)
    | 同 :func:`Droppable.dropenter` , 只不过在 DDM 上触发.

.. function:: dropover

    | **dropover** (ev)
    | 同 :func:`Droppable.dropover` , 只不过在 DDM 上触发.

.. function:: dropexit

    | **dropexit** (ev)
    | 同 :func:`Droppable.dropexit` , 只不过在 DDM 上触发.

.. function:: drophit

    | **drophit** (ev)
    | 同 :func:`Droppable.drophit` , 只不过在 DDM 上触发.

