.. currentmodule:: overlay

Popup
===============================================


|  弹出层


.. code-block:: javascript

    KISSY.use('overlay',function(S,Overlay){
        // use Overlay.Popup
    });

Class
-----------------------------------------------

  * :class:`Popup`

  
Configs
-----------------------------------------------

  与 :class:`Overlay` 的配置项完全相同, 其他新增配置项如下：
  
  * :data:`~Popup.prototype.trigger`
  * :data:`~Popup.prototype.triggerType`
  * :data:`~Popup.prototype.mouseDelay`
  * :data:`~Popup.prototype.toggle`
  
Attributes
-----------------------------------------------

  * 同 :class:`Overlay` .
  * :attr:`~Popup.prototype.currentTrigger`

  
Methods
-----------------------------------------------

  * 同 :class:`Overlay` .

  
Events
-----------------------------------------------

  * 同 :class:`Overlay`
  * :func:`~Popup.Events.afterCurrentTriggerChange`

Class Detail
-----------------------------------------------

.. class:: Popup
    
    | **Popup** (config)
    | xclass: 'popup'

    * 继承自 :class:`~Overlay` , 包含其全部配置,属性,方法,事件.

    :param Object config: 配置项, 详细见下方 **Configs Detail** .
    
.. note::

    使用前请加上初始样式
    
    .. code-block:: html
    
        <style>
            .ks-overlay {
                position:absolute;
                left:-9999px;
                top:-9999px;
            }
            .ks-overlay-hidden {
                visibility: hidden;
            }

            .ks-overlay-mask-hidden {
                display: none;
            }

            .ks-overlay-shown {
                visibility: visible;
            }

            .ks-overlay-mask-shown{
                display: block;
            }
        </style>    

    
Configs Detail
-----------------------------------------------
    
.. data:: Popup.prototype.trigger

    {String|HTMLElement[]|KISSY.NodeList} - 触点集合

.. data:: Popup.prototype.triggerType

    {String} - 可选, 默认为 'click', 触发类型, 可选 'click', 'mouse'.

.. data:: Popup.prototype.mouseDelay

    {Number} - 单位秒. 可选, triggerType 为 mouse 时, Popup 显示的延迟时间, 默认为 0.1.

.. data:: Popup.prototype.toggle

    {Boolean} - 可选, triggerType 为 click 时, Popup 是否有toggle功能，默认为false，不开启

Attributes Detail
------------------------

.. attribute:: Popup.prototype.currentTrigger

    {KISSY.Node} - 当前的 trigger 节点

Events Detail
--------------------------

.. function:: Popup.Events.afterCurrentTriggerChange

    | **afterCurrentTriggerChange(e)**
    | 当 currentTrigger 改变后触发

    :param {KISSY.Node} e.newVal: 新的 trigger 元素