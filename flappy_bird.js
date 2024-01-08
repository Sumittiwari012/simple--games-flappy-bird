let ch=document.getElementsByClassName("ch");
let ab=document.getElementsByClassName("ab");
let bird=document.getElementsByClassName("bird");
let elm=document.getElementById("pa");
let val2=25;
let termi=1;
let hei=0;
console.log(bird[0].getBoundingClientRect().x);
window.addEventListener('keydown',function(e){
	if(termi){
	if(e.keyCode==38 && val2>0 ){
		val2--;
		bird[0].style.top=val2+'vh';
}
	else if(e.keyCode==40 && val2<50){
		val2++;
		bird[0].style.top=val2+'vh';
}}
})
let tani=setInterval(function(){
	for(let i=0;i<1;i++){
	let val=Math.floor(Math.random()*23);
	if(val<10){
	ch[i].style.height=val+'vh';
	ab[i].style.height=22+(22-val)+'vh';
}
	else if(val==22){
	ch[i].style.height=22+'vh';
	ab[i].style.height=22+'vh';
}
	else{
	ch[i].style.height=22+(22-val)+'vh';
	ab[i].style.height=val+'vh';
}}
},5000)
function anipau(){
	for(let i=0;i<1;i++){
		ch[i].style.animationPlayState = "paused";
		ab[i].style.animationPlayState = "paused";
}
}
let t=setInterval(function(){
		let birdR=bird[0].getBoundingClientRect();
		for(let i=0;i<1;i++){
		let chR=ch[i].getBoundingClientRect();
		let abR=ab[i].getBoundingClientRect();
		if(Math.abs(birdR.x-chR.x)<1 && (birdR.bottom>chR.top || birdR.top<abR.bottom )) {
		console.log("game over");
		anipau();
		clearTimeout(t);
		clearTimeout(tani);
		termi=0;
}}
},10)
/*Things to add when return to this project give some action to the buttons as per their names then apply a points section a leaders table and and realtime comparison going on with competitors in that level just like subway surfers the space between the obstacle also has to be increased so that more obstacle can be added in it,in the given width for the escape of the bird two obstacle are not possible width has to be reduced then only it is possible*/