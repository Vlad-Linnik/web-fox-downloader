function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}
let start_of_timer = 600; //600 sec = 10 min
let timer = start_of_timer;
var timer_elem = document.getElementById('p');
timerIsWorking = true
const IntervalTimer = setInterval(myTimer,1000);

function myTimer(){
	if (timerIsWorking){
		let minutes = Math.floor(timer/60);
		let seconds = timer % 60;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;
		timer_elem.innerHTML = `${minutes}:${seconds}`;
		timer--;
		if (timer == -1) {
			timer = start_of_timer;
			let link = JSON.parse(httpGet("https://randomfox.ca/floof/"))["image"];
			console.log(link);
		}
	}
}
document.getElementsByClassName("button")[0].addEventListener('click',function(){
	console.log("start")
	timerIsWorking = true;
});
document.getElementsByClassName("button")[1].addEventListener('click',function(){
	console.log("stop")
	timerIsWorking = false;
});
document.getElementsByClassName("button")[2].addEventListener('click',function(){
	console.log("skip");
	timerIsWorking = true;
	timer = 600;
	let link = JSON.parse(httpGet("https://randomfox.ca/floof/"))["image"];
	console.log(link);
	//downloadURI(link , "asd.jpg"); - not working
	xhr.send(data);
});