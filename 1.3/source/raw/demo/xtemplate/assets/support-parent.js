KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportParent = function () {
        var tpl = '{{#each data}}{{this}}-{{../total}}|{{/each}}';

        var data = {
            data: [1, 2],
            total: 3
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});