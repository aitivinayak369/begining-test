var express=require('express');
var exphbs=require('express-handlebars')
var path=require('path')
var app=express();
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','handlebars')



app.get('/',function(req,res){
    
    res.render('index');
});
app.listen(3000);
