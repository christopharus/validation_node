var event_emit=require("events").EventEmitter;
var test=require("./test");
test.dire_bonjour();

var jeu=new event_emit();


jeu.on("start",function( message){
 console.log(" "+message);
});
jeu.emit("start", "le jeu a commencer ");
