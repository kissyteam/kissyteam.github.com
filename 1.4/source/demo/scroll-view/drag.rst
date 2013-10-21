.. currentmodule:: scroll-ivew

ScrollView Drag 使用示例
=============================

Class
-----------------------------------------------

  * :class:`~scroll-view.Drag`

ScrollView Drag 使用示例
-----------------------------------------------

.. raw:: html

    <iframe width="100%" height="1000" class="iframe-demo" src="/1.4/source/raw/demo/scroll-view/demo2.html"></iframe>

.. code-block:: javascript

    KISSY.use('scroll-view/drag', function (S, ScrollView) {
        var content = '';
        for (var i = 0; i < 10; i++) {
            content += '<p>' + i + '</p>';
        }
        content += '<textarea rows="10" cols="20"></textarea>';
        for (i = 11; i < 23; i++) {
            content += '<p>' + i + '</p>';
        }

        S.all('#native').html(content);

        var scrollView = new ScrollView({
            width: 320,
            height: 219,
            content: content
        }).render();

        S.all('<h2>snap test</h2>').appendTo('body');

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