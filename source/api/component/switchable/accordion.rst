.. currentmodule:: switchable

Accordion
===================================================================

|  手风琴

Class Detail
---------------------------------------------------------------------

.. class:: Accordion

    | **Accordion** (container[, config])


Configs Detail
---------------------------------------------------------------------

    Accordion 接口及配置项, 与 :class:`Switchable` 相同, 其中以下配置项的默认值有所区别:

    .. data:: Tabs.config.aria

        {Boolean} - 是否支持键盘以及 aria. 默认 true
    
    .. data:: Switchable.config.markupType
        :noindex:
    
        {Number} - 默认为 1 , 选择自定义 trigger 和 panel 的 class.
        
    .. data:: Switchable.config.triggerType
        :noindex:

        {Boolean} - 'click' , 点击触发.
        
    .. data:: Switchable.config.multiple

        {Boolean} - 默认为 false, 是否开启同时展开多个面板功能.