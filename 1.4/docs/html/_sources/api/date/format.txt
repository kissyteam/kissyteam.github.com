.. currentmodule:: date

Date.Format
===============================

| 时间格式化模块，借鉴了JDK中的时间格式化模块

Class
-----------------------------------------------

    :class:`DateTimeFormat`

Attributes
-----------------------------------------------

    * :data:`DateTimeFormat.Style`

Methods
-----------------------------------------------

    * :meth:`~DateTimeFormat.prototype.format`
    * :meth:`~DateTimeFormat.prototype.parse`
    * :meth:`~DateTimeFormat.getInstance`
    * :meth:`~DateTimeFormat.getDateInstance`
    * :meth:`~DateTimeFormat.getDateTimeInstance`
    * :meth:`~DateTimeFormat.getTimeInstance`

Class Detail
-----------------------------------------------

.. class:: DateTimeFormat

    | **DateTimeFormat** (pattern, locale, timeZoneOffset)
    | 根据传入参数，创建对应的 DateTimeFormat 对象

    :param String pattern: 时间模式（具体写法参见下面的表格）
    :param Object locale: 时区
    :param Number timeZoneOffset: 时区时间偏移

Attributes Detail
-----------------------------------------------

.. attribute:: DateTimeFormat.Style

    | 默认中文，形式如下：
    | FULL: yyyy年M月d日 EEEE ahh时mm分ss秒 GMTZ
    | LONG: yyyy年M月d日 ahh时mm分ss秒
    | MEDIUM: yyyy-M-d H:mm:ss
    | SHORT: yy-M-d ah:mm

Methods Detail
-----------------------------------------------

.. method:: DateTimeFormat.prototype.format

    | String **format** (calender)
    | 格式化传入日历中的时间

    .. code-block:: js

        var gregorianCalendar = new GregorianCalendar(2013,GregorianCalendar.JULY, 11, 12, 31, 19);
        var df = DateTimeFormat.getDateTimeInstance(Style.FULL, Style.FULL);
        df.format(gregorianCalendar);

    :returns: {String}

    :param {GregorianCalendar} calender: 要格式化时间的公历对象

.. method:: DateTimeFormat.prototype.parse

    | GregorianCalendar **parse** (dateStr)
    | 解析时间字符串，转换成对应的公历对象

    .. code-block:: js

        var df = DateTimeFormat.getDateTimeInstance(Style.FULL, Style.FULL);
        var str = '2013年7月11日 星期四 下午12时31分19秒 GMT+0800';
        var cal = df.parse(str);

    :returns: {GregorianCalendar}

    :param {String} dateStr: 要解析的时间字符串

.. method:: DateTimeFormat.getInstance

    | String **getInstance** (locale, timeZoneOffset)
    | 获取当前日期和时间在给定区域和时差下的默认格式化的 DateTimeFormat 对象。
    | 相当于

    .. code-block:: js

        getDateTimeInstance(DateTimeStyle.SHORT, DateTimeStyle.SHORT, locale, timeZoneOffset)

    :returns: {String}

    :param {Object} locale: 区域信息
    :param {Number} timeZoneOffset: 时差偏移

.. method:: DateTimeFormat.getDateInstance

    | String **getDateInstance** (dateStyle, locale, timeZoneOffset)
    | 获取当前日期在给定区域和时差及格式下的 DateTimeFormat 对象。

    :returns: {String}

    :param {String} dateStyle: 日期格式，枚举型 DateTimeFormat.Style
    :param {Object} locale: 区域信息
    :param {Number} timeZoneOffset: 时差偏移

.. method:: DateTimeFormat.getDateTimeInstance

    | String **getDateTimeInstance** (dateStyle, timeStyle, locale, timeZoneOffset)
    | 获取当前日期和时间在给定区域和时差及格式下的DateTimeFormat对象。

    :returns: {String}

    :param {String} dateStyle: 日期格式，枚举型 DateTimeFormat.Style
    :param {String} timeStyle: 时间格式，枚举型 DateTimeFormat.Style
    :param {Object} locale: 区域信息
    :param {Number} timeZoneOffset: 时差偏移

.. method:: DateTimeFormat.getTimeInstance

    | String **getTimeInstance** (timeStyle, locale, timeZoneOffset)
    | 获取当前时间在给定区域和时差及格式下的DateTimeFormat对象。

    :returns: {String}

    :param {String} timeStyle: 时间格式，枚举型 DateTimeFormat.Style
    :param {Object} locale: 区域信息
    :param {Number} timeZoneOffset: 时差偏移

Data Format String
--------------------------------------

======    ======================    =================    ========
Letter    Date or Time Component    Presentation         Examples
======    ======================    =================    ========
   G        Era designator              Text                AD
   y        Year                        Year             1996; 96
   M        Month in year               Month            July; Jul; 07
   w        Week in year                Number              27
   W        Week in month               Number              2
   D        Day in year                 Number              189
   d        Day in month                Number              10
   F        Day of week in month        Number              2
   E        Day in week                 Text             Tuesday; Tue
   a        Am/pm marker                Text                PM
   H        Hour in day (0-23)          Number              0
   k        Hour in day (1-24)          Number              24
   K        Hour in am/pm (0-11)        Number              0
   h        Hour in am/pm (1-12)        Number              12
   m        Minute in hour              Number              30
   s        Second in minute            Number              55
   S        Millisecond                 Number              978
  x/z       Time zone               General time zone    Pacific Standard Time; PST; GMT-08:00
   Z        Time zone               RFC 822 time zone    -0800
======    ======================    =================    ========

