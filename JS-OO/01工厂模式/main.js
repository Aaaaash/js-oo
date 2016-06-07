/* 创建基本对象
var box=new Object();
box.name='Sakura';
box.age=100;
box.run=function(){
    return this.name+this.age+'运行中..';      //这里的this表示当前作用域下的对象（box对象）
};
// this要放在一个作用域下（非全局）
alert(box.run());
*/
/*多个对象重复代码过多
var box2=new Object();
box2.name='Misaka';
box2.age=200;
box2.run=function(){
    return this.name+this.age;
}
alert(box2.run());
*/


// 工厂模式
function createObject(name,age){
    var obj=new Object();
    obj.name=name;
    obj.age=age;
    obj.run=function(){
        return this.name+this.age+"运行中";
    };
    return obj;
};
function createObject2(name,age){
    var obj=new Object();
    obj.name=name;
    obj.age=age;
    obj.run=function(){
        return this.name+this.age+"运行中";
    };
    return obj;
};
var box1=createObject('Lee',100);
var box2=createObject2('Jack',200);
// alert(box1.run());
// alert(box2.run());
console.log(box1 instanceof Object);        //instanceof  从属于（检测某个对象是否为某个对象的实例）
console.log(box2 instanceof Object);
