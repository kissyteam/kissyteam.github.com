KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportMacro = function () {
        var tpl = '{{#macro "test" "t"}}{{t}}2{{/macro}}{{include "macro/x2"}}';
        KISSY.add('macro/x2', 'call {{macro "test" arg}}');
        var render = new XTemplate(tpl).render({
            arg: 'macro'
        });
        alert(render);
    };

});