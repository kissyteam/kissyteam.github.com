.. currentmodule:: seed

getScript
===================================

Module
-----------------------------------------------

  :mod:`seed`

Methods
-----------------------------------------------

.. function:: KISSY.getScript

    | HTMLELement **KISSY.getScript** (url , config)
    | 动态加载目标地址的资源文件
    
    :param string url: js/css 的资源地址
    :param object config: 动态加载配置对象, 包括以下
    :param String config.charset: 资源文件的字符编码
    :param Function config.success: 资源加载成功后回调函数.
    :param Function config.error: 超时或发生错误时回调函数. 当资源文件为 css 文件时不支持
    :param Numver config.timeout: 单位为秒, 默认 5 秒. 超时后触发 error 回调. 当资源文件为 css 文件是不支持
    :rtype: HTMLELement
    :returns: 创建的 link 节点或 script 节点
    
    | HTMLELement **KISSY.getScript** (url,success,charset)
    | 相当于调用 ``KISSY.getScript(url , { success : success , charset : charset });``
        