.. currentmodule:: xtemplate

xtemplate 宏命令使用示例
======================================

Class
-----------------------------------------------

  * :class:`XTemplate`

xtemplate 宏命令使用示例
-----------------------------------------------

.. raw:: html

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

        KISSY.getScript('assets/support-macro.js');
    });
    </script>

    <p>
        <button onclick='supportMacro();'>测试变量替换</button>
    </p>

.. literalinclude:: /raw/demo/xtemplate/assets/support-macro.js
    :language: javascript

xtemplate 使用父模板的宏命令
------------------------------------------------

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-macro-parent.js'></script>

    <p>
        <button onclick='supportMacro();'>测试变量替换</button>
    </p>

.. literalinclude:: /raw/demo/xtemplate/assets/support-macro-parent.js
    :language: javascript

xtemplate 使用子模板的宏命令
------------------------------------------------

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-macro-sub.js'></script>

    <p>
        <button onclick='supportMacro();'>测试变量替换</button>
    </p>

.. literalinclude:: /raw/demo/xtemplate/assets/support-macro-sub.js
    :language: javascript
