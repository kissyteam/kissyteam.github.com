.. module:: toolbar


Toolbar
===============================================

| 好看好用的Toolbar菜单栏组件
| `Demo <../../../raw/demo/toolbar/demo.html>`_


.. code-block:: javascript

    KISSY.use('toolbar',function(S,Toolbar){
        // use Toolbar
    });

.. hint::

    多用于后台系统

Class
-----------------------------------------------

  * :class:`Toolbar`

Configs
-----------------------------------------------

  * :data:`render`
  * :data:`children`
  
Methods
-----------------------------------------------

  * :meth:`render`

Events
-----------------------------------------------

  * :func:`click`

Class Detail
-----------------------------------------------

.. class:: Toolbar 
    
    | **Toolbar** (config)
    
    :param String|HTMLDOMNode|KISSY.Node config: 配置项，JSON对象，具体参见下方Config Detail.

Configs Detail
-----------------------------------------------
    
.. data:: highlightedItem

    {JSON} - 可选, 当前高亮的项

.. data:: expandedItem 

    {JSON} - 当前的扩展项，切换高亮项时如要把以前的扩展项收起，并展开当前的高亮项

.. data:: defaultChildCfg

    {JSON} - 菜单项的默认值配置

.. code-block:: javascript

    defaultChildCfg: {
        value: {
            xclass: 'button',
            handleMouseEvents: false,
            focusable: false
        }
    },

.. data:: xrender

    {Object} - 初始化的渲染方法类，包括渲染时的辅助操作，内部方法

