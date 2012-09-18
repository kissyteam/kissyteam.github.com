KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportEachArray = function () {
        var tpl = '{{#each data}}{{this}}-{{xindex}}/{{xcount}}|{{/each}}';

        var data = {
            data: [1, 2]
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});