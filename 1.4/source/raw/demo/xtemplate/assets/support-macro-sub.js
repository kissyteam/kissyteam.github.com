KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportMacro = function () {
        var tpl = '{{include "macro/x"}}call {{macro "test" arg}}';
        KISSY.add('macro/x', '{{#macro "test" "t"}}{{t}}{{/macro}}');
        var render = new XTemplate(tpl).render({
            arg: 'macro'
        });
        alert(render);
    };

});