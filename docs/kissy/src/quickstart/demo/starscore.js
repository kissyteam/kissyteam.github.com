/**
 * Star Score
 * @creator qiaohua
 */
KISSY.add('starrating', function(S, undefined) {

    var DOM = S.DOM, Event = S.Event,

        MA_RATING_TIPS = '.rating-tips',
        MA_RATING_RATING = '.shop-rating',
        MA_RATING_POP_TIP = '.rating-pop-tip',
        MA_RATING_CURRENT_CLS = 'current-rating',
        MA_RATING_CURRENT = '.' + MA_RATING_CURRENT_CLS,
        MA_RATING_VALUE = 'data-star-value',
        MA_RATING_RESULT = '.result',

        HIDE = 'hide',
        DEFAULT_REASON = 'some reason',
        DEFAULT_LEVEL = 'some level',

        defaultConfig = {
            reason: [],     // 默认的原因列表
            level: []       // 满意程度描述列表
        };

    function StarRating(container, config) {
        var self = this, rating = S.get(container);
        if (!rating) return;

        self.container = container;
        self.tips = S.get(MA_RATING_TIPS, container);
        self.poptips = S.get(MA_RATING_POP_TIP, container);
        self.stars = S.query(MA_RATING_RATING, container);
        self.config = S.merge(defaultConfig, config);

        self._init();
    }

    S.augment(StarRating, {

        _init: function() {
            var self = this, config = self.config;

            S.each(self.stars, function(item, i) {

                var ret = DOM.get(MA_RATING_RESULT, item),
                    input = DOM.get('input', item);

                // construct default reason if undefined
                if (config.reason[i] === undefined) self.config.reason[i] = [];

                DOM.query('a', item).each(function(a, j) {

                    if (config.reason[i][j] === undefined) {
                        config.reason[i][j] = DEFAULT_REASON;
                    }
                    if (config.level[j] === undefined) {
                        config.level[j] = DEFAULT_LEVEL;
                    }

                    var sc = DOM.attr(a, MA_RATING_VALUE),
                        rs = config.reason[i][j];

                    Event.on(a, 'click', function(ev) {
                        ev.halt();

                        DOM.removeClass(DOM.query(MA_RATING_CURRENT, item), MA_RATING_CURRENT_CLS);
                        DOM.addClass(a, MA_RATING_CURRENT_CLS);

                        DOM.addClass(self.tips, HIDE);
                        DOM.val(input, sc);

                        DOM.html(ret, '<span><em>' + sc + '</em> 分</span> - <strong>' + rs + '</strong>');
                    });

                    Event.on(a, 'mouseenter', function(e) {
                        var offset = DOM.offset(this),
                            coffset = DOM.offset(self.container),
                            h = DOM.height(this),
                            w = DOM.width(this);

                        DOM.html(self.poptips, '<span><em>' + sc + '</em> 分 ' +
                                 self.config.level[j] +
                                 '</span><strong>' + rs + '</strong>');

                        DOM.css(self.poptips, 'left', offset.left + w - coffset.left - 100 + 'px');
                        DOM.css(self.poptips, 'top', offset.top - coffset.top + h + 'px');
                        DOM.removeClass(self.poptips, HIDE);
                    });

                    Event.on(a, 'mouseleave', function(e) {
                        DOM.addClass(self.poptips, HIDE);
                    });

                    // ie6 change a class to his parent
                    try {
                        if (S.UA.ie === 6) {
                            var cls = DOM.attr(a, 'class').split()[0];
                            DOM.addClass(DOM.parent(a), cls);
                        }
                    } catch(e) {
                    }
                });
            });
        }
    });

    S.StarRating = StarRating;
});
