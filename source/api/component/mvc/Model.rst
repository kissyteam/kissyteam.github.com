.. currentmodule:: mvc

mvc.Model
===============================



|  模型类.

Class
---------------------------------

    * :class:`Model`
    
    
Configs
-----------------------------------------------

    * :data:`~Model.config.idAttribute`
    * :data:`~Model.config.url`
    * :data:`~Model.config.urlRoot`
    * :data:`~Model.config.sync`
    * :data:`~Model.config.parse`
    
Attributes
---------------------------------------------------

    * :attr:`~Model.prototype.clientId`    
    
Methods
-----------------------------------------------

    * :meth:`~Model.prototype.getId`
    * :meth:`~Model.prototype.setId`
    * :meth:`~Model.prototype.isNew`
    * :meth:`~Model.prototype.isModified`
    * :meth:`~Model.prototype.destroy`
    * :meth:`~Model.prototype.load`
    * :meth:`~Model.prototype.save`
    * :meth:`~Model.prototype.toJSON`
    
还包括继承于 :class:`base.Base` 的
    
    * :func:`~base.Attribute.prototype.get` 
    * :func:`~base.Attribute.prototype.set`  
    
    
Events
-----------------------------------------------

  * :func:`~Model.events.destroy`        

继承于 :class:`base.Base` 的

  * :func:`~base.Attribute.prototype.beforeAttrNameChange`
  * :func:`~base.Attribute.prototype.afterAttrNameChange`
  * :js:func:`~Attribute.prototype.*Change`
     
    
Class Detail
--------------------------

.. class:: Model

    | **Model** (config)
    
    * 继承自 :class:`~base.Base` , 包含其全部配置,属性,方法,事件.
    * 模型代表数据记录，并具备自动和服务器进行同步的一些功能
    
    :param Object config: 配置项.详细见下方 **Configs Detail** .
    
Configs Detail
-----------------------------------------------

.. data:: Model.config.idAttribute

    {String} - 可选，默认 "id". 服务器唯一标识该模型的字段（属性）名称
    
.. data:: Model.config.url

    {function} - 可选，如何得到模型同步到服务器的 url 地址. 默认函数
    
    .. code-block :: javascript
    
        function url() {
            var c,
                cv,
                collections = this.collections;
            for (c in collections) {
                if (collections.hasOwnProperty(c)) {
                    cv = collections[c];
                    break;
                }
            }
            var base = getUrl(cv) || this.get("urlRoot");
            if (this.isNew()) {
                return base;
            }
            base = base + (base.charAt(base.length - 1) == '/' ? '' : '/');
            return base + encodeURIComponent(this.getId()) + "/";
        }
        
    
.. data:: Model.config.urlRoot

    {String} - 可选，默认空。如果模型没有对应的 collection，对应服务器的根地址.
    
.. data:: Model.config.sync

    {function} - 可选，默认调用 :func:`mvc.sync` 。模型同步数据时调用的方法 
       
    
.. method:: Model.config.parse

    {function} - 可选，默认为对等函数。设置如何从服务器返回结果得到模型对象json数据
    
    :param * resp: 服务器返回对象
    :returns: 模型对象的 json 数据    
    
    
Attributes Detail
-------------------------------------------------------

.. attribute:: Model.prototype.clientId

    {String} - 在浏览器客户端唯一标识该对象的标识.
    
Methods Detail
-----------------------------------------------  

.. method:: Model.prototype.getId

    | **getId ( )**
    | 获取模型对象从服务器取得的唯一标识值           
    
    
.. method:: Model.prototype.setId

    | **setId ( id )**
    | 设置模型对象的唯一标识值 
    
    :param String id: 唯一标识   
    
    
.. method:: Model.prototype.isNew

    | **isNew ( )**
    | 模型对象是否是新建出来的还没有存到服务器
    
.. method:: Model.prototype.isModified

    | **isModified ( )**
    | 模型对象是否和服务器的数据不一致
    

.. method:: Model.prototype.destroy

    | **destroy ( [opts] )**
    | 销毁该模型对象
        
    :param Object opts: 销毁的一些选项，包括
    
        .. attribute:: opts.delete
        
            {boolean} - 是否销毁的同时同步到服务器
            
        .. attribute:: opts.success
        
            {function} - 销毁成功的回调
            
        .. attribute:: opts.error
        
            {function} - 销毁失败的回调
            
        .. attribute:: opts.complete
        
            {function} - 销毁结束的回调（无论成功或失败）
                  
            
.. method:: Model.prototype.load

    | **load ( [opts] )**
    | 从服务器载入数据设置模型数据    
    
    :param Object opts: 加载的一些选项，包括    
        .. attribute:: opts.success
        
            {function} - 加载成功的回调
            
        .. attribute:: opts.error
        
            {function} - 加载失败的回调
            
        .. attribute:: opts.complete
        
            {function} - 加载结束的回调（无论成功或失败）
            
            
            
            
.. method:: Model.prototype.save

    | **save ( [opts] )**
    | 将模型数据保存到服务器中    
    
    :param Object opts: 保存的一些选项，包括
    
        .. attribute:: opts.success
        
            {function} - 保存成功的回调
            
        .. attribute:: opts.error
        
            {function} - 保存失败的回调
            
        .. attribute:: opts.complete
        
            {function} - 保存结束的回调（无论成功或失败）  
            
            
.. method:: Model.prototype.toJSON

    | **toJSON ( )**
    | 返回模型对象当前包含的数据对象
    
        :rtype: Object              
        
        
Events Detail
------------------------------------------------------------------

.. function:: Model.events.destroy

    | **destroy ( e )**
    | 当模型被销毁后出发.( 即调用 :meth:`~Model.prototype.destroy` 后 )                 
            
                        
.. note::

    数据对象的 key 值不能是："idAttribute","clientId","urlRoot","url","parse","sync" 其中之一，这些属性仅供 model 内部使用.