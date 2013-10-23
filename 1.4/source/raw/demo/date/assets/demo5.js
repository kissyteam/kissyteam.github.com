KISSY.use('node, date/gregorian, date/format', function(S, Node, GregorianCalendar, DateTimeFormat) {
    var $ = Node.all;
    var Style = DateTimeFormat.Style;

    // Custom locale
    var locale = {
        timezoneOffset: 8 * 60,
        firstDayOfWeek: 1,
        minimalDaysInFirstWeek: 1,

        // DateFormatSymbols
        eras: ['公元前', '公元'],
        months: ['1月', '2月', '3月', '4月', '5月', '6月',
            '7月', '8月', '9月', '10月', '11月', '12月'],
        shortMonths: ['1月', '2月', '3月', '4月', '5月', '6月',
            '7月', '8月', '9月', '10月', '11月', '12月'],
        weekdays: ['礼拜天', '礼拜一', '礼拜二', '礼拜三', '礼拜四',
            '礼拜五', '礼拜六'],
        shortWeekdays: ['周日', '周一', '周二', '周三', '周四', '周五',
            '周六'],
        ampms: ['上午', '下午'],
        datePatterns: ["yyyy'年'M'月'd'日' EEEE", "yyyy'年'M'月'd'日'", "yyyy-M-d", "yy-M-d"], //FULL, LONG, MEDIUM, SHORT
        timePatterns: ["ahh'时'mm'分'ss'秒' 'GMT'Z", "ahh'时'mm'分'ss'秒'", "H:mm:ss", "ah:mm"], //FULL, LONG, MEDIUM, SHORT
        dateTimePattern: '{date} {time}'
    };

    var defaultStyle = DateTimeFormat.getDateTimeInstance(Style.FULL, Style.FULL);
    var customStyle = DateTimeFormat.getDateTimeInstance(Style.FULL, Style.FULL, locale);
    var Calendar = new GregorianCalendar(8*60, null);
    Calendar.setTime(new Date());

    $("#default").text(defaultStyle.format(Calendar));
    $("#custom").text(customStyle.format(Calendar));

});