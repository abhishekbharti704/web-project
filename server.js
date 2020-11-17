var express = require('express');	//ye file import karne ka syntax hai, isme hum 'require' function use karke usme library ka naam dete hai aur usko ek variable me assign kar dete hai
//java script me variable object hotein hai
var app = express();
var port = 3001;
app.use(express.static(__dirname + '/'));	//yaha hum app ko bata rahe hai ki usey konsa static page use karna hai, static page matlab jab humara server start hoga tab server ko pata hona chaiye ki usey konsa HTML page chaiye, toh hum usko ek default page de rahe i.e., index.html, ye webpage default hota hai, agar humko default ke jagah kuch aur dena ho toh dekhiye bracket ke andar ek quotes me slash diya hua hai, humee apna address waha dena parega
app.listen(port);
console.log('Server started at '+port);	//console.log is similar to System.out.println which is used for printing
