var express=require('express');
var app=express();
var fs=require('fs');
var bufferData=[];
 fs.readFile('data/1.json',function(err,data){
 	bufferData.push(data);
 })
 fs.readFile('data/2.json',function(err,data){
 	bufferData.push(data);
 })
 fs.readFile('data/3.json',function(err,data){
 	bufferData.push(data);
 	app.listen(4500);//可以换
 })
  app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get("/shops/pages/:count",function(req,res){
	var count=req.params.count-1;
	res.send(bufferData[count]);
})

