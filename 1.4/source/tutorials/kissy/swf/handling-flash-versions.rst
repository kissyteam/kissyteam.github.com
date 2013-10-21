.. currentmodule:: flash

处理Flash播放器版本
====================================

author: `龙藏 <oicuicu@gmail.com>`_

.. _flash-versions-section1:

满足期望的版本
-------------------------------

.. code-block:: javascript

    KISSY.use('swf',function(S,SWF){
        if(SWF.fpvGTE('9.1.0') {
            // 符合浏览SWF内容版本
        }
    });


当然如果想了解客户端细节可以使用

.. code-block:: javascript

    KISSY.use('swf',function(S,SWF){
        var ver = SWF.fpv();
        if(ver){
            // 对ver做细节判断
            // 格式:[ Major, Minor, Revision ]
        }
        // 如果 未安装则 ver 为  undefined
    });

.. _flash-versions-section2:

较旧的版本
----------------------------

对于使用 Flash 动态方式发布的swf,则会先尝试调用快速安装，如果未指定则不作任何操作。保留原入口显示。

.. _flash-versions-section3:

未安装
------------------------------

对于使用 Flash 动态方式发布不作任何操作。保留原入口显示。