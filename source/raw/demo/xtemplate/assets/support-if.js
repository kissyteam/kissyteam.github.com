KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportIf = function () {
        var tpl = '{{#if title}}has title{{/if}}\n' +
            '{{@if title2}}has title2{{else}}not has title2{{/if}}';

        var data = {
            title: 'o',
            title2: ''
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});