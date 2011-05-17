.. currentmodule:: DOM

DOM.contains
=================================

.. function:: DOM.contains(container , contained)

   判断某一容器（container）是否包含另一（contained）节点。
    
   :param string|HTMLElement container: 容器节点。字符串格式参见 :ref:`KISSY selector <dom-selector>` 获取匹配的第一个元素。
   :param string|HTMLElement contained: 检测节点。字符串格式参见 :ref:`KISSY selector <dom-selector>` 获取匹配的第一个元素。
   :returns: container 是否包含 contained 节点。
   :rtype: boolean