.. currentmodule:: dd

dd.plugin.Scroll
===============================================

|  :class:`~dd.plugin.Scroll` 插件。 监控容器关联的所有可拖放对象, 必要时随着可拖放对象进行自动滚动.


.. code-block:: javascript

    KISSY.use('dd/plugin/scroll',function(S,Scroll){
        // use Scroll plugin
    });

Class
-----------------------------------------------

  * :class:`~dd.plugin.Scroll`

Configs
-----------------------------------------------

  * :attr:`~dd.plugin.Scroll.config.node`
  * :attr:`~dd.plugin.Scroll.config.rate`
  * :attr:`~dd.plugin.Scroll.config.diff`


Class Detail
-----------------------------------------------

.. class:: dd.plugin.Scroll
    
    | **Scroll** (config)
    |  插件 id: dd/plugin/scroll

    :param Object config: 配置项, 详细见下方 **Configs Detail**
    

Configs Detail
-----------------------------------------------
    
.. attribute:: dd.plugin.Scroll.config.node

    {String | HTMLElement} - 自动滚动容器, 随其内的可拖放节点自动滚动.

.. attribute:: dd.plugin.Scroll.config.rate

    {Array<number>} - 长度为 2, 默认值 [10,10] . 表示容器自动滚动的速度, 数组元素 1 表示横向滚动的速度, 数组元素 2 表示纵向滚动的速度.

.. attribute:: dd.plugin.Scroll.config.diff

    {Number[]} - 长度为 2, 默认值 [20,20] . 当鼠标进入容器内边缘区域时开始自动滚动.  数组元素 1 表示横向容器内边缘宽度, 数组元素 2 表示纵向容器内边缘宽度.

    .. raw:: html

        <img src='../../../../../../source/raw/api/component/dd/scroll.png' />

