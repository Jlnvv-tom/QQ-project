window.onload=function(){
var hei=document.documentElement.clientHeight ;//获取浏览器可见区域高;
var wid=document.body.scrollWidth;//获取浏览器网页正文全文宽;
var clientscroll=document.getElementById("client-scroll");
var body=document.getElementsByTagName('body');
//console.log(wid);
body[0].style.width=wid+"px";

// 下载类型的切换
var changetype=document.getElementById("changetype");
var changetypelis=changetype.getElementsByTagName("li");
var pctype=document.getElementById("pc-type");
var mactype=document.getElementById("mac-type");
var iptype=document.getElementById("ip-type");
var andrtype=document.getElementById("andr-type");
var typedivs=[pctype,mactype,iptype,andrtype];





var pcdown=document.getElementById("pcdown");
var iptype=document.getElementById("ip-type");
var oli=iptype.getElementsByTagName('div');
var boxnums=0;
var t1=null;

for(var  i=0;i<changetypelis.length;i++){
		changetypelis[i].index=i;
		changetypelis[i].onclick=function(){
			console.log(this.index);
			init=this.index;
			for(var j=0;j<typedivs.length;j++){
				//console.log(j);
				typedivs[j].className='hidden';
				changetypelis[j].getElementsByTagName('a')[0].getElementsByTagName('img')[0].className="imgopacity";
				changetypelis[j].getElementsByTagName('a')[0].className=" ";
			}
			typedivs[init].className='open';
			changetypelis[init].getElementsByTagName('a')[0].getElementsByTagName('img')[0].className=" ";
			changetypelis[init].getElementsByTagName('a')[0].className="whiteline";

	}
}
// iPhone版轮播样式

var t2=null;
t1=setInterval(
	function(){
		for(i=0;i<oli.length;i++){
			oli[i].style.zIndex=0;
			oli[i].className="";
		}
		boxnums++;
		boxnums%=oli.length;
		oli[boxnums].style.zIndex=2;
		oli[boxnums].className="action";
		if(boxnums>0){
		oli[boxnums-1].style.zIndex=1;}
	},3000);

var singertext1=document.getElementById("singertext1");
var singertext2=document.getElementById("singertext2");
//var wid=document.body.scrollWidth;
singertext1.style.left=(wid-564)/2+"px";
singertext2.style.left=(wid-348)/2+"px";
console.log(wid);


var phonebox=document.getElementById("phonediv");
var phoneimgs=phonebox.getElementsByTagName('div');
var phboxnum=0;
t2=setInterval(function(){
		for(i=0;i<2;i++){
			phoneimgs[i].style.zIndex=0;
			//phoneimgs[i].style.display="none";
			phoneimgs[i].className="";
		}
		phboxnum++;
		phboxnum%=2;
		phoneimgs[phboxnum].style.zIndex=2;
		phoneimgs[phboxnum].className="action";
		if (phboxnum>0) {
		phoneimgs[phboxnum-1].style.zIndex=1;}
	},3000);


























}
