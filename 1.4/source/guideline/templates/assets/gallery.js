KISSY.add('gallery-js', function (S,Node,DataLazyload) {
    var $ = Node.all;
    var $list = $('.J_Lazyload');
    if($list.length){
        new DataLazyload({
            container: $list,
            placeholder:'http://a.tbcdn.cn/kissy/1.0.0/build/imglazyload/spaceball.gif',
            execScript: false
        });
    }

}, {
    requires: ['node','kg/datalazyload/2.0.0/']
});

KISSY.use('gallery-js');