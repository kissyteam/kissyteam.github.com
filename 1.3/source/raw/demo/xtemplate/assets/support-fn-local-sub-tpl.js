KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportFnLocalSubTpl = function () {
        var tpl = '{{include "sub-tpl-4"}}';

        var data = {
            title: '1'
        };

        var render = new XTemplate(tpl, {
            subTpls: {
                'sub-tpl-4': function (scopes) {
                    return scopes[0].title;
                }
            }
        }).render(data);

        alert(render);
    };

});