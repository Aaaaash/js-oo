// ------------------模块就是实现特定功能的一组方法------------------



// 1.原始写法
function m1(){
    // ...
};
function m2(){
    // ...
}
/*
*函数m1和m2组成了一个模块，使用的时候直接调用函数就可以了
*但是这样写会污染全局变量，无法保证不与其他模块发生命名冲突，且模块成员之间没有直接联系
*/

// 2.对象写法
var module_1=new Object({
    _count:0,
    m1:function(){
        // ...
    },
    m2:function(){
        // ...
    }
});
/*
*函数m1和m2封装在module_1对象中，调用的时候就相当于调用这个对象的属性       module_1.m1();
*但是这样写会暴漏所有的模块成员，内部状态可以被外部改写
*/
module_1._count=5;
// 此处_count的值在外部被修改
console.log(module_1._count);           //5
// 3.立即执行函数写法   （IIFE）
var module_2=(function(){
    var _count=0;
    var m1=function(){
        // ...
    };
    var m2=function(){
        // ...
    };
    return {
        m1:m1,
        m2:m2
    };
})();
/*
*  这样写，外部代码就无法读取内部_count变量
*/
console.info(module1._count);           //undefined

// 4.放大模式
// 如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时候就有必要采用放大模式
var module_3=(function(mod){
    mod.m3=function(){
        // ...
    };
    return mod;
})(module_3);
/*
*以上代码为module_3模块添加了一个新方法m3()，然后返回新的module_3模块
*/

// 5.款放大模式
var module_4=(function(mod){
    // ...
    return mod;
})(window.module_3||{});
// 其实就是指立即执行函数的参数可以是一个空对象

// 6.输入全局变量
// 为了在模块内部调用全局变量,必须显式的将其他变量传入模块
var module_5=(function($){
    // ...
})(jQuery);
