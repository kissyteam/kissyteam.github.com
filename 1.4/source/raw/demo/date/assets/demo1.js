KISSY.use('node, event, date/gregorian', function(S, Node, Event, GregorianCalendar) {
    var $ = Node.all;
    var gregorianCalendar = new GregorianCalendar();
    $("#set").on('click', function() {
        $("input").attr('disabled', 'disabled');
        $(this).attr('disabled', 'disabled');
        gregorianCalendar.setYear(parseInt($("#year").val()));
        gregorianCalendar.setMonth(parseInt($("#month").val())-1); //月份内部表示为0-11
        gregorianCalendar.setDayOfMonth(parseInt($("#day").val()));
        gregorianCalendar.setHourOfDay(parseInt($("#hour").val()));
        gregorianCalendar.setMinutes(parseInt($("#minute").val()));
        gregorianCalendar.setSeconds(parseInt($("#second").val()));
        gregorianCalendar.setMilliseconds(parseInt($("#millisecond").val()));
        $("#gets button").removeAttr('disabled');
    });

    Event.delegate('#gets', 'click', 'button', function(event) {
        var func = $(event.currentTarget).val();
        var value = gregorianCalendar[func]();
        alert(value);
    });

    $("#addYear").on('click', function() {
        gregorianCalendar.addYear(1);
        $("input#year").val(gregorianCalendar.getYear());
    });

    $("#addMonth").on('click', function() {
        gregorianCalendar.addMonth(10);
        $("input#year").val(gregorianCalendar.getYear());
        $("input#month").val(gregorianCalendar.getMonth());
    });

    $("#rollMonth").on('click', function() {
        gregorianCalendar.rollMonth(13);
        $("input#year").val(gregorianCalendar.getYear());
        $("input#month").val(gregorianCalendar.getMonth());
    });

    $("#setNow").on('click', function() {
        gregorianCalendar.setTime(new Date());
        $("input").attr('disabled', 'disabled');
        $("input#year").val(gregorianCalendar.getYear());
        $("input#month").val(gregorianCalendar.getMonth());
        $("input#day").val(gregorianCalendar.getDayOfMonth());
        $("input#hour").val(gregorianCalendar.getHourOfDay());
        $("input#minute").val(gregorianCalendar.getMinutes());
        $("input#second").val(gregorianCalendar.getSeconds());
        $("input#millisecond").val(gregorianCalendar.getMilliseconds());
        $("#gets button").removeAttr('disabled');
    });

});