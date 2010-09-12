/**
 * Star Score
 * @creator qiaohua
 * @depends kissy-core
 */

KISSY.add('starrating', function(S){
    var DOM = S.DOM,
        E = S.Event,
        MA_RATING_TIPS = '.rating-tips',
        MA_RATING_RATING = '.shop-rating',
        MA_RATING_POP_TIP = '.rating-pop-tip',
        MA_RATING_CURRENT_CLS = 'current-rating',
        MA_RATING_CURRENT = '.'+MA_RATING_CURRENT_CLS,
        MA_RATING_VALUE = 'data-star-value',
        MA_RATING_RESULT = '.result',
        HIDE = 'hide',
        DEFAULT_REASON = 'some reason',
        DEFAULT_LEVEL = 'some level',
    
        
        /** DOM structure
        <div class="rating-bd" id="J_Rating">
            <div class="rating-tips">
                <h5>小提示：</h5>
                <p>点击星星就能打分了，该打分完全是匿名滴。</p>
            </div>
            {% for items in allitems %}
            <div class="shop-rating">
                <span class="title">{{items.title}}</span>
                <ul class="rating-level">
                    <li><a class="one-star" data-star-value="{{items.value1}}" href="#">
                        {{items.value1}}</a></li>
                    <li><a class="two-stars" data-star-value="{{items.value2}}" href="#">
                        {{items.value2}}</a></li>
                    <li><a class="three-stars" data-star-value="{{items.value3}}" href="#">
                        {{items.value3}}</a></li>
                    <li><a class="four-stars" data-star-value="{{items.value4}}" href="#">
                        {{items.value4}}</a></li>
                    <li><a class="five-stars" data-star-value="{{items.value5}}" href="#">
                        {{items.value5}}</a></li>
                </ul>
                <span class="result"></span>
                <input type="hidden" name="{{items.name}}" value="" size="2">
            </div>
            {% endfor %}
            <div class="rating-pop-tip hide"></div>
        </div>
         */
        
        /**
         * 默认设置
         */
        defaultConfig = {
            reason: [],     // 默认的原因列表
            level: []       // 满意程度描述列表
        };
    
    function StarRating(obj, cfg) {
        var self = this;
        // rating container
        self.rating = DOM.get(obj);
        if (S.isUndefined(self.rating)) return;
        
        // tips
        self.tips = DOM.get(MA_RATING_TIPS, self.rating);
        // pop tips
        self.poptips = DOM.get(MA_RATING_POP_TIP, self.rating);
        // rating star
        self.stars = DOM.query(MA_RATING_RATING, self.rating);
        
        self.config = S.merge(defaultConfig, cfg);
        
        self._init();
    }
    S.augment(StarRating, {
        _init: function() {
            var self = this;
            
            // every score rating do
            S.each(self.stars, function(t, i, arr){
                var rst = DOM.get(MA_RATING_RESULT, t), // rst message
                    ipt = DOM.get('input', t);          // input hidden 

                // construct default reason if undefined
                if (self.config.reason[i] === undefined ) self.config.reason[i] = [];
                
                S.each(DOM.query('a', t), function(a, j, arr) {
                    
                    // construct default reason if undefined
                    if (self.config.reason[i][j] === undefined ) 
                        self.config.reason[i][j] = DEFAULT_REASON;
                    // construct default level if undefined
                    if (self.config.level[j] === undefined ) 
                        self.config.level[j] = DEFAULT_LEVEL;
                    
                    var sc = DOM.attr(a, MA_RATING_VALUE),
                        rs = self.config.reason[i][j];
                    
                    E.on(a, 'click', function(e){
                        e.halt();
                        // adjust current
                        DOM.removeClass(DOM.query(MA_RATING_CURRENT, t), MA_RATING_CURRENT_CLS);
                        DOM.addClass(a, MA_RATING_CURRENT_CLS);
                        // hide tips
                        DOM.addClass(self.tips, HIDE);
                        DOM.val(ipt, sc);
                        // show current result message
                        DOM.html(rst, '<span><em>'+sc+'</em> 分</span> - <strong>'+rs+'</strong>');
                    });
                    
                    E.on(a, 'mouseenter', function(e){
                        var offset = DOM.offset(this),
                            coffset = DOM.offset(self.rating),
                            h = DOM.height(this),
                            w = DOM.width(this);
                        // adjust poptips' location & msg
                        DOM.html(self.poptips, '<span><em>'+sc+'</em> 分 '+ 
                                                self.config.level[j]+ 
                                                '</span><strong>'+rs+'</strong>');
                        
                        DOM.css(self.poptips, 'left', offset.left+w-coffset.left-100+'px'); 
                        DOM.css(self.poptips, 'top', offset.top-coffset.top+h+'px');
                        DOM.removeClass(self.poptips, HIDE);
                    });
                    
                    E.on(a, 'mouseleave', function(e){
                        DOM.addClass(self.poptips, HIDE);
                    });
                    
                    // ie6 change a class to his parent
                    try{
                        if (S.UA.ie === 6) {
                            var cls = DOM.attr(a, 'class').split()[0];
                            DOM.addClass(DOM.parent(a), cls);
                        }
                    }catch(e){}
                    
                });
            });
        }
    });
    S.StarRating = StarRating;
});



