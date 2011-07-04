.. currentmodule:: Event

Event.Object
=================================

.. class:: Object( event )

    对 dom 原生事件进行兼容性处理, 
    API 基本遵循 `DOM-Level-3-Events  <http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html>`_ 规范.        
    该类用于 event 模块内部调用，实例传入绑定的事件处理器作为第一个参数.
    
    :param HTMLEvent event: dom 原生事件.
    

事件属性
---------------------------

下面的列表都是该类实例的属性，虽然有些随着不同的事件类别值会是 undefined :

.. admonition:: 事件属性

    altKey, attrChange, attrName, bubbles, button, cancelable, 
    charCode, clientX, clientY, ctrlKey, currentTarget, data, detail, eventPhase, 
    fromElement, handler, keyCode, layerX, layerY, metaKey, newValue, offsetX, offsetY, 
    originalTarget, pageX, pageY, prevValue, relatedNode, relatedTarget, 
    screenX, screenY, shiftKey, srcElement, target, toElement, view, wheelDelta, which  
    
kissy 对下列属性做了兼容性处理

* target
* relatedTarget
* pageX
* pageY
* which
* metaKey


.. toctree::
   :maxdepth: 1

   currentTarget.rst
   pageX.rst
   relatedTarget.rst
   target.rst
   type.rst
   which.rst
   
   
   
事件方法
-------------------------------------

.. toctree::
   :maxdepth: 1

   preventDefault.rst
   stopImmediatePropagation.rst
   stopPropagation.rst
   isDefaultPrevented.rst
   isImmediatePropagationStopped.rst
   isPropagationStopped.rst