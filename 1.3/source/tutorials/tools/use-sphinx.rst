.. _usesphinx:

Sphinx 使用介绍
=============================

.. _sphinx-install:

安装及使用 Sphinx
-----------------------------

**解决依赖关系**

    * Python 2.x (http://www.python.org/), 并将 Python 加入到 Path 中;
    * Setup Tools: Python 的一个包安装/管理工具(http://pypi.python.org/pypi/setuptools, win 下有 exe, 直接安装即可);

**安装 Sphinx**

    * cmd 下运行: easy_install -U Sphinx;

**安装 nodejs**


**安装 nodejs 依赖**

		* cmd 进入 kissyteam 目录下运行: node install

**编译文档**

    * cmd 进入 kissyteam 目录, 运行 make.bat html , 在 docs 下生成 html;
    * 如果你想进一步了解如何创建 sphinx 工程, 见 http://code.google.com/p/pymotwcn/wiki/SphinxprojectHowto ;



.. _rst-primer:

reST 入门
-----------------------------

reST 是一种简单的标记语言, 规则非常简单.

.. seealso::

   * 完整的官方文档 `reStructuredText User Documentation <http://docutils.sourceforge.net/rst.html>`_
   * 中文翻译版本: `<http://wstudio.web.fc2.com/others/restructuredtext.html>`_


**段落**

组织文档层次, 一般标题层次少于 4 级. 可以使用 :

    * ``#`` 部分
    * ``*`` 章节
    * ``=``, 大节
    * ``-``, 小节
    * ``^``, 小小节
    * ``"``, 段落


其实, 不同字符(#, =, ' , \`, ^, * )没有等级区别, 只是你在使用时, 需要统一一种等级标记即可.



**行内标记**

    * 一个星号表示斜体: ``*text*``
    * 两个星号表示粗体: ``**text**``
    * 两个反斜号表示行内代码: ````text````

使用上的限制:

    * 不能被嵌套,
    * 内容中不需要空白字符, 如: ``* text*`` , 这个是错误的写法,
    * 使用反斜杠进行转义: ``thisis\ *one*\ word``


**无序/有序列表**  ::

   * This is a bulleted list.
   * It has two items, the second
     item uses two lines.

   1. This is a numbered list.
   2. It has two items too.

   #. This is a numbered list.
   #. It has two items too.

**嵌套列表** ::

   * this is
   * a list

     * with a nested list
     * and some subitems

   * and here the parent list continues

**定义列表** ::


   term (up to a line of text)
      Definition of the term, which must be indented

      and can even consist of multiple paragraphs

   next term
      Description.

**注意** 以上, 只能是单行文字, 计算源码中有换行符, 但生成出来仍然以单行形式, 如果需要保留换行符, 可使用 ::

   | These lines are
   | broken exactly like in
   | the source file.



**嵌入源代码区块**

最普通的, 可以使用  ``::`` 标记, 表示接下来的缩进段落是表示一段代码, ::

      It is not processed in any way, except
      that the indentation is removed.

      It can span multiple lines.

需要高亮的源代码

* 嵌入 HTML 源代码 ::

    .. raw:: html
       :file: inclusion.html

    或者

    .. raw:: html

        <a href="/kissy/docs/">KISSY 文档</a>

* 嵌入 JS/CSS 等源代码, 及高亮显示( http://pygments.org/ 上列出了支持的语言) ::


    .. code-block:: js

        alert('hi');



**表格**

生成这样的表格

            =====  =====  =======
              A      B    A and B
            =====  =====  =======
            False  False  False
            True   False  False
            False  True   False
            True   True   True
            =====  =====  =======


使用的语法是 ::

            =====  =====  =======
              A      B    A and B
            =====  =====  =======
            False  False  False
            True   False  False
            False  True   False
            True   True   True
            =====  =====  =======


**外部链接**

使用 ```链接  <http://example.com/>`_`` 表示外部链接, 也可以使用 ::

  一段文字中包含 `一个链接`_.

  .. _另外一个链接: http://example.com/


**内部链接**

    * 设定全局唯一的引用id, 如,  ``.. _my-reference-label:``
    * 在其他页面就可以使用这个id来引用, 如, ``:ref:`提示文字 <my-reference-label>```

例如 ::

    .. _my-reference-label:

    Section to cross-reference
    --------------------------

    This is the text of the section.

    It refers to the section itself, see :ref:`my-reference-label`.




**特殊标记**

* ``attention``, ``caution``, ``danger``, ``error``, ``hint``, ``important``, ``note``, ``tip``, ``warning``, ``admonition`` (最常用 "note" 和 "warning"), 例如 ::

    .. attention::

       Please attention

.. attention::

  这是一个说明框.

.. caution::

  这是一个说明框.

.. danger::

  这是一个说明框.

.. error::

  这是一个说明框.

.. hint::

  这是一个说明框.

.. important::

  这是一个说明框.

.. note::

  这是一个说明框.

.. tip::

  这是一个说明框.

.. warning::

  这是一个说明框.

.. admonition:: 自定义说明框

  这是一个说明框.


* 插入图片 ::

    .. raw:: html

        <img  src='../../../../source/raw/workflow/workflow.png' />


**注释**

单行 ::

   .. 我是注释.

多行 ::

   .. 我是注释
      我是注释
      我是注释


**脚注**

::

    Lorem ipsum [#f1]_ dolor sit amet ... [#f2]_

    .. rubric:: Footnotes

    .. [#f1] Text of the first footnote.
    .. [#f2] Text of the second footnote.


