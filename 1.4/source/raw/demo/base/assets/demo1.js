var Level = {
    PRIMARY: 0,
    INTERMEDIATE: 1,
    ADVANCED: 2,
    SPECIAL: 3
};

var Gender = {
    MALE: 0,
    FEMALE: 1
};

KISSY.use('base, node, event', function(S, Base, Node, Event) {
    var $ = Node.all;
    // 自定义类
    // 继承 Base
    var Person = Base.extend({
        sayHi: function(name) {
            alert("Hi, " + name + "! Nice to meet you!");
            //触发自定义事件
            this.fire('say');
        },

        tellName: function() {
            alert("My name is " + this.get('name') + ".");
            this.fire('say');
        },

        tellAge: function() {
            alert("I'm " + this.get('age') + " years old.");
            this.fire('say');
        },

        introduce: function(extra) {
            alert("Hello everyone, my name is " + this.get('name') + ", and I'm " + this.get('age') + " years old." + extra);
            this.fire('say');
        }
    },{
        ATTRS: {
            name: {
                //设置默认值
                value: "",

                /*
                验证name是否正确，返回值不为true则无法设置。
                 */
                validator: function(value) {
                    if ( !S.isString(value) || value == "") {
                        return "Please set correct name!";
                    }
                }

            },
            age: {
                value: 1,
                validator: function(value) {
                    value = parseInt(value);
                    if (!S.isNumber(value) && value != NaN || (value < 1 && value > 100)) {
                        return "Please set correct age!";
                    }
                }
            },
            gender: {
                value: Gender.MALE,
                /*
                指定setter和getter方法的操作
                 */
                setter: function(value) {
                    if ( S.isString(value) ) {
                        return Gender[value.toUpperCase()];
                    }
                    return value;
                },
                getter: function(value) {
                    return S.keys(Gender)[value];
                },

                validator: function(value) {
                    var str = S.isString(value) && !(value.toUpperCase() in Gender);
                    var num = value > 1 || value < 0;
                    if (str || num) {
                        return "Gender must be Female or Male!";
                    }
                }
            }
        }
    });

    window.person = new Person({
        name: "Andy",
        age: 18,
        gender: "female"
    });

    /*
    阻止改变性别
     */
    person.on('beforeGenderChange', function(ev) {
        ev.preventDefault();
        alert("Gender can't change!");
    });

    /*
    任何属性变化时，给出提醒
     */
    person.on('*Change', function(ev) {
        alert('Change ' + ev.attrName + ': ' + ev.prevVal + ' --> ' + ev.newVal);
    });

    /*
    继承Person
     */
    var Student = Person.extend({
        introduce: function() {
            //调用父类方法
            this.callSuper("I'm a student of " + this.get('school') + ".My hometown is " + this.get('from') + ".");
        },

        addScore: function(subject, score) {
            //error异常收集
            //设置子属性
            this.set('score.' + subject, score, {
                error: function(e) {
                    console.log(e);
                }
            });
        },

        /*
        bind属性变化的方法
         */
        _onSetScore: function(value, ev) {
            if (!S.isEmptyObject(value)) {
                alert('Score change');
                alert(this.get('score'));
            }
        }
    }, {
        ATTRS: {
            school: {
                value: ""
            },

            from: {
                value: ""
            },

            score: {
                //验证支持对子属性的验证
                validator: function(value) {
                    return (value.math >= 0 && value.math <= 100);
                }
            }
        }
    });

    var Teacher = Person.extend({
        introduce: function() {
            this.callSuper("I'm a " + this.get('level') + "teacher, and I teach " + this.get('teach') + ".");
        },

        upLevel: function() {
            this.set('level', this.get('level') + 1, {
                error: function(e) {
                    alert(e);
                }
            });
        },

        downLevel: function() {
            this.set('level', this.get('level') - 1, {
                error: function(e) {
                    alert(e);
                }
            });
        }
    }, {
        ATTRS: {
            teach: {
                value: ""
            },

            level: {
                value: Level.PRIMARY,
                setter: function(value) {
                    if ( S.isString(value) ) {
                        return Level[value.toUpperCase()];
                    }
                    return value;
                }
            }
        }
    });

    window.student = new Student({
        name: "Jim",
        age: 20,
        school: 'MIT',
        from: 'China'
    });

    window.teacher = new Teacher({
        name: "David",
        age: 50,
        gender: Gender.MALE,
        teach: "Math",
        level: Level["INTERMEDIATE"]
    });

    teacher.on('beforeLevelChange', function(ev) {
        if (ev.newVal > Level.SPECIAL) {
            ev.preventDefault();
            alert("This teacher is already highest level!");
            return;
        } else if (ev.newVal < Level.PRIMARY) {
            ev.preventDefault();
            alert("This teacher is already lowest level!");
            return;
        }
    });

    //在level变化后的事件
    teacher.on('afterLevelChange', function(ev) {
        if (ev.prevVal < ev.newVal) {
            alert("Congratulation!");
        } else {
            alert("I'm sorry to hear that!");
        }
    });

    //自定义事件
    person.on('say', function(ev) {
        alert("everyone hear!");
    });

    Event.delegate("#common", 'click', 'button', function(event) {
        var target = $(event.currentTarget),
            id = target.attr("id"),
            type = $("#J_input").val();

        if (type != "") {
            switch(id) {
                case 'introduce':
                window[type].introduce();
                break;
                case 'setName':
                var name = $("#Name").val();
                window[type].set('name', name, {
                    error: function(e) {
                        alert(e);
                    }
                });
                break;
                case 'setAge':
                var age = $("#Age").val();
                window[type].set('age', age, {
                    error: function(e) {
                        alert(e);
                    }
                });
                break;
                case 'changeGender':
                var gender = Gender[window[type].get('gender')];

                gender = gender == 0 ? 1 : 0;
                gender = S.keys(Gender)[gender];

                window[type].set('gender', Gender[gender], {
                    error: function(e) {
                        alert(e);
                    }
                });
                break;
                default:
                break;
            }
        }
    });

    $("#addScore").on('click', function(event) {
        var subject = $("#subject").val();
        var score = $("#score").val();

        if (subject && parseInt(score)) {
            student.addScore(subject, score);
        }
    });

    $("#upLevel").on('click', function(event) {
        teacher.upLevel();
    });

    $("#downLevel").on('click', function(event) {
        teacher.downLevel();
    });

});