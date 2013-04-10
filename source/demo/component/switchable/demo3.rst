.. currentmodule:: switchable


土豆今日焦点
========================================================

.. warning::

    本组件停止维护，推荐使用 `gallery/slide <http://t.cn/zTqcfXr>`_

Class
-----------------------------------------------

  * :class:`Switchable`


土豆今日焦点
--------------------------------------------------

    .. raw:: html

        <iframe width="100%" height="300" class="iframe-demo" src="../../../../../source/raw/demo/switchable/demo3.html"></iframe>


    **组织 HTML 结构**

    .. code-block:: html

        <div id="slideFocus" class="s-demo">
            <div class="h">
                <h3>今日焦点视频</h3>
            </div>
            <div class="c">
                <div class="pic loading">
                    <ul class="pic-list">
                        <li><a href="#"><img alt="" src="http://at-img4.tdimg.com/board/2010/1/2235.jpg"/></a></li>
                        <li><a href="#"><img alt="" src="http://at-img3.tdimg.com/board/2010/1/2_5.jpg"/></a></li>
                        <li><a href="#"><img alt="" src="http://at-img4.tdimg.com/board/2010/1/tt.jpg"/></a></li>
                        <li><a href="#"><img alt="" src="http://at-img2.tdimg.com/board/2009/12/avatarchina.jpg"/></a></li>
                        <li><a href="#"><img alt="" src="http://at-img1.tdimg.com/board/2009/12/0101jyu-daxue379.jpg"/></a></li>
                        <li><a href="#"><img alt="" src="http://at-img2.tdimg.com/board/2010/1/24_1.jpg"/></a></li>
                    </ul>
                </div>
                <div class="txt">
                    <ul class="desc-list">
                        <li style="display: block">
                            <h4><a title="《神话》热播 第05集21:10分上线" target="_blank" href="http://www.tudou.com/home/_53991369">《神话》热播 第05集21:10分上线</a></h4>
                            <p>秦代的刑场上，一个身着奇装异服的年轻人从天而降，众将士议论纷纷，不敢近前，不知是叛贼来劫法场，还是神仙妖孽下凡……</p>
                        </li>
                        <li style="display: none">
                            <h4><a target="_blank" href="http://www.tudou.com/playlist/playindex.do?lid=7684460&amp;iid=44145734&amp;cid=3">2010年第一场强降雪飘落京城</a></h4>
                            <p>继昨日凌晨降下新年首场小雪，今日首场强降雪飘落京城，据气象台预计雪后北京将降温至-16℃，这也将创下近40年来的最低温记录。</p>
                        </li>
                        <li style="display: none">
                            <h4><a target="_blank" href="http://www.tudou.com/playlist/playindex.do?lid=7683893">娱乐圈丑闻 导演张一白吸毒被抓</a></h4>
                            <p>正拍摄《杜拉拉升职记》的导演张一白因吸毒被抓，据传是其捧红的徐静蕾“告密”，衣食无忧、事业有成的明星，为何屡屡曝出吸毒丑闻？</p>
                        </li>
                        <li style="display: none">
                            <h4><a target="_blank" href="http://www.tudou.com/home/avatar2010">詹姆斯-卡梅隆传奇巨制《阿凡达》</a></h4>
                            <p>曾因《泰坦尼克号》创造过票房记录的好莱坞导演詹姆斯-卡梅隆，经过了14年的酝酿，耗资4亿美元拍制的科幻巨献《阿凡达》将于4日在中国上映！</p>
                        </li>
                        <li style="display: none">
                            <h4><a target="_blank" href="http://www.tudou.com/playlist/playindex.do?lid=7637976">2009年大学生十大杯具事件</a></h4>
                            <p>从70岁老教授潜规则艺校女生，到上海贫困女硕士自杀，09年发生在大学生身上的是非真是多得来令人惊诧，除了心酸就只有“杯具”了。</p>
                        </li>
                        <li style="display: none">
                            <h4><a target="_blank" href="http://www.tudou.com/home/_52974690/">尚周刊 第三期</a></h4>
                            <p>全新《尚周刊》在新年里与大家新鲜见面。简约是本周最IN的街头风！闪亮派对妆是每个潮女必备美妆术！想了解更多时尚资讯来《尚周刊》！</p>
                        </li>
                    </ul>
                    <ul class="thumbs-list">
                        <li class="current"><img alt="" width="84" height="62" src="http://at-img4.tdimg.com/board/2010/1/%CA%D7%D2%B3%BD%B9%B5%E3%CD%BCs.jpg"/></li>
                        <li><img alt="" width="84" height="62" src="http://at-img3.tdimg.com/board/2010/1/2_4.jpg"/></li>
                        <li><img alt="" width="84" height="62" src="http://at-img4.tdimg.com/board/2010/1/tt1.jpg"/></li>
                        <li><img alt="" width="84" height="62" src="http://at-img2.tdimg.com/board/2009/12/avatarchina-s.jpg"/></li>
                        <li><img alt="" width="84" height="62" src="http://at-img4.tdimg.com/board/2009/12/0101jyu-82641.jpg"/></li>
                        <li><img alt="" width="84" height="62" src="http://at-img1.tdimg.com/board/2010/1/4_1.jpg"/></li>
                    </ul>
                </div>
            </div>
        </div>

    
    **JS 初始化**

    通过容器元素的 id 和相关配置, 构建 :class:`Switchable` 对象 :

    .. literalinclude:: /raw/demo/switchable/assets/demo3.js
           :language: javascript




