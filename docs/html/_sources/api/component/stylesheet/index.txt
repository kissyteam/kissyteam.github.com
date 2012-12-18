StyleSheet
===============================================

|  动态修改外部或内联样式表

.. code-block:: javascript

    KISSY.use('stylesheet',function(S,StyleSheet){
        // use stylesheet
        /*
          <link id='existing'>
            a {
                color:red;
            }
          </link>
        */
        var stylesheet = new StyleSheet({
            el: '#existing'
        });

        stylesheet.get('a'); // => color:red
    });


Class
-----------------------------------------------

  * :class:`StyleSheet`

Configs
-----------------------------------------------

  * :data:`~StyleSheet.config.el`

Properties
-----------------------------------------------

  * :attr:`~StyleSheet.prototype.el`


Methods
-----------------------------------------------

  * :meth:`~StyleSheet.prototype.disable`
  * :meth:`~StyleSheet.prototype.enable`
  * :meth:`~StyleSheet.prototype.get`
  * :meth:`~StyleSheet.prototype.isEnabled`
  * :meth:`~StyleSheet.prototype.disable`
  * :meth:`~StyleSheet.prototype.set`


Class Detail
-----------------------------------------------

.. class:: StyleSheet
    
    | **SWF** (config)
    
    :param Object config: 实例化 StyleSheet 对象的配置项, 详细见下节.

Configs Detail
-----------------------------------------------

.. data:: StyleSheet.config.el

    {HTMLElement|String} - link 节点或选择器


Properties Detail
-----------------------------------------------

.. attribute:: StyleSheet.prototype.el

    {HTMLElement} - link 元素节点


Methods Detail
-----------------------------------------------

.. method:: StyleSheet.prototype.disable

    | **disable( )**
    | 禁用当前 stylesheet 所在样式表的所有样式

    :returns: 当前实例


.. method:: StyleSheet.prototype.enable

    | **enable( )**
    | 启用当前 stylesheet 所在样式表的所有样式

    :returns: 当前实例


.. method:: StyleSheet.prototype.isEnabled

    | **isEnabled( )**
    | 当前样式表是否已经被启用

    :returns: {Boolean}

.. method:: StyleSheet.prototype.get

    | **get( selectorText )**
    | 获取对应 selectorText 的样式定义文本.

    :returns: {String}

    例如：

    .. code-block:: javascript

        KISSY.use('stylesheet',function(S,StyleSheet){
            // use stylesheet
            /*
              <link id='existing'>
                a {
                    color:red;
                }
              </link>
            */
            var stylesheet = new StyleSheet({
                el: '#existing'
            });

            stylesheet.get('a'); // => color:red
        });


.. method:: StyleSheet.prototype.set

    | **set( selectorText, css )**
    | 设置对应 selectorText 的样式定义.

    :params {String} selectorText: 选择器字符串
    :params {Object} css: 样式键值对
    :returns: 当前实例

    例如：

    .. code-block:: javascript

        KISSY.use('stylesheet',function(S,StyleSheet){
            // use stylesheet
            /*
              <link id='existing'>
                a {
                    color:red;
                }
              </link>
            */
            var stylesheet = new StyleSheet({
                el: '#existing'
            });

            stylesheet.set('a',{
                color:'',
                fontSize:'18px'
            }).get('a'); // => font-size:18px;
        });