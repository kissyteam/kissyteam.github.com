.. currentmodule:: date

PopupDatePicker 使用示例
=============================

Class
-----------------------------------------------

  * :class:`PopupDatePicker`

PopupDatePicker 使用示例
-----------------------------------------------

.. raw:: html

    <iframe width="100%" height="400" class="iframe-demo" src="/1.4/source/raw/demo/date/demo4.html"></iframe>


.. code-block:: html

    <input type="text" id="date">
    <button id="popup">选择日期</button>

.. code-block:: javascript


    KISSY.use('node, date/popup-picker, date/format', function(S, Node, PopupDatePicker, DateFormat) {
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

