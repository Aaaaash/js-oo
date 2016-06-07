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

// 原型模式
// 构造函数体内什么都没有，如果有就叫做实例属性和实例方法
/*
1.判断某属性是否存在与构造函数的实例中  object.hasOwnProperty(property)
2.判断某属性是否存在  property in object
3.判断某一实例对象是否从属于另一个父级对象  a instanceof A
*/
function Pox(){};
Pox.prototype.user='Lee';       //原型属性
Pox.prototype.age=132;
Pox.prototype.run=function(){
    return this.user+this.age+'呵呵呵';
}
// 判断某个属性只存在于原型中
function isProperty(object,property){
    return !object.hasOwnProperty(property)&&(property in object);
}

// 原型字面量写法
// 为了让属性和方法更好的体现封装性，原型的创建可以使用字面量的方式
function Abc(){};
Abc.prototype={
    constructor:Abc,        //可以强行设置constructor的指向
    user:'Lee',
    age:100,
    run:function(){
        return this.user+this.age+'运行中';
    }
};
// 但是在使用字面量方式创建原型后，原型的constructor属性就指向了Object
/*
Abc.prototype={};这种写法其实就是创建了一个新对象
而每创建一个函数，就会同时创建它的prototype，这个对象也就会自动获取constructor属性
所以新对象的constructor属性重写了Abc原来的constructor
因此就会指向新对象，而那个新对象没有指定构造函数，那么就默认为Object
*/
var abc=new Abc();
// console.log(abc.constructor);
// console.log(abc.__proto__.constructor);
// console.log(Abc.prototype);
// console.log(abc instanceof Abc);
console.log(abc.run());

// 重写原型对象
// 如果直接这样重写原型，将会直接切断实例对象与之前原型的连接
// 虽然这里只重写了一个原型属性，但实际上直接覆盖了之前的原型对象
Abc.prototype={
    age:123
}
var xyz=new Abc();
// 重写后再次访问第一次写的原型对象中的属性，已经为undefined
console.log(xyz.user);


// 内置对象中的原型
console.log(Array.prototype.sort);
console.log(String.prototype.substring);
// 扩展内置对象原型上的方法
String.prototype.addstring=function(){
    return this+',被添加了';
}
console.log('Sakura'.addstring());

// 原型链示例
function A(c){
    this.b=c;
    this.d=function(){
        alert(this.b);
    }
}
A.prototype.test=function(){
    alert(this.b);
}
var obj=function(){};
obj.prototype=new A('test');
obj.prototype.test1=function(){
    alert('呵呵呵');
}
var t=new obj('test');
console.log(t.__proto__===obj.prototype);
