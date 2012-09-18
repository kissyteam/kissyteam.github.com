KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportEscapeHtml = function () {
        var tpl = 'my {{title}} is {{{title}}}';

        var data = {
            title: '<a>'
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});