/**
 * Kwicks Widget
 * @creator  乔花<qiaohua@taobao.com>
 */
// 添加一个新模块到KISSY中
KISSY.add('kwicks', function(S,Switchable) {

    // 定义一些模块中的全局变量
    var DOM = S.DOM,

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

        // 调用 super class 的构造器
        Kwicks.superclass.constructor.call(self, container, S.merge(defaultConfig, config));
    }

    // 扩展 Switchable
    S.extend(Kwicks, Switchable);
    S.Kwicks = Kwicks;

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

    S.augment(Kwicks, {

        /**
         * 切换视图时的行为, 覆盖 super class的 _switchView
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
}, { requires: ['switchable'] });
