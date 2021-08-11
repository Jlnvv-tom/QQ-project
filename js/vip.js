window.onload=function(){
var wid=document.body.scrollWidth;//获取浏览器网页正文全文宽;
var body=document.getElementsByTagName('body');
body[0].style.width=wid+"px";

var bigtext2=document.getElementById("bigtext2");
bigtext2.style.left=(wid-320)/2+"px";

var bg_1=document.getElementById("bg_1");
var bg_2=document.getElementById("bg_2");
var bg_3=document.getElementById("bg_3");
var bgs=[bg_1,bg_2,bg_3];
var greentype=document.getElementById("greentype");
var types=greentype.getElementsByTagName('li');
var copytype=["typeones","typetwos","typethrs"]
var opatype=["typeone","typetwo","typethr","none"]
for(k=0;k<types.length;k++){
	types[k].inde=k;
	types[k].onclick=function(){
		init=this.inde;
		for(var q=0;q<bgs.length;q++){
			bgs[q].className="smallindex";
			types[q].className="opatype"+" "+opatype[q];
			$(bgs[init]).fadeOut("slow");

		}
		bgs[init].className="bigindex";
		$(bgs[init]).fadeIn("slow");
		types[init].className=copytype[init];
		}
	}
$(".opengreen").mouseenter(function(){
	$(".details").slideToggle();
})
$(".opengreen").mouseleave(function(){
	$(".details").slideToggle();
})




}








