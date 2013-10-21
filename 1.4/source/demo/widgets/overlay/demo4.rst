.. currentmodule:: overlay

demo3 的另一种实现方式（不推荐）
=======================================================================================

Class
-----------------------------------------------

  * :class:`Overlay`

demo3 的另一种实现方式（不推荐）
----------------------------------------------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="380" class="iframe-demo" src="/1.4/source/raw/demo/overlay/demo4.html"></iframe>


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

    .. literalinclude:: /raw/demo/overlay/assets/demo4.js
           :language: javascript