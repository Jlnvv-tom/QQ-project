window.onload=function(){
var wid=document.body.scrollWidth;//获取浏览器网页正文全文宽;
var body=document.getElementsByTagName('body');
body[0].style.width=wid+"px";
console.log(wid);
var share=document.getElementById("share");
var sharebox=document.getElementById('sharebox');
$(share).click(function(){
	$(sharebox).fadeToggle();
})





















}