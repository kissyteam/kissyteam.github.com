.. currentmodule:: scroll-ivew

ScrollView Plugin ScrollBar 使用示例
=========================================

Class
-----------------------------------------------

  * :class:`~scroll-view.ScrollBar`

ScrollView Plugin - ScrollBar 使用示例
-----------------------------------------------

.. raw:: html

    <iframe width="100%" height="600" class="iframe-demo" src="/1.4/source/raw/demo/scroll-view/demo3.html"></iframe>

.. code-block:: javascript

    KISSY.use('scroll-view,scroll-view/plugin/scrollbar', function (S, ScrollView, ScrollbarPlugin) {
        S.ready(function () {

            var num=new S.Uri(location.href).getQuery().get('num')||'41';

            num=parseInt(num);

            var str = '';
            for (var i = 1; i < num; i++) {
                str += '<p>line ' + i + '</p>'
            }
            S.all('#thelist').html(str);

            window.scrollView = new ScrollView({
                srcNode: '#wrapper',
                plugins: [new ScrollbarPlugin({})]
            }).render();

            S.all(window).on('resize orientationchange', S.UA.ie < 9 ?
                    S.buffer(scrollView.sync, 30) :
                    scrollView.sync, scrollView);
        });
    });