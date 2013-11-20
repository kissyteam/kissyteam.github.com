.. currentmodule:: xtemplate

xtemplate 顶层作用域使用示例
======================================

Class
-----------------------------------------------

  * :class:`XTemplate`

xtemplate 顶层作用域使用示例
-----------------------------------------------

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-root-context.js'></script>
    <script>
    KISSY.use('json, gallery/pageNotification/1.0/index', function(S, JSON, PN) {
        var pn = new PN({
            "closeButton": true,
            "positionClass": "page-notification-top-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        });

        window.alert = function() {
            var args = arguments[0];
            args = S.isObject(args) ? JSON.stringify(args) : args.toString();
            pn.success(args);
        };
    });
    </script>


    <p>
        <button onclick='supportRoot();'>测试变量替换</button>
    </p>

.. literalinclude:: /raw/demo/xtemplate/assets/support-root-context.js
    :language: javascript