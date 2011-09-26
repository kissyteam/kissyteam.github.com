.. _workflow-dev-demo-extend:

如何扩展 KISSY 组件
========================================

|  KISSY 提供的现有组件, 能满足大部分需求. 但不可避免地, 在某些特殊场景下, 并没有考虑及实现特定的功能. 所以需要我们在已有组件基础上进行扩展.
|  作者: `qiaohua <qiaohua@taobao.com>`_

1, 确定扩展目标
----------------------

根据自己的需求, 找出最接近的 KISSY 已有组件是哪个. 比如针对下面的一种效果:

.. raw:: html

    <div class="demo">
        <script src="../static/quickstart/kwicks.js"></script>

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

仔细分析下, 这种不外乎是切换显示不同的内容, 这个和 :mod:`switchable` 本质是类似的, 所以我们可以基于它来实现.


2, 扩展实现
-----------------------------------------------------------

2.1 首先想个名字, 暂且叫它 kwicks 好了.


2.2 去 KISSY gallery 下载 `压缩包 <https://github.com/kissyteam/kissy-gallery/blob/master/your-gallery.zip>`_ 解压后, 重命名成 `kwicks`;

2.3 用你喜欢的编辑器打开 kwicks.js,填写最基本的信息后, 添加新模块:

.. code-block:: javascript

    KISSY.add('gallery/kwicks', function(S, Switchable) {

        var D = S.DOM, E = S.Event, doc = document;


	    //兼容 1.1.6
        S.namespace('Gallery');
        S.Gallery.Kwicks = Kwicks;

        return Kwicks;
    }, {
        requires: ["switchable"]  // 指定依赖关系, 因为是扩展自 switchable 的, 所以仅依赖它既可
    });

2.4 添加构造器和配置项, 扩展 switchable, 这两个是提供外部调用接口中最重要的.

.. code-block:: javascript

    // ...
    /**
     * 默认配置, 可覆盖 Switchable 的默认配置
     */
    defaultConfig = {
        markupType: 1
    };

    /**
     * Kwicks Class
     * @constructor
     */
    function Kwicks(container, config) {
        var self = this;

        // factory or constructor
        if (!(self instanceof Kwicks)) {
            return new Kwicks(container, config);
        }

        // 插入 kwicks 的初始化逻辑
        self.on('init', function() {
            init_kwicks(self);
        });

        // 调用 superclass 的构造器
        Kwicks.superclass.constructor.call(self, container, S.merge(defaultConfig, config));
    }

    // 扩展 Switchable
    S.extend(Kwicks, Switchable);

2.5 处理 init, 当 switchable 初始化后, 作为 kwicks , 也有自己的初始化操作.

.. code-block:: javascript

    /**
     * Kwicks 的初始化逻辑
     * 计算每个部分的平均显示区域位置
     */
    function init_kwicks(self) {
        var width = DOM.width(self.container) / self.panels.length,
            oft = DOM.offset(self.container);
        S.each(self.panels, function(t, i) {
            DOM.offset(t, {left: width * i + oft.left, top:oft.top});
        });
    }

2.6 其他逻辑

.. code-block:: javascript

    S.augment(Kwicks, {

        /**
         * 切换视图时的行为, 覆盖 superclass的 _switchView
         */
        _switchView: function(fromPanels, toPanels) {
            var self = this,
                panelWidth = DOM.width(toPanels[0]),
                width = (DOM.width(self.container) - panelWidth) / (self.panels.length - 1),
                start = 0;

            // 更新每个子区域的位置
            S.each(self.panels, function(t, i) {
                //也可直接使用offset设置元素位置, 但就没有动画效果了
                S.Anim(t, {left: start + 'px'}, 0.4, S.Easing.easeOut).run();
                if (t === toPanels[0]) {
                    start += panelWidth;
                } else {
                    start += width;
                }
            });
        }
    });

`完整代码参见这里 </_static/quickstart/kwicks.js>`_

3, 示例
-----------------------------------------------------------

代码初步完成后, 写个 demo 调试下吧~

(可以直接按照同目录下的 demo.html书写)

.. code-block:: javascript

    KISSY.use('gallery/kwicks', function(S, Kwicks) {
        new Kwicks('#J_Kwicks');
    });

`在线查看 </kissy-gallery/kwicks/demo.html>`_

.. note::

    在 KISSY 中, 写扩展和写组件, 其实代码结构很类似. 只是扩展组件是在已有组件的基础上进行的, 有很多代码都是可以重用的, 这边, 就这个例子中,  需要注意的是:

     #. 可以使用  :func:`~seed.KISSY.extend()`  进行扩展, 或者以插件形式, 如 ``Switchable.Plugins.push()`` 来组织代码, 具体参考 ``S.Swichable.Plugins``;
     #. 配置选项的提供, 如果父类已经有了, 本身就不必提供了.



