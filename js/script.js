//Удаляет последний абзац
function removeLastP(){
	let allP=document.getElementsByTagName('p');
	let lastP=allP.length-1;
	allP[lastP].remove();//удаляет последний элемент в массиве с абзацами
}

function change(){
	let size=document.getElementById('number').value;
	let fontFam=document.getElementById('fontFamily').value;
	let allP=document.getElementsByTagName('p');
	for(i=0;i<allP.length;i++){
		//применяет размер шрифта к каждому параграфу
	allP[i].style.fontSize=size+'px';
		//...новый стиль шрифта
	allP[i].style.fontFamily=fontFam;
}
//меняет цвет бекграунда
	let backgr=document.getElementById('color').value;
	document.body.style.backgroundColor=backgr;
}


//открывает/закрывает бургер-меню
    var menuElem = document.getElementById('sidebar');
    var titleElem = document.getElementById('burger-menu');
    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };