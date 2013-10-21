.. currentmodule:: editor

link
===============================

|  链接插件

.. code-block:: javascript

    KISSY.use('editor',function(S,Editor){
        S.use('editor/plugin/link',function(S,plugin){
            // use
        });
    });

Configs
-------------------------------

.. data:: Editor.Plugin.link.config.target


Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

无


Config Details
------------------------------------------------------

.. data:: Editor.Plugin.link.config.target

    {String} - 默认为 "", 表示在当前窗口打开新链接, 也可以指定 "_blank" , 则可以在新窗口打开链接.