var fs = require("fs");
var data = '';
//创建可读流
var readerStream = fs.createReadStream('../data/test.txt');
readerStream.on('data',function(chunk){
    data += chunk;
    console.log("---data---"+chunk);
});

readerStream.on('end',function(){
    var writerStream  = fs.createWriteStream('../data/writer.txt');
    writerStream.write(data,'UTF8');
    writerStream.end();
    writerStream.on('finish',function(){
        console.log("写入完成");
    });

    writerStream.on('error',function(err){
        console.log(err.stack);
    });
    console.log("程序写入完毕！")
});

readerStream.on('error',function(err){
    console.log("---error---"+err.stack);
});
console.log("程序读取完毕");




