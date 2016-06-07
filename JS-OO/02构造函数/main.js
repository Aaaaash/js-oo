// 工厂模式
function createObject(user,age){
    var obj=new Object();
    obj.user=user;
    obj.age=age;
    obj.run=function(){
        return this.user+this.age+"运行中";
    };
    return obj;
};

// 构造函数创建对象
function Box(user,age){
    this.user=user;
    this.age=age;
    this.run=function(){
        return this.user+this.age+'运行中';
    };
};
// 构造函数中的this表示当前作用域的引用
var box=new Box('Sakura',123);
var box2=new Box('Misaka',34);
console.log(box.run());
console.log(box2.run());
console.log(box instanceof Box);        //实例化的box对象从属于Box构造函数
console.log(box instanceof Object);     //实例化的box对象也从属于Object
console.log(box.run==box2.run);         //但是实例化后重复使用了同一个方法
// 当有多个构造函数时，实例化的对象通过 instanceof 就可以检测到它所引用的构造函数
/*
1.构造函数没有new Object，但是它后台会自动执行 var obj=new Object
2.this就相当于obj
3.构造函数不需要返回对象引用，后台自动返回
规范：
1.构造函数也是一个普通函数，但是函数名的第一个字母要大写
2.必须通过new 运算符来实例化对象
*/
console.log(Box('Sakura',54));
var o=new Object();
Box.call(o,'SSS',123);      //call方法相当于把Box的作用域赋给o对象（o对象获得Box构造函数内部的属性和方法）
alert(o.run());
var box1=new Box('Sakura',123);
console.log(box1.run==box.run);     //两个实例化对象的方法引用地址不同(相当于实例化厚的两个对象各自都有一个完全相同的run方法，占用了内存空间)
