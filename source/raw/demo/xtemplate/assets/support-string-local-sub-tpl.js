KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportStringLocalSubTpl = function () {
        var tpl = '{{include "sub-tpl-3"}}';

        var data = {
            title: '1'
        };

        var render = new XTemplate(tpl, {
            subTpls: {
                'sub-tpl-3': '{{title}}'
            }
        }).render(data);

        alert(render);
    };

});