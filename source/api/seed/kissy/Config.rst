.. currentmodule:: Seed

Config
===============================

Module
-----------------------------------------------

  :mod:`Seed`


Methods
-----------------------------------------------

.. attribute:: KISSY.Config

    类型 object ，目前暴露
    
        .. attribute:: Config.debug
        
            类型 boolean，可以通过设置 ``KISSY.Config.debug = true`` 来开启 debug 模式。
            debug 模式默认关闭，但在以下情况下会自动开启：
            
            #. 引入的 js 文件是未压缩版本，比如 `<script src="kissy.js"></script>`
            #. 访问的 url 路径中，带有 ks-debug 参数，比如 http://www.taobao.com/?ks-debug
            
            debug 模式开启时，源码中的 `S.log` 会利用浏览器的 console 对象输出调试信息。
            debug 模式关闭时，不会输出调试信息。

    