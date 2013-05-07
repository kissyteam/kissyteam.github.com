一种基于匹配回朔的 css3 选择器引擎实现
-----------------------------------------------------------

.. raw:: html

    <h2>介绍</h2>

    <p>CSS 选择器是一种应用于 DOM 节点查找场景的特定微型语法，
    本质上和正则表达式一样都是一种模式匹配语言，灵活使用可以方便得获取指定位置的节点集合。</p>

    <p>目前 W3C 推荐标准为 <a href="http://www.w3.org/TR/selectors">Selectors Level 3</a> ，
    在 ie9+ 以及 firefox，chrome，mobile 等浏览器上原生有基本一致的实现，而在 ie 下则需要
    使用 javascript 模拟实现，本文介绍一种基于匹配回朔的 css3 选择器引擎实现，特定应用于 ie6，7，8 下。</p>

    <h2>语法</h2>

    <p>css 选择器是一种紧凑的语法，根据 css3 规范一个选择器字符串首先由 ',' 号分割的组组成，例如</p>

    <pre><code>s = g1,g2
    </code></pre>

    <p>表示匹配 g1 与 g2 的元素集合。组内又由以 ' '，'+'，'&gt;'，'~' 分割的简单选择器序列组成，例如</p>

    <pre><code>g1 = simple1 + simple2
    g1 = simple1  simple2
    g1 = simple1 &gt; simple2
    g1 = simple1 ~ simple2
    </code></pre>

    <p><code>+</code> 表示 simple1 匹配的元素与 simple2 的在同一层级，且 simple2 的元素紧跟在 simple1 后面。</p>

    <p><code>&gt;</code> 表示 simple2 匹配的元素紧跟在 simple1 的下一层级。</p>

    <p><code>' '</code> 表示 simple1 匹配的元素比 simple2 的层级更靠近根节点。</p>

    <p><code>~</code> 表示 simple1 匹配的元素与 simple2 的在同一层级，且位置靠前。</p>

    <p>简单选择器序列又可以由类型选择器以及后缀选择器组成，例如</p>

    <pre><code>simple1 = type_selector suffix_selector
    </code></pre>

    <p>其中 type<em>selector 表示标签的名称，例如 'h1'，'h2'。不指定时默认为 '*' 表示匹配任何标签。
    suffix</em>selector 则一般用来进一步过滤，例如类选择器（限定类名），属性选择器（限定属性），伪类、伪元素等。</p>

    <p>例如 <code>h1.x</code> 匹配 <code>&lt;h1 class='x'&gt;</code> 而不匹配 <code>&lt;h1&gt;</code> 或 <code>&lt;span class='x'&gt;</code> 。</p>

    <p>完整语法描述可以查看 <a href="http://www.w3.org/TR/selectors">w3c 标准页面</a> 。</p>

    <p>以下文章为了简单描述，将这种语法抽象为</p>

    <pre><code>a.b + c.d ~ e.f
    </code></pre>

    <p>其中 a c e 为类型选择器，b d f 为后缀选择器，+ 代表直接位置关系的 &gt; +，~ 代表模糊位置关系的 ~ ' '.</p>

    <h2>实现</h2>

    <h3>解析器生成</h3>

    <p>首先把 css 选择器语法用 LALR 解析程序生成器生成解析程序，从而可以把选择器的字符串格式转换成结构化的数据。
    这里采用 <a href="https://github.com/kissyteam/kissy/tree/master/src/kison">kison</a> 来生成。</p>

    <p>对应 css 选择器语法的 kison 格式描述为：
    <a href="https://github.com/kissyteam/kissy/blob/master/src/dom/sub-modules/selector/src/parser-grammar.kison">selector-grammar</a></p>

    <p>生成的解析器代码如下：
    <a href="https://github.com/kissyteam/kissy/blob/master/src/dom/sub-modules/selector/src/parser.js">parser.js</a></p>

    <p>流程图如下：</p>

    <p><img src="http://img02.taobaocdn.com/tps/i2/T1vWOzXvVdXXXcQGzB-468-284.png" alt="解析器生成" title="" /></p>

    <p>解析后的结构化数据为双向链表格式，例如</p>

    <pre><code>a.b + c.d
    </code></pre>

    <p>解析后的链表为：</p>

    <p><img src="http://img02.taobaocdn.com/tps/i2/T1v_1yXBJfXXX41rk9-905-306.png" alt="linkedlist" title="" /></p>

    <h3>引擎查找</h3>

    <p>接下来的工作就是引擎查找，查找过程比较复杂，下面根据以下流程图结合实例讲解：</p>

    <p><img src="http://img02.taobaocdn.com/tps/i2/T1p9KzXtRdXXazBfwv-960-835.png" alt="engine" title="" /></p>

    <p>举例选择器字符串为：</p>

    <pre><code>a.b + c.d ~ a + e.f
    </code></pre>

    <p>匹配节点串为:</p>

    <pre><code>e.f a.b c.d e c.d e a e.f
    </code></pre>

    <h4>获取种子集合</h4>

    <p>和一般浏览器实现类似，采用自右向左的查找方法，首先要从最右端 的 type selector 获取到种子集合，根据本例为：</p>

    <pre><code>a e.f a.b c.d e c.d e a e.f
      ^           ^     ^   ^
    </code></pre>

    <h4>选择器链表分组</h4>

    <p>将选择器根据直接位置进行分组，以直接位置相连的简单的选择器序列为一组，分组后</p>

    <pre><code>a.b + c.d    ~     a + e.f
    ---------          -------
    </code></pre>

    <p>分组的意义在于，每次匹配都以直接位置相连的组为单元做匹配，回朔时也应当以组为单元回朔（直接位置处回朔无意义）。</p>

    <h4>初步过滤种子</h4>

    <p>根据最后的一组的选择器序列：</p>

    <pre><code>a + e.f
    </code></pre>

    <p>进一步过滤种子集合，过滤后为：</p>

    <pre><code>a e.f a.b c.d e c.d e a e.f
      ^                     ^
      1                     2
    </code></pre>

    <h4>进一步过滤种子</h4>

    <p>这一步会根据对种子进行进一步过滤，过滤过程中甚至会发生回朔。</p>

    <p>例如对于第一个种子，在初步过滤后，节点串游标和选择器游标分别在</p>

    <pre><code>    a e.f a.b c.d e c.d e a e.f
       ^


        a.b + c.d    ~     a + e.f
                ^
    </code></pre>

    <p>由于节点串游标已经越过节点串头，则表明该次匹配失败，该种子节点匹配失败。</p>

    <p>对于第二个种子，在初步过滤后，节点串游标和选择器游标分别在</p>

    <pre><code>        a e.f a.b c.d e c.d e a e.f
                                ^


            a.b + c.d    ~     a + e.f
                    ^
    </code></pre>

    <p>由于匹配失败，但选择器链接为 '~' ，则可不移动选择器游标，而只移动节点串游标：</p>

    <pre><code>        a e.f a.b c.d e c.d e a e.f
                              ^


            a.b + c.d    ~     a + e.f
                    ^
    </code></pre>

    <p>可继续匹配到：</p>

    <pre><code>        a e.f a.b c.d e c.d e a e.f
                          ^


            a.b + c.d    ~     a + e.f
              ^
    </code></pre>

    <p>此时由于选择器链接为 '+' 因而移动节点串游标已经不可能再次匹配，此时应对选择器游标进行回朔到该分组前面：</p>

    <pre><code>        a e.f a.b c.d e c.d e a e.f
                          ^


            a.b + c.d    ~     a + e.f
                    ^
    </code></pre>

    <p>此时仍然匹配不成功，但可以移动节点串游标为：</p>

    <pre><code>        a e.f a.b c.d e c.d e a e.f
                        ^


            a.b + c.d    ~     a + e.f
                    ^
    </code></pre>

    <p>此时可以匹配选择器游标到头：</p>

    <pre><code>        a e.f a.b c.d e c.d e a e.f
              ^


            a.b + c.d    ~     a + e.f
           ^
    </code></pre>

    <p>则表明该种子节点符合本次选择器串，最终匹配节点个数为 1</p>

    <pre><code>        a e.f a.b c.d e c.d e a e.f
                                    ^
    </code></pre>

    <h3>引擎代码</h3>

    <p>引擎代码可参见： <a href="https://github.com/kissyteam/kissy/blob/master/src/dom/sub-modules/selector/src/selector.js">selector.js</a></p>

    <h2>单元测试</h2>

    <p>单元测试直接拉取 <a href="http://sizzlejs.com/">sizzle</a> 对应于 css3 的部分，经过少量调整，全部通过：</p>

    <p><a href="http://docs.kissyui.com/kissy/src/dom/sub-modules/selector/tests/runner/test.html">selector - sizzle 测试</a></p>

    <h2>性能测试</h2>

    <p>随便构造了一个稍显复杂的例子，比 sizzle 速度快不少:</p>

    <p><a href="http://jsperf.com/kissy-selector-sizzlejs">kissy-selector-sizzle</a></p>

    <p>欢迎提交新的例子。</p>