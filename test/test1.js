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

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();