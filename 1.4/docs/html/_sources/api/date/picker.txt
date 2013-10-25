.. currentmodule:: date

Date.Picker
===============================

| 嵌入式日历控件，支持基本的日期选择、时间选择、范围选择、日期格式化输出等常用功能

.. code-block:: javascript

    KISSY.use('date/picker',function(S, DatePicker){
        // use DatePicker
    });

Class
--------------------------------

    * :class:`DatePicker`

Methods
--------------------------------

    * :func:`~component.Control.prototype.render`

Configs
--------------------------------

    * :data:`disabledDate`
    * :data:`showWeekNumber`
    * :data:`showToday`
    * :data:`~component.Control.config.render`
    * :data:`dateRender`
    * :data:`locale`
    * :data:`showClear`

Events
---------------------------------

    * :func:`~DatePicker.Events.select`

Class Details
---------------------------------

.. class:: DatePicker

    | 扩展自 :class:`~component.Control`, 包含其全部配置,属性,方法,事件.

    | **DatePicker** (config)

    * 根据配置创建picker

    :param Object config: 配置信息

Configs Details
-----------------------------------

.. data:: disabledDate

    | 一个过滤函数，用于判断日期是否可用

    | 可用返回true，反之返回false

    .. code-block:: javascript

        disabledDate: function (current, value) {
            return current.getMonth() < value.getMonth();
        }

.. data:: showWeekNumber

    | 是否显示周的数字形式

    | 显示为true，反之为false

.. data:: showToday

    | 是否显示今天

    | 显示为true，反之为false

.. data:: dateRender

    {Function} - 指定每个日期单元的渲染方式。

    函数接受两个参数
    :param GregorianCalendar current: 当前的日期值
    :param GregorianCalendar value: 初始化 picker 是设置的值，默认为当前时间

.. data:: locale

    {Object} - locale 信息

.. data:: showClear

    {Boolean} - 是否显示清除按钮，默认 true

Event Details
-----------------------------------

.. method:: DatePicker.Events.select

    | **selectionChange** (e)

    | 当选择时触发的事件

    .. code-block:: javascript

        picker.on('select', function (e) {
            var value = e.value;
            if (value) {
                result.html(DateFormat.getDateInstance(DateFormat.Style.FULL).format(value));
            } else {
                result.html('null');
            }
        });