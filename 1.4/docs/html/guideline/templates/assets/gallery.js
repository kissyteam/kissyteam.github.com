KISSY.add('gallery-js', function (S,Node,DataLazyload, IO) {
    var $ = Node.all,
        win = $(window);

    function fixSidebarHeight(){
        var d = $('#content').height();
        $('#sidebar').css({ "min-height": d+40 });
    }

    function sticky($target){
        var top = $target.offset().top,
            scrollTop = 0,
            stickyCls = 'sticky';

        win.on('scroll', S.buffer(function(){
            scrollTop = win.scrollTop();
            if (top < scrollTop) {
                $target.addClass(stickyCls);
            } else {
                $target.removeClass(stickyCls);
            }
        },1000/60));
    }

    function appendCat(){
        var str = '<ul>';
        $('.J_Floor').each(function (item) {
            str += S.substitute('<li><a href="#" class="J_ScrollTo" data-scrollto="{to}">{name}</a></li>', {
                name: item.text(),
                to: item.offset().top
            });
        });
        str += '</ul>';
        var $cat = $(str);
        $('#sidebar').append($cat);

        $('.J_ScrollTo').on('click', function (e) {
            e.preventDefault();
            win.animate({scrollTop: $(e.target).attr('data-scrollto')}, 0.5);
        });

        sticky($cat);
    }

    IO({
        url:'./coms-list.html',
        type:"get",
        dataType:'html',
        success: function (d) {

            $('#content article').append(d);

            var $list = $('.J_Lazyload');
            if ($list.length) {
                new DataLazyload({
                    container: $list,
                    placeholder: 'http://a.tbcdn.cn/kissy/1.0.0/build/imglazyload/spaceball.gif',
                    execScript: false
                });
            }
            appendCat();
            fixSidebarHeight();
        },
        error: function(d){
            fixSidebarHeight();
        }
    });

}, {
    requires: ['node','kg/datalazyload/2.0.0/', 'io']
});

KISSY.use('gallery-js');