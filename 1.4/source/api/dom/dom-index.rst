.. currentmodule:: dom

index
=================================


Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: index

    | String **index** ( selector,refer )
    | 如果 refer 不填，则为匹配 selector 的第一个元素在其兄弟节点的下标位置
    | 如果 refer 为选择器字符串，则为为匹配 selector 的第一个元素在匹配 refer 的所有元素中的位置下标
    | 如果 refer 为 dom 元素或 KISSY Node，则为 refer 在匹配 selector 的元素列表中的位置

    :param String|HTMLCollection|Array<HTMLElement> selector: 字符串表示 `css3 选择器 <http://www.w3.org/TR/css3-selectors/>`_
    :param String|HTMLElement|KISSY.Node refer:  参考节点
    :returns: {Number} - 获取元素在另一批元素的位置信息


