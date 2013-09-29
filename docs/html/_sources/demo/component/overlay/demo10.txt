.. currentmodule:: overlay

对话框运动到某个位置
========================================================


Class
-----------------------------------------------

  * :class:`Overlay`

对话框运动到某个位置
----------------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="400" class="iframe-demo" src="/1.3/source/raw/demo/overlay/demo10.html"></iframe>


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

    .. literalinclude:: /raw/demo/overlay/assets/demo10.js
           :language: javascript