KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportMustacheObject = function () {
        var tpl = '{{#data}}{{name}}-{{age}}{{/data}}';

        var data = {
            data: {
                name: 'h',
                age: 2
            }
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});