/**
 * show hide fadein fadeout
 * @creator qiaohua
 * @depends kissy-core, anim
 */

KISSY.add('display', function(S) {
    var DOM = S.DOM,
        E = S.Event,
        DISPLAY = 'display', BLOCK = 'block', NONE = 'none',
        OVERFLOW = 'overflow', HIDDEN = 'hidden',
        OPCACITY = 'opacity',
        HEIGHT = 'height',
        WIDTH = 'width',
        AUTO = 'auto',
        FX = {
            'show': [OVERFLOW, OPCACITY, HEIGHT, WIDTH],
            'fade': [OPCACITY],
            'slide': [OVERFLOW, HEIGHT]
            };
    
    function _fx(obj, f, which, speed, callback) {
        // obj 转成 node 形式
        if (S.isString(obj)) obj = S.one(obj);
        else if (obj.nodeType!==S.Node.TYPE) obj = new S.Node(obj);
        
        if (!obj) return;
        
        // 动画参数
        var ani = {};
        
        if (f) obj.css(DISPLAY, BLOCK);
        // 根据不同类型设置初始 css 属性, 并设置动画参数
        S.each(FX[which], function(efct) {
            if (efct === OVERFLOW) {
                obj.css(OVERFLOW, HIDDEN);
            } else if (efct === OPCACITY) {
                ani.opacity = f ? 1 : 0;
                if (f) obj.css(OPCACITY, 0);
            } else if (efct === HEIGHT) {
                ani.height = (f ? obj.height()||obj[0].naturalHeight : 0) + 'px';
                if (f) obj.height(0);
            } else if (efct === WIDTH) {
                ani.width = (f ? obj.width()||obj[0].naturalWidth : 0) + 'px';
                if (f) obj.width(0);
            }
        });
        // 开始动画
        obj.animate(ani,
                    speed,
                    S.Easing.easeOut,
                    function(){
                        // 如果是隐藏, 需要恢复一些 css 属性, 或者删除不相关的属性
                        if (!f) {
                            obj.css(DISPLAY, NONE);
                            obj.height(AUTO);
                            obj.width(AUTO);
                            obj.css(OVERFLOW, AUTO);
                            obj.css(OPCACITY, 1);
                        }
                        if (callback&&S.isFunction(callback)) callback();
                    });
        
    }
    /*
    show/hide           display; overflow; opacity, height, width, 
    
    fadeIn/fadeOut      display; opacity
    
    slideDown/slideUp   display; overflow; height;
    */
    
    S.show = function(obj, speed, fn){
        _fx(obj, true, 'show', speed, fn);
    };
    
    S.hide = function(obj, speed, fn){
        _fx(obj, false, 'show', speed, fn);
    };
    
    S.fadeIn = function(obj, speed, fn){
        _fx(obj, true, 'fade', speed, fn);
    };
    
    S.fadeOut = function(obj, speed, fn){
        _fx(obj, false, 'fade', speed, fn);
    };
    
    S.slideDown = function(obj, speed, fn){
        _fx(obj, true, 'slide', speed, fn);
    };
    
    S.slideUp = function(obj, speed, fn){
        _fx(obj, false, 'slide', speed, fn);
    };
    
});
