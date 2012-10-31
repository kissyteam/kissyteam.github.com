KISSY.use("menu", function (S, Menu) {


    var $ = S.all;

    var simple = {
        base: {

        },
        // simple ui
        badges: {
            requires: ['base']
        },
        forms: {
            requires: ['base']
        },
        icons: {
            requires: ['base']
        },
        labels: {
            requires: ['base']
        },
        tables: {
            requires: ['base']
        }
    };


    var complex = {
        button: {

        },
        calendar: {

        },
        combobox: {
            requires: [ 'menu']
        },
        menu: {

        },
        menubutton: {
            requires: [ 'button', 'menu']
        },
        overlay: {

        },
        'split-button': {
            requires: [ 'menubutton']
        },
        tabs: {
            requires: [ 'button']
        },
        'toolbar': {
            requires: [ 'menubutton']
        },
        'tree': {

        }
    };

    var modsHolder = {
        simple: simple,
        complex: complex
    };

    var cssContainer = $("#cssContainer");


    cssContainer.append('<h3>simple ui</h3>');

    var div = $("<p></p>").appendTo(cssContainer);

    S.each(simple, function (item, name) {
        div.append('<label class="checkbox">' +
            '<input type="checkbox"' +
            ' class="simple" ' +
            ' value="' +
            name + '">' + name + '' +
            '</label>');
    });

    cssContainer.append('<h3>complex ui</h3>');

    div = $("<p></p>").appendTo(cssContainer);

    S.each(complex, function (item, name) {
        div.append('<label class="checkbox">' +
            '<input type="checkbox"' +
            'class="complex" ' +
            ' value="' +
            name + '">' + name + '' +
            '</label>');
    });

    function findAllMods(requires, mods, ret) {
        ret = ret || [];
        // menu button menubutton
        S.each(requires, function (r) {
            if (S.indexOf(r, ret) != -1) {
                return;
            }
            var name = r;
            r = mods[r];
            if (r.requires) {
                findAllMods(r.requires, mods, ret);
            }
            ret.push(name);
        });
        return ret;
    }

    function gen(base, mode, callbackRule) {

        var mods = S.map($("#cssContainer input." + mode), function (n) {
            if ($(n)[0].checked) {
                return $(n).val();
            }
        });

        mods = S.filter(mods, function (m) {
            return !!m;
        });

        var all = findAllMods(mods, modsHolder[mode]),
            cache = {}, finalMods = [];

        S.each(all, function (a) {
            if (cache[a]) {
            } else {
                finalMods.push(a);
                cache[a] = 1;
            }
        });

        if (!finalMods.length && mode == 'simple') {
            finalMods = ["base"];
        }

        var urls = S.map(finalMods, callbackRule);

        if (urls.length) {

            var f = base + "??" + urls.join(",");

            return ('<p><a href="' + f + '" target="_blank">' +
                f
                + '</p>');
        } else {
            return "";
        }
    }

    $("#gen").on("click", function () {

        var min = $("#min").attr("checked"), html = "";

        var base = $("#cdn").attr("checked") ?
            "http://a.tbcdn.cn/s/kissy/1.3.0rc/" :
            S.config("base");

        html += gen(base + 'css/dpl/', 'simple', function (m) {
            return m + (min ? "-min" : "") + ".css";
        });

        html += gen(base, 'complex', function (m) {
            return m + "/assets/dpl" + (min ? "-min" : "") + ".css";
        });

        $("#result").html(html);
    });

});