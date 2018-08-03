const buf = Buffer.from('test','ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

//创建一个长度为10，且用0填充的buffer
const buf1 = Buffer.alloc(10);
//创建一个长度为10，用0x1填充的buffer
const buf2 = Buffer.alloc(10,1);
//创建一个长度为10，且未初始化的Buffer
const buf3 = Buffer.allocUnsafe(10);