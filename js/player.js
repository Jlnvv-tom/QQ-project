window.onload=function(){
var body=document.getElementsByTagName('body');
var wid=document.body.scrollWidth;
var hei=document.documentElement.clientHeight ;
body[0].style.width=wid+"px";
body[0].style.height=hei+"px";

var blurBg=document.getElementById("blur_bg");
var songBg=document.getElementById("songBg");
blurBgArr=["mby1","mby2","mby1","playerbg"];

//播放按钮
var playbtn=document.getElementById("played");
var audio=document.getElementById('audio');
var whiteline=document.getElementById('whiteline');
var actionpoint=document.getElementById("actionpoint");
var songname=document.getElementById('songname');
var audiosrcup=["xzq_aimei","mby_ifmoney","mby_likeme","mby_xc"];
var songnameup=["薛之谦-暧昧","赵雷-理想","毛不易-像我这样的人","毛不易-消愁"];
var audiosrcdown=["mby_xc","mby_likeme","mby_ifmoney","xzq_aimei"];
var songnamedown=["毛不易-消愁","毛不易-像我这样的人","赵雷-理想","薛之谦-暧昧"];
abcd=function(){
	var x=audio.duration;
	actionpoint.style.animationDuration=x+"s";
	whiteline.style.animationDuration=x+"s";
	scrollbox.style.animationDuration=x+"s";
	console.log(x);
	//whiteline.style.animation="cdlength"+" "+x+"s"+" "+"linear";
	//actionpoint.style.animation="toward"+" "+x+"s"+" "+"linear";
}
// 上一曲
var up=document.getElementById("up");
var playdown=document.getElementById("playdown");
var num=0;
up.onclick=function(){
	num++;
	num%=4;
	audio.src="audio/"+audiosrcdown[num]+".mp3";
	playbtn.className="stop";
	songname.innerHTML=songnamedown[num];
	audio.play();
	// 背景的改变
	blurBg.style.background="url(img/"+blurBgArr[num]+".jpg) no-repeat";
	blurBg.style.backgroundSize="cover";
	songBg.src="img/"+blurBgArr[num]+".jpg";
	if(whiteline.className=="whiteline running"||whiteline.className=="whiteline pause"){
	whiteline.className="restartline running";
	actionpoint.className="restartpoint running";
	scrollbox.className="restartscroll running";
}else if(whiteline.className=="restartline running"||whiteline.className=="restartline pause"){
	whiteline.className="whiteline running";
	actionpoint.className="actionpoint running";
	scrollbox.className="scroll_box running";
}

}
// 下一曲
playdown.onclick=function(){
	num++;
	num%=4;
	audio.src="audio/"+audiosrcup[num]+".mp3";
	playbtn.className="stop";
	songname.innerHTML=songnameup[num];
	audio.play();
	// 背景的改变
	blurBg.style.background="url(img/"+blurBgArr[num]+".jpg) no-repeat";
	blurBg.style.backgroundSize="cover";
	songBg.src="img/"+blurBgArr[num]+".jpg";
	if(whiteline.className=="whiteline running"||whiteline.className=="whiteline pause"){
	whiteline.className="restartline running";
	actionpoint.className="restartpoint running";
	scrollbox.className="restartscroll running";
}else if(whiteline.className=="restartline running"||whiteline.className=="restartline pause"){
	whiteline.className="whiteline running";
	actionpoint.className="actionpoint running";
	scrollbox.className="scroll_box running";
}
}



var scrollbox=document.getElementById("scroll_box");
console.log(scrollbox.offsetHeight);
// 播放暂停
playbtn.onclick=function(){
	if (audio.paused){
		audio.play();
		playbtn.className="stop";
		whiteline.className="whiteline running";
		actionpoint.className="actionpoint running";
		scrollbox.className="scroll_box running";
	}else{
		audio.pause();
		playbtn.className="played";
		whiteline.className="whiteline pause";
		actionpoint.className="actionpoint pause";
		scrollbox.className="scroll_box pause";
	}
}




















}



