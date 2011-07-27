.. module:: Overlay

Popup
===============================================


|  弹出层
|  作者: `乔花 <qiaohua@taobao.com>`_
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/overlay/>`_  | `Demo <../../../demo/component/overlay/>`_

Class
-----------------------------------------------

  * :class:`Popup`

  
Config Attributes
-----------------------------------------------

  与 :class:`Overlay` 的配置项完全相同, 其他新增配置项如下：
  
  * :data:`trigger`
  * :data:`triggerType`
 
 
Properties
-----------------------------------------------

  * 同 :class:`Overlay` .

  
Methods
-----------------------------------------------

  * 同 :class:`Overlay` .

  
Events
-----------------------------------------------

  * 同 :class:`Overlay` , 包括 :func:`show` , :func:`hide` , :func:`beforeVisibleChange` .


Class Detail
-----------------------------------------------

.. class:: Popup
    
    | **Popup** ([container,] config)
    
    :param String|HTMLElement|KISSY.Node container: 可为'#id'、'.class'、DOM对象、KISSY.Node对象, 为空时表示新建
    :param Object config: 配置项, 详细见下方 **Config Attributes Detail** .

    
Config Attributes Detail
-----------------------------------------------

    与 :class:`Overlay` 的配置项完全相同, 其他新增配置项如下：
    
.. data:: trigger

    {String | HTMLElement | KISSY.Node} - 触点

.. data:: triggerType

    {String} - 可选, 默认为'click', 触发类型, 可选'click'、'mouse'.


Properties Detail
-----------------------------------------------

    同 :class:`Overlay` .
    
    
Methods Detail
-----------------------------------------------

    同 :class:`Overlay` .
    
    
Events Detail
-----------------------------------------------

    同 :class:`Overlay` , 包括 :func:`show` , :func:`hide` , :func:`beforeVisibleChange` .

                              

