KISSY.use('node, path', function(S, Node, Path) {
    var $ = Node.all;
    $('#base').on('click', function() {
        alert(Path.basename('http://www.taobao.com/index.html','.html'));
    });

    $('#dir').on('click', function() {
        alert(Path.dirname('/home/bachi/daily/index.html'));
    });

    $('#ext').on('click', function() {
        alert(Path.extname('/home/bachi/daily/index.html'));
    });

    $('#normal').on('click', function() {
        alert(Path.normalize('x/y/../z'));
    });

    $('#relative').on('click', function() {
        alert(Path.relative('x/t/z','x/'));
    });

    $('#resolve').on('click', function() {
        alert(Path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
    });
});