.. currentmodule:: overlay

对话框 新建 + Mask + aria
========================================================

Class
-----------------------------------------------

  * :class:`Overlay`

对话框 新建 + Mask + aria
----------------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="350" class="iframe-demo" src="/1.4/source/raw/demo/overlay/demo6.html"></iframe>


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

    .. literalinclude:: /raw/demo/overlay/assets/demo6.js
           :language: javascript