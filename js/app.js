(function main(){
 	var date = new Date ();
 	document.getElementById('secondes').style.animationDelay = -(date.getSeconds()) + 's';
 	document.getElementById('minutes').style.animationDelay = -(date.getMinutes()*60 + date.getSeconds()) + 's';
 	document.getElementById('heures').style.animationDelay = -((date.getHours()%12)*3600 + date.getMinutes()*60 + date.getSeconds()) + 's';

})();//Fin fonction main

