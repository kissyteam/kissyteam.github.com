.. currentmodule:: tabs


从已有节点创建
======================================

srcNode 初始化
--------------------------------------------------

.. raw:: html

    <iframe width="100%" height="1000" class="iframe-demo" src="/1.4/source/raw/demo/tabs/demo2.html"></iframe>

.. code-block:: javascript

    KISSY.use("tabs", function (S, Tabs) {

        S.all(".ks-tabs").each(function (n) {
            new Tabs({
                srcNode: n
            }).render();
        });

    });