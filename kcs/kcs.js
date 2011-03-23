var S = KISSY;
S.use('core,sizzle', function() {
    var allDD = S.all('.api dd');

    allDD.each(function(elem){
        var dd = new S.Node(elem), dt = dd.prev('dt');

        // 隐藏描述
        var prt = dt[0],
            children = prt.childNodes,
            textNode = children[children.length-1];
        if (S.DOM._nodeTypeIs(textNode, 3)) {
            S.DOM.append(new S.Node('<span>'+textNode.textContent+'</span>'), prt);
            prt.removeChild(textNode);
        }

        //if (S.trim(dd.html()).length > 0) {
            dt.prepend('<a href="#" class="J_toggle">+</a>');
            dt.one('.J_toggle').on('click', function(e) {
                var a = this;
                e.preventDefault();
                if (dd.css('display') === 'none') {
                    a.html('-');
                    dd.show();
                    dt.one('span').css('display', 'inline');
                } else {
                    a.html('+');
                    dd.hide();
                    dt.one('span').css('display', 'none');
                }
            });
        //}
    });

    S.one('#J_toggle').on('click', function(e) {
        e.preventDefault();
        var self = this;
        if (self.html() === '展开全部') {
            self.html('折叠全部');
            allDD.css('display', 'block');
            S.all('.J_toggle').html('-');
            S.all('.api dt span').css('display', 'inline');
        } else {
            self.html('展开全部');
            allDD.css('display', 'none');
            S.all('.J_toggle').html('+');
            S.all('.api dt span').css('display', 'none');
        }
    });
});
