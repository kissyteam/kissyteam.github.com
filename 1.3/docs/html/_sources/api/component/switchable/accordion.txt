.. currentmodule:: switchable

Accordion
===================================================================

|  手风琴

.. code-block:: javascript

    KISSY.use('switchable',function(S,Switchable){
        // use Switchable.Accordion
    });

.. warning::

    本组件停止维护，推荐使用 `gallery/slide <https://github.com/kissygalleryteam/slide>`_

Class Detail
---------------------------------------------------------------------

.. class:: Accordion

    | **Accordion** (container[, config])


Configs Detail
---------------------------------------------------------------------

    Accordion 接口及配置项, 与 :class:`Switchable` 相同, 其中以下配置项的默认值有所区别:

    .. data:: Accordion.config.aria

        {Boolean} - 是否支持键盘以及 aria. 默认 true
    
    .. data:: Accordion.config.markupType
    
        {Number} - 默认为 1 , 选择自定义 trigger 和 panel 的 class.
        
    .. data:: Accordion.config.triggerType

        {Boolean} - 'click' , 点击触发.
        
    .. data:: Accordion.config.multiple

        {Boolean} - 默认为 false, 是否开启同时展开多个面板功能.