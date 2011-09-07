.. currentmodule:: overlay

从 Markup 中构建
========================================================

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/overlay/>`_

Class
-----------------------------------------------

  * :class:`Overlay`

从 Markup 中构建
----------------------------------------------------------

    .. raw:: html


        <iframe width="100%" height="240" class="iframe-demo" src="../../../static/demo/overlay/demo1.html"></iframe>

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


    .. literalinclude:: /_static/demo/overlay/assets/demo1.js
           :language: javascript
