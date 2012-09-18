KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportFnSubTpl = function () {
        XTemplate.addSubTpl('sub-tpl-2', function (scopes) {
            return scopes[0].title;
        });

        var tpl = '{{include "sub-tpl-2"}}';

        var data = {
            title: '1'
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});