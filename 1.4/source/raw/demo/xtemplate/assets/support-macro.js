KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportMacro = function () {
        var tpl = '{{#macro "test" "t"}}{{t}}{{/macro}}call {{macro "test" arg}}';
        var render = new XTemplate(tpl).render({
            arg: 'macro'
        });
        alert(render);
    };

});