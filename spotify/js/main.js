var lgt=document.getElementById('lgt');
lgt.addEventListener('click',function(){
	document.body.style.backgroundColor="wheat";
});

var drk=document.getElementById('drk');
drk.addEventListener('click',function(){
	document.body.style.backgroundColor="black";
})

//stylesheet

var stylesheet=document.getElementById('lnk');

function stle(url) {
stylesheet.setAttribute('href',url);
}
var toww=document.getElementById('toww');
var ounn=document.getElementById('ounn');
function Myscroll(){
	if(this.scrollY>=150){
		toww.className="small";
		ounn.className="small";


	}
	else{
		toww.className="";
		ounn.className="";
	}
}
