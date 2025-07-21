function digitalclock(){
var clock=document.getElementById("clock");
const time= new Date();
const hr=time.getHours();
const min=time.getMinutes();
const sec=time.getSeconds();
clock.innerText=`${hr}: ${min} : ${sec}`;
setInterval(digitalclock,1000);
}
digitalclock();
