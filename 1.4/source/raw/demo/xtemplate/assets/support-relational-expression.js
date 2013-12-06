KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportRelationalExpression = function () {
        var tpl = '{{#if n>n2+4/2}}' +
            '{{n+1}}' +
            '{{else}}' +
            '{{n2+1}}' +
            '{{/if}}';

        var tpl3 = '{{#if n===n2+4/2}}' +
            '{{n+1}}' +
            '{{else}}' +
            '{{n2+1}}' +
            '{{/if}}';


        var tpl4 = '{{#if n!==n2+4/2}}' +
            '{{n+1}}' +
            '{{else}}' +
            '{{n2+1}}' +
            '{{/if}}';


        var data = {
                n: 5,
                n2: 2
            }, data2 = {
                n: 1,
                n2: 2
            },
            data3 = {
                n: 4,
                n2: 2
            };

        alert(new XTemplate(tpl).render(data));

        alert(new XTemplate(tpl).render(data2));

        alert(new XTemplate(tpl3).render(data3));

        alert(new XTemplate(tpl4).render(data3));
    };

});