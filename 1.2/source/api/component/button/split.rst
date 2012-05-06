.. module:: button

Split
===============================

|  组合按钮



Class
---------------------------------

    * :class:`Split`

Config Attributes
-----------------------------------------------    

    * :data:`~Split.config.first`
    * :data:`~Split.config.second`
    * :data:`~Split.config.eventType`
    * :data:`~Split.config.eventHandler`
    
Class Detail
--------------------------

.. class:: Split

    | **Split** (config)
    
    * 继承自 :class:`~base.Base` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项，详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------
    
.. data:: Split.config.first

    {Button} - 分离按钮的第一个按钮实例

.. data:: Split.config.second

    {MenuButton} - 分离按钮的第二个按钮实例（通常是MenuButton）
                    
.. data:: Split.config.eventType

    {String} - 可选，默认 "click" ，第二个按钮响应的事件名
                
.. data:: Split.config.eventHandler

    {String} - 可选，默认 "content" ，还可取 "value" 。第二个按钮事件触发后，改变第一个按钮的属性为第二个按钮的对应属性。 
    
        * ``"content"`` 改变第一个按钮的 content 以及 value 属性
        * ``"value"`` 只改变第一个按钮的 value