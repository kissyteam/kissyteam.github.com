.. module:: UA

UA-Extra
====================================

|  若你需要更详细的浏览器外壳判断（包括国产第三方浏览器探测），你必须单独引入 ua-extra.js，这样，更加丰富的浏览器信息将会被添加到 KISSY.UA 的属性中。
|  通过 KISSY.UA 的属性，你可以获取浏览器等用户代理的信息。属性值遵循以下规则：
|      * 表示当前引擎或浏览器的版本。版本号 1.2.3.4 会转换为数值 1.234
|      * 如果不是当前引擎或浏览器，返回 0 或者 undefined
|      * 如果当前浏览器版本号无法准确判定，均返回 0.1
|  此时通过 KISSY.UA.shell 可以获得更详细的浏览器外壳信息，包括5大国产第三方浏览器（双核模式依然支持）。
|  作者: `玉伯 <lifesinger@gmail.com>`_
|  源码: `查看 <https://github.com/kissyteam/kissy/tree/master/src/ua-extra.js>`_

Module
-----------------------------------------------

  :mod:`UA`


Properties Detail
-----------------------------------------------

.. attribute:: trident

    {Number} - trident 的版本号。IE 浏览器 8 系列以下都无法准确探测 Trident 内核的版本号。

.. attribute:: se360

    {Number} - 360 安全浏览器的版本号。目前360安全浏览器2.x系列无法识别，只有3.x系列的才能正常识别，因此返回值可能不准确。

.. attribute:: maxthon

    {Number} - maxthon 的版本号。目前最新的傲游浏览器（3.x系列）采用双核技术，IE内核模式下，maxthon 可能无法识别。其余版本则不存此问题。

.. attribute:: tt

    {Number} - 腾讯TT浏览器的版本号。

.. attribute:: theworld

    {Number} - 世界之窗浏览器的版本号。目前世界之窗浏览器2.x系列无法识别，只有3.x系列的才能正常识别，因此返回值可能不准确。

.. attribute:: sougou

    {Number} - 搜狗浏览器的版本号。


