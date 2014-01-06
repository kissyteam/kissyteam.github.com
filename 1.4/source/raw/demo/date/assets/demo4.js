KISSY.use('node, date/popup-picker, date/format,date/picker/assets/dpl.css', function(S, Node, PopupDatePicker, DateFormat) {
    var input = Node.all('#date');
    var dateFormat = DateFormat.getDateInstance(DateFormat.Style.FULL);
    var picker = null;

    Node.all('#popup').on('click', showPicker);

    function showPicker(e) {
        e.preventDefault();
        if (!picker) {
            picker = createPicker();
        }

        if (input.val()) {
            var val;
            try {
                val = dateFormat.parse(input.val());
                picker.set('value', val);
            } catch(err) {}
        }

        picker.set('align', {
            node: input,
            points: ['bl', 'tl']
        });

        picker.show();
        picker.focus();
    }

    function createPicker() {
        picker = new PopupDatePicker({
            shim:true
        });

        picker.on('blur', function () {
            picker.hide();
        });

        picker.on('select', function (e) {
            if (e.value) {
                input.val(dateFormat.format(e.value));
            } else {
                input.val('');
            }
            input[0].focus();
        });
        return picker;
    }

    input.on('keydown', function (e) {
        if (e.keyCode == Node.KeyCode.DOWN) {
            showPicker(e);
        }
    });
});