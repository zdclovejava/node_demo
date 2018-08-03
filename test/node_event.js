let events = require('events');
//创建eventEmitter对象
let eventEmitter = new events.EventEmitter();
//设置最大5个监听函数
eventEmitter.setMaxListeners(3);
// //创建事件处理程序
// let connectHandler = function connected(){
// 	setTimeout(function(){
//         console.log('连接成功！');
//
// 	},1000);
// 	//触发data_received事件
// 	eventEmitter.emit('data_received');
// };
// //绑定connection事件处理程序
// eventEmitter.on('connection',connectHandler);
// //使用匿名函数绑定data_received事件
// eventEmitter.on('data_received',function(){
// 	setTimeout(function(){
// 		console.log("数据接收成功。");
// 	},1000);
//
// });
// //触发connection事件
// eventEmitter.emit("connection");
// console.log("程序执行完毕");

//监听执行函数1
var listener1 = function(arg1,arg2){
	console.log("listener1",arg1,arg2);
};
//监听执行函数2
var listener2 = function(arg1,arg2){
    console.log("listener2",arg1,arg2);
};
var onceListener = function(arg){
	console.log("onceListener",arg);
}

//绑定testEvent事件，处理函数为listener1
eventEmitter.addListener('testEvent',listener1);
//绑定testEvent事件，处理函数为listener2
eventEmitter.on('testEvent',listener2);
//只执行一次就接触的监听
eventEmitter.once('testEvent',onceListener);

//获取指定事件的监听数
var eventListenners = events.EventEmitter.listenerCount(eventEmitter,'testEvent');
console.log("解除前监听器的数量="+eventListenners);
//触发testEvent事件
eventEmitter.emit('testEvent','1','2');
//移除指定监听器1
eventEmitter.removeListener('testEvent',listener1);
//eventEmitter.emit('testEvent','1','2');
eventListenners = events.EventEmitter.listenerCount(eventEmitter,'testEvent');
console.log("解除前监听器的数量="+eventListenners);



