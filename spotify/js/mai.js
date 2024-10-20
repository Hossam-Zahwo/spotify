
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
let col = document.querySelector('.col');
let box =document.querySelector('.box');
function colorr(background){


}
function colors(color){
	col.styl.background=color;

}
$(document).ready(function(){

	$('#shw').click(function(){
		$('p').show();
	});
	$('#hid').click(function(){
		$('p').hide();
	});
});
