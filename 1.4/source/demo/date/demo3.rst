.. currentmodule:: date

DatePicker 使用示例
=============================

Class
-----------------------------------------------

  * :class:`DatePicker`

DatePicker 使用示例
-----------------------------------------------

.. raw:: html

    <iframe width="100%" height="400" class="iframe-demo" src="/1.4/source/raw/demo/date/demo3.html"></iframe>

.. code-block:: html

    <div id="holder"></div>
    <div id="result"></div>

.. code-block:: javascript

    KISSY.use('node, date/picker, date/format', function(S, Node, DatePicker, DateFormat) {
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

DatePicker 英文模式使用示例
-----------------------------------------------

.. raw:: html

    <iframe width="100%" height="400" class="iframe-demo" src="/1.4/source/raw/demo/date/demo3en.html"></iframe>

.. code-block:: html

    <div id="holder"></div>
    <div id="result"></div>

.. code-block:: javascript

    KISSY.config('lang', 'en-us');

    KISSY.use('node, date/picker, date/format', function(S, Node, DatePicker, DateFormat) {
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



