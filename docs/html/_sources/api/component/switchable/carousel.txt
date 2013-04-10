.. currentmodule:: switchable

Carousel
===================================================================

|  Carousel

.. code-block:: javascript

    KISSY.use('switchable',function(S,Switchable){
        // use Switchable.Carousel
    });

.. warning::

    本组件停止维护，推荐使用 `gallery/slide <http://t.cn/zTqcfXr>`_

Class Detail
---------------------------------------------------------------------

.. class:: Carousel

    | **Carousel** (container[, config])


Configs Detail
---------------------------------------------------------------------

    Carousel 接口及配置项, 与 :class:`Switchable` 相同, 其中以下配置项的默认值有所区别:

    .. data:: Carousel.config.aria

        {Boolean} - 是否支持键盘以及 aria. 默认 false
    
    .. data:: Switchable.config.circular
        :noindex:

        {Boolean} - 默认为true, 是否循环切换.
        
    .. data:: Switchable.config.prevBtnCls
    
        {String} - 默认为 'ks-switchable-prev-btn', 前一个触发器的 cls.
        
    .. data:: Switchable.config.nextBtnCls
    
        {String} - 默认为 'ks-switchable-next-btn', 后一个触发器的 cls.
        
    .. data:: Switchable.config.disableBtnCls
    
        {String} - 默认为 'ks-switchable-disable-btn', 触发器不可用时的 cls.