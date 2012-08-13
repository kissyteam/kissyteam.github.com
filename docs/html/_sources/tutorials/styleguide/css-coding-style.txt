CSS 编码规范
========================================

css 校验
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

除了 css hack 和浏览器私有属性，
推荐使用 `w3c css validator <http://jigsaw.w3.org/css-validator/>`_ 校验其余的代码.

代码规范
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

一般性命名
----------------------------

使用小写字母，复合词以 ``-`` 分隔; 例如 ``nav.css`` , ``login-nav.css`` , ``login-page``


id 和类的命名
-------------------------------

为 id 和样式类使用有意义或通用的名字，避免由于 css 命名更改引起的不必要的文档或模板改变；例如

.. code-block:: css

    /* 不推荐： 无意义 */
    #yee-1901 {}

    /* 不推荐： 表现层的命名 */
    .button-green {}


.. code-block:: css

    /* 推荐: 具体 */
    #gallery {}
    #login {}
    .video {}

    /* 推荐: 通用 */
    .effect {}
    .alt {}


id 和 class 的命名长度应该适中，不要太简略也不要太详细；例如

.. code-block:: css

    /* 不推荐 */
    #navigation {}
    .atr {}


.. code-block:: css

    /* 推荐 */
    #nav {}
    .author {}


元素选择器
-------------------------------

为了 `性能原因 <http://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/>`_ ，
请避免元素选择器和类选择器以及 id 选择器混用;例如

.. code-block:: css

    /* 不推荐 */
    ul#example {}
    div.error {}


.. code-block:: css

    /* 推荐 */
    #example {}
    .error {}


简写属性名字
------------------------------

为了提高可读性，尽可能的使用简写属性。例如

.. code-block:: css

    /* 不推荐 */
    border-top-style: none;
    font-family: palatino, georgia, serif;
    font-size: 100%;
    line-height: 1.6;
    padding-bottom: 2em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0;


.. code-block:: css

    /* 推荐 */
    border-top: 0;
    font: 100%/1.6 palatino, georgia, serif;
    padding: 0 1em 2em;


0 和单位
---------------------------

对属性值为 0 的情况省略单位；例如

.. code-block:: css

    margin: 0;
    padding: 0;


0 前缀情况
-------------------------------

省略属性值中的 0 前缀;例如

.. code-block:: css

    font-size: .8em;


16 进制的颜色值表示
----------------------------------

尽可能使用 3 个字符的 16 进制颜色值；例如

.. code-block:: css

    /* 不推荐 */
    color: #eebbcc;


.. code-block:: css

    /* 推荐 */
    color: #ebc;

前缀
------------------------------------

为了防止冲突，对于应用特定的样式附加应用前缀；例如

.. code-block:: css

    .login-help {} /* login page */
    #detail-note {} /* detail page */

hacks
---------------------------------

避免 css hack ， 考虑使用特定浏览器前缀表示；例如

.. code-block:: css

    .ks-ie6 p {
        margin: 1em 0;
    }


格式规范
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

属性声明顺序
-------------------------------------

按照字母顺序声明属性，排序时忽略私有的浏览器前缀，对于特定的浏览器，私有的浏览器前缀应该参与排序;例如

.. code-block:: css

    background: fuchsia;
    border: 1px solid;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    color: black;
    text-align: center;
    text-indent: 2em;


块缩进
-----------------------------

块的内容应该被缩进；例如

.. code-block:: css

    @media screen, projection {

      html {
        background: #fff;
        color: #444;
      }

    }

分号
----------------------------------------

使用分号结束单个属性的定义；例如

.. code-block:: css

    /* 不推荐 */
    .test {
      display: block;
      height: 100px
    }


.. code-block:: css

    /* 推荐 */
    .test {
      display: block;
      height: 100px;
    }


空格
----------------------------

在属性名冒号后加一个空格，例如

.. code-block:: css

    /* 不推荐 */
    .test {
      display:block;
    }


.. code-block:: css

    /* 推荐 */
    .test {
      display: block;
    }


空行
------------------------------------

多个选择以及声明间以行分隔；例如

.. code-block:: css

    /* 不推荐 */
    a:focus, a:active {
      position: relative; top: 1px;
    }


.. code-block:: css

    /* 推荐 */
    h1,
    h2,
    h3 {
      font-weight: normal;
      line-height: 1.2;
    }

多个 css 规则间以空行分隔；例如

.. code-block:: css

    html {
      background: #fff;
    }

    body {
      margin: auto;
      width: 50%;
    }


引号
-------------------------------------------

尽可能的不用引号，迫不得已时使用单引号.

.. code-block:: css

    /* 不推荐 */
    @import url("//www.google.com/css/maia.css");

    html {
      font-family: "open sans", arial, sans-serif;
    }


.. code-block:: css

    /* 推荐 */
    @import url(//www.google.com/css/maia.css);

    html {
      font-family: 'open sans', arial, sans-serif;
    }

注释
---------------------------------------------

成组的 css 规则间用块状注释和空行分离;例如

.. code-block:: css

    /* Header */

    #login-header {}

    #login-header-below {}

    /* Footer */

    #login-footer {}

    #login-footer-below {}

    /* Gallery */

    .login-gallery {}

    .login-gallery-other {}


参考文档
~~~~~~~~~~~~~~~~~~~~~~~~~~~

http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml