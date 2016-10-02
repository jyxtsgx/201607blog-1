var express = require('express');
var session = require('express-session');
var app = express();
/**
 * 当使用了session中间件之后，会在req.session的js对象
 * 就是这个客户端在服务器对应的数据对象
 */
app.use(session({
    secret:'zfpx'
}));

app.get('/visit',function(req,res){
    var count = req.session.count;
    if(count){
        count++;
    }else{
        count = 1;
    }
    req.session.count = count;
    res.end(`欢迎第${count}次光临`)
})

app.listen(9090);