.. currentmodule:: mvc

mvc.Router
===============================



|  路由类.

.. code-block:: javascript

    KISSY.use('mvc',function(S,mvc){
        // use mvc.Router
    });


Class
---------------------------------

    * :class:`Router`
    
    
Configs
-----------------------------------------------

    * :data:`~Router.config.routes`
    
    
Methods
-----------------------------------------------

    * :meth:`~Router.prototype.addRoutes`
    
Static Methods
-------------------------------------------------

    * :func:`~Router.navigate`
    * :func:`~Router.start`    
    
Events
--------------------------------------------------

    * :func:`~Router.Events.route`
    * :js:func:`~Router.Events.route:x`    
    
    
Class Detail
--------------------------

.. class:: Router

    | **Router** (config)
    
    * 继承自 :class:`~base.Base` , 包含其全部配置,属性,方法,事件.
    * 路由代表一个对 url 路由的策略和处理规则
    
    :param Object config: 配置项.详细见下方 **Configs Detail** .
    
    
Configs Detail
-----------------------------------------------

.. data:: Router.config.routes

    {Object} - 可选，路由策略和规则
    
    .. code-block:: javascript
    
        {
            "":"index",
            "/edit/:id":function(paths,query){
                // /editor/99?q=1
                alert(paths.id);  // => 99
                alert(query.q); // => 1
            },
            "/new/*u":function(paths){
               // /new/kissy-mvc-is-good/right
               alert(paths.u); // => kissy-mvc-is-good/right
            },
            "test_regexp":{
                reg:/\/list-(\w)/,
                callback:function(matches,query){
                    // /list-t
                    alert(matches[0]); // => t
                }
            }
        }
        
    用于指定当 url 符合一定规则时执行指定的函数，当函数为字符串时表示路由实例上的函数，规则有 3 种
    
    
    #.  :id 用于匹配 url / 间部分    
    #.  \*u 用户匹配从当前位置到结尾的 url 部分
    #.  直接配置正则表达式
    
    
    调用函数形式为
    
    .. function:: Router.config.routes.fn
    
        | **fn( paths [ , querys ] )**        
        
        :param Object paths: 包含规则路径参数和当前 url 匹配值为键值对的对象。当规则直接配置为正则表达式时，该参数值为匹配正则式的分组数组。
        :param Object querys: 包含当前url的查询参数和值为键值对的对象
    
    
Methods Detail
-----------------------------------------------  

.. method:: Router.prototype.addRoutes

    | **addRoutes ( routes )**
    | 添加路由
    
    :param Object routes : 格式同 :data:`~Router.config.routes` 配置.      
            
Static Methods Detail
-----------------------------------------------   
 
.. function:: Router.navigate

    | **navigate ( path [ , opts ] )**
    | 导航 url 到 path
    
    :param String path: 将要设置的 url 值
    :param Object opts: 包括以下控制选项
    
        .. attribute::  Router.navigate.opts.triggerRoute
        
            {boolean} - 默认 false。是否强制触发对应该路径的路由处理。默认如果当前路径和 path 相同则不会发生任何动作.
            
.. function:: Router.start

    | **start( [ opts ] )**             
    | 开始路由规则处理，一个页面仅限入口调用一次
    
    :param Object opts: 包括以下控制选项
    
        .. attribute:: Router.start.opts.triggerRoute
        
            {boolean} - 默认 false。是否触发当前路径的路由处理函数，默认只有当下次 url 发生变化时才处理.
            
            
Events Detail
----------------------------------------------------------

.. function:: Router.Events.route

    | **route( e )**
    | 当发生路由处理时触发
    
    :param String e.name: 当前的路由处理规则名称
    :param Object e.paths: 同 :func:`~Router.config.routes.fn` 中 paths 格式     
    :param Object e.query: 同 :func:`~Router.config.routes.fn` 中 query 格式    
    
            
.. js:function:: Router.Events.route:x

    | **route( e )**
    | 当发生路由处理时触发, x 替换为当前的规则名，例如 url 改变到 "/" 时触发 "route:/"
    
    :param String e.name: 当前的路由处理规则名称
    :param Object e.paths: 同 :func:`~Router.config.routes.fn` 中 paths 格式     
    :param Object e.query: 同 :func:`~Router.config.routes.fn` 中 query 格式    