.. currentmodule:: date

Date.Popup-Picker
===============================

| 浮层式日历控件，支持基本的日期选择、时间选择、范围选择、日期格式化输出等常用功能

.. code-block:: javascript

    KISSY.use('date/popup-picker',function(S, PopupDatePicker){
        // use PopupDatePicker
    });

Class
-------------------------------

    * :class:`PopupDatePicker`

Configs
-------------------------------

    * :data:`~component.extension.Shim`
    * :data:`~component.extension.Align`

Methods
--------------------------------

    * :func:`~component.extension.Box.prototype.show`
    * :func:`~component.extension.Box.prototype.hide`

Events
-------------------------------

    * :func:`~DatePicker.Events.select`
    * :func:`~PopupDatePicker.Events.blur`

Class Details
-------------------------------

.. class:: PopupDatePicker

    | 扩展自 :class:`~date.DatePicker`, 包含其全部配置,属性,方法,事件.

    | **PopupDatePicker** (config)

    * 根据配置创建PopupDatePicker

    :param Object config: 配置信息

Events Details
--------------------------------

.. method:: PopupDatePicker.Events.blur

    | **blur** (e)
    | 当失去焦点是触发的事件

    .. code-block:: javascript

            picker.on('blur', function (e) {
                picker.hide();
            });