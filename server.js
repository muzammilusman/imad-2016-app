var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var content={
    title: "article one: Muzammil Osman",
    heading: " Arsticle one",
    date: "september 27",
    content:`<p>
                This is my first html document, so please kindly co operate if there are any mistakes        This is my first html document, so please kindly co operate if there are any mistakesThis is my first html document, so please kindly co operate if there are any mistakesThis is my first html document, so please kindly co operate if there are any mistakes
            </p>`
    
};

function createTemplate(data){
    
     var title=data.title;
     var date=data.date;
     var heading=data.heading;
     var content=data.content;
    var htmlTemplate= `<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h2>
            ${heading}
        </h2>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </body>
</html>`;
return  htmlTemplate;
}

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/articleone',function(req,res) {
    res.send(createTemplate(articleone)));
    
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
