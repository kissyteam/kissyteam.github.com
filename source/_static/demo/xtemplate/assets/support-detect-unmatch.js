KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportDetectUnMatch = function () {
        var tpl = '{{#if n === n1}}\n' +
            'n eq n1\n' +
            '{{/with}}';

        var data = {
            n: 1,
            n1: 2
        };

        try {
            new XTemplate(tpl).render(data);
        } catch (e) {
            alert(e);
            throw e;
        }
    };

});