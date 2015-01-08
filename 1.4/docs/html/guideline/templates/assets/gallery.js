KISSY.add('gallery-js', function (S,Node,DataLazyload, IO, ComboBox, JSON) {
    var $ = Node.all,
        win = $(window),
        domain = 'kissygalleryteam.github.io';

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

    function renderSearchInput() {
        var comboBox, data, tmpl;
        var $comboBox = S.one("#combobox");
        tmpl = "<a href='{url}'><div class='item-wrapper'>{name}<span> by {userName}</span></div></a>";

        var $searchData = $('#J_SearchData'),
            originData = [];

        if ($searchData.length > 0) {
            originData = JSON.parse($searchData.html());
        }

        $('#J_KISSYUI .name').each(function(item){
            originData.push({
                name: item.html(),
                userName: 'kissyteam',
                url: item.parent('a').attr('href')
            });
        });

        data = new ComboBox.LocalDataSource({
            data: originData,
            parse: function (query, results) {
                var tmpData = [];
                S.each(originData, function (item) {
                    if (item.name.indexOf(query) > -1) {
                        tmpData.push(item);
                    }
                });
                return tmpData;
            }
        });
        comboBox = new ComboBox({
            prefixCls: 'search-',
            placeholder: '点我搜索',
            srcNode: $comboBox,
            dataSource: data,
            format: function (query, results) {
                var ret;
                ret = [];
                S.each(results, function (r) {
                    var item;
                    if(!r.url){
                        r.url = 'http://' + domain + '/' + r.name + '/doc/guide/index.html';
                    }
                    item = {
                        textContent: r.name,
                        content: S.substitute(tmpl, r)
                    };
                    return ret.push(item);
                });
                return ret;
            }
        });
        comboBox.on('click', function (e) {
            var item = e.target;
            var data = item.get('value');
            location.href = 'http://kpm.taobao.net/' + data.name + '/doc/guide/index.html';
        });
        comboBox.render();
    }

    function appendCat() {
        var str = '<ul>',
            allCount = 0,
            count = 0;
        $('.J_Floor').each(function (item) {
            count = item.parent().next('.component-list').all('li').length;
            str += S.substitute('<li><a href="#" class="J_ScrollTo" data-scrollto="{to}">{name}({num}枚)</a></li>', {
                name: item.text(),
                to: item.offset().top,
                num: count
            });
            allCount += count;
        });
        str += '</ul>';
        var $cat = $(str);
        $('#sidebar').append($cat);

        $('.J_ScrollTo').on('click', function (e) {
            e.preventDefault();
            win.animate({scrollTop: $(e.target).attr('data-scrollto')}, 0.5);
        });

        $('#q').attr('placeholder', allCount+'枚纯优秀组件，你值得搜索');

        sticky($cat);
        renderSearchInput();
    }

    var $coms = $('#content article');
    IO({
        url:'./coms-list.html',
        type:"get",
        cache: false,
        dataType:'html',
        success: function (d) {

            $coms.append($(d));
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
            IO.getJSON('./tmp/coms/config.json',function(data){
                $coms.all('.item-link').each(function(item){
                    var url = item.attr('href');
                    domain = data.domain;
                    item.attr('href', url.replace(/kissygalleryteam\.github\.io/g, data.domain));
                });
            });
        },
        error: function(d){
            fixSidebarHeight();
        }
    });

}, {
    requires: ['node','kg/datalazyload/2.0.0/', 'io', 'combobox', 'json']
});

KISSY.use('gallery-js');