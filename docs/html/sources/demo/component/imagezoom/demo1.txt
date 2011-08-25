.. currentmodule:: imagezoom

标准模式
========================================================

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/overlay/>`_

Class
-----------------------------------------------

  * :class:`ImageZoom`

标准模式
----------------------------------------------------------

    .. raw:: html


        <iframe width="100%" height="360" class="iframe-demo" src="../../../static/demo/imagezoom/demo1.html"></iframe>

    .. literalinclude:: /_static/demo/imagezoom/assets/demo1.js
           :language: javascript

    1.1.6 版本的调用接口:

    .. code-block:: javascript

        KISSY.use("imagezoom", function(S) {
            // 标准模式下
            new S.ImageZoom('#standard', {
                position: 'right',
                offset: 10,
                bigImageSrc: "http://img03.taobaocdn.com/bao/uploaded/i3/T1fftwXf8jXXX7ps79_073021.jpg"
            });
        });
