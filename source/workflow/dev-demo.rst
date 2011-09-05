.. _workflow-dev-demo:

如何开发 KISSY 组件
========================================

|  开始之前请先阅读 :ref:`workflow-dev-spec`.
|  拿类似于 `这种效果 <http://danyi.codetea.co.uk/2010/03/16/sliding-label/>`_ 的 表单label浮动功能 来举例.
|  作者: `qiaohua <shengyan1985@gmail.com>`_


1, 确定 API
-----------------------------------------

表单label浮动, 属于展示型的组件, 没多少交互逻辑, 所以只需要暴露下配置接口即可, 比如:


.. code-block:: javascript

        axis              // 移动方向, 水平方向(x) or 垂直方向(y)
        position          // px, 水平和垂直方向上, 相对于父元素的位置, x or [x, y], 不设置时, 取 [5, 5]
        offset            // label 和 input 之间的距离
        zIndex            // zIndex
        duration          // 动画速度
        focusStyle        // 输入框获取焦点时, label 的样式
        blurStyle         // 输入框失去焦点时, label 的样式


另外, 还有些原型成员, 只有一个:

.. code-block:: javascript

        container          // 容器元素



2, 模块编写
-----------------------------------------

目录结构参考 `这里 <https://github.com/kissyteam/kissy-gallery/tree/master/sliding-labels>`_ 或者直接下载 `压缩包 <https://github.com/kissyteam/kissy-gallery/blob/master/your-gallery.zip>`_

按照此目录结构, 修改文件夹文字, 及组件名 等, 之后完成组件代码.



3, demo 编写
-----------------------------------------------------------------------------

编写 demo.html, `在线查看 <http://docs.kissyui.com/kissy-gallery/sliding-labels/demo.html>`_

4, readme.txt 编写
--------------------------------------------------------------------------------

该组件功能简单, 没啥 readme 好写的, 所以可以忽略.

5, 文档编写
-------------------------------------------------------------------------------

主要是列出配置接口, 直接放在 demo.html 了, 更加清楚, 所以单独文档也可忽略,  但是如果你的组件很复杂, 接口很多, 推荐写一份独立的文档, 可参考现有组件的文档编写.
 
 
6, 单元测试编写
----------------------------------------------------------------------------------

该组件, 只需人肉观察哈, 单元测试全忽略.



