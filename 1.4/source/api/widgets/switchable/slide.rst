.. currentmodule:: switchable

Slide
===================================================================

|  Slide

.. code-block:: javascript

    KISSY.use('switchable',function(S,Switchable){
        // use Switchable.Slide
    });


.. warning::

    本组件停止维护，推荐使用 `gallery/slide <https://github.com/kissygalleryteam/slide>`_


Class Detail
---------------------------------------------------------------------

.. class:: Slide

    | **Slide** (container[, config])


Configs Detail
---------------------------------------------------------------------

    Slide 接口及配置项, 与 :class:`Switchable` 相同, 其中以下配置项的默认值有所区别:
    
    .. data:: Switchable.config.autoplay
        :noindex:

        {Boolean} - 默认为true, 是否自动切换.
        
    .. data:: Switchable.config.circular
        :noindex:

        {Boolean} - 默认为true, 是否循环切换.