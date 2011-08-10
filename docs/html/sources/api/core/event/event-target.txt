.. currentmodule:: Event

Target
=================================

Module
-----------------------------------------------

  :mod:`Event`

Class
-----------------------------------------------

  * :class:`Target`


Methods
-----------------------------------------------

  * :meth:`~Target.fire`
  * :meth:`~Target.on`
  * :meth:`~Target.detach`

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

.. method:: Target.on
    
    | **on** ( type , fn [ , scope ] )
    | 绑定事件处理器, 可参考 :func:`Event.on`

.. method:: Target.detach

    | **detach** ( type  [ , fn , scope ] )
    | 解除绑定的事件处理器, 可参考 :func:`Event.detach`
        

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
