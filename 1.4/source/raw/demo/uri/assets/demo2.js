KISSY.use('node, uri', function(S, Node, Uri) {

    var $ = Node.all;

    var query = new Uri.Query('year=2013&month=10');

    $('#year').on('click', function() {
        alert(query.get('year'));
    });

    $('#has').on('click', function() {
        alert(query.has('has'));
    });

    $('#set').on('click', function() {
        query.set('month', 12);
    })

    $('#add').on('click', function() {
        query.add('id', Math.floor(Math.random() + 1));
        alert(query.count());
    });

    $('#string').on('click', function() {
        alert("false: " + query.toString(true));
        alert("true: " + query.toString(false));
    });
});