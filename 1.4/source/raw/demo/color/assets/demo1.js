KISSY.use('node, event, color, gallery/pageNotification/1.0/index', function(S, Node, Event, Color, PageNotification) {
    var $ = KISSY.all;
    var color;

    var pn = new PageNotification({
        "closeButton": true,
        "positionClass": "page-notification-top-right",
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    });

    $('#new').on('click', function(event) {
        var a = $("#a").val() || 0;
        var r = $("#r").val() || 0;
        var g = $("#g").val() || 0;
        var b = $("#b").val() || 0;

        color = new Color({a:a, r:r, g:g, b:b});
    });

    $('#toHSL').on('click', function(event) {
        var hsl = color.toHSL();
        pn.success(hsl);
    });

    $('#toHSLA').on('click', function(event) {
        var hsl = color.toHSLA();
        pn.success(hsl);
    });

    $('#toRGB').on('click', function(event) {
        var hsl = color.toRGB();
        pn.success(hsl);
    });

    $('#toRGBA').on('click', function(event) {
        var hsl = color.toRGBA();
        pn.success(hsl);
    });

    $('#toHex').on('click', function(event) {
        var hsl = color.toHex();
        pn.success(hsl);
    });

    $('#setHSL').on('click', function(event) {
        var color_1 = new Color();
        var hsl = color.getHSL();
        color_1.setHSL(hsl);

        pn.success(color_1.toHSL());
    });

    $('#setHSV').on('click', function(event) {
        var color_1 = new Color();
        var hsv = color.getHSV();
        color_1.setHSV(hsv);
        hsv = color_1.getHSV();
        pn.success('{h:' + hsv.h + ',s:' + hsv.s + ',v:' + hsv.v + '}');
    });

    $('#parse').on('click', function(event) {
        var color_1 = Color.parse($("#str").val());
        pn.success(color_1.toRGBA());
    });

    $('#fromHSL').on('click', function(event) {
        var color_1 = Color.fromHSL(color.getHSL());
        pn.success(color_1.toHSL());
    });

    $('#fromHSV').on('click', function(event) {
        var color_1 = Color.fromHSV(color.getHSV());
        pn.success(color_1.toHex());
    });

});