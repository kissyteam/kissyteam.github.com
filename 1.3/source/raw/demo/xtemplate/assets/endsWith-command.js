KISSY.use('xtemplate', function (S, XTemplate) {

    window.endsWithCommand = function () {
        var tpl = '{{d}} ends with {{#endsWith d "jpg"}}jpg{{/endsWith}}' +
            '{{#endsWith d "gif"}}gif{{/endsWith}}';

        var data = {
            d: 'x.jpg'
        };

        var render = new XTemplate(tpl, {
            commands: {
                'endsWith': function (scopes, option) {
                    return S.endsWith(option.params[0], option.params[1]) ? option.fn(scopes) : '';
                }
            }
        }).render(data);

        alert(render);
    };

});