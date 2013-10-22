.. currentmodule:: scroll-ivew

ScrollView Drag Snap使用示例
=============================

Class
-----------------------------------------------

  * :class:`~scroll-view.Drag`

ScrollView Drag Snap使用示例
-----------------------------------------------

    请在移动浏览器上查看 demo

.. raw:: html

    <iframe width="100%" height="400" class="iframe-demo" src="/1.4/source/raw/demo/scroll-view/demo2.html"></iframe>

.. code-block:: javascript

    KISSY.use('scroll-view', function (S, ScrollView) {
        var content = '';
        for (var i = 0; i < 10; i++) {
            content += '<p>This is ' + i + ' block</p>';
        }

        new ScrollView({
            width: 320,
            height: 219,
            snap:'p',
            content: content
        }).render();

        S.all('#destroy').on('click', function () {
            scrollView.destroy();
            S.all('#destroy').attr('disabled', true);
        });
    });