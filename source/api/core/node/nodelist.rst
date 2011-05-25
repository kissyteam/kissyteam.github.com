.. currentmodule:: Node

NodeList
==================================================

.. class:: NodeList(html [ ,props , ownerDocument ])

    :param string|HTMLElement|Text|Window|HTMLDocument|HTMLCollection|ArrayList<HTMLElement>|NodeList:
                                             
                                         * string : html 字符串，例如 ``<div>`` ，根据该字符串生成 ``NodeList`` 对象，代表节点个数为 html 字符串实际产生的 DOM 节点个数.
                                         * HTMLElement|Text|Window|HTMLDocument : 把原生 ``DOM`` 节点包装成一个 ``NodeList`` 对象，这个情景一般可用 ``S.all`` 代替.
                                         * HTMLCollection|ArrayList<HTMLElement> : 将原生节点列表包装为一个 ``NodeList`` 对象.
                                         * NodeList : 从当前 NodeList 对象中克隆一个新对象返回.
                                         
    :param object props: 属性键值对，对生成的 NodeList 对象代表的原生 DOM 节点设置属性。仅当 html 参数为 html 字符串时使用。
    :param HTMLDocument ownerDocument: 该 NodeList 产生的原生 DOM 节点所属的文档对象。仅当 html 参数为 html 字符串时使用。        