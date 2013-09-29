KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportWithObject = function () {
        var tpl = '{{#with data}}{{name}}-{{age}}{{/with}}';

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