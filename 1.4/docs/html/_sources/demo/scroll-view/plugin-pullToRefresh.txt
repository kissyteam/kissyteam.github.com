.. currentmodule:: scroll-ivew

ScrollView Plugin PullToRefresh 使用示例
===============================================

Class
-----------------------------------------------

  * :class:`~scroll-view.PullToRefresh`

ScrollView Plugin - PullToRefresh 使用示例
-----------------------------------------------

    请在移动浏览器下查看 demo

.. raw:: html

    <iframe width="100%" height="600" class="iframe-demo" src="/1.4/source/raw/demo/scroll-view/demo4.html"></iframe>

.. code-block:: javascript

    KISSY.use('scroll-view,scroll-view/plugin/scrollbar,' +
            'scroll-view/plugin/pull-to-refresh', function (S, ScrollView, ScrollbarPlugin, PullToRefresh) {
        S.ready(function () {

            var num = new S.Uri(location.href).getQuery().get('num') || '41';

            num = parseInt(num);

            var str = '';
            for (var i = 1; i < num; i++) {
                str += '<p>line ' + i + '</p>'
            }
            S.all('#thelist').html(str);

            window.scrollView = new ScrollView({
                srcNode: '#wrapper',
                plugins: [ ScrollbarPlugin,
                    new PullToRefresh({
                        loadFn: function (callback) {
                            setTimeout(function () {
                                scrollView.get('contentEl')
                                        .prepend('<p>line ' + i++ + '</p>');
                                scrollView.sync();
                                callback();
                            }, 500);
                        }
                    })
                ]
            }).render();

            S.all(window).on('resize orientationchange',
                    scrollView.sync, scrollView);
        });
    });



