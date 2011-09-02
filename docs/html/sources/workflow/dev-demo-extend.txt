.. _workflow-dev-demo-extend:

KISSY 扩展组件示例
========================================

|  KISSY 提供的现有组件, 能满足大部分需求. 但不可避免地, 在某些特殊场景下, 并没有考虑及实现特定的功能. 所以需要我们在已有组件基础上进行扩展.
|  注意, 开发流程是和前述一致, 这边不再重复讲述, 主要讲述如何对现有组件进行扩展.
|  作者: `qiaohua <shengyan1985@gmail.com>`_


预览效果
----------------------

先看效果:

.. raw:: html

    <div class="demo">
        <script src="../_static/quickstart/kwicks.js"></script>

        <style>
            .kwicks {
                width: 600px;
                height: 420px;
                overflow: hidden;
                position: relative;
            }
            .kwicks li {
                position: absolute;
                left: 0;
                top: 0;
                cursor: pointer;
            }
        </style>
        <div class="kwicks">
            <ul id="J_Kwicks">
                <li class="ks-switchable-trigger ks-switchable-panel"><img height="420" width="450" src="../_static/quickstart/squidchef2.png"></li>
                <li class="ks-switchable-trigger ks-switchable-panel"><img height="420" width="450" src="../_static/quickstart/photomoose.png"></li>
                <li class="ks-switchable-trigger ks-switchable-panel"><img height="420" width="450" src="../_static/quickstart/hackfest1.png"></li>
            </ul>
        </div>
        <script>
            KISSY.use('kwicks', function(S) {
                new S.Kwicks('#J_Kwicks');
            });
        </script>

    </div>


一组图片, 鼠标 hover 或者 click 某张图片时, 这张图片完整显示, 余下图片稍加压缩显示.


代码实现
-----------------------------------------------------------

这与 :mod:`switchable` 的切换效果很类似. 所以我们可以基于 Switchable 来实现这个 kwicks 效果. 完整代码:

.. literalinclude:: /_static/quickstart/kwicks.js
       :language: javascript

.. note::

    在 KISSY 中, 写扩展和写组件, 其实代码结构很类似. 只是扩展组件是在已有组件的基础上进行的, 有很多代码都是可以重用的, 这边, 需要注意的是:

     #. 可以使用  :func:`~seed.KISSY.extend()`  进行扩展, 或者以插件形式, 如 ``Switchable.Plugins.push()`` 来组织代码, 具体参考 ``S.Swichable.Plugins``;
     #. 配置选项的提供, 如果父类已经有了, 本身就不必提供了.



