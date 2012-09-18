KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportLocalBlockCommand = function () {
        var tpl = 'my {{#global4}}{{title}}{{/global4}}';

        var data = {
            title: '1'
        };

        var render = new XTemplate(tpl, {
            commands: {
                'global4': function (scopes, option) {
                    return 'global4-' + option.fn(scopes);
                }
            }
        }).render(data);

        alert(render);
    };

});