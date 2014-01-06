KISSY.use('node, date/picker, date/format,date/picker/assets/dpl.css', function(S, Node, DatePicker, DateFormat) {
    var result = Node.all("#result");
    var picker = new DatePicker({
        disableDate: function(current, value) {
            return current.getMonth() < value.getMonth();
        },
        render: "#holder"
    }).render();

    picker.on('select', function(e) {
        var value = e.value;
        if (value) {
            result.html(DateFormat.getDateInstance(DateFormat.Style.FULL).format(value));
        } else {
            result.html(null);
        }
    });
});
