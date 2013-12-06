.. _xtemplate_demo:

.. currentmodule:: xtemplate

xtemplate 使用示例
======================================

    .. raw:: html

        <script src='http://g.tbcdn.cn/kissy/k/1.4.1/seed.js' data-config="{combine:true}"></script>


    .. note::

        推荐使用 :ref:`离线编译 <xtemplate_compile>` 。

Class
-----------------------------------------------

  * :class:`XTemplate`

Demos
-----------------------------------------------

支持简单的变量替换
`````````````````````````````````````

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
    });
    </script>


代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-variable.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-variable.js'></script>

    <p>
        <button onclick='supportVariable();'>测试变量替换</button>
    </p>



支持 if 语句
`````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-if.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-if.js'></script>

    <p>
        <button onclick='supportIf();'>测试 if 语句</button>
    </p>

支持 if not 语句
`````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-if-not.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-if-not.js'></script>

    <p>
        <button onclick='supportIfNot();'>测试 if not 语句</button>
    </p>

支持 each 语句循环对象数组
`````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-each-object.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-each-object.js'></script>

    <p>
        <button onclick='supportEachObject();'>测试 each 语句循环对象数组</button>
    </p>

支持 each 语句循环简单数组
`````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-each-array.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-each-array.js'></script>

    <p>
        <button onclick='supportEachArray();'>测试 each 语句循环简单数组</button>
    </p>


支持 each 中数据层次间的相对位置访问
`````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-parent.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-parent.js'></script>

    <p>
        <button onclick='supportParent();'>测试 each 中数据层次间的相对位置访问</button>
    </p>


支持 with 语句
`````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-with-object.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-with-object.js'></script>

    <p>
        <button onclick='supportWithObject();'>测试 with 语句</button>
    </p>

支持 with 中数据层次间的相对位置访问
`````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-with-parent.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-with-parent.js'></script>

    <p>
        <button onclick='supportWithParent();'>测试 with 中数据层次间的相对位置访问</button>
    </p>


支持注释
````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-comment.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-comment.js'></script>

    <p>
        <button onclick='supportComment();'>测试注释</button>
    </p>


支持转义括号
````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-escape.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-escape.js'></script>

    <p>
        <button onclick='supportEscape();'>测试括号转义</button>
    </p>


支持 html 转义
````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-escape-html.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-escape-html.js'></script>

    <p>
        <button onclick='supportEscapeHtml();'>测试 html 转义</button>
    </p>


支持全局行内命令扩展
````````````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-global-command.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-global-command.js'></script>

    <p>
        <button onclick='supportGlobalCommand();'>测试全局行内命令扩展</button>
    </p>

支持全局块状命令扩展
````````````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-global-block-command.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-global-block-command.js'></script>

    <p>
        <button onclick='supportGlobalBlockCommand();'>测试全局块状命令扩展</button>
    </p>

支持局部行内命令扩展
````````````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-local-command.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-local-command.js'></script>

    <p>
        <button onclick='supportLocalCommand();'>测试局部行内命令扩展</button>
    </p>

支持局部块状命令扩展
````````````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-local-block-command.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-local-block-command.js'></script>

    <p>
        <button onclick='supportLocalBlockCommand();'>测试局部块状命令扩展</button>
    </p>


局部后缀名判断命令扩展
````````````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/endsWith-command.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/endsWith-command.js'></script>

    <p>
        <button onclick='endsWithCommand();'>测试局部后缀名判断命令扩展</button>
    </p>


支持简单表达式作为变量
````````````````````````````````````````````

目前支持 ``+`` ``-`` ``*`` ``/`` ``%``

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-expression-variable.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-expression-variable.js'></script>

    <p>
        <button onclick='supportExpressionVariable();'>测试简单表达式作为变量</button>
    </p>

支持关系表达式
````````````````````````````````````````````

目前支持 ``===`` ``!==`` ``>`` ``>=`` ``<`` ``<=``

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-relational-expression.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-relational-expression.js'></script>

    <p>
        <button onclick='supportRelationalExpression();'>测试关系表达式</button>
    </p>


支持 each 中的关系表达式
``````````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-relational-expression-each.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-relational-expression-each.js'></script>

    <p>
        <button onclick='supportRelationalExpressionEach();'>测试 each 中的关系表达式</button>
    </p>


支持 with 中的关系表达式
``````````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-relational-expression-with.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-relational-expression-with.js'></script>

    <p>
        <button onclick='supportRelationalExpressionWith();'>测试 with 中的关系表达式</button>
    </p>


支持 set 设置变量
``````````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-set.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-set.js'></script>

    <p>
        <button onclick='supportSet();'>测试 set 设置变量</button>
    </p>


支持 mustache 形式的 object
```````````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-mustache-object.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-mustache-object.js'></script>

    <p>
        <button onclick='supportMustacheObject();'>测试 mustache 形式的 object</button>
    </p>


支持 mustache 形式的 array
```````````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-mustache-array.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-mustache-array.js'></script>

    <p>
        <button onclick='supportMustacheArray();'>测试 mustache 形式的 array</button>
    </p>


支持未闭合标签报错
```````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-detect-unclosed.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-detect-unclosed.js'></script>

    <p>
        <button onclick='supportDetectUnclosed();'>测试未闭合标签报错</button>
    </p>


支持不存在属性警告
```````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-warn-about-missing.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-warn-about-missing.js'></script>

    <p>
        <strong>打开控制台</strong><br/>
        <button onclick='supportWarnAboutMissing();'>测试未闭合标签报错</button>
    </p>

支持标签不匹配报错
```````````````````````````````````````

代码:

.. literalinclude:: /raw/demo/xtemplate/assets/support-detect-unmatch.js
    :language: javascript

演示：

.. raw:: html

    <script src='/1.4/source/raw/demo/xtemplate/assets/support-detect-unmatch.js'></script>

    <p>
        <button onclick='supportDetectUnMatch();'>测试标签不匹配报错</button>
    </p>