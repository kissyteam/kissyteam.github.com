.. _styleguide-htmlcodingstyle:

HTML 编码规范
========================================

基本规范
-----------

* 使用符合语义的标签书写 HTML 文档，选择恰当的元素表达所需的含义;
* 元素的标签和属性名必须小写，属性值必须加双引号;
* 元素嵌套遵循 (X)HTML Strict 嵌套规则，推荐使用Firefox插件 `HTML Validator <http://www.w3.org/TR/html4/>`_ 进行检查;
* 正确区分自闭合元素和非自闭合元素。非法闭合包括：<br>..</br>、<script />、<iframe />，非法闭合会导致页面嵌套错误问题;
* 通过给元素设置自定义属性来存放与 JavaScript 交互的数据，属性名格式为 data-xx (例如：data-lazyload-url)

文档模板
-----------

.. code-block:: html

    <!doctype html>
    <html>
    <head>
    <meta charset="utf-8" />
    <title>Sample page</title>
    <link rel="stylesheet" href="css_example_url" />
    <script src="js_example_url"></script>
    </head>
    <body>
    <div id="page">
        <div id="header">
            页头
        </div>
        <div id="content">
            主体
        </div>
        <div id="footer">
            页尾
        </div>
    </div>
    <script>
    // 你的代码
    </script>
    </body>
    </html>

DOCTYPE
-----------

页面文档类型统一使用HTML5 DOCTYPE。代码如下：

.. code-block:: html

    <!doctype html>

编码
-----------

声明方法遵循HTML5的规范。

.. code-block:: html

    <meta charset="utf-8" />

注释
-----------

建议对超过10行的页面模块进行注释，以降低开发人员的嵌套成本和后期的维护成本。例如：

.. code-block:: html

    <div id="sample">
        ...
    </div> <!-- #sample END -->

.. code-block:: html

    <div class="sample">
        ...
    </div> <!-- .sample END -->

元素
-----------

结构性元素
~~~~~~~~~~~

* ``p`` 表示段落。只能包含内联元素，不能包含块级元素;
* ``div`` 本身无特殊含义，可用于布局。几乎可以包含任何元素;
* ``br`` 表示换行符;
* ``hr`` 表示水平分割线;
* ``h1-h6`` 表示标题。其中 h1 用于表示当前页面最重要的内容的标题;
* ``blockquote`` 表示引用，可以包含多个段落。请勿纯粹为了缩进而使用 blockquote，大部分浏览器默认将 blockquote 渲染为带有左右缩进;
* ``pre`` 表示一段格式化好的文本;

头部元素
~~~~~~~~~~~

* ``title`` 每个页面必须有且仅有一个 title 元素;
* ``base`` 可用场景：首页、频道等大部分链接都为新窗口打开的页面;
* ``link`` link 用于引入 css 资源时，可省去 media(默认为all) 和 type(默认为text/css) 属性;
* ``style`` type 默认为 text/css，可以省去;
* ``script`` type 属性可以省去; 不赞成使用lang属性; 不要使用古老的<!– //–>这种hack脚本, 它用于阻止第一代浏览器（Netscape 1和Mosaic）将脚本显示成文字;
* ``noscript`` 在用户代理不支持 JavaScript 的情况下提供说明;

文本元素
~~~~~~~~~~~

* ``a`` a 存在 href 属性时表示链接，无 href 属性但有 name 属性表示锚点;
* ``em,strong`` em 表示句意强调，加与不加会引起语义变化，可用于表示不同的心情或语调; strong 表示重要性强调，可用于局部或全局，strong强调的是重要性，不会改变句意;
* ``abbr`` 表示缩写;
* ``sub,sup`` 主要用于数学和化学公式，sup还可用于脚注;
* ``span`` 本身无特殊含义;
* ``ins,del`` 分别表示从文档中增加(插入)和删除

媒体元素
~~~~~~~~~~~

* ``img`` 请勿将img元素作为定位布局的工具，不要用他显示空白图片; 必要时给img元素增加alt属性;
* ``object`` 可以用来插入Flash;

列表元素
~~~~~~~~~~~

* ``dl`` 表示关联列表，dd是对dt的解释; dt和dd的对应关系比较随意：一个dt对应多个dd、多个dt对应一个dd、多个dt对应多个dd，都合法; 可用于名词/单词解释、日程列表、站点目录;
* ``ul`` 表示无序列表;
* ``ol`` 表示有序列表, 可用于排行榜等;
* ``li`` 表示列表项，必须是ul/ol的子元素;

表单元素
~~~~~~~~~~~

* 推荐使用 button 代替 input，但必须声明 type;
* 推荐使用 fieldset，legend 组织表单
* 表单元素的 name 不能设定为 action, enctype, method, novalidate, target, submit 会导致表单提交混乱

参考文档
-----------

* http://www.w3.org/TR/html4/
* http://www.w3.org/TR/html5/
* http://reference.sitepoint.com/html/