.. _styleguide-commonconventions:

通用约定
=======================================

文件与目录命名约定
------------------------

#. **一律小写，必须是英文单词或产品名称的拼音，多个单词用连字符（-）连接。** 只能出现英文字母、数字和连字符，严禁出现中文。
#. 出现版本号时，需要用字母 v 做为前缀，小版本号用点号（.）隔开，比如 global-v8.js 或 detail-v2.2.js 。
#. 该命名规范适用于 html, css, js, swf, php, xml, png, gif, jpg, ico 等前端维护的所有文件类型和相关目录。
#. js 和 css 压缩文件，统一以 -min 结尾，比如源码文件为 kissy.js，压缩后为 kissy-min.js 。


文件编码约定
------------------------

  由于历史原因，前端开发涉及的所有文本文件请统一 **采用 GB2312, GBK 或 GB18030 编码** 。

  注意：后台采用 UTF-8 的新项目，或自主开发的项目，推荐使用 UTF-8 编码。


id 和 class 命名约定
------------------------

#. id 和 class 的命名总规则为： **内容优先，表现为辅** 。首先根据内容来命名，比如 main-nav. 如果根据内容找不到合适的命名，可以再结合表现来定，比如 skin-blue, present-tab, col-main.
#. id 和 class 名称一律小写，多个单词用连字符连接，比如 recommend-presents.
#. id 和 class 名称中只能出现小写的 26 个英文字母、数字和连字符（-），任何其它字符都严禁出现。
#. id 和 class **尽量用英文单词命名** 。确实找不到合适的单词时，可以考虑使用产品的中文拼音，比如 wangwang, dating. 对于中国以及淘宝特色词汇，也可以使用拼音，比如 xiaobao, daigou. 除了产品名称和特色词汇，其它任何情况下都严禁使用拼音。
#. 在不影响语义的情况下，id 和 class 名称中可以适当采用英文单词缩写，比如 col, nav, hd, bd, ft 等，但切忌自造缩写。
#. id 和 class 名称中的第一个词必须是单词全拼或语义非常清晰的单词缩写，比如 present, col.
#. 仅在 JavaScript 代码中当作 hook 用的 id 或 class, 命名规则为 J_UpperCamelCase（请注意，J_ 后的首字母也大写！）, 其中字母 J 代表 JavaScript, 也是钩子（hook）的象形。注意：如果在 JavaScript 和 CSS 中都需要用到，则不用遵守本约定。
#. 在自动化测试脚本中当作 hook 用的 class, 命名规则为 T_UpperCamelCase, 其中字母 T 代表 Test.

