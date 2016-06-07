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
function Pox(){};
Pox.prototype.user='Lee';       //原型属性
Pox.prototype.age=132;
Pox.prototype.run=function(){
    return this.user+this.age+'呵呵呵';
}
var pox1=new Pox();
var pox2=new Pox();
console.log(pox1.user);
console.log(pox1.run==pox2.run);
// 如果是实例方法，不同的实例化他们的方法引用地址是不一样的，唯一的
// 原型方法 不同实例化的方法引用地址是共享的，大家都是一样的
console.log(pox1.__proto__);            //__proto__属性是一个指针，指向对象的原型prototype （IE浏览器不支持）
console.log(pox1.constructor==pox1.__proto__.constructor||pox1.constructor==Pox);          //指向构造函数本身
// 也就是说,实例化对象的constructor属性和他的原型的constructor属性都指向他们的构造函数本身
// 判断一个对象是否指向了该构造函数的原型对象(Pox.prototype)
console.log(pox1.__proto__==Pox.prototype);
// pox1.user='Jack';
// console.log(pox1.user,pox2.user);
pox2.__proto__.user='Misaka';     //可以重写原型中的属性值
// 也可以直接删除  delete pox2.__proto__.user
console.log(pox1.user,pox2.user);
console.log(pox1.__proto__);    //user属性已经被修改
// console.log(Pox.prototype.isPrototypeOf(pox1));
// 就近原则 （先查找构造函数中的实例属性，如果有则返回，没有则查找原型）
// 实例属性不会共享，所以如果在pox1上重写user属性（实例属性），pox2并不能访问的到

// 如何判断属性在构造函数实例中还是在原型中，返回true则表示在构造函数实例中，false则为原型
console.log(pox1.hasOwnProperty('user'));
console.log(pox1.constructor===pox1.__proto__.constructor);
// 判断属性是否存在（不论在构造函数实例还是在原型中）
console.log('user' in pox1);

// 判断某个属性只存在于原型中
function isProperty(object,property){
    return !object.hasOwnProperty(property)&&(property in object);
}
console.log(isProperty(pox1,'user'));
