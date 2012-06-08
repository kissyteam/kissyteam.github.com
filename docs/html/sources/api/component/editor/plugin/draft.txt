.. currentmodule:: editor

draft
===============================

|  草稿箱插件


Configs
-------------------------------

.. data:: Editor.Plugin.Draft.config.saveKey
.. data:: Editor.Plugin.Draft.config.helpHtml
.. data:: Editor.Plugin.Draft.config.interval
.. data:: Editor.Plugin.Draft.config.limit


Events
--------------------------------------------------------

无


Commands
----------------------------------------------------------

无



Configs Details
------------------------------------------------------

.. data:: Editor.Plugin.Draft.config.saveKey

    {String} - 可选。本地存储时的内容的键名。用于区分多编辑器。

.. data:: Editor.Plugin.Draft.config.helpHtml

    {String} - 可选。本地存储的用户提示信息.

.. data:: Editor.Plugin.Draft.config.interval

    {Number} - 单位秒，可选，默认 5。定时保存的间隔。

.. data:: Editor.Plugin.Draft.config.limit

    {Number} - 单位秒，可选，默认 10。草稿箱最多草稿条数.


.. note::

    配置方式

    .. code-block:: javascript

        new Editor({
            pluginConfig:{
                draft:{
                    saveKey:'taobao',
                    interval:5
                }
            }
        });
