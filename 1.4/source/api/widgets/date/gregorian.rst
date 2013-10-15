.. currentmodule:: date

Date.Gregorian
===============================

|  公历模块
|  提供了时间转换，范围计算等功能。

Class
------------------------------

    * :class:`GregorianCalendar`

Attributes
------------------------------

    * :data:`GregorianCalendar.SUNDAY`
    * :data:`GregorianCalendar.MONDAY`
    * :data:`GregorianCalendar.TUESDAY`
    * :data:`GregorianCalendar.WEDNESDAY`
    * :data:`GregorianCalendar.THURSDAY`
    * :data:`GregorianCalendar.FRIDAY`
    * :data:`GregorianCalendar.SATURDAY`

    * :data:`GregorianCalendar.JANUARY`
    * :data:`GregorianCalendar.FEBRUARY`
    * :data:`GregorianCalendar.MARCH`
    * :data:`GregorianCalendar.APRIL`
    * :data:`GregorianCalendar.MAY`
    * :data:`GregorianCalendar.JUNE`
    * :data:`GregorianCalendar.JULY`
    * :data:`GregorianCalendar.AUGUST`
    * :data:`GregorianCalendar.SEPTEMBER`
    * :data:`GregorianCalendar.OCTOBER`
    * :data:`GregorianCalendar.NOVEMBER`
    * :data:`GregorianCalendar.DECEMBER`

Configs
------------------------------

    * :data:`timezoneOffset`
    * :data:`locale`

Methods
-----------------------------------------------

    * :meth:`~GregorianCalendar.prototype.isLeapYear`

    * :meth:`~GregorianCalendar.prototype.setTime`
    * :meth:`~GregorianCalendar.prototype.getTime`

    * :meth:`~GregorianCalendar.prototype.get`
    * :meth:`~GregorianCalendar.prototype.getYear`
    * :meth:`~GregorianCalendar.prototype.getMonth`
    * :meth:`~GregorianCalendar.prototype.getDayOfMonth`
    * :meth:`~GregorianCalendar.prototype.getHourOfDay`
    * :meth:`~GregorianCalendar.prototype.getMinutes`
    * :meth:`~GregorianCalendar.prototype.getSeconds`
    * :meth:`~GregorianCalendar.prototype.getMilliSeconds`
    * :meth:`~GregorianCalendar.prototype.getWeekOfYear`
    * :meth:`~GregorianCalendar.prototype.getWeekOfMonth`
    * :meth:`~GregorianCalendar.prototype.getDayOfYear`
    * :meth:`~GregorianCalendar.prototype.getDayOfWeek`
    * :meth:`~GregorianCalendar.prototype.getDayOfWeekInMonth`

    * :meth:`~GregorianCalendar.prototype.set`
    * :meth:`~GregorianCalendar.prototype.setYear`
    * :meth:`~GregorianCalendar.prototype.setMonth`
    * :meth:`~GregorianCalendar.prototype.setDayOfMonth`
    * :meth:`~GregorianCalendar.prototype.setHourOfDay`
    * :meth:`~GregorianCalendar.prototype.setMinutes`
    * :meth:`~GregorianCalendar.prototype.setSeconds`
    * :meth:`~GregorianCalendar.prototype.setMilliSeconds`
    * :meth:`~GregorianCalendar.prototype.setWeekOfYear`
    * :meth:`~GregorianCalendar.prototype.setWeekOfMonth`
    * :meth:`~GregorianCalendar.prototype.setDayOfYear`
    * :meth:`~GregorianCalendar.prototype.setDayOfWeek`
    * :meth:`~GregorianCalendar.prototype.setDayOfWeekInMonth`

    * :meth:`~GregorianCalendar.prototype.add`
    * :meth:`~GregorianCalendar.prototype.addYear`
    * :meth:`~GregorianCalendar.prototype.addMonth`
    * :meth:`~GregorianCalendar.prototype.addDayOfMonth`
    * :meth:`~GregorianCalendar.prototype.addHourOfDay`
    * :meth:`~GregorianCalendar.prototype.addMinutes`
    * :meth:`~GregorianCalendar.prototype.addSeconds`
    * :meth:`~GregorianCalendar.prototype.addMilliSeconds`
    * :meth:`~GregorianCalendar.prototype.addWeekOfYear`
    * :meth:`~GregorianCalendar.prototype.addWeekOfMonth`
    * :meth:`~GregorianCalendar.prototype.addDayOfYear`
    * :meth:`~GregorianCalendar.prototype.addDayOfWeek`
    * :meth:`~GregorianCalendar.prototype.addDayOfWeekInMonth`

    * :meth:`~GregorianCalendar.prototype.roll`
    * :meth:`~GregorianCalendar.prototype.rollYear`
    * :meth:`~GregorianCalendar.prototype.rollMonth`
    * :meth:`~GregorianCalendar.prototype.rollDayOfMonth`
    * :meth:`~GregorianCalendar.prototype.rollHourOfDay`
    * :meth:`~GregorianCalendar.prototype.rollMinutes`
    * :meth:`~GregorianCalendar.prototype.rollSeconds`
    * :meth:`~GregorianCalendar.prototype.rollMilliSeconds`
    * :meth:`~GregorianCalendar.prototype.rollWeekOfYear`
    * :meth:`~GregorianCalendar.prototype.rollWeekOfMonth`
    * :meth:`~GregorianCalendar.prototype.rollDayOfYear`
    * :meth:`~GregorianCalendar.prototype.rollDayOfWeek`

    .. note:: roll是在当前域中进行变化；add的变化会影响整体，可能会导致别的域的值发生变化

Class Detail
--------------------------

.. class:: GregorianCalendar

    | **GregorianCalendar** (timezoneOffset)
    | 之后通过set方法设置具体时间

    :param Number timezoneOffset: 时区时间偏差，以分钟形式，偏移小时数乘以60

    | **GregorianCalendar** (locale)
    | 之后通过set方法设置具体时间

    :param Object locale: 区域信息，包含时差，时间符号等的对象

    | **GregorianCalendar** (timezoneOffset, locale)
    | 之后通过set方法设置具体时间

    :param Number timezoneOffset: 时区时间偏差，以分钟形式，偏移小时数乘以60
    :param Object locale: 区域信息，包含时差，时间符号等的对象

    | **GregorianCalendar** (year, month, day[, hour, minute, seconds])

    * 按照所给日期和时间在默认时区和默认区域创建公历

    :param Number year[, month, day, hour, minute, seconds]: 对应域的值

Attributes Detail
-----------------------------------------------

.. attribute:: GregorianCalendar.SUNDAY

    | 常量，星期日

.. attribute:: GregorianCalendar.MONDAY

    | 常量，星期一

.. attribute:: GregorianCalendar.TUESDAY

    | 常量，星期二

.. attribute:: GregorianCalendar.WEDNESDAY

    | 常量，星期三

.. attribute:: GregorianCalendar.THURSDAY

    | 常量，星期四

.. attribute:: GregorianCalendar.FRIDAY

    | 常量，星期五

.. attribute:: GregorianCalendar.SATURDAY

    | 常量，星期六

.. attribute:: GregorianCalendar.JANUARY

    | 常量，一月

.. attribute:: GregorianCalendar.FEBRUARY

    | 常量，二月

.. attribute:: GregorianCalendar.MARCH

    | 常量，三月

.. attribute:: GregorianCalendar.APRIL

    | 常量，四月

.. attribute:: GregorianCalendar.MAY

    | 常量，五月

.. attribute:: GregorianCalendar.JUNE

    | 常量，六月

.. attribute:: GregorianCalendar.JULY

    | 常量，七月

.. attribute:: GregorianCalendar.AUGUST

    | 常量，八月

.. attribute:: GregorianCalendar.SEPTEMBER

    | 常量，九月

.. attribute:: GregorianCalendar.OCTOBER

    | 常量，十月

.. attribute:: GregorianCalendar.NOVEMBER

    | 常量，十一月

.. attribute:: GregorianCalendar.DECEMBER

    | 常量，十二月

Configs Details
------------------------------

.. data:: timezoneOffset

    | 时区时间偏移

.. data:: locale

    | 时区

Methods Detail
-----------------------------------------------

.. method:: GregorianCalendar.prototype.isLeapYear

    | **isLeapYear()**
    | 判断当前的年份是否是闰年

    :returns: {Boolean}

.. method:: GregorianCalendar.prototype.getTime

    | **getTime()**
    | 返回毫秒形式的当前日历的时间

    :returns: {Number} 时间的毫秒形式

.. method:: GregorianCalendar.prototype.setTime

    | **setTime(time)**
    | 通过所给的毫秒形式的值设置当前日历的时间

    :param {Number} time: 要设置的时间的毫秒形式

.. method:: GregorianCalendar.prototype.get

    | **get(field)**
    | 获得传入的field对应的值

    :param {String} field: 要获得的域的名字

    :returns: {Number} 对应域的值

.. method:: GregorianCalendar.prototype.getYear

    | **getYear()**
    | 获得当前的年份

    :returns: {Number} 当前年份的值

.. method:: GregorianCalendar.prototype.getMonth

    | **getMonth()**
    | 获得当前的月份

    :returns: {Number} 当前月份的值

.. method:: GregorianCalendar.prototype.getDayOfMonth

    | **getDayOfMonth()**
    | 获得当前的月份中的哪一天

    :returns: {Number} 第几天

.. method:: GregorianCalendar.prototype.getHourOfDay

    | **getHourOfDay()**
    | 获得当前的天中的哪一小时

    :returns: {Number} 第几小时

.. method:: GregorianCalendar.prototype.getMinutes

    | **getMinutes()**
    | 获得当前的分钟域的值

    :returns: {Number} 对应的值

.. method:: GregorianCalendar.prototype.getSeconds

    | **getSeconds()**
    | 获得当前的秒位的值，**不是整体时间的秒值**

    :returns: {Number} 当前的秒值

.. method:: GregorianCalendar.prototype.getMilliSeconds

    | **()**
    | 获得当前的毫秒位的值，**不是整体时间的毫秒值**

    :returns: {Number} 当前的毫秒值

.. method:: GregorianCalendar.prototype.getWeekOfYear

    | **getWeekOfYear()**
    | 当前周是当前年中的第几周

    :returns: {Number} 第几周

.. method:: GregorianCalendar.prototype.getWeekOfMonth

    | **getWeekOfMonth()**
    | 当前周是当前月中的第几周

    :returns: {Number} 第几周

.. method:: GregorianCalendar.prototype.getDayOfYear

    | **getDayOfYear()**
    | 当前天是当前年中的第几天

    :returns: {Number} 第几天

.. method:: GregorianCalendar.prototype.getDayOfWeek

    | **getDayOfWeek()**
    | 当前天是当前周中的第几天

    :returns: {Number} 第几天

.. method:: GregorianCalendar.prototype.getDayOfWeekInMonth

    | **getDayOfWeekInMonth()**
    | 当前周是这个月中这一周的第几天

    :returns: {Number} 第几天

.. method:: GregorianCalendar.prototype.set

    | **set(field, v)**
    | 设置对应日历域的值

    :param {String} field: 要设置的域
    :param {Number} v: 对应域要设置的值

.. method:: GregorianCalendar.prototype.setYear

    | **setYear(v)**
    | 设置日历的年份

    :param {Number} v: 要设置的年份

.. method:: GregorianCalendar.prototype.setMonth

    | **setMonth(v)**
    | 设置日历的月份

    :param {Number} v: 要设置的月份

.. method:: GregorianCalendar.prototype.setDayOfMonth

    | **setDayOfMonth(v)**
    | 设置日历当前月中的某一天

    :param {Number} v: 要设置的天

.. method:: GregorianCalendar.prototype.setHourOfDay

    | **setHourOfDay(v)**
    | 设置当前的天中的哪一小时

    :param {Number} v: 要设置的小时

.. method:: GregorianCalendar.prototype.setMinutes

    | **setMinutes(v)**
    | 设置分钟域的值

    :param {Number} v: 要设置的值

.. method:: GregorianCalendar.prototype.setSeconds

    | **setSeconds(v)**
    | 设置秒位的值

    :param {Number} v: 要设置的值

.. method:: GregorianCalendar.prototype.setMilliSeconds

    | **setMilliSeconds(v)**
    | 设置毫秒位的值

    :param {Number} v: 要设置的值

.. method:: GregorianCalendar.prototype.setWeekOfYear

    | **setWeekOfYear(v)**
    | 设置为当前年的第几周

    :param {Number} v: 要设置的值

.. method:: GregorianCalendar.prototype.setWeekOfMonth

    | **setWeekOfMonth(v)**
    | 设置为当前月的第几周

    :param {Number} v: 要设置的值

.. method:: GregorianCalendar.prototype.setDayOfYear

    | **setDayOfYear(v)**
    | 设置为当前年中的第几天

    :param {Number} v: 要设置的值

.. method:: GregorianCalendar.prototype.setDayOfWeek

    | **setDayOfWeek(v)**
    | 设置为当前周中的第几天

    :param {Number} v: 要设置的值

.. method:: GregorianCalendar.prototype.setDayOfWeekInMonth

    | **setDayOfWeekInMonth(v)**
    | 设置为当前月的当前周的第几天

    :param {Number} v: 要设置的值

.. method:: GregorianCalendar.prototype.add

    | **add(field, v)**
    | 增加对应日历域的值

    :param {String} field: 要增加的域
    :param {Number} v: 对应域要增加的值

.. method:: GregorianCalendar.prototype.addYear

    | **addYear(v)**
    | 增加日历的年份

    :param {Number} v: 要增加的年份

.. method:: GregorianCalendar.prototype.addMonth

    | **addMonth(v)**
    | 增加日历的月份

    :param {Number} v: 要增加的月份

.. method:: GregorianCalendar.prototype.addDayOfMonth

    | **addDayOfMonth(v)**
    | 增加日历当前月中的某一天

    :param {Number} v: 要增加的天

.. method:: GregorianCalendar.prototype.addHourOfDay

    | **addHourOfDay(v)**
    | 增加当前的天中的哪一小时

    :param {Number} v: 要增加的小时

.. method:: GregorianCalendar.prototype.addMinutes

    | **addMinutes(v)**
    | 增加分钟域的值

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.addSeconds

    | **addSeconds(v)**
    | 增加秒位的值

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.addMilliSeconds

    | **addMilliSeconds(v)**
    | 增加毫秒位的值

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.addWeekOfYear

    | **addWeekOfYear(v)**
    | 增加为当前年的第几周

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.addWeekOfMonth

    | **addWeekOfMonth(v)**
    | 增加为当前月的第几周

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.addDayOfYear

    | **addDayOfYear(v)**
    | 增加为当前年中的第几天

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.addDayOfWeek

    | **addDayOfWeek(v)**
    | 增加为当前周中的第几天

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.addDayOfWeekInMonth

    | **addDayOfWeekInMonth(v)**
    | 增加为当前月的当前周的第几天

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.roll

    | **roll(field, v)**
    | 增加对应日历域的值

    :param {String} field: 要增加的域
    :param {Number} v: 对应域要增加的值

.. method:: GregorianCalendar.prototype.rollYear

    | **rollYear(v)**
    | 增加日历的年份

    :param {Number} v: 要增加的年份

.. method:: GregorianCalendar.prototype.rollMonth

    | **rollMonth(v)**
    | 增加日历的月份

    :param {Number} v: 要增加的月份

.. method:: GregorianCalendar.prototype.rollDayOfMonth

    | **rollDayOfMonth(v)**
    | 增加日历当前月中的某一天

    :param {Number} v: 要增加的天

.. method:: GregorianCalendar.prototype.rollHourOfDay

    | **rollHourOfDay(v)**
    | 增加当前的天中的哪一小时

    :param {Number} v: 要增加的小时

.. method:: GregorianCalendar.prototype.rollMinutes

    | **rollMinutes(v)**
    | 增加分钟域的值

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.rollSeconds

    | **rollSeconds(v)**
    | 增加秒位的值

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.rollMilliSecond

    | **rollMilliSeconds(v)**
    | 增加毫秒位的值

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.rollWeekOfYear

    | **rollWeekOfYear(v)**
    | 增加为当前年的第几周

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.rollWeekOfMonth

    | **rollWeekOfMonth(v)**
    | 增加为当前月的第几周

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.rollDayOfYear

    | **rollDayOfYear(v)**
    | 增加为当前年中的第几天

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.rollDayOfWeek

    | **rollDayOfWeek(v)**
    | 增加为当前周中的第几天

    :param {Number} v: 要增加的值

.. method:: GregorianCalendar.prototype.rollDayOfWeekInMonth

    | **rollDayOfWeekInMonth(v)**
    | 增加为当前月的当前周的第几天

    :param {Number} v: 要增加的值










