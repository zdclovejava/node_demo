// const a ='a',b='b',c='c';
// const message = `张三得到的是${a}、是${b}还是${c}呢？`;
// console.log(message);
//
// const fourAgreements = `You have the right to be you.n
// You can only be you when you do your best.`;
// console.log(fourAgreements);

// var name = 'zach';
// while (true) {
//     var name = 'obm';
//     console.log(name);
//     break
// }
// console.log(name);

// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6]();

// var test_module = require('../lib/test_module');
// console.log("操作前",test_module.curr_data);
// test_module.add(6);
// console.log("增加一个数字6后",test_module.curr_data);
// test_module.sub(2);
// console.log("删除数组中的第二项后",test_module.curr_data);
//
// var t = require('../lib/test-module');
// console.log("重新引用",t.curr_data);


const Hello = require('../lib/hello');
const hello = new Hello();
hello.setName("张三");
hello.sayHello();

const Hello2 = require('../lib/hello');
const hello2 = new Hello2();
hello2.sayHello();