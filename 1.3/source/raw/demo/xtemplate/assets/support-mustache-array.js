KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportMustacheArray = function () {
        var tpl = '{{#data}}{{name}}-{{xindex}}/{{xcount}}|{{/data}}';

        var data = {
            data: [
                {
                    name: 1
                },
                {
                    name: 2
                }
            ]
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});