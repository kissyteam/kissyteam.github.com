KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportWithParent = function () {
        var tpl = '{{#with data}}' +
            '{{#with p}}' +
            '{{name}}-{{age}}-{{../l2}}-{{../../l1}}' +
            '{{/with}}' +
            '{{/with}}';

        var data = {
            l1: 1,
            data: {
                l2: 2,
                p: {
                    name: 'h',
                    age: 2
                }

            }
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});