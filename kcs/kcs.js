var S = KISSY;
S.use('core,sizzle', function() {
    var allDD = S.all('.api dd');

    allDD.each(function(elem){
        var dd = new S.Node(elem), dt = dd.prev('dt');
        if (S.trim(dd.html()).length > 0) {
            dt.prepend('<a href="#" class="J_toggle">+</a>');
            dt.one('.J_toggle').on('click', function(e) {
                var a = this;
                e.preventDefault();
                if (dd.css('display') === 'none') {
                    a.html('-');
                    dd.show();
                } else {
                    a.html('+');
                    dd.hide();
                }
            });
        }
    });

    S.one('#J_toggle').on('click', function(e) {
        e.preventDefault();
        var self = this;
        if (self.html() === '展开全部') {
            self.html('折叠全部');
            allDD.css('display', 'block');
            S.all('.J_toggle').html('-');
        } else {
            self.html('展开全部');
            allDD.css('display', 'none');
            S.all('.J_toggle').html('+');
        }
    });
});
