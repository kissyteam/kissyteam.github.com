KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportEachObject = function () {
        var tpl = '{{#each data}}{{name}}-{{xindex}}/{{xcount}}|{{/each}}';

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