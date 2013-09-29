KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportVariable = function () {
        var tpl = 'this is {{title}}!';

        var data = {
            title: 'o'
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});