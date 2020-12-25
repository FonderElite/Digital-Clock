
function time(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am = ["AM","PM"];
   let button = $("#button");
var audio = document.getElementById('alarm');
 
    if(hour <= 11){
 
        document.getElementById("result").innerHTML = hour + ":" + min + ":" + sec + ":" +  am[0];
    }
 

    else{
document.getElementById("result").innerHTML = hour + ":" + min + ":" + sec + "" + am[1];
 
}
function stop(){
clearInterval(time);
}
}
setInterval(time, 1000);
 
function call(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am = ["AM","PM"];
    let fx = document.getElementById("alarm");
if(hour <= 12){
    fx.play();

}
}
call();

 
