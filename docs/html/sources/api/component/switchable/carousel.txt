.. py:currentmodule:: Switchable

子类 Carousel
===================================================================

默认配置
-------------------------------------------------------------
S.Carousel 接口及配置项, 与 :attr:`~Switchable.Switchable` 相同, 其中以下配置项的默认值有所区别:



**Switchable.circular**    默认为 true, 即开启循环切换


新增配置
-------------------------------------------------------------

.. attribute:: Carousel.prevBtnCls

    (optional):  {String} 前一个触发器的 cls, 默认为 'ks-switchable-prev-btn'

.. attribute:: Carousel.nextBtnCls

    (optional): {String} 后一个触发器的 cls, 默认为 'ks-switchable-next-btn'

.. attribute:: Carousel.disableBtnCls

    (optional): {String} 触发器不可用时的 cls, 默认为 'ks-switchable-disable-btn'