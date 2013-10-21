.. currentmodule:: scroll-ivew

ScrollView Plugin 使用示例
=============================

Class
-----------------------------------------------

  * :class:`~scroll-view.ScrollBar`
  * :class:`~scroll-view.PullToRefresh`

ScrollView Plugin - ScrollBar 使用示例
-----------------------------------------------

.. raw:: html

    <iframe width="100%" height="600" class="iframe-demo" src="/1.4/source/raw/demo/scroll-view/demo3.html"></iframe>

.. code-block:: javascript

    KISSY.use('scroll-view,scroll-view/plugin/scrollbar', function (S, ScrollView, ScrollbarPlugin) {
        S.ready(function () {

            if (1) {
                var content = '';
                for (var i = 0; i < 23; i++) {
                    content += '<p class="row">' + i + ': ' + new Array(10).join(' long ') + '</p>';
                }

                S.all('#native').html(content);

                window.scrollView = new ScrollView({
                    width: 320,
                    height: 219,
                    plugins: [new ScrollbarPlugin({
                        autoHideX: true,
                        autoHideY: false
                    })],
                    content: content
                }).render();

                // notice: swipe can trigger too
                scrollView.get('el').on('swipe', function (e) {
                    S.log(e.direction);
                });

                S.all('#destroy').on('click', function () {
                    scrollView.destroy();
                    S.all('#destroy').attr('disabled', true);
                });

                S.all('#disable').on('click', function () {
                    scrollView.set('disabled', true);
                });

                S.all('#enable').on('click', function () {
                    scrollView.set('disabled', false);
                });

                S.all('<div style="height:100px"></div>').appendTo('body');


                new ScrollView({
                    width: 320,
                    scrollLeft: 50,
                    scrollTop: 400,
                    height: 219,
                    plugins: [new ScrollbarPlugin({
                        autoHideX: true,
                        autoHideY: false
                    })],
                    content: content
                }).render();
            }

            S.all('<h2>un-scrollable test</h2>').appendTo('body');


            new ScrollView({
                width: 320,
                height: 219,
                content: '<p>test</p>'
            }).render();

            S.all('<div style="height:1000px"></div>').appendTo('body');

        });
    });

ScrollView Plugin - PullToRefresh 使用示例
-----------------------------------------------

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



