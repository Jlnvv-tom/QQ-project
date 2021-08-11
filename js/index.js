$(document).ready(function(){
var wid=document.body.scrollWidth;//获取浏览器网页正文全文宽;
var hei=document.documentElement.clientHeight ;//获取浏览器可见区域高;
var body=document.getElementsByTagName('body');
var navul=document.getElementById('navul');
var as=navul.getElementsByTagName('a');
var lis=navul.getElementsByTagName('li');
var centermain=document.getElementById("centermain");
var musich=document.getElementById('musich');
var mymusic=document.getElementById("mymusic");
var divs=[musich,mymusic];
console.log(hei);
body[0].style.width=wid+"px";//设置body的宽为网页正文全文宽;
/*"音乐馆"，"我的音乐"切换效果代码*/
for(var  j=0;j<2;j++){
		lis[j].index=j;
		lis[j].onclick=function(){
			//console.log(this.index);
			init=this.index;
			for(var i=0;i<divs.length;i++){
				divs[i].className='hidden';
				as[i].className="";
				lis[i].className="";
			}
			divs[init].className='open div2';
			as[init].className="whitecolor";
			lis[init].className='bggreen';
		}
	}
// 创建每部分副导航栏切换函数
changehid=function(navnums,divs,a2s,recom){
for(k=0;k<navnums.length;k++){
	navnums[k].inde=k;
	navnums[k].onclick=function(){
		init=this.inde;
		for(var q=0;q<divs.length;q++){
			divs[q].className="hidden";
			a2s[q].className="";
		}
		divs[init].className="open";
		a2s[init].className=recom;
		}
	}
}
// 头像鼠标移上效果
$(document).ready(function(){
	//var mouse=document.getElementById("mouse");
	//var pichead=document.getElementById("pic-head");
  $("#pic-head").mouseenter(function(){
    $("#mouse").slideToggle("fast");
  });
  // $(mouse).mouseover(function(){
  //   $(mouse).slideToggle("fast");
  // });
  $("#pic-head").mouseleave(function(){
     $("#mouse").slideToggle("fast");
  });
});
/*歌单推荐的“为你推荐”，“摇滚”，“乡村”，“九十年代”，“零零年代”，“情歌”的切换效果*/
var recom=document.getElementById("recommend-nav");
var navs=recom.getElementsByTagName('li');
var a2s=recom.getElementsByTagName('a');
var one=document.getElementById('roast-one');
var two=document.getElementById('roast-two');
var thr=document.getElementById('roast-thr');
var fou=document.getElementById('roast-fou');
var fiv=document.getElementById('roast-fiv');
var six=document.getElementById('roast-six');
var div2s=[one,two,thr,fou,fiv,six];
var recom="recom";
// 调用函数changehid
changehid(navs,div2s,a2s,recom);


/*歌单推荐左右切换效果*/
/*创建函数*/
var leftclick=document.getElementById("leftclick");
var rightclick=document.getElementById("rightclick");
clickchange=function(left,right,roast,lis,point){
	var num=0;
	right.onclick=function(){
 	num++;
 	if (num>=0) {
 	//console.log(num);
	roast.style.left=num*-100+"%";
		if (num>lis/5-1) {
			num=0;
			roast.style.left=num*-100+"%";
		}
		}
	}
	left.onclick=function(){
	num--;
	if(num>=0){
	//console.log(num);
 	roast.style.left=num*-100+"%";
 	}
 		if (num<0) {
 			//console.log(num);
 			num=lis/5-1;
 			roast.style.left=num*-100+"%";
		}
	}
}
/*调用函数*/
/*歌单推荐左右切换效果*/
var point=document.getElementById("point").getElementsByTagName("li");
var roastul=document.getElementById("roast-ul");
var roastlis=roastul.getElementsByTagName("li").length;
clickchange(leftclick,rightclick,roastul,roastlis,point);//"为你推荐"切换效果

var leftclick2=document.getElementById("leftclick2");
var rightclick2=document.getElementById("rightclick2");
var roastul2s=document.getElementById("roast-ul2s");
var roastlis2=roastul2s.getElementsByTagName("li").length;
clickchange(leftclick2,rightclick2,roastul2s,roastlis2);//"摇滚"切换效果

var leftclick3=document.getElementById("leftclick3");
var rightclick3=document.getElementById("rightclick3");
var roastul3s=document.getElementById("roast-ul3s");
var roastlis3=roastul3s.getElementsByTagName("li").length;
clickchange(leftclick3,rightclick3,roastul3s,roastlis3);//"乡村"切换效果

var leftclick4=document.getElementById("leftclick4");
var rightclick4=document.getElementById("rightclick4");
var roastul4s=document.getElementById("roast-ul4s");
var roastlis4=roastul4s.getElementsByTagName("li").length;
clickchange(leftclick4,rightclick4,roastul4s,roastlis4);//"九十年代"切换效果

var leftclick5=document.getElementById("leftclick5");
var rightclick5=document.getElementById("rightclick5");
var roastul5s=document.getElementById("roast-ul5s");
var roastlis5=roastul5s.getElementsByTagName("li").length;
clickchange(leftclick5,rightclick5,roastul5s,roastlis5);//"九十年代"切换效果

var leftclick6=document.getElementById("leftclick6");
var rightclick6=document.getElementById("rightclick6");
var roastul6s=document.getElementById("roast-ul6s");
var roastlis6=roastul6s.getElementsByTagName("li").length;
clickchange(leftclick6,rightclick6,roastul6s,roastlis6);//"九十年代"切换效果

 // "新歌首发js"效果
 // 获取"新歌首发"中"为你推荐","内地","港台","欧美","日本","韩国"的id
var nsongsul=document.getElementById("nsongs-ul");
var nsongslis=nsongsul.getElementsByTagName("li");
var nsongsas=nsongsul.getElementsByTagName("a");
var songsmain=document.getElementById("songsmain");
var ones=document.getElementById("songs-one");
var twos=document.getElementById("songs-two");
var thrs=document.getElementById("songs-thr");
var fous=document.getElementById("songs-fou");
var fivs=document.getElementById("songs-fiv");
var sixs=document.getElementById("songs-six");
var songsdivs=[ones,twos,thrs,fous,fivs,sixs];
var classnams="songsli";
changehid(nsongslis,songsdivs,nsongsas,classnams);

var nlfclick=document.getElementById("nlfclick");
var nriclick=document.getElementById("nriclick");
var newone=document.getElementById("newnoe");
// 修改clickchange函数，将用于"新歌首发"的切换效果中
newclickchange=function(left,right,roast){
	var num=0;
	right.onclick=function(){
 	num++;
 	if (num>=0) {
 	//console.log(num);
	roast.style.left=num*-100+"%";
		if (num>3) {
			num=0;
			roast.style.left=num*-100+"%";
		}
		}
	}
	left.onclick=function(){
	num--;
	if(num>=0){
	//console.log(num);
 	roast.style.left=num*-100+"%";
 	}
 		if (num<0) {
 			console.log(num);
 			num=3
 			roast.style.left=num*-100+"%";
		}
	}
}
//获取"新歌首发"左右切换的两个点击键// "为你推荐"切换// "内地"切换//"港台"切换
//"欧美"切换//"日本"切换//"韩国"切换
var lfone=document.getElementById("new-lf-click-one");
var lftwo=document.getElementById("new-lf-click-two");
var lfthr=document.getElementById("new-lf-click-thr");
var lffou=document.getElementById("new-lf-click-fou");
var lffiv=document.getElementById("new-lf-click-fiv");
var lfsix=document.getElementById("new-lf-click-six");
var rione=document.getElementById("new-ri-click-one");
var ritwo=document.getElementById("new-ri-click-two");
var rithr=document.getElementById("new-ri-click-thr");
var rifou=document.getElementById("new-ri-click-fou");
var rifiv=document.getElementById("new-ri-click-fiv");
var risix=document.getElementById("new-ri-click-six");
var newone=document.getElementById("newone");
var newtwo=document.getElementById("newtwo");
var newthr=document.getElementById("newthr");
var newfou=document.getElementById("newfou");
var newfiv=document.getElementById("newfiv");
var newsix=document.getElementById("newsix");
	newclickchange(lfone,rione,newone);
	newclickchange(lftwo,ritwo,newtwo);
	newclickchange(lfthr,rithr,newthr);
	newclickchange(lffou,rifou,newfou);
	newclickchange(lffiv,rifiv,newfiv);
	newclickchange(lfsix,risix,newsix);

/*获取所在区域的div个数*/
  var roastul1sdivs=roastul.getElementsByTagName('div');
  var roastul2sdivs=roastul2s.getElementsByTagName('div');
  var roastul3sdivs=roastul3s.getElementsByTagName('div');
  var roastul4sdivs=roastul4s.getElementsByTagName('div');
  var roastul5sdivs=roastul5s.getElementsByTagName('div');
  var roastul6sdivs=roastul6s.getElementsByTagName('div');
  imagesbg=function(area,numarr){
  	var imgArr=new Array();//声明一个空数组
    for(var i=1;i<=area.length;i++){
   	 imgArr.push("img/30"+numarr+"_0"+i+".jpg");//将图片的路径生成一个数组
}
for(var j=0;j<area.length;j++){
	area[j].style.backgroundImage='url('+imgArr[j]+')';//将生成的数组用在区域的div的背景图片的图片路径
	}
}
// 歌单推荐部分，设置背景图片
var numarr0=0;
 imagesbg(roastul1sdivs,numarr0);
var numarr1=1;
 imagesbg(roastul2sdivs,numarr1);
var numarr2=2;
 imagesbg(roastul3sdivs,numarr2);
var numarr3=3;
 imagesbg(roastul4sdivs,numarr3);
var numarr4=4;
 imagesbg(roastul5sdivs,numarr4);
var numarr5=5;
 imagesbg(roastul6sdivs,numarr5);
  //
  var songs1sdivs=ones.getElementsByTagName('div');
  var songs2sdivs=twos.getElementsByTagName('div');
  var songs3sdivs=thrs.getElementsByTagName('div');
  var songs4sdivs=fous.getElementsByTagName('div');
  var songs5sdivs=fivs.getElementsByTagName('div');
  var songs6sdivs=sixs.getElementsByTagName('div');
var numarr6=6;
 imagesbg(songs1sdivs,numarr6);
var numarr7=7;
var numarr8=8;
imagesbg(songs2sdivs,numarr7);
imagesbg(songs3sdivs,numarr8);
imagesbg(songs4sdivs,numarr6);
imagesbg(songs5sdivs,numarr8);
imagesbg(songs6sdivs,numarr7);
 /*"精彩推荐"部分*/
 // 此部分用jQuery的animate动画实现
// 创建函数，调用在"精彩推荐"，"新碟首发"，"MV"中；


	jqchange=function(riclick,lfclick,animateul){
		var num=0;
  		$(riclick).click(function(){//右击效果
  			num++;
  			if(num>=0){
  				$(animateul).animate({left:"-"+num*100+"%"},500);
  			}
  		if(num>3){
  			num=0;
  			$(animateul).animate({left:"-"+num*100+"%"},100);
  		}
  });
  		$(lfclick).click(function(){//左击效果;
  			num--;
  			if(num>=0){
  				$(animateul).animate({left:"-"+num*100+"%"},500);
  			}
  			if(num<0){
  				num=3;
  				$(animateul).animate({left:"-"+num*100+"%"},100);
  		}
  });
}

var wonlfclick=document.getElementById("won-lf-click");
var wonriclick=document.getElementById("won-rt-click");
var wonderul=document.getElementById("wonder-ul");
jqchange(wonriclick,wonlfclick,wonderul);

var discriclickone=document.getElementById("disc-ri-click-one");
var disclfclickone=document.getElementById("disc-lf-click-one");
var disculone=document.getElementById("disconeul");
jqchange(discriclickone,disclfclickone,disculone);


var disclfclicktwo=document.getElementById("disc-lf-click-two");
var discriclicktwo=document.getElementById("disc-ri-click-two");
var discultwo=document.getElementById("disctwoul");
jqchange(discriclicktwo,disclfclicktwo,discultwo);

var discriclickthr=document.getElementById("disc-ri-click-thr");
var disclfclickthr=document.getElementById("disc-lf-click-thr");
var disculthr=document.getElementById("discthrul");
jqchange(discriclickthr,disclfclickthr,disculthr);

var discriclickfou=document.getElementById("disc-ri-click-fou");
var disclfclickfou=document.getElementById("disc-lf-click-fou");
var disculfou=document.getElementById("discfouul");
jqchange(discriclickfou,disclfclickfou,disculfou);


var discriclickfiv=document.getElementById("disc-ri-click-fiv");
var disclfclickfiv=document.getElementById("disc-lf-click-fiv");
var disculfiv=document.getElementById("discfivul");
jqchange(discriclickfiv,disclfclickfiv,disculfiv);

var discriclicksix=document.getElementById("disc-ri-click-six");
var disclfclicksix=document.getElementById("disc-lf-click-six");
var disculsix=document.getElementById("discsixul");
jqchange(discriclicksix,disclfclicksix,disculsix);
//新碟首发部分背景图片设置
  var disc1sdivs=disculone.getElementsByTagName('div');
  var disc2sdivs=discultwo.getElementsByTagName('div');
  var disc3sdivs=disculthr.getElementsByTagName('div');
  var disc4sdivs=disculfou.getElementsByTagName('div');
  var disc5sdivs=disculfiv.getElementsByTagName('div');
  var disc6sdivs=disculsix.getElementsByTagName('div');
numarr9=9;
  imagesbg(disc1sdivs,numarr9);
numarr10=10;
  imagesbg(disc2sdivs,numarr10);
numarr11=11;
  imagesbg(disc3sdivs,numarr11);
  imagesbg(disc4sdivs,numarr10);
  imagesbg(disc5sdivs,numarr9);
  imagesbg(disc6sdivs,numarr11);



/*"新碟首发"部分*/
var discnav=document.getElementById("discnav");
var dsnavs=discnav.getElementsByTagName('li');
var discas=discnav.getElementsByTagName('a');
var discone=document.getElementById('discone');
var disctwo=document.getElementById('disctwo');
var discthr=document.getElementById('discthr');
var discfou=document.getElementById('discfou');
var discfiv=document.getElementById('discfiv');
var discsix=document.getElementById('discsix');
var div3s=[discone,disctwo,discthr,discfou,discfiv,discsix];
var classnam="songsli";
changehid(dsnavs,div3s,discas,classnam);// 调用函数changehid

var discriclickone=document.getElementById("disc-ri-click-one");
var disclfclickone=document.getElementById("disc-lf-click-one");
var disculone=document.getElementById("disconeul");
jqchange(discriclickone,disclfclickone,disculone);

var disclfclicktwo=document.getElementById("disc-lf-click-two");
var discriclicktwo=document.getElementById("disc-ri-click-two");
var discultwo=document.getElementById("disctwoul");
jqchange(discriclicktwo,disclfclicktwo,discultwo);

var discriclickthr=document.getElementById("disc-ri-click-thr");
var disclfclickthr=document.getElementById("disc-lf-click-thr");
var disculthr=document.getElementById("discthrul");
jqchange(discriclickthr,disclfclickthr,disculthr);

var discriclickfou=document.getElementById("disc-ri-click-fou");
var disclfclickfou=document.getElementById("disc-lf-click-fou");
var disculfou=document.getElementById("discfouul");
jqchange(discriclickfou,disclfclickfou,disculfou);


var discriclickfiv=document.getElementById("disc-ri-click-fiv");
var disclfclickfiv=document.getElementById("disc-lf-click-fiv");
var disculfiv=document.getElementById("discfivul");
jqchange(discriclickfiv,disclfclickfiv,disculfiv);

var discriclicksix=document.getElementById("disc-ri-click-six");
var disclfclicksix=document.getElementById("disc-lf-click-six");
var disculsix=document.getElementById("discsixul");
jqchange(discriclicksix,disclfclicksix,disculsix);


// MV部分
var mvnav=document.getElementById("mvnav");
var mvnavlis=mvnav.getElementsByTagName('li');
var mvnavas=mvnav.getElementsByTagName('a');
var mvone=document.getElementById('mvone');
var mvtwo=document.getElementById('mvtwo');
var mvthr=document.getElementById('mvthr');
var mvfou=document.getElementById('mvfou');
var mvfiv=document.getElementById('mvfiv');
var mvsix=document.getElementById('mvsix');
var div4s=[mvone,mvtwo,mvthr,mvfou,mvfiv,mvsix];
var classnames="songsli";
changehid(mvnavlis,div4s,mvnavas,classnames);//调用函数changehid

var mvriclickone=document.getElementById("mv-ri-click-one");
var mvlfclickone=document.getElementById("mv-lf-click-one");
var mvulone=document.getElementById("mvoneul");
jqchange(mvriclickone,mvlfclickone,mvulone);

var mvlfclicktwo=document.getElementById("mv-lf-click-two");
var mvriclicktwo=document.getElementById("mv-ri-click-two");
var mvultwo=document.getElementById("mvtwoul");
jqchange(mvriclicktwo,mvlfclicktwo,mvultwo);

var mvriclickthr=document.getElementById("mv-ri-click-thr");
var mvlfclickthr=document.getElementById("mv-lf-click-thr");
var mvulthr=document.getElementById("mvthrul");
jqchange(mvriclickthr,mvlfclickthr,mvulthr);

var mvriclickfou=document.getElementById("mv-ri-click-fou");
var mvlfclickfou=document.getElementById("mv-lf-click-fou");
var mvulfou=document.getElementById("mvfouul");
jqchange(mvriclickfou,mvlfclickfou,mvulfou);


var mvriclickfiv=document.getElementById("mv-ri-click-fiv");
var mvlfclickfiv=document.getElementById("mv-lf-click-fiv");
var mvulfiv=document.getElementById("mvfivul");
jqchange(mvriclickfiv,mvlfclickfiv,mvulfiv);

var mvriclicksix=document.getElementById("mv-ri-click-six");
var mvlfclicksix=document.getElementById("mv-lf-click-six");
var mvulsix=document.getElementById("mvsixul");
jqchange(mvriclicksix,mvlfclicksix,mvulsix);
//MV图片背景设置
  var mv1divs=mvulone.getElementsByTagName('div');
  var mv2divs=mvultwo.getElementsByTagName('div');
  var mv3divs=mvulthr.getElementsByTagName('div');
  var mv4divs=mvulfou.getElementsByTagName('div');
  var mv5divs=mvulfiv.getElementsByTagName('div');
  var mv6divs=mvulsix.getElementsByTagName('div');
  imagesbg(mv1divs,numarr11);
  imagesbg(mv2divs,numarr9);
  imagesbg(mv3divs,numarr10);
  imagesbg(mv4divs,numarr11);
  imagesbg(mv5divs,numarr9);
  imagesbg(mv6divs,numarr10);

 // 返回顶部效果
//var backtop=document.getElementById('backtop');
 $(document).ready(function(){
 	var buttop=document.getElementById('buttop');
 	$(buttop).click(function(){
 		$("html").scrollTop(0);
 	})
 });

})
