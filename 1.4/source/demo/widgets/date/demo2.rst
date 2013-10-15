.. currentmodule:: date

DateTimeFormat 使用示例
=============================

Class
-----------------------------------------------

  * :class:`DateTimeFormat`

DateTimeFormat 使用示例
-----------------------------------------------

.. code-block:: javascript

    KISSY.use('date/gregorian, date/format', function(S, GregorianCalendar, DateTimeFormat) {
        var Style = DateTimeFormat.Style;
        var gregorianCalendar = new GregorianCalendar(8*60, null);
        gregorianCalendar.setTime(1381218625945);

        //format方法用法
        var dtf_FULL = DateTimeFormat.getDateTimeInstance(Style.FULL, Style.FULL);
        var dtf_LONG = DateTimeFormat.getDateTimeInstance(Style.LONG, Style.LONG);
        var dtf_MEDIUM = DateTimeFormat.getDateTimeInstance(Style.MEDIUM, Style.MEDIUM);
        var dtf_SHORT = DateTimeFormat.getDateTimeInstance(Style.SHORT, Style.SHORT);

        var tf_FULL = DateTimeFormat.getTimeInstance(Style.FULL); //只格式化时间

        var df_MEDIUM = DateTimeFormat.getDateInstance(Style.MEDIUM); //只格式化日期

        var instance = DateTimeFormat.getInstance(); //相当于DateTimeFormat.getDateTimeInstance(Style.SHORT, Style.SHORT);

        console.log(dtf_FULL.format(gregorianCalendar)); //2013年10月8日 星期二 下午03时50分25秒 GMT+0800
        console.log(dtf_LONG.format(gregorianCalendar)); //2013年10月8日 下午03时50分25秒
        console.log(dtf_MEDIUM.format(gregorianCalendar)); //2013-10-8 15:50:25
        console.log(dtf_SHORT.format(gregorianCalendar)); //13-10-8 下午3:50

        console.log(tf_FULL.format(gregorianCalendar)); //下午03时50分25秒 GMT+0800

        console.log(df_MEDIUM.format(gregorianCalendar)); //2013-10-8

        console.log(instance.format(gregorianCalendar)); //13-10-8 下午3:50

        //parse方法用法
        var dateStr = '2013年10月8日 星期二 下午03时50分25秒 GMT+0800';
        var cal = dtf_FULL.parse(dateStr); //需格式对应

        console.log(cal.getYear()); //2013
        console.log(cal.getMonth()); //9, 从零开始
        console.log(cal.getDayOfMonth()); //8
        console.log(cal.getHourOfDay()); //15
        console.log(cal.getMinutes()); //50
        console.log(cal.getSeconds()); //25
        console.log(cal.getMilliseconds()); //0
        console.log(cal.getWeekOfYear()); //41
    });
