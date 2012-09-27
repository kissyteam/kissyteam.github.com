.. currentmodule:: overlay

从 Markup 中构建
========================================================

Class
-----------------------------------------------

  * :class:`Overlay`

从 Markup 中构建
----------------------------------------------------------

    .. raw:: html


        <iframe width="100%" height="240" class="iframe-demo" src="../../../../../source/raw/demo/overlay/demo1.html"></iframe>

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
            
    .. note::
    
        初始 srcNode 不能设置为 display:none ，需要设置为 position:absolute;left:-9999px;top:-9999px;        


    .. literalinclude:: /raw/demo/overlay/assets/demo1.js
           :language: javascript
