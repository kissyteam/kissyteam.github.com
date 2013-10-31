KISSY.use('dom', function (S, DOM) {
    var t = DOM.get("#t");
    var b = DOM.get("#b");
    var s = DOM.get("#s");
    var e = DOM.get("#e");
    setTimeout(function () {
        t.value = "1\n2\n3\n4\n5\n6\n7";
        t.focus();
        DOM.prop(t, "selectionStart", 1);
        DOM.prop(t, "selectionEnd", t.value.length - 1);
    }, 0);
    b.onclick = function () {
        t.focus();
        alert(DOM.prop(t, "selectionStart") + " - " + DOM.prop(t, "selectionEnd"));
    };
    s.onclick = function () {
        t.focus();
        var next = DOM.prop(t, "selectionStart") + 1;
        if (typeof t.selectionStart != "number" && t.value.charAt(next) == "\n") {
            next++;
        }
        DOM.prop(t, "selectionStart", next);
    };

    e.onclick = function () {
        t.focus();
        var next = DOM.prop(t, "selectionEnd") - 1;
        if (typeof t.selectionEnd != "number" && t.value.charAt(next) == "\n") {
            next--;
        }
        DOM.prop(t, "selectionEnd", next);
    };
});