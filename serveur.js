var url=require('url');
var querystring=require("querystring");

var server= require('http').createServer(function(req,res){
var page=url.parse(req.url).pathname;
var params=querystring.parse(url.parse(req.url).query);
res.writeHead(200, {"Content-Type": "text/html"});
if(page=="/page"){
      if("prenom" in params && "nom" in params ){
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
      }
}
else if (page=="/acceuil"){
  res.write('<!DOCTYPE html>'+
  '<html>'+
  '    <head>'+
  '        <meta charset="utf-8" />'+
  '        <title>Ma page Node.js !</title>'+
  '    </head>'+ 
  '    <body>'+
  '     	<p>la page demander est acceuil !</p>'+
  '    </body>'+
  '</html>');
}
else{
  res.write('<!DOCTYPE html>'+
  '<html>'+
  '    <head>'+
  '        <meta charset="utf-8" />'+
  '        <title>Ma page Node.js !</title>'+
  '    </head>'+ 
  '    <body>'+
  '     	<p>la page demander est quelconque!</p>'+
  '    </body>'+
  '</html>');
}
res.end();
});
server.listen(8080);
