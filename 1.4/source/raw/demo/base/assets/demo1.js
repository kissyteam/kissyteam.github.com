KISSY.use('base, event', function(S, Base, Event) {
    // 自定义类
    // 继承 Base
    var myClass = Base.extend({},{
        size: {
            value: 0,
            setter: function(v) {
                if (S.isString(v) && v.indexOf('inch')!== -1) {
                    return parseFloat(v)*10/3;
                }
                return parseFloat(v);
            },
            getter: function(v) {
                return v;
            }
        }
    });

    var cls = new myClass();

    // 绑定事件
    cls.on('afterSizeChange', function(ev){
        alert('change '+ ev.attrName + ': '+ev.prevVal+' --> '+ev.newVal);
    });

    cls.on('beforeSizeChange', function(ev) {
        if ( ev.newVal == 30 ){
            ev.preventDefault();
            alert('No change');
        }
    });

    Event.on('#set', 'click', function() {
        // 设置属性
        cls.set('size', 20);
    });

    Event.on('#sett', 'click', function() {
        // 设置属性
        cls.set('size', 30);
    });

    Event.on('#get', 'click', function() {
        // 获取属性
        alert(cls.get('size'));
    });

    Event.on('#reset', 'click', function() {
        // 重置
        cls.reset();
        alert(cls.get('size'));
    });
});