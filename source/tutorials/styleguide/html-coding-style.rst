.. _styleguide-htmlcodingstyle:

HTML 编码规范
========================================

基本规范
-----------

语义
``````````````````````````````````

使用符合语义的标签书写 HTML 文档, 选择恰当的元素表达所需的含义;

.. code-block:: html

    <!-- 不推荐 -->
    <div onclick="goToRecommendations();">All recommendations</div>

.. code-block:: html

    <!-- 推荐 -->
    <a href="recommendations/">All recommendations</a>

大小写
````````````````````````````````````

元素的标签和属性名必须小写, 属性值必须加双引号; 例如

.. code-block:: html

    <!-- 不推荐 -->
    <A HREF='/'>Home</A>


.. code-block:: html

    <!-- 推荐 -->
    <a href="/">Home</a>

缩进
```````````````````````````````````````

* 使用四个空格来表示缩进，不要使用 tab 键;

* 在块状元素，列表，表格元素后面使用新行，并且对它的子元素进行缩进.

例如

.. code-block:: html

    <ul>
        <li>
            1
        </li>
    </ul>


空格
``````````````````````````````````````````

去除比不必要的空格; 例如

.. code-block:: html

    <!-- 不推荐 -->
    <p>test                  </p>

.. code-block:: html

    <!-- 推荐 -->
    <p>test</p>

嵌套
``````````````````````````````````````

* 元素嵌套遵循 (X)HTML Strict 嵌套规则, 推荐使用Firefox插件 `HTML Validator <http://www.w3.org/TR/html4/>`_ 进行检查;
* 正确区分自闭合元素和非自闭合元素. 非法闭合包括：<br>..</br>、<script />、<iframe />, 非法闭合会导致页面嵌套错误问题;

.. code-block:: html

    <!-- 不推荐 -->
    <title>Test</title>
    <article>This is only a test.

.. code-block:: html

    <!-- 推荐 -->
    <!DOCTYPE html>
    <meta charset="utf-8">
    <title>Test</title>
    <article>This is only a test.</article>


引号
`````````````````````````````````````````````

使用双引号来标识 html 的属性; 例如

.. code-block:: html

    <!-- 不推荐 -->
    <a class='maia-button maia-button-secondary'>Sign in</a>

.. code-block:: html

    <!-- 推荐 -->
    <a class="maia-button maia-button-secondary">Sign in</a>




自定义属性
```````````````````````````````````````

通过给元素设置自定义属性来存放与 JavaScript 交互的数据, 属性名格式为 data-xx (例如：data-lazyload-url)

DOCTYPE
````````````````````````````````````````

页面文档类型统一使用HTML5 DOCTYPE. 代码如下：

.. code-block:: html

    <!doctype html>

编码
````````````````````````````````````

声明方法遵循HTML5的规范.推荐使用 ``utf-8`` 编码.

.. code-block:: html

    <meta charset="utf-8" />

注释
``````````````````````````````````````

建议对超过10行的页面模块进行注释, 以降低开发人员的嵌套成本和后期的维护成本. 例如：

.. code-block:: html

    <div id="sample">
        ...
    </div> <!-- #sample END -->

.. code-block:: html

    <div class="sample">
        ...
    </div> <!-- .sample END -->

协议
```````````````````````````````````````````

如果链接和当前页面一致则忽略链接的协议部分，例如

.. code-block:: html

    <!-- 不推荐 -->
    <script src="http://www.taobao.com/fp.js"></script>

.. code-block:: html

    <!-- 推荐 -->
    <script src="//www.taobao.com/fp.js"></script>

.. code-block:: css

    /* 不推荐 */
    .example {
      background: url(http://www.taobao.com/fp.css);
    }

.. code-block:: css

    /* 推荐 */
    .example {
      background: url(//www.taobao.com/fp.css);
    }

TODO
````````````````````````````````````

* 使用 TODO 来标记待做事情，便于后期搜索.
* 在 TODO 后添加 (姓名或邮件) 来表示分类.

例如

.. code-block:: html

    <!-- TODO(yiminghe): remove duplicate tag -->
    <p><span>2</span></p>


焦点分离
````````````````````````````````````

* 将表现，行为和结构分离：不要在 html 和模板中加入除了结构以外的东西.
* 在文档中引入尽可能少的样式和脚本

.. code-block:: html

    <!-- 不推荐 -->
    <!DOCTYPE html>
    <title>HTML sucks</title>
    <link rel="stylesheet" href="base.css" media="screen">
    <link rel="stylesheet" href="grid.css" media="screen">
    <link rel="stylesheet" href="print.css" media="print">
    <h1 style="font-size: 1em;">HTML sucks</h1>
    <p>I’ve read about this on a few sites but now I’m sure:
      <u>HTML is stupid!!1</u>
    <center>I can’t believe there’s no way to control the styling of
      my website without doing everything all over again!</center>

.. code-block:: html

    <!-- 推荐 -->
    <!DOCTYPE html>
    <title>My first CSS-only redesign</title>
    <link rel="stylesheet" href="default.css">
    <h1>My first CSS-only redesign</h1>
    <p>I’ve read about this on a few sites but today I’m actually
      doing it: separating concerns and avoiding anything in the HTML of
      my website that is presentational.
    <p>It’s awesome!

元素
----------------------------------------------

结构性元素
~~~~~~~~~~~

* ``p`` 表示段落. 只能包含内联元素, 不能包含块级元素;
* ``div`` 本身无特殊含义, 可用于布局. 几乎可以包含任何元素;
* ``br`` 表示换行符;
* ``hr`` 表示水平分割线;
* ``h1-h6`` 表示标题. 其中 h1 用于表示当前页面最重要的内容的标题;
* ``blockquote`` 表示引用, 可以包含多个段落. 请勿纯粹为了缩进而使用 blockquote, 大部分浏览器默认将 blockquote 渲染为带有左右缩进;
* ``pre`` 表示一段格式化好的文本;

头部元素
~~~~~~~~~~~

* ``title`` 每个页面必须有且仅有一个 title 元素;
* ``base`` 可用场景：首页、频道等大部分链接都为新窗口打开的页面;
* ``link`` link 用于引入 css 资源时, 可省去 media(默认为all) 和 type(默认为text/css) 属性;
* ``style`` type 默认为 text/css, 可以省去;
* ``script`` type 属性可以省去; 不赞成使用lang属性; 不要使用古老的<!– //–>这种hack脚本, 它用于阻止第一代浏览器(Netscape 1和Mosaic)将脚本显示成文字;

.. code-block:: html

    <!-- 不推荐 -->
    <link rel="stylesheet" href="//www.google.com/css/maia.css"
      type="text/css">

    <!-- 不推荐 -->
    <script src="//www.google.com/js/gweb/analytics/autotrack.js"
      type="text/javascript"></script>

.. code-block:: html

    <!-- 推荐 -->
    <link rel="stylesheet" href="//www.google.com/css/maia.css">

    <!-- 推荐 -->
    <script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>

* ``noscript`` 在用户代理不支持 JavaScript 的情况下提供说明;

文本元素
~~~~~~~~~~~

* ``a`` a 存在 href 属性时表示链接, 无 href 属性但有 name 属性表示锚点;
* ``em,strong`` em 表示句意强调, 加与不加会引起语义变化, 可用于表示不同的心情或语调; strong 表示重要性强调, 可用于局部或全局, strong强调的是重要性, 不会改变句意;
* ``abbr`` 表示缩写;
* ``sub,sup`` 主要用于数学和化学公式, sup还可用于脚注;
* ``span`` 本身无特殊含义;
* ``ins,del`` 分别表示从文档中增加(插入)和删除

媒体元素
~~~~~~~~~~~

* ``img`` 请勿将img元素作为定位布局的工具, 不要用他显示空白图片; 给img元素增加alt属性;例如

.. code-block:: html

    <!-- 不推荐 -->
    <img src="spreadsheet.png">

.. code-block:: html

    <!-- 推荐 -->
    <img src="spreadsheet.png" alt="Spreadsheet screenshot.">

* ``object`` 可以用来插入Flash;

列表元素
~~~~~~~~~~~

* ``dl`` 表示关联列表, dd是对dt的解释; dt和dd的对应关系比较随意：
一个dt对应多个dd、多个dt对应一个dd、多个dt对应多个dd, 都合法; 可用于名词/单词解释、日程列表、站点目录;
* ``ul`` 表示无序列表;
* ``ol`` 表示有序列表, 可用于排行榜等;
* ``li`` 表示列表项, 必须是ul/ol的子元素;

表单元素
~~~~~~~~~~~

* 推荐使用 button 代替 input, 但必须声明 type;
* 推荐使用 fieldset, legend 组织表单
* 表单元素的 name 不能设定为 action, enctype, method, novalidate, target, submit 会导致表单提交混乱


文档模板
-----------

.. code-block:: html

    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Sample page</title>
            <link rel="stylesheet" href="css_example_url" />
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
            <script src="js_example_url"></script>
            <script>
            // 你的代码
            </script>
        </body>
    </html>


参考文档
-----------

* http://www.w3.org/TR/html4/
* http://www.w3.org/TR/html5/
* http://reference.sitepoint.com/html/
* http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml