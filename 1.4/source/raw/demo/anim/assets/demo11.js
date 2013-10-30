KISSY.use('node, anim', function (S, Node, Anim) {
    var start = S.now();
    var t = Node.all('#t')[0];
    var anim = new Anim(t, {width: 300}, {
        duration: 1,
        complete: function () {
            alert('complete');
            S.log(this);
            alert('complete use time: ' + (S.now() - start));
        }
    }).run()
            .progress(function(){
                console.log(arguments[0]);
            })
            .then(function () {
                alert('then');
                S.log(anim);
                alert('then use time: ' + (S.now() - start));
            });
});