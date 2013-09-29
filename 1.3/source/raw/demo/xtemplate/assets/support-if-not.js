KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportIfNot = function () {
        var tpl = '{{^if title}}do not have title{{/if}}\n' +
            '{{^if title2}}do not have title2{{else}}have title2{{/if}}';

        var data = {
            title: '',
            title2: ''
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});