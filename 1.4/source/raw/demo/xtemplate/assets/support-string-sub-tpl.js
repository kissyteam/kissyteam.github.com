KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportStringSubTpl = function () {
        XTemplate.addSubTpl('sub-tpl-1', '{{title}}');

        var tpl = '{{include "sub-tpl-1"}}';

        var data = {
            title: '1'
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});