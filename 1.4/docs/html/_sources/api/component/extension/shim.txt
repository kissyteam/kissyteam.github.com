.. currentmodule:: component

Component.Extension.Shim
===============================

|  垫片。组件扩充类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review
|  用于修复 IE6 下select等Form控件间遮罩住弹出层，或者在某些高级浏览器上select遮住flash等情况。

Class
---------------------------------

    * :class:`~extension.Shim`

Configs
-----------------------------------------------

    * :data:`~component.extension.Shim.config.shim`

Class Detail
--------------------------

.. class:: extension.Shim

    | **Component.Extension.Shim** ()

Attributes Details
-----------------------------------------------

.. data:: extension.Shim.config.shim

    | 在IE6下默认为 true，其他默认为 false