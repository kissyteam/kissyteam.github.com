.. currentmodule:: DD

DDM API
-----------------------------------------------

引入
=====================================

页面引入 kissy.js :

.. code-block:: html

    <script src='kissy.js'></script>


.. versionadded:: 1.2
    通过 use 加载 dd 模块：
    
    .. code-block:: javascript
    
        KISSY.use("dd",function(S,DD){
            var DDM = DD.DDM;
        });

.. seealso::

    KISSY 1.2 :mod:`Loader` 新增功能
    

简介
=========================================

.. data:: DDM

    为拖放的中央控制对象，所有的拖放实例的事件都会向其冒泡。
    因此可以对整个拖放模块进行一些配置，以及对 DDM 进行全局事件监听和处理。

.. note::

    DDM 上的事件监听处理会影响到所有的拖放实例。


属性
===========================================

.. attribute:: DDM.bufferTimer

    类型 number，默认 200，表示鼠标按下多长时间后触发 :data:`~Draggable.dragstart` 事件。
    可通过 ``DDM.set("bufferTimer",xx)`` 设置。
    
    
事件
================================================

.. data:: DDM.dragstart

    同 :data:`Draggable.dragstart` ，只不过在 DDM 上触发。
    
.. data:: DDM.drag

    同 :data:`Draggable.drag` ，只不过在 DDM 上触发。
    
.. data:: DDM.dragend

    同 :data:`Draggable.dragend` ，只不过在 DDM 上触发。
    
.. data:: DDM.dragenter

    同 :data:`Draggable.dragenter` ，只不过在 DDM 上触发。
    
.. data:: DDM.dragover

    同 :data:`Draggable.dragover` ，只不过在 DDM 上触发。
    
.. data:: DDM.dragexit

    同 :data:`Draggable.dragexit` ，只不过在 DDM 上触发。
    
.. data:: DDM.dragdrophit

    同 :data:`Draggable.dragdrophit` ，只不过在 DDM 上触发。
    
.. data:: DDM.dragdropmiss

    同 :data:`Draggable.dragdropmiss` ，只不过在 DDM 上触发。
    
.. data:: DDM.dropenter

    同 :data:`Droppable.dropenter` ，只不过在 DDM 上触发。    
    
.. data:: DDM.dropover

    同 :data:`Droppable.dropover` ，只不过在 DDM 上触发。
    
.. data:: DDM.dropexit

    同 :data:`Droppable.dropexit` ，只不过在 DDM 上触发。
    
.. data:: DDM.drophit

    同 :data:`Droppable.drophit` ，只不过在 DDM 上触发。
    
   