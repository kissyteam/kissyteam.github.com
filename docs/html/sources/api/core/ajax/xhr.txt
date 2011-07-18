.. currentmodule:: io

XhrObj
=================================

Module
-----------------------------------------------

  * :mod:`io`

Class
-----------------------------------------------

  * :class:`XhrObj`


Properties
-----------------------------------------------

  * :attr:`readyState`
  * :attr:`status`
  * :attr:`statusText`
  * :attr:`responseText`

Methods
-----------------------------------------------

  * :meth:`getResponseHeader`
  * :meth:`abort`

Class Detail
-----------------------------------------------

.. class:: XhrObj

    | **XhrObj** (config)
    | 原生 XMLHttpRequest 以及 jsonp 等非 xhr 请求对象的一个封装类.

    :param Object config:  当前请求发送时的配置信息, 参见 :ref:`IO Config <io-config>`.

Properties Detail
-----------------------------------------------


.. attribute:: readyState

    {Number} - 表示请求完成状态。可用于判断当前请求是否完成. 4 表示完成，否则表示正在进行中.(xhr 会有更多取值，jsonp script 只有 0(初始化) 1(发送中) 4(完成))

.. attribute:: status

    {Number} - 响应状态码. xhr 会有更多取值。``jsonp script`` 只有 200(成功) , 500(出错)

.. attribute:: statusText

    {String} - 响应状态字符串. 最终同回调 :data:`~io.cfg.complete` 中的 ``textStatus`` 一致.

.. attribute:: responseText(responseXML)

    {String} - 返回响应对应的 text 和 xml（如果需要）.



Methods Detail
-----------------------------------------------

.. method:: getResponseHeader

    | **getResponseHeader** (key)
    | 获得对应的响应头值.仅对于 xhr 请求有效.

    :param String key: 响应头名

.. method:: abort

    | **abort** ()
    | 如果当前请求还没完成则中断当前的请求.

    .. note::

        不仅可以中断 xhr 请求，还可以中断 jsonp 以及 script 请求，中断后会触发 :data:`~io.cfg.error` ( textStatus == "abort" ) 以及 :data:`~io.cfg.complete` 回调.

