KISSY.use("waterfall,node,ajax", function (S, Waterfall, Node,IO) {
    var $ = Node.all;

    var tpl = ($('#tpl').html()),
        nextpage = 1,
        waterfall = new Waterfall.Loader({
            container:"#ColumnContainer",
            // 窗口大小变化时的调整特效
            adjustEffect:{
                duration:0.5,
                easing:"easeInStrong"
            },
            load:function (success, end) {
                $('#loadingPins').show();
                IO({
                    data:{
                        'method':'flickr.photos.search',
                        'api_key':'5d93c2e473e39e9307e86d4a01381266',
                        'tags':'rose',
                        'page':nextpage,
                        'per_page':20,
                        'format':'json'
                    },
                    url:'http://api.flickr.com/services/rest/',
                    dataType:"jsonp",
                    jsonp:"jsoncallback",
                    success:function (d) {
                        // 如果数据错误, 则立即结束
                        if (d['stat'] !== 'ok') {
                            alert('load data error!');
                            end();
                            return;
                        }
                        // 如果到最后一页了, 也结束加载
                        nextpage = d['photos'].page + 1;
                        if (nextpage > d['photos'].pages) {
                            end();
                            return;
                        }
                        // 拼装每页数据
                        var items = [];
                        S.each(d['photos']['photo'], function (item) {
                            item.height = Math.round(Math.random() * (300 - 180) + 180); // fake height
                            items.push(new S.Node(S.substitute(tpl,item)));
                        });
                        success(items);
                    },
                    complete:function () {
                        $('#loadingPins').hide();
                    }
                });
            },
            minColCount:2,
            colWidth:228
        });

    // scrollTo
    $('#BackToTop').on('click', function (e) {
        e.halt();
        e.preventDefault();
        $(window).stop();
        $(window).animate({
            scrollTop:0
        }, 1, "easeOut");
    });

    $("#ColumnContainer").delegate("click", ".del", function (event) {
        var w = $(event.currentTarget).parent(".ks-waterfall");
        waterfall.removeItem(w, {
            effect:{
                easing:"easeInStrong",
                duration:0.1
            },
            callback:function () {
                alert("删除完毕");
            }
        });
    });


    $("#ColumnContainer").delegate("click", ".grow", function (event) {
        var w = $(event.currentTarget).parent(".ks-waterfall");
        waterfall.adjustItem(w, {
            effect:{
                easing:"easeInStrong",
                duration:0.1
            },
            process:function () {
                w.append("<p>i grow height by 100</p>");
            },
            callback:function () {
                alert("调整完毕");
            }
        });
    });
});
