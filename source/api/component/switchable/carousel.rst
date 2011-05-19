.. py:currentmodule:: Switchable

子类 Carousel
===================================================================

默认配置
-------------------------------------------------------------
S.Carousel 接口及配置项, 与 :attr:`~Switchable.Switchable` 相同, 其中以下四个配置项的默认值有所区别:



.. attribute:: circular

    (optional):  {Booelan} 是否循环切换, 默认为 true


新增配置
-------------------------------------------------------------

.. attribute:: prevBtnCls

    (optional):  {String} 前一个触发器的 cls, 默认为 'ks-switchable-prev-btn'

.. attribute:: nextBtnCls

    (optional): {String} 后一个触发器的 cls, 默认为 'ks-switchable-next-btn'

.. attribute:: disableBtnCls

    (optional): {String} 触发器不可用时的 cls, 默认为 'ks-switchable-disable-btn'