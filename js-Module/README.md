#JavaScript模块化编程学习
------------------模块就是实现特定功能的一组方法------------------



1.原始写法 <br/>
function m1(){<br/>
    ...<br/>
};<br/>
function m2(){<br/>
    ...<br/>
}<br/>
函数m1和m2组成了一个模块，使用的时候直接调用函数就可以了<br/>
但是这样写会污染全局变量，无法保证不与其他模块发生命名冲突，且模块成员之间没有直接联系<br/>


2.对象写法<br/>
var module_1=new Object({<br/>
    _count:0,<br/>
    m1:function(){<br/>
        ...<br/>
    },<br/>
    m2:function(){<br/>
        ...<br/>
    }<br/>
});<br/>
函数m1和m2封装在module_1对象中，调用的时候就相当于调用这个对象的属性       module_1.m1();<br/>
但是这样写会暴漏所有的模块成员，内部状态可以被外部改写<br/>
module_1._count=5;<br/>
此处_count的值在外部被修改<br/>
console.log(module_1._count);           //5<br/>

3.立即执行函数写法   （IIFE）<br/>
var module_2=(function(){<br/>
    var _count=0;<br/>
    var m1=function(){<br/>
        ...<br/>
    };<br/>
    var m2=function(){<br/>
        ...<br/>
    };<br/>
    return {<br/>
        m1:m1,<br/>
        m2:m2<br/>
    };<br/>
})();<br/>
这样写，外部代码就无法读取内部_count变量<br/>
console.info(module1._count);           //undefined<br/>

4.放大模式<br/>
如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时候就有必要采用放大模式<br/>
var module_3=(function(mod){<br/>
    mod.m3=function(){<br/>
        ...<br/>
    };<br/>
    return mod;<br/>
})(module_3);<br/>
以上代码为module_3模块添加了一个新方法m3()，然后返回新的module_3模块<br/>

5.宽放大模式<br/>
var module_4=(function(mod){<br/>
    ...<br/>
    return mod;<br/>
})(window.module_3||{});<br/>
其实就是指立即执行函数的参数可以是一个空对象<br/>

6.输入全局变量<br/>
为了在模块内部调用全局变量,必须显式的将其他变量传入模块<br/>
var module_5=(function($){<br/>
    ...<br/>
})(jQuery);<br/>

#模块的规范
目前，通行的Javascript模块规范共有两种：CommonJS和AMD

1.CommonJS规范
2009年，美国程序员Ryan Dahl创造了node.js，将JavaScript语言用于服务器端编程
这也标志着JavaScript模块化编程正式诞生，因为node.js的模块系统就是参照CommonJS 规范实现的
CommonJS中有一个全局方法require()，用于加载模块

假设有一个数学模块math.js<br/>
var math=require('math');<br/>
然后就可以调用模块提供的方法：<br/>
math.add(2,3);<br/>
以上只是在服务器端的模块加载方式，但是在浏览器端，由于模块可能存放在服务器中，加载的速度取决于网速，如果加载速度很慢，使用这种同步加载方式浏览器将会处于假死状态，所以只能采用异步加载，这也就是AMD规范诞生的背景<br/>

2.AMD

AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"
AMD采用异步方式加载模块,模块的加载不影响它后面语句的运行,所有依赖者模块的语句都定义在一个回调函数中,等到加载完成之后,这个回调函数才会运行,同样的AMD也采用require()语句加载模块，但是它要求两个参数

require([module],callback);<br/>
第一个参数[module]是一个数组，里面的成员就是要加载的模块<br/>
第二个参数callback就是加载成功后执行的回调函数，将上面math的代码改写成AMD形式就是<br/>
require(['math'],function(math){    //加载了几个模块就要传入几个相对应的参数，以便调用<br/>
    math.add(2,3);<br/>
});<br/>

以上math.add()与math模块加载是不同步的，浏览器并不会发生假死状况，所以AMD规范更适合于浏览器端<br/>
require.JS这个库实现了AMD规范<br/>
