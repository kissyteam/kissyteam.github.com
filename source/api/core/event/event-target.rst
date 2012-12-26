.. currentmodule:: event

Target
=================================

Module
-----------------------------------------------

  :mod:`event`

Class
-----------------------------------------------

  * :class:`Target`


Methods
-----------------------------------------------

  * :meth:`~Target.fire`
  * :meth:`~Target.on`
  * :meth:`~Target.detach`
  * :meth:`~Target.publish`
  * :meth:`~Target.addTarget`
  * :meth:`~Target.removeTarget`

Class Detail
-----------------------------------------------

.. class:: Target

    | **Target** ( event )
    | 通过将该对象混入普通对象就可以使得普通对象和 dom 节点一样也能触发, 添加和删除事件.

Methods Detail
-----------------------------------------------

.. method:: Target.fire

    | **fire** ( type , eventData)
    | 触发绑定 type 类型的事件处理器, 并给触发的事件处理器的事件对象参数中混入数据 eventData

    :param string type: 要触发的自定义事件名称
    :param object eventData: 要混入触发事件对象的数据对象
    :returns: 如果其中一个事件处理器返回 false , 则返回 false, 否则返回最后一个事件处理器的返回值
    

    
.. method:: Target.publish

    | **publish** ( type , cfg)
    | 配置自定义事件的一些特有信息
    
    :param string type: 事件类型字符串
    :param object cfg: 事件的具体配置对象，目前包括
    
        .. attribute:: Target.publish.cfg.bubbles
        
            类型 boolean. 是否支持冒泡。 默认 true

        .. attribute:: Target.publish.cfg.defaultFn

            类型 Function.
            

     
.. method:: Target.addTarget

    | **addTarget** ( target )
    | 添加冒泡事件源对象
    
    :param EventTarget target: 事件往上冒泡的事件源
    
    
    例如：
    
    .. code-block:: javascript
    
        KISSY.use("event", function(S, Event) {                
            function Custom(id){
                this.id = id;
                this.publish("run",{
                    bubbles:1
                });
            }
            
            S.augment(Custom, Event.Target);
            
            var c1 = new Custom("c1");
            
            var c2 = new Custom("c1");
            
            c1.addTarget(c2);
            
            c2.on("run",function(e){
                S.log(e.target.id +" fires event run"); // => c1 fires event run
            }); 
            
            c1.fire("run");
        });
    
    

    
.. method:: Target.removeTarget

    | **addTarget** ( target )
    | 删除冒泡事件源对象
    
    :param EventTarget target: 事件往上冒泡的事件源                     

.. method:: Target.on
    
    | **on** ( type , fn [ , scope ] )
    | 绑定事件处理器, 可参考 :func:`Event.on`

.. method:: Target.detach

    | **detach** ( type  [ , fn , scope ] )
    | 解除绑定的事件处理器, 可参考 :func:`event.detach`
        

    .. code-block:: javascript

        var S = KISSY;

        // 定义 Dog 类
        function Dog(name) {
            this.name = name;
        }

        // 让 Dog 成为事件目标
        S.augment(Dog, S.EventTarget);

        // 给 Dog 添加 run 方法
        S.augment(Dog, {
           run: function() {
               // 触发 running 事件
               this.fire('running', {speed: '80km/h'});
           }
        });

        var dog = new Dog('Lady Gogo');

        // 添加监听函数
        dog.on('running', function(ev) {
            // 注意 ev 的参数传递大使身份
            alert(this.name + ' is running now. Its speed is ' + ev.speed);
        });

        // 让可爱的小狗跑起来吧
        dog.run();

.. note::

    注意 S.EventTarget 仅用于 mix/augment ，不可以直接使用，例如需要全局事件的话可以：

    .. code-block:: javascript

        var globalEvent=S.mix({},S.EventTarget);
        globalEvent.on('Login:session:pass', function(){
          isSessionPass = true;
        });