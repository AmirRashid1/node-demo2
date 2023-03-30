const express=require('express');
// const modules=require('./module');
const app = express();
   
// Assign route 
app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
    res.render("index");
    });
     
    app.get("/index2", (req, res) => {
    res.render("index2", { title: "Hey", message: "Hello there!" });
    });
     
    app.listen(process.env.port || 3000);
     
    console.log("Running at Port 3000");
// app.use('/', (req, res) => { 
//   res.render('index.pug', { name: 'james bond', age: 21 }); 
// }); 


// app.use('/index2',function(req, res) {
//     res.render('index2.pug');
// })
// app.get('/',function(req,res){
//     res.sendFile(__dirname+'/index.html');
// })
// app.get('/contact.html',function(req,res){
//     res.sendFile(__dirname+'/contact.html');
// })
// app.get('/server.html',function(req,res){
//     res.sendFile(__dirname+'/server.html');
// })
// app.listen(port, function(){
//     console.log("Server listening on port " + port);
// })