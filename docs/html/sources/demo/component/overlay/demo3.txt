.. currentmodule:: overlay

多个触发元素公用一个 Popup
========================================================

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/overlay/>`_

Class
-----------------------------------------------

  * :class:`Overlay`

多个触发元素公用一个 Popup
----------------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="380" class="iframe-demo" src="../../../static/demo/overlay/demo3.html"></iframe>


加入初始样式
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    .. code-block:: html
        
            <style>
                .ks-overlay {
                    position:absolute;
                    left:-9999px;
                    top:-9999px;
                }
            </style>

    .. literalinclude:: /_static/demo/overlay/assets/demo3.js
           :language: javascript