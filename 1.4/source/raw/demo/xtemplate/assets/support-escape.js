KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportEscape = function () {
        var tpl = 'my {{!\n' +
            'comment' +
            '\n}} \\{{title}}{{title}}';

        var data = {
            title: 'oo'
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});