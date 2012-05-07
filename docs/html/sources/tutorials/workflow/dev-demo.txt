.. _workflow-dev-demo:

如何开发 KISSY 组件
========================================

|  开发一个 KISSY 的组件, 其实没有你想象中的难.
|  拿类似于 `这种效果 <http://danyi.codetea.co.uk/2010/03/16/sliding-label/>`_ 的 表单label浮动功能 来举例.

1, 准备工作
-----------------------------------------

首先为你的组件想好一个名字, 这里取名为 ``sliding-labels``, 定好构造器接口为 ``SlidingLabels``.

在本地, 创建组件的目录结构, 可以参考 `示例 <https://github.com/kissyteam/kissy-gallery/tree/master/gallery/sliding-labels>`_ 或者 `这里 <https://github.com/kissyteam/kissy-gallery/tree/master/gallery/yours>`_.

按照此目录结构, 修改文件夹文字, 及组件名等, 之后完成组件代码.

2, 确定 API
-----------------------------------------

准备工作做好后, 可以先想下提供给外面的接口大概是什么样的. 比如这个表单 label 浮动, 属于展示型的组件, 没多少交互逻辑. 所以接口比较简单.

**构造器接口:**

.. code-block:: javascript

    function SlidingLabels(container, config) {

    })

**配置接口:**

.. code-block:: javascript

    axis              // 移动方向, 水平方向(x) or 垂直方向(y)
    position          // px, 水平和垂直方向上, 相对于父元素的位置, x or [x, y], 不设置时, 取 [5, 5]
    offset            // label 和 input 之间的距离
    zIndex            // zIndex
    duration          // 动画速度
    focusStyle        // 输入框获取焦点时, label 的样式
    blurStyle         // 输入框失去焦点时, label 的样式


**原型成员:**

.. code-block:: javascript

    container          // 容器元素



3, 模块编写
-----------------------------------------

3.1 编写构造器和继承关系:

.. code-block:: javascript

    function SlidingLabels(container, config) {
        var self = this;

        if (!(self instanceof SlidingLabels)) {
            return new SlidingLabels(container, config);
        }
        /**
         * 容器元素
         * @type {Element}
         */
        self.container = container = S.one(container);
        if (!container) return;

        SlidingLabels.superclass.constructor.call(self, config);

        self._init();
    }

    S.extend(SlidingLabels, S.Base);

3.2 添加配置项:

.. code-block:: javascript

    SlidingLabels.ATTRS = {
        axis: {             // 移动方向, 水平方向(x) or 垂直方向(y)
            value:  X
        },
        position: {         // px, 水平和垂直方向上, 相对于父元素的位置, x or [x, y], 不设置时, 取 [5, 5]
            value: defaultPosition,
            setter: function(v) {
                var tmp = S.makeArray(v),
                    deft = this.get(POSITION);
                if (S.isUndefined(tmp[0])) {
                    tmp = deft;
                } else if (S.isUndefined(tmp[1])){
                    tmp[1] = deft[1];
                }
                return tmp;
            },
            getter: function(v) {
                var tmp = S.makeArray(v),
                    deft = defaultPosition;
                if (S.isUndefined(tmp[0])) {
                    tmp = deft;
                } else if (S.isUndefined(tmp[1])){
                    tmp[1] = deft[1];
                }
                return tmp;
            }
        },
        offset: {           // label 和 input 之间的距离
            value: 5
        },
        zIndex: {           // zIndex
            value: 99
        },
        duration: {         // 动画速度
            value: 0.2
        },
        focusStyle: {       // 输入框获取焦点时, label 的样式
            value: undefined,
            getter: function(v) {
                return v || '';
            }
        },
        blurStyle: {        // 输入框失去焦点时, label 的样式
            value: undefined,
            getter: function(v) {
                return v || '';
            }
        }
    };

3.2 实现主要逻辑:

.. code-block:: javascript

    S.augment(SlidingLabels, {
        /**
         * 初始化 label 状态及绑定 focus/blur 事件
         * @private
         */
        _init: function() {
            var self = this,
                blurStyle = self.get(BLUR_STYLE),
                position = self.get(POSITION);

            self.container.all('label').each(function(elem) {
                var lab = new S.Node(elem),
                    area = S.one('#' + lab.attr('for')), prt, len;

                // 注意: 只取那些有 for 属性的 label
                if (!area) return;

                // label 的父元素设置为 relative
                prt = lab.parent();
                if (prt.css(POSITION) !== RELATIVE) {
                    prt.css({ position: RELATIVE });
                }

                lab.css({
                    position : ABSOLUTE,
                    // 默认把 label 移入输入框
                    left : position[0] + PX,
                    top : position[1] + PX,
                    zIndex : self.get('zIndex')
                });
                blurStyle && lab.css(blurStyle);

                // 输入框有值时, 把 label 移出输入框
                len = S.trim(area.val()).length;
                if ( len > 0) {
                    self._css(lab);// or self._anim(lab);
                }

                // 绑定事件
                self._bindUI(area, lab);
            });
        },

        /**
         * 绑定 focusin/focusout 事件
         * @param {Node} area
         * @param {Node} lab
         * @private
         */
        _bindUI: function(area, lab) {
            var self = this;

            area.on('focusin', function() {
                var len = S.trim(area.val()).length;

                if (!len) {
                    self._anim(lab);
                }
            }).on('focusout', function() {
                var len = S.trim(area.val()).length;

                if (!len) {
                    self._anim(lab, true);
                }
            });
        },

        /**
         * @param {Node} lab
         * @parem {boolean} isDefault
         * @private
         */
        _anim: function(lab, isDefault) {
            this._change('animate', lab, isDefault);
        },

        /**
         * @param {Node} lab
         * @parem {boolean} isDefault
         * @private
         */
        _css: function(lab, isDefault) {
            this._change('css', lab, isDefault);
        },

        /**
         * 输入区域是否有值, 对应改变 label 所在位置
         * @param {string} fn 'css' or 'animate'
         * @param {Node} lab
         * @param {boolean} isDefault 为 true 时, 表示没有值, 移入, 为 false, 表示有值, 移开
         * @private
         */
        _change: function(fn, lab, isDefault) {
            var self = this,
                //axis = self.get('axis'),
                position = self.get(POSITION),
                blurStyle = self.get(BLUR_STYLE),
                focusStyle = self.get(FOCUS_STYLE),
                duration = self.get('duration'),
                offset = self.get('offset');
            //if (axis == X) {
                lab[fn](S.merge({
                    left: (isDefault ? position[0] : -lab.width() - offset) + PX
                }, isDefault ? blurStyle : focusStyle), duration);
            /*}
            else if (axis == Y) {
                lab[fn](S.merge({
                    top: (isDefault ? position[1] : -lab.height() - offset) + PX
                }, isDefault ? blurStyle : focusStyle), duration);
            }*/
        }
    });

4, demo 编写
-----------------------------------------------------------------------------

编写 demo.html, `在线查看 <http://docs.kissyui.com/kissy-gallery/gallery/sliding-labels/1.0/demo.html>`_



5, 文档编写
-------------------------------------------------------------------------------

主要是列出配置接口, 直接放在 demo.html 了, 更加清楚, 所以单独文档也可忽略,  但是如果你的组件很复杂, 接口很多, 推荐写一份独立的文档, 可参考现有组件的文档编写.
 
 




