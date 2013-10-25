KISSY.use('node, event, uri', function(S, Node, Event, Uri) {
    var $ = Node.all;

    var one = new Uri('http://www.g.cn/x');
    $("#result").text(one.toString());

    $("#resolve").on('click', function(event) {
        alert(one.resolve('foo').toString());
    });

    Event.delegate("#gets", 'click', 'button', function(event) {
        var func = $(event.currentTarget).val();
        alert(one[func]());
    });

    Event.delegate("#sets", 'click', 'button', function(event) {
        var func = $(event.currentTarget).val();
        var param = $(event.currentTarget).attr('data-param');

        one[func](param);

        $("#result").text(one.toString());
    });

    var result = new Uri('http://www.g.cn/x?x=1#y=2').isSameOriginAs(new Uri('http://www.g.cn:88/x?x=1#y=2'));
    $("#origin").text('http://www.g.cn/x?x=1#y=2和http://www.g.cn:88/x?x=1#y=2同源否？' + result);

});