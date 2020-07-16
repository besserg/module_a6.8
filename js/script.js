function addperc(aperc, str){
	let start=str.indexOf(':');
	let end=str.indexOf('%');
	let perc=parseInt(str.slice(start+1,end));
	return perc+aperc;
};

$('.j-btn1').click(function(){
	let instr=$('.j-pr-bar').attr("style");
	let prBarPerc=addperc(1,instr);
	console.log(prBarPerc); 
	$('.j-pr-bar').attr("style","width:"+prBarPerc+"%");
	document.getElementById("pBar").textContent=prBarPerc+'%';
});

$('.j-btn3').click(function(){
	let instr=$('.j-pr-bar').attr("style");
	let prBarPerc=addperc(3,instr);
	console.log(prBarPerc); 
	$('.j-pr-bar').attr("style","width:"+prBarPerc+"%");
	document.getElementById("pBar").textContent=prBarPerc+'%';
});

$('.j-btn7').click(function(){
	let instr=$('.j-pr-bar').attr("style");
	let prBarPerc=addperc(7,instr);
	console.log(prBarPerc); 
	$('.j-pr-bar').attr("style","width:"+prBarPerc+"%");
	document.getElementById("pBar").textContent=prBarPerc+'%';
});