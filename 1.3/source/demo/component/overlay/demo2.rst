.. currentmodule:: overlay

新建 Markup
========================================================

Class
-----------------------------------------------

  * :class:`Overlay`

新建 Markup
----------------------------------------------------------------------

    .. raw:: html


        <iframe width="100%" height="200" class="iframe-demo" src="/1.3/source/raw/demo/overlay/demo2.html"></iframe>

加入初始样式
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    .. code-block:: html
        
            <style>
                .ks-overlay {
                    position:absolute;
                    left:-9999px;
                    top:-9999px;
                }
                .ks-overlay-hidden {
                    visibility: hidden;
                }

                .ks-overlay-mask-hidden {
                    display: none;
                }

                .ks-overlay-shown {
                    visibility: visible;
                }

                .ks-overlay-mask-shown{
                    display: block;
                }
            </style>

    .. literalinclude:: /raw/demo/overlay/assets/demo2.js
           :language: javascript
