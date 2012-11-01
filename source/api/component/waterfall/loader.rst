.. currentmodule:: waterfall

Waterfall.Loader
======================================

Class
-----------------------------------------------

  * :class:`Waterfall.Loader`

Configs
-----------------------------------------------

 * :data:`~Waterfall.config.container`
 * :data:`~Waterfall.config.minColCount`
 * :data:`~Waterfall.config.effect`
 * :data:`~Waterfall.config.colWidth`

以上配置项都是继承自  :class:`Waterfall` , 另外, 自身还有:

  * :data:`~Waterfall.config.diff`
  * :data:`~Waterfall.config.load`

Methods
-----------------------------------------------

  * :meth:`~Waterfall.prototype.adjust`
  * :meth:`~Waterfall.prototype.addItems`
  * :meth:`~Waterfall.prototype.destroy`
  * :meth:`~Waterfall.prototype.isAdjusting`
  * :meth:`~Waterfall.prototype.isAdding`
  * :meth:`~Waterfall.prototype.adjustItem`
  * :meth:`~Waterfall.prototype.removeItem`

以上配置项都是继承自  :class:`Waterfall` , 另外, 自身还有:

  * :data:`~Waterfall.prototype.start`
  * :data:`~Waterfall.prototype.end`

Class Detail
-----------------------------------------------

.. class:: Waterfall.Loader

    | **Waterfall.Loader** (config)
    | 继承自 :class:`Waterfall` , 异步获取数据后, 再进行排列.

    :param Object config: 配置项, 详细见下方 **Configs Detail** .

    .. note::

        如果你使用时, 想要自行写接口获取数据块, 可以直接使用  :class:`Waterfall` ;

Configs Detail
-----------------------------------------------

.. data:: Waterfall.config.diff

    {Number} - 滚动时, 当最小高度的列超过在屏幕高度+已滚动高度+diff时, 会去加载更多数据.

.. data:: Waterfall.config.load

    {Function} - 用户自定义加载数据. 设置这个, 指定如何加载更多数据, 及加载数据后如何格式化成 HTML, 完全由用户自定义, 更加灵活.

    他有两个参数:

      - ``success`` {Function}, 用于将新加载的数据块添加到容器中, 其参数同 :meth:`addItems` ;
      - ``end`` {Function}, 用于当没有数据时, 通知组件不再触发数据加载动作, 无参数;

    你可以参考如下的一种使用场景:

    .. code-block:: javascript

        load:function(success, end) {
            // 当触发加载后, 发送 ajax 请求, 从外部数据源中获取数据块
            io({
                data:{
                    from:S.all("#container .ks-waterfall").length
                },
                url:"data.json",
                dataType:"json",
                success:function(d) {
                    // 当成功返回数据后, 根据后台数据, 判断是否还有更多数据, 这个判断标志由前后端协同好即可.
                    if (d.end) {
                        end();
                        return;
                    }

                    // 拼接数据块
                    var data = d.data,
                        items = [];

                    S.each(data, function(d) {
                        var html = template.render(d);
                        items.push($(html));
                    });
                    // 通过 success 回调, 添加 items 到当前容器中
                    success(items);
                }
            });
        },


Methods Detail
-----------------------------------------------

.. versionadded:: 1.3

.. method:: Waterfall.prototype.start

    | **start** ()
    | 开始监控 scroll 事件（随时可能会动态加载）


.. method:: Waterfall.prototype.end

    | **end** ()
    | 停止监控 scroll 事件（停止动态加载）


.. important::

    瀑布流区块中的图片请设置 display block ，否则在 firefox 中会导致区块错乱.






