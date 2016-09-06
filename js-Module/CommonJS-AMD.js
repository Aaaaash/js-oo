// 模块的规范
// 目前，通行的Javascript模块规范共有两种：CommonJS和AMD

// 1.CommonJS规范
/*
*2009年，美国程序员Ryan Dahl创造了node.js，将JavaScript语言用于服务器端编程
*这也标志着JavaScript模块化编程正式诞生，因为node.js的模块系统就是参照CommonJS 规范实现的
*CommonJS中有一个全局方法require()，用于加载模块
*/
// 假设有一个数学模块math.js
var math=require('math');
// 然后就可以调用模块提供的方法：
math.add(2,3);
/*
*以上只是在服务器端的模块加载方式，但是在浏览器端，由于模块可能存放在服务器中，加载的速度取决于网速，如果加载速度很慢，使用这种同步加载方式浏览器将会处于假死状态，所以只能采用异步加载，这也就是AMD规范诞生的背景
*/

// 2.AMD
/*
*AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"
*AMD采用异步方式加载模块,模块的加载不影响它后面语句的运行,所有依赖者模块的语句都定义在一个回调函数中,等到加载完成之后,这个回调函数才会运行,同样的AMD也采用require()语句加载模块，但是它要求两个参数
*/
require([module],callback);
// 第一个参数[module]是一个数组，里面的成员就是要加载的模块
// 第二个参数callback就是加载成功后执行的回调函数，将上面math的代码改写成AMD形式就是
require(['math'],function(math){    //加载了几个模块就要传入几个相对应的参数，以便调用
    math.add(2,3);
});

/*
*以上math.add()与math模块加载是不同步的，浏览器并不会发生假死状况，所以AMD规范更适合于浏览器端
*require.JS这个库实现了AMD规范
*/
