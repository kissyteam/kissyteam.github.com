KISSY 源码规范
===============================

有疑问欢迎留言反馈或 `邮件 <yiminghe@gmail.com>`_ 交流.

..  note::

    提交到  https://github.com/kissyteam/kissy 中的代码请遵循此规范.

    推荐下载使用 `kissy idea 配置 </1.4/source/tutorials/style-guide/idea-settings-kissy.jar>`_ .

命名
----------------------------------

文件与模块
```````````````````````

#. 文件名称使用小写表示，复合词用 ``-`` 分隔，例如 ``attr.js`` , ``iframe-transport.js`` .

#. 所有的代码以模块形式组织，模块名如果写的话需要和文件路径保持一致，例如

    .. code-block:: javascript

        KISSY.add('ajax/iframe-transport', function () {
        });


变量、类与方法
`````````````````````

#. 对类，命名空间使用 PascalCasing， 例如 ``MenuButton`` , ``Overlay`` .

#. 即使缩略词也用 PascalCasing，例如 ``HtmlParser`` , ``Dom`` , ``Io``

    .. note::

        由于历史原因， KISSY 对于这点比较混乱，以后代码请遵从该规范


#. 对常量使用大写命名，复合词使用 ``_`` 分隔，例如 ``MAX_COMBO_URL_LENGTH`` .

#. 对变量，非私有的成员函数，成员对象，局部变量使用 camelCasing，例如

    .. code-block:: javascript

        var domAttribute = 'type';
        function MenuButton() {
        }
        MenuButton.prototype.alignWithEl = true;
        /**
         * @protected
         */
        MenuButton.prototype.handleClickInternal = function() {};

#. 私有成员函数以 ``_`` 开头，推荐放入闭包中，使用 camelCasing，例如

    .. code-block:: javascript

        KISSY.add('dom', function () {
            var DOM = {
                width: function() {
                    return this._getWidth();
                },
                _getWidth: function() {

                },
                height: function() {
                    return getHeight(this);
                }
            };
            function getHeight() {

            }
        });


css 类名
````````````````````````````````

类名小写，复合词间用 ``-`` 分离，组件以 ``ks-`` 作为默认前缀， 形容词放在前，状态词放后，例如

.. code-block:: css

    .ks-toggle-button-checked

    .kss-check-tree-node-checked


注释
-----------------------------------------------------------------

#. 使用 ``/** xx */`` 注释表示需要出现在文档中的注释，除此之外不要使用 ``/** xx */`` 注释，
#. 注释使用 `jsduck <https://github.com/senchalabs/jsduck>`_ 规范，例如

    .. code-block:: javascript

        /**
         * @class Overlay
         */
        function Overlay() {

        }


#. 用 ``//`` 表示一般性的单行注释，例如

    .. code-block:: javascript

        // get original offset
        var originalOffset = node.offset();

#. 用 ``/* */`` 表示一般性的多行注释，例如

    .. code-block:: javascript

        /*
           adjust alignment, for example:
           http://docs.kissyui.com
        */
        var x = overlay.set('align', {});


代码组织
----------------------------------------------

#. 一个模块文件中不要包含多个公开的类，例如

    不要这样：

    .. code-block:: javascript

        KISSY.add('overlay', function () {
            function Overlay(){

            }

            function Dialog(){

            }
        });

    要这样分成两个模块（文件）：

    .. code-block:: javascript

        KISSY.add('overlay', function () {
            function Overlay(){

            }
        });


        KISSY.add('overlay/dialog', function () {
            function Dialog(){

            }
        });


组件模块请按照以下的顺序组织：

#. 模块变量声明
#. 构造器
#. 公用成员函数
#. 保护性成员函数
#. 私有成员函数
#. 属性( ATTRS )
#. 模块私有函数

例如：

.. code-block:: javascript

    KISSY.add(function (S, Component) {

        var DOM = S.DOM;

        /**
         * @class Button
         */
        var Button = Component.Controller.extend({

            /**
             * @public
             */
            show: function(){

            },
            /**
             * @protected
             */
            handleClickInternal: function(){

            },

            _doClick: function(){

            }
        },{
            ATTRS:{
                /**
                 * @type String
                 */
                content: {}
            }
        });

        // ------------------------- private

        function onHover() {

        }

    }, {
        requires:['Component']
    });


在模块代码的各个部分使用字母顺序排列。

一般规则
---------------------------------------

长度
``````````````````````````````````````

请确保每行不要超过 80 个字符，必要时进行换行


函数参数长度
``````````````````````````````

如果函数参数长度一行超过 80 个字符，那么请每个参数独占一行，并以 4 个空格缩进。例如

.. code-block:: javascript

    var x.y.z = veryLongLongLongLongLongLongLong(
        veryLongveryLongveryLongveryLong,
        veryLongveryLongveryLongveryLongveryLong,
        veryLongveryLongveryLongvery) {
        // ...
    };


引号
``````````````````````````````

尽可能使用单引号，而不是双引号；例如

.. code-block:: javascript

    // 推荐
    var x = '<a href="://taobao.com">';

.. code-block:: javascript

    // 不推荐
    var x="<a href='://taobao.com'>";

大括号用法
``````````````````````````````````````````


#.  大括号后请换行.

#.  结束大括号需要和开始大括号的那一行开头语句对齐.

#.  如果后面没有开始大括号，那么结束大括号需要单独占一行

        .. code-block:: javascript

            if (UA.ie) {
                alert('i'm ie');
            }

#. 大括号内只包含一行语句的可以不换行，例如

    .. code-block:: javascript

        Draggable.ATTRS = {
            node: {
                getter: function (selector) { return S.all(selector); }
            }
        };

#. 如果后面没有 while else else if 等， 那么结束大括号需要单独占一行

    .. code-block:: javascript

        if (UA.ie) {
            do {
                doIe();
            } while(i>0);
        }

#. 即使只有一条语句，也请加括号。 例如

    .. code-block:: javascript

        for (var i = 0; i < 100; i++) {
            doSomething();
        }

空格用法
``````````````````````````````````````````

#. 如果大括号不换行，那么需要在 ``{`` 后和 ``}`` 前加入空格，例如

    .. code-block:: javascript

        var x = { getter: function () { return 1; } };


#. 如果 ``)`` 不是 ``;`` ， 那么 ``(`` 前和 ``)`` 后要加入空格，例如应当

    .. code-block:: javascript

        if (UA.ie) {

        }

        function x() {

        }

#. 在函数的参数间请加入空格

    .. code-block:: javascript

        function offset(el, value) {

        }

        offset(el, 10);

#. ``(`` 后与 ``)`` 前不要加入空格，例如应该

    .. code-block:: javascript

        offset(x, 10);

    而不是

    .. code-block:: javascript

        offset( x, 10 );


#. 函数调用和 ``(`` 不要加入空白，例如应该

    .. code-block:: javascript

        offset(x,10);

    而不是

    .. code-block:: javascript

        offset (x,10);

#. ``[`` 后和 ``]`` 前不要加上空格，例如应该

    .. code-block:: javascript

        var x = [1, 2];

    而不是

    .. code-block:: javascript

        var x = [ 1, 2 ];

#. ``=`` ``||`` ``==`` 等二元运算符前后都请加入空格，例如应该

    .. code-block:: javascript

        var x = [1,2];

        if (i == 2) {

        }

        for (var i = 0; i < 2; i++) {

        }

    而不是

    .. code-block:: javascript

        var x=[1,2];

        if (i==2) {

        }

        for (var i=0; i<2; i++) {

        }


#. 一元操作符后不要有空白，例如应该

    .. code-block:: javascript

        if (!x) {

        }

    而不是

    .. code-block:: javascript

        if (! x) {

        }

#. 对象中 ``:`` 与属性名间不要有空格，与属性值间要有空格，例如

    .. code-block:: javascript

        {
            x: 1
            y: function() {
                return 2;
            }
        }


缩进
`````````````````````````````````````````

#. 使用连续的4个空白字符表示缩进

#. 不要使用 tab 来表示缩进

#. 对整块内容进行缩进，例如应该

    .. code-block:: javascript

        if (!x) {
            alert(1);
            alert(2);
        }

    而不是

    .. code-block:: javascript

        if (!x) {
            alert(1);
        alert(2);
        }


#. 即使没有大括号，在一定情况下也要缩进，例如

    .. code-block:: javascript

        switch (x) {
            case 1:
                alert(1);
                break;
            case 2:
                alert(2);
        }