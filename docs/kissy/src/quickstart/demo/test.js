function isPrime(num){
    if (isPrime.answers[num] != null) return isPrime.answers[num];
    
    var prime = num != 1;
    for (var i=2; i<num; i++) {
        if (num%i == 0) {
            prime = false;
            break;
        }
    }
    return isPrime.answers[num] = prime;
}
isPrime.answers = {};

assert(isPrime(5), "Make sure the function works, 5 is prime.");
assert(isPrime.answers[5], "Make sure the answer is cached.");







function getElements(name){
    return getElements.cache[name] = getElements.cache[name] || document.getElementsByTagName(name);
}
getElements.cache = {};






function loop(array, fn){
    for (var i = 0; i<array.length; i++) {
        if (fn.call(array, array[i], i ) === false) break;
    }
}
var num = 0;
loop([0, 1, 2], function(value, i){
    assert(value == num++, "Make sure the contents are as we expect it.");
});

Math.min.apply(Math, array);







function Ninjas(){
    var ninjas = ["Dean Edwards", "Sam Stephenson", "Alex Russell"];
    
    addMethod(this, "find", function(){
        return ninjas;
    });
    
    addMethod(this, "find", function(name){
        var ret = [];
        for (var i=0; i<ninjas.length; i++) {
            if (ninjas[i].indexOf(name) == 0) ret.push(ninjas[i]);
        }
        return ret;
    });
    addMethod(this, "find", function(first, last){
        var ret = [];
        for (var i=0; i<ninjas.length; i++){
            if (ninjas[i] == (first + " " + last)) return push(ninjas[i]);
        }
        return ret;
    });
    
    var ninjas = new Ninjas();
    assert(ninjas.find().length == 3, "Finds all ninjas");
    assert(ninjas.find("Sam").length == 1, "Finds ninjas by first name");
    assert(ninjas.find("Dean", "Edwards").length == 1, "Finds ninjas by first and last name");
    assert(ninjas.find("Alex", "X", "Russell") == null, "Does nothing");
    
    // core function
    function addMethod(object, name, fn){
        var old = object[name];
        object[name] = function(){
            if (fn.length == arguments.length) return fn.apply(this, arguments)
            else if (typeof old == 'function') return old.apply(this, arguments);
        };
    }
}

// fn is function or not
function isFunction(fn){
    return Object.prototype.toString.call(fn) === "[object Function]";
}








function bind(context, name){
    return function(){
        return context[name].apply(context, arguments);
    };
}
var Button = {
    click: function(){
        this.clicked = true;
    }
};

var elem = document.getElementById("test");
elem.addEventListener("click", bind(Button, "click"), false);
trigger(elem, "click");
assert(Button.clicked, "The Clicked property was set on our object");








Function.prototype.bind = function(){
    var fn = this, args = Array.prototype.slice.call(arguments), object = args.shift();
    
    return function(){
        return fn.apply(object, args.concat(Array.prototype.slice.call(argurments)));
    };
};

var myObject = {};
function myFunction(){
    return this == myObject;
}

assert(!myFunction(), "Context is not set yet");

var aFunction = myFunction.bind(myObject);
assert(aFunction(), "Context is set properly");









Function.prototype.curry = function(){
    var fn = this, args = Array.prototype.slice.call(arguments);
    return function(){
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    };
};











Function.prototype.partial = function(){
    var fn = this, args = Array.prototype.slice.call(arguments);
    return function(){
        var arg = 0;
        for (var i=0; i<args.length && arg<arguments.length; i++) {
            if (args[i] == undefined) agrs[i] = arguments[arg++];
        }
        return fn.apply(this, args);
    };
};

var delay = setTimeout.partial(undefined, 10);
delay(function(){
    assert(true, "A call to this function will be temporarily delayed.");
});

//or
var bindClick = document.body.addEventListener.partial("click", undefined, false);
bindClick(function(){
    assert(true, "Click event bound via curried function.");
});





Function.prototype.memoized = function(key){
    this._values = this._values||{};
    return this._values[key] !== undefined?this._values[key]: this._values[key] = this.apply(this, arguments);
};
function isPrime(num){
    var prime = num != 1;
    for (var i = 2; i < num; i++){
        if(num%i == 0){
            prime = false;
            break;
        }
    }
    return prime;
}
assert(isPrime.memoized(5), "Make sure the function works, 5 is prime.");
assert(isPrime._values[5], "Make sure the answer is cached.");

Function.prototype.memoize = function(){
    var fn = this;
    return function(){
        return fn.memoized.apply(fn, arguments);
    };
};
var isPrime = (function(num){
    var prime = num != 1;
    for (var i = 2; i < num; i++){
        if (num%i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}).memozie();
assert(isPrime(5), "Make sure the function works, 5 is prime.");
assert(isPrime._values[5], "Make sure the answer is cached.");







(function(){})()



(function(){
    var jQuery = window.jQuery = function(){
        // Initialize
    };
    //..
})();
// or
var jQuery = (function(){
    function jQuery(){
        // Initialize
    }
    //...
    return jQuery;
})();





function Ninja(){}
var ninja = new Ninja();
typeof ninja == "object"
ninja instanceof Ninja
ninja.constructor == Ninja

var ninja2 = new ninja.constructor();



if (!Array.prototype.forEach){
    Array.prototype.forEach = function(fn, thisp){
        for (var i = 0; i < this.length; i++){
            fn.call(thisp || null, this[i], i, this);
        }
    };
}




function MyArray(){}
MyArray.prototype.length = 0;
(function(){
    var methods = ['push', 'pop', 'shift', 'unshift', 'slice', 'splice', 'join'];
    
    for (var i = 0; i < methods.length; i++) {
        (function(name){
            MyArray.prototype[name] = function(){
                return Array.prototype[name].apply(this, arguments);
            };
        })(methods[i]);
    }
})();
var mine = new MyArray();
mine.push(1,2,3);
assert(!(mine instanceof Array), "We aren't sub-classing Array, though.");


==Code Evaluation==
var add = new Function("a", "b", "return a + b;");
assert(add(3, 4) === 7, "Function is created and works.");


function globalEval(data){
    data = data.replace(/^\s*|\s*$/g, "");
    if (data){
        var head = document.getElementByTagName("head")[0] || document.documentElement,
            script = document.createElement("script");
        
        script.type = "text/javascript";
        script.text = data;
        head.appendChild(script);
        head.removeChild(script);
    }
}
window.onload = function(){
    (function(){
        globalEval("var test = 5;");
    })();
    assert(test === 5, "The code is evaluated globally.");
}







var tags = /^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i;

function convert(html){
    return html.replace(/(<(\w+)[^>]*?)\/>/g, function(all, front, tag){
        return tags.test(tag)?all:front + "></" + tag + ">";
    });
}
assert(convert("<a/>") === "<a></a>", "Check anchor conversion.");
assert(convert("<hr/>") === "<hr/>", "Check hr conversion.");




function getNodes(htmlString){
    var map = {
        "<td": [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        "<option": [1, "<select multiple='multiple'>", "</select>"]
        // a full list of all element fixes
    };
    
    var name = htmlString.match(/<\w+/),
        node = name ? map[name[0]] : [0, "", ""];
    var div = document.createElement("div");
    div.innerHTML = node[1] + htmlString + node[2];
    
    while ( node[0]-- )
        div = div.lastChild;
    
    return div.childNodes;
}

assert( getNodes("<td>test</td><td>test2</td>").length === 2, "Get two nodes back from the method." );
assert( getNodes("<td>test</td>")[0].nodeName === "TD", "Verfiy that we're getting the rigtht node." );