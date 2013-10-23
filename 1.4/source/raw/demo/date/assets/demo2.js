KISSY.use('node, event, date/gregorian, date/format', function(S, Node, Event, GregorianCalendar, DateTimeFormat) {
    var $ = Node.all;
    var Style = DateTimeFormat.Style;
    var currentStyle = "dtf_FULL";
    var gregorianCalendar = new GregorianCalendar(8*60, null);
    var calendar;
    gregorianCalendar.setTime(new Date());

    var formatStyle = {
        dtf_FULL: DateTimeFormat.getDateTimeInstance(Style.FULL, Style.FULL), //日期时间完整格式
        dtf_LONG: DateTimeFormat.getDateTimeInstance(Style.LONG, Style.LONG), //日期时间长格式
        dtf_MEDIUM: DateTimeFormat.getDateTimeInstance(Style.MEDIUM, Style.MEDIUM), //日期时间中长度格式
        dtf_SHORT: DateTimeFormat.getDateTimeInstance(Style.SHORT, Style.SHORT), //日期时间短长度格式
        tf_FULL: DateTimeFormat.getTimeInstance(Style.FULL), //只格式化时间
        df_MEDIUM: DateTimeFormat.getDateInstance(Style.MEDIUM), //只格式化日期
        instance: DateTimeFormat.getInstance() //相当于DateTimeFormat.getDateTimeInstance(Style.SHORT, Style.SHORT);
    };
    //format方法用法
    $("#str").text(formatStyle["dtf_FULL"].format(gregorianCalendar));

    Event.delegate("#buttons", 'click', 'button', function(event) {
        currentStyle = $(event.currentTarget).val();
        var str = formatStyle[currentStyle].format(gregorianCalendar);
        $("#str").text(str);
    });

    //parse方法用法
    $("#parse").on('click', function(event) {
        var str = $("#str").text();
        calendar = formatStyle[currentStyle].parse(str); //需用对应的格式去解析
        $("#gets button").removeAttr('disabled');
    });

    Event.delegate('#gets', 'click', 'button', function(event) {
        var func = $(event.currentTarget).val();
        var value = calendar[func]();
        alert(value);
    });
});