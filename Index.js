const express = require('express');
const app = express();

const bodyParse = require('body-parser')

var api_key = '8e6d789e7b7382143fd9fea1f6dba9af-ee16bf1a-401a0b04';
var domain  =  'sandboxa749f589c9274b7db384d4627ec66ace.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
             
var data = {
    from: ' Ridhima <ridhima4826.be22@chitkara.edu.in>',
    to: data,
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!'
  };

app.use(bodyParse.urlencoded({extended:true}))
app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/Index.html")
})

app.listen(8080, function(req, rev)
{
    console.log('server is running on 8080');
});

app.post('/', (req,res)=> {
  console.log(req.body);
  console.log(data.to);
  data.to = req.body.email;
  console.log(data);

mailgun.messages().send(data, function (error, body) {
    if (error)
    { 
      console.log(error);
    }
    console.log(body);
  }

);
})

