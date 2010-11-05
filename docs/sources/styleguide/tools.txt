.. _styleguide-tools:

工具
=========================

JSDoc-Toolkit
-------------------------

`JsDoc Toolkit <http://code.google.com/p/jsdoc-toolkit/>`_ is an application,
written in JavaScript, for automatically generating template-formatted,
multi-page HTML (or XML, JSON, or any other text-based) documentation
from commented JavaScript source code.


::

    java -jar jsrun.jar app/run.js -c=conf/sample.conf



closure-compiler
-------------------------------

* `工程 <http://code.google.com/closure/compiler/>`_
* `在线工具 <http://closure-compiler.appspot.com/>`_
* `命令行工具 <git://github.com/kissyteam/kissy-tools.git>`_


`文档 <http://code.google.com/closure/compiler/docs/overview.html>`_ 中列出了 compiler 的三种模式:

``--compilation_level [WHITESPACE_ONLY | SIMPLE_OPTIMIZATIONS | ADVANCED_OPTIMIZATIONS]``

#. WHITESPACE_ONLY(最弱): 去除注释和不必要的空白字符等压缩处理;
#. SIMPLE_OPTIMIZATIONS(简单优化): 除压缩外, 优化表达式和函数, 重命名变量/参数名; -- 默认模式.
#. ADVANCED_OPTIMIZATIONS(高级优化): 除上述功能外, 进一步重命名, 移出无用代码, 保证安全前提下进行函数调用换成内敛形式;


::

    java -jar compiler.jar --js=in1.js --js=in2.js ... --js_output_file=out.js




closure linter
-------------------------

The `Closure Linter <http://code.google.com/closure/utilities/>`_ is a utility that checks JavaScript files for style issues such
as operator placement, missing semicolons, spacing, the presence of JsDoc annotations, and more.

::

    # install
    easy_install http://closure-linter.googlecode.com/files/closure_linter-latest.tar.gz

    # usage
    gjslint path/to/my/file.js

    # or
    fixjsstyle path/to/file1.js


