.. currentmodule:: date

GregorianCalendar 使用示例
=============================

Class
-----------------------------------------------

  * :class:`GregorianCalendar`

GregorianCalendar 使用示例
----------------------------------------------

.. code-block:: javascript

    KISSY.use('date/gregorian', function(S, GregorianCalendar) {
        //初始化对象
        var gregorianCalendar = new GregorianCalendar(2013, GregorianCalendar.JUNE, 8, 18, 0, 0, 0);

        //get用法
        console.log(gregorianCalendar.getYear()); //2013
        console.log(gregorianCalendar.getMonth()); //5, 从零开始
        console.log(gregorianCalendar.getDayOfMonth()); //8
        console.log(gregorianCalendar.getHourOfDay()); //18
        console.log(gregorianCalendar.getMinutes()); //0
        console.log(gregorianCalendar.getSeconds()); //0
        console.log(gregorianCalendar.getMilliseconds()); //0
        console.log(gregorianCalendar.getWeekOfYear()); //23

        //set用法
        gregorianCalendar.setYear(2012);
        gregorianCalendar.setMonth(gregorianCalendar.JANUARY); //用数字0-11亦可
        gregorianCalendar.setDayOfMonth(1);
        console.log(gregorianCalendar.getWeekOfYear()); //1

        //add用法
        gregorianCalendar.set(2011, GregorianCalendar.JANUARY, 31);
        console.log(gregorianCalendar.isLeapYear()); //false
        console.log(gregorianCalendar.getYear()); //2011
        console.log(gregorianCalendar.getMonth()); //0
        console.log(gregorianCalendar.getDayOfMonth()); //31

        gregorianCalendar.addYear(1);
        console.log(gregorianCalendar.getYear()); //2012
        console.log(gregorianCalendar.isLeapYear()); //true
        console.log(gregorianCalendar.getMonth()); //0
        console.log(gregorianCalendar.getDayOfMonth()); //31

        gregorianCalendar.addMonth(1);
        console.log(gregorianCalendar.getMonth()); //2
        console.log(gregorianCalendar.getDayOfMonth()); //29

        gregorianCalendar.addYear(1);
        console.log(gregorianCalendar.getMonth()); //2
        console.log(gregorianCalendar.getDayOfMonth()); //28

        //roll用法
        gregorianCalendar.set(2012, GregorianCalendar.FEBRUARY, 28);
        gregorianCalendar.rollMonth(12); //只是月份变动，不影响其他域
        console.log(gregorianCalendar.isLeapYear()); //true
        console.log(gregorianCalendar.getYear()); //2012
        console.log(gregorianCalendar.getMonth()); //2
        console.log(gregorianCalendar.getDayOfMonth()); //28

        //getTime, setTime
        console.log(gregorianCalendar.getTime()); //当前时间

        gregorianCalendar.setTime(123144);
        console.log(gregorianCalendar.getYear()); //1970
        console.log(gregorianCalendar.getMonth()); //0
        console.log(gregorianCalendar.getDayOfMonth()); //1
        console.log(gregorianCalendar.getHourOfDay()); //8
        console.log(gregorianCalendar.getMinutes()); //2
        console.log(gregorianCalendar.getSeconds()); //3
    });